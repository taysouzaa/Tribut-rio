import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { LearnSection } from './components/LearnSection'
import { HowItWorks } from './components/HowItWorks'
import { Testimonials } from './components/Testimonials'
import { AboutSection } from './components/AboutSection'
import { FaqSection } from './components/FaqSection'
import { FormSection } from './components/FormSection'
import { Footer } from './components/Footer'
import { THEME } from './design'

export default function App() {
  return (
    <div
      style={{
        fontFamily: THEME.bodyFont,
        backgroundColor: THEME.bgAlt,
        backgroundImage: `
          radial-gradient(circle at 12% 8%, rgba(185,255,0,0.14) 0%, transparent 24%),
          radial-gradient(circle at 84% 14%, rgba(185,255,0,0.09) 0%, transparent 20%),
          radial-gradient(circle at 52% 100%, rgba(185,255,0,0.06) 0%, transparent 24%),
          linear-gradient(180deg, rgba(33,44,56,0.99) 0%, rgba(28,36,46,1) 100%)
        `,
        color: THEME.text,
        overflowX: 'hidden',
        minHeight: '100vh',
      }}
    >
      {/* Ordem das seções da landing: topo fixo, apresentação, prova, autoridade, dúvidas e captura final. */}
      <Header />
      <Hero />
      <LearnSection />
      <HowItWorks />
      <Testimonials />
      <AboutSection />
      <FaqSection />
      <FormSection />
      <Footer />
    </div>
  )
}
