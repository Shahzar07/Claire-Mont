import { preload } from 'react-dom';
import IconSprite from '@/components/IconSprite';
import TopBar from '@/components/TopBar';
import SiteHeader from '@/components/SiteHeader';
import Hero from '@/components/Hero';
import SurveySection from '@/components/SurveySection';
import SystemsTicker from '@/components/SystemsTicker';
import CustomerStories from '@/components/CustomerStories';
import Standards from '@/components/Standards';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import CaseStudy from '@/components/CaseStudy';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Faq from '@/components/Faq';
import BehindTheScenes from '@/components/BehindTheScenes';
import Contact from '@/components/Contact';
import SiteFooter from '@/components/SiteFooter';
import MobileCta from '@/components/MobileCta';
import WhatsAppButton from '@/components/WhatsAppButton';
import PlannedPageToast from '@/components/PlannedPageToast';
import SiteBehaviour from '@/components/SiteBehaviour';

export default function HomePage() {
  preload('/assets/images/home/hero-bedroom-ac.jpg', { as: 'image', fetchPriority: 'high' });

  return (
    <>
      <IconSprite />
      <a className="skip-link" href="#main">Skip to main content</a>
      <TopBar />
      <SiteHeader />

      <main id="main">
        <Hero />
        <SurveySection />
        <SystemsTicker />
        <CustomerStories />
        <Standards />
        <Process />
        <Testimonials />
        <CaseStudy />
        <Services />
        <WhyChooseUs />
        <Faq />
        <BehindTheScenes />
        <Contact />
      </main>

      <SiteFooter />
      <MobileCta />
      <WhatsAppButton />
      <PlannedPageToast />
      <SiteBehaviour />
    </>
  );
}
