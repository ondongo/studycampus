const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const students = [
    {
      fname: 'Marie',
      lname: 'Diatta',
      email: 'marie.diatta@example.com',
      codeCountry: '+221',
      phone: '778889900',
      school: 'Lycée Blaise Diagne',
      yearCompletion: '2023',
      qualification: 'Baccalauréat Série S',
      additionalInfo: 'Intéressée par les sciences informatiques.',
      birthDate: new Date('2005-04-12'),
      zipUrl: 'https://example.com/uploads/marie.zip',
      typeStudent: 'NOUVEAU_BACHELIER',
      source: 'BOURSE',
      isSeen: false,
      isContacted: false,
    },
    {
      fname: 'Jean',
      lname: 'Mbarga',
      email: 'jean.mbarga@example.com',
      codeCountry: '+237',
      phone: '690112233',
      school: 'Lycée de Nkolbisson',
      yearCompletion: '2024',
      qualification: 'Terminale D',
      additionalInfo: 'En attente des résultats du bac.',
      birthDate: new Date('2006-03-30'),
      zipUrl: 'https://example.com/uploads/jean.zip',
      typeStudent: 'PAS_ENCORE_BACHELIER',
      source: 'CAMPUS_FRANCE',
      isSeen: true,
      isContacted: false,
    },
    {
      fname: 'Fatou',
      lname: 'Fall',
      email: 'fatou.fall@example.com',
      codeCountry: '+221',
      phone: '776655443',
      school: 'Université Cheikh Anta Diop',
      yearCompletion: '2022',
      qualification: 'Licence en informatique',
      additionalInfo: null,
      birthDate: new Date('2002-09-05'),
      zipUrl: 'https://example.com/uploads/fatou.zip',
      typeStudent: 'LICENCE',
      source: 'BOURSE',
      isSeen: true,
      isContacted: true,
    },
    {
      fname: 'Alain',
      lname: 'Nkoulou',
      email: 'alain.nkoulou@example.com',
      codeCountry: '+241',
      phone: '077889900',
      school: 'Université Omar Bongo',
      yearCompletion: '2020',
      qualification: 'Master en réseaux',
      additionalInfo: 'Souhaite faire une reconversion en développement web.',
      birthDate: new Date('1998-01-17'),
      zipUrl: 'https://example.com/uploads/alain.zip',
      typeStudent: 'DIPLOME_SUPERIEUR',
      source: 'CAMPUS_FRANCE',
      isSeen: false,
      isContacted: false,
    },
    {
      fname: 'Aminata',
      lname: 'Diallo',
      email: 'aminata.diallo@example.com',
      codeCountry: '+224',
      phone: '623456789',
      school: 'Lycée Saint Georges',
      yearCompletion: '2023',
      qualification: 'Baccalauréat Série L',
      additionalInfo: 'Passionnée de littérature française.',
      birthDate: new Date('2005-07-22'),
      zipUrl: 'https://example.com/uploads/aminata.zip',
      typeStudent: 'NOUVEAU_BACHELIER',
      source: 'BOURSE',
      isSeen: true,
      isContacted: false,
    },
    {
      fname: 'Kévin',
      lname: 'Tchoumi',
      email: 'kevin.tchoumi@example.com',
      codeCountry: '+237',
      phone: '691234567',
      school: 'Lycée Bilingue de Yaoundé',
      yearCompletion: '2024',
      qualification: 'Terminale C',
      additionalInfo: 'Excellent en mathématiques.',
      birthDate: new Date('2006-11-15'),
      zipUrl: 'https://example.com/uploads/kevin.zip',
      typeStudent: 'PAS_ENCORE_BACHELIER',
      source: 'CAMPUS_FRANCE',
      isSeen: false,
      isContacted: false,
    },
  ];

  await prisma.etudiant.createMany({ data: students });

  console.log('🚀✨ Étudiants ajoutés avec succès !');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
