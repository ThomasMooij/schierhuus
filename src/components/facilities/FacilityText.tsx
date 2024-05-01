import { MotionHeader1 } from '@/components/frames/MotionHeader1';
import { MotionParagraph } from '@/components/frames/MotionParagraph';
import backgroundImage from '@/images/MainImages/foto1.jpg'
import ImageComponent from '../ImageComponent';

const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } }
  };

export default function FacilityText() {
  return (
    <section className="relative flex flex-col justify-center items-center min-h-[75vh] shadow-full rounded-2xl p-10 border-none	">
    <div className="z-10 p-5 flex flex-col items-center justify-center">
      <article className='flex flex-col items-center justify-center'>
        <MotionHeader1 variants={itemVariants} className="text-white text-4xl font-bold mb-4" title="Onze faciliteiten" />
        <h2 className="text-white font-bold mb-4">Lees meer over alles wat ons huis te beiden heeft!</h2>
      </article>

      <div className="z-10 p-5 flex flex-col items-center justify-center">
          <article className="text-white mb-4">Gelieve rustige uren te respecteren tussen 22:00 uur en 08:00 uur.</article>
          <article className="text-white mb-4">Houd het huisje en de omgeving schoon en opgeruimd.</article>
          <article className="text-white mb-4">Gebruik van de voorzieningen is op eigen risico.</article>
          <article className="text-white mb-4">Geen onbevoegde gasten toegestaan in het huisje.</article>
          <article className="text-white mb-4">Meld eventuele schade of problemen direct aan de beheerder.</article>
      </div>
    </div>
  </section>
  )
}
