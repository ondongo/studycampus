"use client";

import React from "react";
import { DashboardStats } from "@/backend/services/DashboardStatsService";

interface DistributionChartsProps {
  stats: DashboardStats;
}

export default function DistributionCharts({ stats }: DistributionChartsProps) {
  const { sourceDistribution, typeStudentDistribution } = stats;

  return (
    <div className="row">
      {/* Répartition par Source */}
      <div className="col-lg-6 mb-4">
        <div className="card border-0 shadow-sm">
          <div className="card-header bg-transparent border-0">
            <h5 className="card-title mb-0">
              <i className="fas fa-chart-pie text-primary me-2"></i>
              Répartition par Source
            </h5>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-6">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary rounded me-2" style={{ width: '12px', height: '12px' }}></div>
                  <span className="text-muted">Bourse</span>
                </div>
                <h4 className="mb-0">{sourceDistribution.BOURSE}</h4>
                <small className="text-muted">
                  {sourceDistribution.BOURSE + sourceDistribution.CAMPUS_FRANCE > 0 
                    ? Math.round((sourceDistribution.BOURSE / (sourceDistribution.BOURSE + sourceDistribution.CAMPUS_FRANCE)) * 100)
                    : 0}% du total
                </small>
              </div>
              <div className="col-6">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-success rounded me-2" style={{ width: '12px', height: '12px' }}></div>
                  <span className="text-muted">Campus France</span>
                </div>
                <h4 className="mb-0">{sourceDistribution.CAMPUS_FRANCE}</h4>
                <small className="text-muted">
                  {sourceDistribution.BOURSE + sourceDistribution.CAMPUS_FRANCE > 0 
                    ? Math.round((sourceDistribution.CAMPUS_FRANCE / (sourceDistribution.BOURSE + sourceDistribution.CAMPUS_FRANCE)) * 100)
                    : 0}% du total
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Répartition par Type */}
      <div className="col-lg-6 mb-4">
        <div className="card border-0 shadow-sm">
          <div className="card-header bg-transparent border-0">
            <h5 className="card-title mb-0">
              <i className="fas fa-graduation-cap text-success me-2"></i>
              Répartition par Type
            </h5>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-6 mb-3">
                <div className="d-flex align-items-center">
                  <div className="bg-warning rounded me-2" style={{ width: '12px', height: '12px' }}></div>
                  <span className="text-muted small">Nouveau Bachelier</span>
                </div>
                <h6 className="mb-0">{typeStudentDistribution.NOUVEAU_BACHELIER}</h6>
              </div>
              <div className="col-6 mb-3">
                <div className="d-flex align-items-center">
                  <div className="bg-info rounded me-2" style={{ width: '12px', height: '12px' }}></div>
                  <span className="text-muted small">Pas Encore Bachelier</span>
                </div>
                <h6 className="mb-0">{typeStudentDistribution.PAS_ENCORE_BACHELIER}</h6>
              </div>
              <div className="col-6 mb-3">
                <div className="d-flex align-items-center">
                  <div className="bg-primary rounded me-2" style={{ width: '12px', height: '12px' }}></div>
                  <span className="text-muted small">Licence</span>
                </div>
                <h6 className="mb-0">{typeStudentDistribution.LICENCE}</h6>
              </div>
              <div className="col-6 mb-3">
                <div className="d-flex align-items-center">
                  <div className="bg-success rounded me-2" style={{ width: '12px', height: '12px' }}></div>
                  <span className="text-muted small">Diplôme Supérieur</span>
                </div>
                <h6 className="mb-0">{typeStudentDistribution.DIPLOME_SUPERIEUR}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 