"use client";

import React, { useState, useEffect } from "react";
import StatsCards from "@/components/dashboard/stats-cards";
import DistributionCharts from "@/components/dashboard/distribution-charts";
import { Etudiant } from "@/types/student";

export default function DashboardArea() {
  const [stats, setStats] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  // Charger les statistiques
  useEffect(() => {
    const loadStats = async () => {
      try {
        /* const dashboardStats = await DashboardStatsService.getDashboardStats();
        setStats(dashboardStats); */
      } catch (error) {
        console.error('Erreur lors du chargement des statistiques:', error);
        setError('Impossible de charger les statistiques');
      }
    };

    loadStats();
  }, []);

  if (error) {
    return (
      <>
        <div className="alert alert-danger" role="alert">
          <i className="fas fa-exclamation-triangle me-2"></i>
          {error}
        </div>
      </>
    );
  }

  return (
    <>
      <div className="container-fluid">
        {/* Statistiques */}
        {stats && (
          <div className="mb-5">
            <h4 className="mb-4">
              <i className="fas fa-chart-bar text-primary me-2"></i>
              Statistiques du Dashboard
            </h4>
            <StatsCards stats={stats} />
            <DistributionCharts stats={stats} />
          </div>
        )}


      </div>
    </>
  );
}
