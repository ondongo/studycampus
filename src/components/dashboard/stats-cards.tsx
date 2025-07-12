"use client";

import React from "react";
import { DashboardStats } from "@/backend/services/DashboardStatsService";

interface StatsCardsProps {
  stats: DashboardStats;
}

export default function StatsCards({ stats }: StatsCardsProps) {
  const {
    totalStudents,
    seenStudents,
    contactedStudents,
    sourceDistribution,
    typeStudentDistribution
  } = stats;

  const seenPercentage = totalStudents > 0 ? Math.round((seenStudents / totalStudents) * 100) : 0;
  const contactedPercentage = totalStudents > 0 ? Math.round((contactedStudents / totalStudents) * 100) : 0;

  return (
    <div className="row">
      {/* Total Étudiants */}
      <div className="col-lg-3 col-md-6 mb-4">
        <div className="card border-0 shadow-sm h-100">
          <div className="card-body text-center">
            <div className="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-circle mb-3" style={{ width: '60px', height: '60px' }}>
              <i className="fas fa-users text-primary fs-4"></i>
            </div>
            <h3 className="card-title h2 mb-1">{totalStudents}</h3>
            <p className="card-text text-muted mb-0">Total Étudiants</p>
            <small className="text-muted">Candidatures reçues</small>
          </div>
        </div>
      </div>

      {/* Étudiants Vus */}
      <div className="col-lg-3 col-md-6 mb-4">
        <div className="card border-0 shadow-sm h-100">
          <div className="card-body text-center">
            <div className="d-inline-flex align-items-center justify-content-center bg-success bg-opacity-10 rounded-circle mb-3" style={{ width: '60px', height: '60px' }}>
              <i className="fas fa-eye text-success fs-4"></i>
            </div>
            <h3 className="card-title h2 mb-1">{seenStudents}</h3>
            <p className="card-text text-muted mb-0">Étudiants Vus</p>
            <small className="text-muted">{seenPercentage}% du total</small>
          </div>
        </div>
      </div>

      {/* Étudiants Contactés */}
      <div className="col-lg-3 col-md-6 mb-4">
        <div className="card border-0 shadow-sm h-100">
          <div className="card-body text-center">
            <div className="d-inline-flex align-items-center justify-content-center bg-warning bg-opacity-10 rounded-circle mb-3" style={{ width: '60px', height: '60px' }}>
              <i className="fas fa-envelope text-warning fs-4"></i>
            </div>
            <h3 className="card-title h2 mb-1">{contactedStudents}</h3>
            <p className="card-text text-muted mb-0">Étudiants Contactés</p>
            <small className="text-muted">{contactedPercentage}% du total</small>
          </div>
        </div>
      </div>

      {/* Taux de Conversion */}
      <div className="col-lg-3 col-md-6 mb-4">
        <div className="card border-0 shadow-sm h-100">
          <div className="card-body text-center">
            <div className="d-inline-flex align-items-center justify-content-center bg-info bg-opacity-10 rounded-circle mb-3" style={{ width: '60px', height: '60px' }}>
              <i className="fas fa-chart-line text-info fs-4"></i>
            </div>
            <h3 className="card-title h2 mb-1">{Math.round((contactedStudents / totalStudents) * 100)}%</h3>
            <p className="card-text text-muted mb-0">Taux de Conversion</p>
            <small className="text-muted">Contactés / Total</small>
          </div>
        </div>
      </div>
    </div>
  );
} 