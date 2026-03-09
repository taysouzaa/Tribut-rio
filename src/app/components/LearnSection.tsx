import { motion } from 'motion/react'
import { BadgeCheck, CheckCircle2, LockKeyhole, ShieldCheck, Trophy } from 'lucide-react'
import { THEME } from '../design'
import { SECTION_BACKDROP } from '../sectionBackground'

// Conteudo estatico da secao de oferta.
const TOPICS = [
  'Simples Nacional',
  'Lucro Real e Lucro Presumido',
  'ICMS ST',
  'Sistemática de débito e crédito',
  'DRE e Precificação',
  'Marketplace e rotina fiscal',
]

const OFFER_HIGHLIGHTS = [
  { icon: ShieldCheck, title: 'Compra segura' },
  { icon: Trophy, title: 'Satisfação garantida' },
  { icon: LockKeyhole, title: 'Privacidade protegida' },
]

// --- SUBCOMPONENTES ---

function SectionHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
      viewport={{ once: true }}
      className="text-center mb-10 sm:mb-12 lg:mb-14"
    >
      <h2
        className="font-bold leading-none tracking-tight mb-4 text-[clamp(34px,4vw,52px)]"
        style={{ color: THEME.accent, fontFamily: THEME.displayFont }}
      >
        Garanta sua vaga!
      </h2>
      <p
        className="text-base leading-[1.85] max-w-[620px] mx-auto"
        style={{ color: THEME.muted }}
      >
        Conteúdo objetivo para sellers que precisam entender imposto, margem e rotina fiscal com leitura prática da operação.
      </p>
    </motion.div>
  )
}

function TopicsCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.55 }}
      viewport={{ once: true }}
      className="relative z-10 mx-auto w-full max-w-[400px] sm:max-w-[424px] lg:mx-0 lg:ml-auto lg:max-w-[420px] xl:max-w-[448px] flex flex-col justify-center rounded-[34px] sm:rounded-[40px] lg:rounded-[46px] p-6 sm:p-8 lg:p-[42px] border border-white/5 shadow-[0_28px_52px_rgba(0,0,0,0.18)]"
      style={{
        background: 'linear-gradient(145deg, rgba(18,26,37,0.99) 0%, rgba(20,30,42,0.98) 100%)',
      }}
    >
      {/* Lista de temas que reforca o valor percebido do curso antes do preco/CTA. */}
      <div
        className="font-bold tracking-[-0.04em] mb-6 sm:mb-7 max-w-[11ch] text-[clamp(22px,2.7vw,34px)] leading-[0.96]"
        style={{ color: THEME.text, fontFamily: THEME.displayFont }}
      >
        Aprenda sobre:
      </div>

      <div className="flex flex-col gap-3 sm:gap-3.5">
        {TOPICS.map((topic, index) => (
          <motion.div
            key={topic}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: index * 0.04 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
            style={{ color: THEME.text }}
          >
            <CheckCircle2 size={16} className="shrink-0" style={{ color: THEME.accent }} />
            <div
              className="font-semibold tracking-[-0.02em] text-[clamp(15px,1.45vw,19px)] leading-[1.2]"
              style={{ color: THEME.textSoft }}
            >
              {topic}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

function PricingCard() {
  const scrollToForm = () => document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.55, delay: 0.08 }}
      viewport={{ once: true }}
      className="relative z-20 mx-auto w-full max-w-[560px] sm:max-w-[600px] lg:mx-0 lg:max-w-[620px] xl:-ml-10 2xl:-ml-12 overflow-hidden rounded-[38px] sm:rounded-[46px] lg:rounded-[52px] p-7 sm:p-9 lg:p-[52px] border shadow-[0_38px_72px_rgba(0,0,0,0.24)]"
      style={{
        background: 'linear-gradient(180deg, rgba(35,49,64,0.98) 0%, rgba(31,44,57,0.99) 56%, rgba(24,35,46,1) 100%)',
        borderColor: 'rgba(185,255,0,0.22)',
        color: THEME.text,
      }}
    >
      {/* Efeitos de fundo do card de oferta. */}
      <div className="absolute top-0 left-0 w-full h-[140px] bg-gradient-to-b from-[#b9ff00]/12 to-transparent pointer-events-none" />
      <div className="absolute -top-[70px] -right-[56px] w-[220px] h-[220px] rounded-full bg-[radial-gradient(circle,rgba(185,255,0,0.14)_0%,transparent_72%)] pointer-events-none" />

      <div className="relative z-10">
        <div className="text-[#f25a00] font-extrabold line-through text-center mb-3 tracking-tight text-[clamp(24px,3vw,38px)]">
          De: R$97,00
        </div>

        <div
          className="font-bold text-center leading-none mb-2.5 tracking-tight text-[clamp(30px,3.6vw,50px)]"
          style={{ color: THEME.text }}
        >
          por
        </div>

        <div className="flex items-start justify-center gap-1.5 mb-5">
          <div
            className="font-black leading-[0.88] tracking-[-0.08em] text-[clamp(76px,8.1vw,118px)]"
            style={{ color: THEME.accent, textShadow: '0 12px 26px rgba(0,0,0,0.2)' }}
          >
            R$0,00
          </div>
          <BadgeCheck
            size={30}
            className="mt-3 shrink-0 drop-shadow-[0_6px_12px_rgba(0,0,0,0.12)]"
            style={{ color: THEME.accent }}
          />
        </div>

        <p
          className="mx-auto mb-7 max-w-[31ch] text-center text-[15px] leading-[1.7]"
          style={{ color: THEME.textSoft }}
        >
          Faça o cadastro e libere agora o acesso gratuito para começar a rever sua operação com mais clareza.
        </p>

        {/* CTA principal desta secao. */}
        <motion.button
          onClick={scrollToForm}
          whileHover={{ y: -2, boxShadow: '0 20px 38px rgba(185,255,0,0.22)' }}
          className="block w-full max-w-[380px] mx-auto rounded-full py-4 px-6 text-[17px] font-extrabold transition-all"
          style={{
            background: THEME.accent,
            color: THEME.bg,
            boxShadow: '0 18px 34px rgba(185,255,0,0.18)',
          }}
        >
          Quero aprender agora
        </motion.button>

        {/* Sinais rapidos de confianca abaixo do botao. */}
        <div className="grid grid-cols-1 min-[460px]:grid-cols-3 gap-3 sm:gap-4 mt-7 pt-5 border-t border-white/10">
          {OFFER_HIGHLIGHTS.map(({ icon: Icon, title }) => (
            <div
              key={title}
              className="flex items-center justify-center gap-2.5 text-[13px] leading-[1.1] text-center min-[460px]:justify-center"
              style={{ color: THEME.textSoft }}
            >
              <Icon size={22} className="shrink-0" style={{ color: THEME.accent }} />
              <span className="max-w-[11ch] font-bold">{title}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export function LearnSection() {
  return (
    <section
      id="learn"
      className="lp-section-backdrop relative overflow-hidden px-6"
      style={{
        ...SECTION_BACKDROP,
        paddingTop: THEME.sectionPadding,
        paddingBottom: THEME.sectionPadding,
      }}
    >
      {/* Decoracao de fundo local da secao. */}
      <div className="absolute -top-[120px] -right-[140px] w-[360px] h-[360px] rounded-full border border-white/5 opacity-40 pointer-events-none" />

      <div className="relative z-10 mx-auto" style={{ maxWidth: THEME.maxWidth }}>
        <SectionHeader />

        {/* A composicao combina prova de conteudo com oferta principal. */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.52fr)_minmax(0,1fr)] xl:grid-cols-[minmax(0,0.58fr)_minmax(420px,1.02fr)] gap-6 sm:gap-8 lg:gap-6 xl:gap-0 items-center max-w-[1080px] mx-auto">
          <TopicsCard />
          <PricingCard />
        </div>
      </div>
    </section>
  )
}
