import KeukenImages from "@/images/KeukenImages";
import { StaticImageData } from "next/image";

export interface Area {
  id: number;
  navId: number;
  title: string;
  description: string;
  images: StaticImageData[];
}

export const navItems = [
  {
    id: 1,
    name: "Natuur",
  },
  {
    id: 2,
    name: "Kinderen",
  },
  {
    id: 3,
    name: "Volwassenen",
  },
];

export const areas = [
  {
    id: 1,
    navId: 1,
    title: "Zwijnen checken",
    description:
      "Ontdek de gebruiksaanwijzingen voor onze combi magnetron-oven en inductiekoken. Onze keuken is volledig uitgerust voor jouw comfort.Ontdek de gebruiksaanwijzingen voor onze combi magnetron-oven en inductiekoken. Onze keuken is volledig uitgerust voor jouw comfort.Ontdek de gebruiksaanwijzingen voor onze combi magnetron-oven en inductiekoken. Onze keuken is volledig uitgerust voor jouw comfort.Ontdek de gebruiksaanwijzingen voor onze combi magnetron-oven en inductiekoken. Onze keuken is volledig uitgerust voor jouw comfort.Ontdek de gebruiksaanwijzingen voor onze combi magnetron-oven en inductiekoken. Onze keuken is volledig uitgerust voor jouw comfort.Ontdek de gebruiksaanwijzingen voor onze combi magnetron-oven en inductiekoken. Onze keuken is volledig uitgerust voor jouw comfort.",
    images: KeukenImages,
  },
  {
    id: 2,
    navId: 1,
    title: "Bos wakkas",
    description:
      "Ontdek de gebruiksaanwijzingen voor onze combi magnetron-oven en inductiekoken. Onze keuken is volledig uitgerust voor jouw comfort.Ontdek de gebruiksaanwijzingen voor onze combi magnetron-oven en inductiekoken. Onze keuken is volledig uitgerust voor jouw comfort.Ontdek de gebruiksaanwijzingen voor onze combi magnetron-oven en inductiekoken. Onze keuken is volledig uitgerust voor jouw comfort.Ontdek de gebruiksaanwijzingen voor onze combi magnetron-oven en inductiekoken. Onze keuken is volledig uitgerust voor jouw comfort.Ontdek de gebruiksaanwijzingen voor onze combi magnetron-oven en inductiekoken. Onze keuken is volledig uitgerust voor jouw comfort.Ontdek de gebruiksaanwijzingen voor onze combi magnetron-oven en inductiekoken. Onze keuken is volledig uitgerust voor jouw comfort.",
    images: KeukenImages,
  },
  {
    id: 3,
    navId: 2,
    title: "Kinderen slaan!",
    description:
      "Ontdek de gebruiksaanwijzingen voor onze combi magnetron-oven en inductiekoken. Onze keuken is volledig uitgerust voor jouw comfort.Ontdek de gebruiksaanwijzingen voor onze combi magnetron-oven en inductiekoken. Onze keuken is volledig uitgerust voor jouw comfort.Ontdek de gebruiksaanwijzingen voor onze combi magnetron-oven en inductiekoken. Onze keuken is volledig uitgerust voor jouw comfort.Ontdek de gebruiksaanwijzingen voor onze combi magnetron-oven en inductiekoken. Onze keuken is volledig uitgerust voor jouw comfort.Ontdek de gebruiksaanwijzingen voor onze combi magnetron-oven en inductiekoken. Onze keuken is volledig uitgerust voor jouw comfort.Ontdek de gebruiksaanwijzingen voor onze combi magnetron-oven en inductiekoken. Onze keuken is volledig uitgerust voor jouw comfort.",
    images: KeukenImages,
  },
];
