export interface Facility {
    id: string;
    title: string;
    description: string;
  }
  
  export const facilities: Facility[] = [
    {
      id: 'keuken',
      title: 'Keuken',
      description: 'Ontdek de gebruiksaanwijzingen voor onze combi magnetron-oven en inductiekoken. Onze keuken is volledig uitgerust voor jouw comfort.',
    },
    {
      id: 'fietsen',
      title: 'Fietsen',
      description: 'Maak gebruik van onze fietsverhuur om het eiland te verkennen. Beschikbare fietsen voor alle leeftijden.',
    },
    {
      id: 'hottub',
      title: 'Hottub',
      description: 'Ontspan in onze luxe hottub met uitzicht op de prachtige natuur. Perfect voor een ontspannen avond.',
    },
  ];
  