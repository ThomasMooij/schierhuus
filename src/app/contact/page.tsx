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
      <section className="bg-blue-50 dark:bg-paginaAchtergrond h-[100vh]" id="contact">
        <div className="mx-auto max-w-5xl  sm:px-6 lg:px-8 pt-20">
        <MotionDiv
            variants={contactHeader}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8 }}

          >
            <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
              <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
                Vragen?
              </h2>
              <h2 className="text-2xl font-bold dark:text-white">
                Vul het formulier in en we nemen zsm contact met u op!
              </h2>
            </div>
          </MotionDiv>

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
