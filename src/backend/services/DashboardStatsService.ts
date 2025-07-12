import { prisma } from "@/configs/prisma";

export interface DashboardStats {
  totalStudents: number;
  seenStudents: number;
  contactedStudents: number;
  sourceDistribution: {
    BOURSE: number;
    CAMPUS_FRANCE: number;
  };
  typeStudentDistribution: {
    NOUVEAU_BACHELIER: number;
    PAS_ENCORE_BACHELIER: number;
    LICENCE: number;
    DIPLOME_SUPERIEUR: number;
  };
}

export class DashboardStatsService {
  static async getDashboardStats(): Promise<DashboardStats> {
    const [
      totalStudents,
      seenStudents,
      contactedStudents,
      sourceStats,
      typeStats
    ] = await Promise.all([
      prisma.etudiant.count(),
      prisma.etudiant.count({ where: { isSeen: true } }),
      prisma.etudiant.count({ where: { isContacted: true } }),
      prisma.etudiant.groupBy({
        by: ['source'],
        _count: {
          source: true
        }
      }),
      prisma.etudiant.groupBy({
        by: ['typeStudent'],
        _count: {
          typeStudent: true
        }
      })
    ]);

    // Traitement des statistiques par source
    const sourceDistribution = {
      BOURSE: 0,
      CAMPUS_FRANCE: 0
    };

    sourceStats.forEach(stat => {
      if (stat.source === 'BOURSE') {
        sourceDistribution.BOURSE = stat._count.source;
      } else if (stat.source === 'CAMPUS_FRANCE') {
        sourceDistribution.CAMPUS_FRANCE = stat._count.source;
      }
    });

    // Traitement des statistiques par type d'étudiant
    const typeStudentDistribution = {
      NOUVEAU_BACHELIER: 0,
      PAS_ENCORE_BACHELIER: 0,
      LICENCE: 0,
      DIPLOME_SUPERIEUR: 0
    };

    typeStats.forEach(stat => {
      switch (stat.typeStudent) {
        case 'NOUVEAU_BACHELIER':
          typeStudentDistribution.NOUVEAU_BACHELIER = stat._count.typeStudent;
          break;
        case 'PAS_ENCORE_BACHELIER':
          typeStudentDistribution.PAS_ENCORE_BACHELIER = stat._count.typeStudent;
          break;
        case 'LICENCE':
          typeStudentDistribution.LICENCE = stat._count.typeStudent;
          break;
        case 'DIPLOME_SUPERIEUR':
          typeStudentDistribution.DIPLOME_SUPERIEUR = stat._count.typeStudent;
          break;
      }
    });

    return {
      totalStudents,
      seenStudents,
      contactedStudents,
      sourceDistribution,
      typeStudentDistribution
    };
  }

  static async getRecentStudents(limit: number = 5) {
    return await prisma.etudiant.findMany({
      take: limit,
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        fname: true,
        lname: true,
        email: true,
        source: true,
        isSeen: true,
        isContacted: true,
        createdAt: true
      }
    });
  }
} 