import React from "react";
import { FaMapMarkerAlt, FaPhone, FaClock } from "react-icons/fa";
import { ContactForm } from "@/components/contact/ContactForm";
import { MotionDiv } from "@/components/frames/MotionDiv";
import { aboutVariants, contactHeader } from "@/utils/Variants";
import { Metadata } from "next";
import GoogleMap from "@/components/contact/GoogleMap";

export const metadata: Metadata = {
  title: "Neem contact met ons op!",
  description: "Contact page",
};

export default function Contact() {
  return (
    <>
      <section className="bg-blue-50 dark:bg-paginaAchtergrond max-h-[70vh]" id="contact">
        <div className="mx-auto max-w-5xl  sm:px-6 lg:px-8 lg:py-20">
          <div className="h-full w-full flex flex-row justify-evenly items-center">
           
            <div className="m-36"><GoogleMap /></div>

            <div className="card h-full w-full p-5 md:p-12 flex justify-center " id="form">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
