import React from "react";
import { FaMapMarkerAlt, FaPhone, FaClock } from "react-icons/fa";
import { ContactForm } from "@/components/contact/ContactForm";
import { MotionDiv } from "@/components/frames/MotionDiv";
import { aboutVariants, contactHeader } from "@/utils/Variants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Neem contact met ons op!",
  description: "Contact page",
};

export default function Contact() {
  return (
    <>
      <section className="bg-blue-50 dark:bg-paginaAchtergrond" id="contact">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <MotionDiv
            variants={contactHeader}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8 }}
            className="mb-4"
          >
            <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
              <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
                Vragen?
              </h2>
              <h2 className="mb-4 text-2xl font-bold dark:text-white">
                Vul het formulier in en we nemen zsm contact met u op!
              </h2>
            </div>
          </MotionDiv>

          <div className="h-full flex flex-row justify-center items-center">
            <div className="flex flex-col space-y-4 h-full justify-center">
              <div className="flex">
                <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                  <FaMapMarkerAlt className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                    Our Address
                  </h3>
                  <p className="text-gray-600 dark:text-slate-400">
                    1230 Maecenas Street Donec Road
                  </p>
                  <p className="text-gray-600 dark:text-slate-400">
                    New York, EEUU
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                  <FaPhone className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                    Contact
                  </h3>
                  <p className="text-gray-600 dark:text-slate-400">
                    Mobile: +1 (123) 456-7890
                  </p>
                  <p className="text-gray-600 dark:text-slate-400">
                    Mail: tailnext@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="card h-full max-w-6xl p-5 md:p-12" id="form">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
