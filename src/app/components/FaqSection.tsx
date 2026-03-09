import { useState } from 'react'
import { motion } from 'motion/react'
import { ChevronDown } from 'lucide-react'
import { THEME } from '../design'
import { SECTION_BACKDROP } from '../sectionBackground'

const faqs = [
  {
    question: 'O conteúdo está atualizado?',
    answer: 'Sim. A aula aborda as regras tributárias aplicáveis ao seller e foi pensada para dar clareza sobre os temas que mais impactam a operação hoje.',
  },
  {
    question: 'Posso assistir a aula quantas vezes quiser?',
    answer: 'Sim. A aula é gravada e fica disponível para você revisar quantas vezes precisar, no seu ritmo.',
  },
  {
    question: 'Vou dispensar meu contador depois da aula?',
    answer: 'Não. A proposta é te deixar mais preparado para trabalhar em parceria com contador e jurídico, fazendo perguntas melhores e tomando decisões com mais base.',
  },
  {
    question: 'A aula é realmente gratuita?',
    answer: 'Sim. Não há taxa de inscrição, mensalidade ou cobrança escondida. Você se cadastra e solicita o acesso gratuito.',
  },
  {
    question: 'Para quem essa aula foi feita?',
    answer: 'Para lojistas e empresários que vendem em marketplaces como Mercado Livre, Shopee e Amazon, tanto iniciantes quanto vendedores mais experientes.',
  },
]

function FaqItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  // O primeiro item abre por padrao para reduzir o estado "pagina vazia".
  const [open, setOpen] = useState(index === 0)
  const accordionTransition = { duration: 0.34, ease: [0.22, 1, 0.36, 1] as const }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.36, delay: index * 0.06 }}
      viewport={{ once: true }}
      style={{
        background: open ? THEME.surface : THEME.surfaceAlt,
        borderRadius: THEME.radiusLg,
        border: `1px solid ${open ? 'rgba(185,255,0,0.22)' : THEME.border}`,
        overflow: 'hidden',
        transition: 'background-color 0.24s ease, border-color 0.24s ease',
        cursor: 'pointer',
      }}
      onClick={() => setOpen(!open)}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '22px 24px',
          gap: '16px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
          <div
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: open ? THEME.accent : 'rgba(185,255,0,0.28)',
              flexShrink: 0,
            }}
          />
          <span style={{ color: open ? THEME.text : THEME.textSoft, fontSize: '15px', fontWeight: 700, lineHeight: 1.5 }}>
            {question}
          </span>
        </div>

        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={accordionTransition}
          style={{ flexShrink: 0, willChange: 'transform' }}
        >
          <ChevronDown size={18} style={{ color: open ? THEME.accent : THEME.muted }} />
        </motion.div>
      </div>

      <motion.div
        initial={false}
        animate={{
          gridTemplateRows: open ? '1fr' : '0fr',
          opacity: open ? 1 : 0,
        }}
        transition={accordionTransition}
        style={{
          display: 'grid',
          overflow: 'hidden',
          willChange: 'grid-template-rows, opacity',
        }}
      >
        <div style={{ overflow: 'hidden' }}>
          <motion.div
            initial={false}
            animate={{
              y: open ? 0 : -8,
              paddingTop: open ? 0 : 0,
              paddingBottom: open ? 24 : 0,
            }}
            transition={accordionTransition}
            style={{
              paddingLeft: '44px',
              paddingRight: '24px',
              color: THEME.muted,
              fontSize: '14px',
              lineHeight: '1.85',
              willChange: 'transform, padding',
            }}
          >
            {answer}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function FaqSection() {
  return (
    <section id="faq" className="lp-section-backdrop" style={{ ...SECTION_BACKDROP, padding: `${THEME.sectionPadding} 24px` }}>
      <div style={{ maxWidth: '780px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '50px' }}
        >
          <h2
            style={{
              color: THEME.accent,
              fontFamily: THEME.displayFont,
              fontSize: 'clamp(30px, 4vw, 44px)',
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: '-0.05em',
            }}
          >
            Ainda está com dúvidas?
          </h2>
          <p style={{ color: THEME.muted, fontSize: '17px', marginTop: '14px', lineHeight: 1.75 }}>
            Respondemos os pontos que normalmente travam a decisão de quem quer assistir à aula com mais segurança.
          </p>
        </motion.div>

        {/* Lista de perguntas em accordion simples. */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {faqs.map((item, index) => (
            <FaqItem key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
