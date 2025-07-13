'use client';

import { signOut } from 'next-auth/react';
import { useState } from 'react';

interface LogoutButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export default function LogoutButton({ className = '', children }: LogoutButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await signOut({ 
        callbackUrl: '/signin',
        redirect: true 
      });
    } catch (error) {
      console.error('Erreur lors de la déconnexion:', error);
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleLogout}
      disabled={isLoading}
      className={`tp-btn-add-course ${className}`}
    >
      {isLoading ? 'Déconnexion...' : children || 'Déconnexion'}
    </button>
  );
} 