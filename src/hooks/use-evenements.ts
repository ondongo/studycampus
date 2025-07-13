import { useState, useEffect, useCallback } from 'react';
import { getAllEvenementsAction } from '@/backend/actions/evenements';
import { Evenement } from '@/types/evenement';

export const useEvenements = (page = 1, pageSize = 100) => {
  const [evenements, setEvenements] = useState<Evenement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastRefresh, setLastRefresh] = useState<number>(Date.now());

  const loadEvenements = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await getAllEvenementsAction(page, pageSize);
      setEvenements(result.evenements);
      setLastRefresh(Date.now());
    } catch (err) {
      console.error('Erreur lors du chargement des événements:', err);
      setError('Impossible de charger les événements');
    } finally {
      setLoading(false);
    }
  }, [page, pageSize]);

  useEffect(() => {
    loadEvenements();
  }, [loadEvenements]);

  return {
    evenements,
    loading,
    error,
    refreshEvenements: loadEvenements,
    lastRefresh,
  };
};
