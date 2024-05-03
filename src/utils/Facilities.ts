import FietsenImages from "@/images/FietsenImages";
import HottubImages from "@/images/HottubImages";
import KeukenImages from "@/images/KeukenImages";
import { StaticImageData } from "next/image";

export interface Facility {
    id: string;
    title: string;
    description: string;
    images:StaticImageData[]
  }
  
  export const facilities: Facility[] = [
    {
      id: 'keuken',
      title: 'Keuken',
      description: 'Ontdek de gebruiksaanwijzingen voor onze combi magnetron-oven en inductiekoken. Onze keuken is volledig uitgerust voor jouw comfort.Ontdek de gebruiksaanwijzingen voor onze combi magnetron-oven en inductiekoken. Onze keuken is volledig uitgerust voor jouw comfort.Ontdek de gebruiksaanwijzingen voor onze combi magnetron-oven en inductiekoken. Onze keuken is volledig uitgerust voor jouw comfort.Ontdek de gebruiksaanwijzingen voor onze combi magnetron-oven en inductiekoken. Onze keuken is volledig uitgerust voor jouw comfort.Ontdek de gebruiksaanwijzingen voor onze combi magnetron-oven en inductiekoken. Onze keuken is volledig uitgerust voor jouw comfort.Ontdek de gebruiksaanwijzingen voor onze combi magnetron-oven en inductiekoken. Onze keuken is volledig uitgerust voor jouw comfort.',
      images: KeukenImages
    },
    {
      id: 'fietsen',
      title: 'Fietsen',
      description: 'Maak gebruik van onze fietsverhuur om het eiland te verkennen. Beschikbare fietsen voor alle leeftijden.',
      images: FietsenImages
    },
    {
      id: 'hottub',
      title: 'Hottub',
      description: 'Ontspan in onze luxe hottub met uitzicht op de prachtige natuur. Perfect voor een ontspannen avond.',
      images: HottubImages
    },
    {
      id: 'hottub',
      title: 'Hottub',
      description: 'Ontspan in onze luxe hottub met uitzicht op de prachtige natuur. Perfect voor een ontspannen avond.',
      images: HottubImages
    },
    {
      id: 'fietsen',
      title: 'Fietsen',
      description: 'Maak gebruik van onze fietsverhuur om het eiland te verkennen. Beschikbare fietsen voor alle leeftijden.',
      images: FietsenImages
    },
  ];
  