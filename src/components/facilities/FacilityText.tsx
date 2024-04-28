import { MotionHeader1 } from '@/components/frames/MotionHeader1';
import { MotionParagraph } from '@/components/frames/MotionParagraph';


const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } }
  };

export default function FacilityText() {
  return (
    <section className='flex flex-col justify-center items-center'>
        <article>
        <MotionHeader1 variants={itemVariants} className="text-4xl mb-4" title="Onze faciliteiten" />
            <MotionParagraph variants={itemVariants} className="text-xl mb-8" title="Explore Our Best Services" />
            <h2>Praktische informatie:</h2>
        </article>

        <article>
            <h2  className="text-white max-w-md">Faciliteiten:</h2>
            <ul>
                <li><strong>Hottub:</strong> Ontspan in onze houtgestookte hottub onder de sterrenhemel.</li>
                <li><strong>Fietsen:</strong> Verken de prachtige omgeving op onze gratis beschikbare fietsen.</li>
                <li><strong>Tuin:</strong> Geniet van een privé tuin met terras en barbecuefaciliteiten.</li>
                <li><strong>Speeltoestellen:</strong> Voor de kleintjes zijn er speeltoestellen beschikbaar.</li>
            </ul>
        </article>

        <article>
            <h2>Reglement:</h2>
            <ol>
                <li>Gelieve rustige uren te respecteren tussen 22:00 uur en 08:00 uur.</li>
                <li>Houd het huisje en de omgeving schoon en opgeruimd.</li>
                <li>Gebruik van de voorzieningen is op eigen risico.</li>
                <li>Geen onbevoegde gasten toegestaan in het huisje.</li>
                <li>Meld eventuele schade of problemen direct aan de beheerder.</li>
            </ol>
        </article>
    </section>
  )
}
