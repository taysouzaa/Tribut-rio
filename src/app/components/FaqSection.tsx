import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronDown } from 'lucide-react'
import { THEME } from '../design'
import { SECTION_BACKDROP } from '../sectionBackground'

const faqs = [
  {
    question: 'O conteúdo está atualizado?',
    answer: 'Sim. O curso acompanha as regras tributárias aplicáveis ao seller e foi pensado para dar clareza sobre os temas que mais impactam a operação hoje.',
  },
  {
    question: 'Posso assistir as aulas quantas vezes quiser?',
    answer: 'Sim. As aulas são gravadas e ficam disponíveis para você revisar quantas vezes precisar, no seu ritmo.',
  },
  {
    question: 'Vou dispensar meu contador depois do curso?',
    answer: 'Não. A proposta é te deixar mais preparado para trabalhar em parceria com contador e jurídico, fazendo perguntas melhores e tomando decisões com mais base.',
  },
  {
    question: 'O curso é realmente gratuito?',
    answer: 'Sim. Não há taxa de inscrição, mensalidade ou cobrança escondida. Você se cadastra e solicita o acesso gratuito.',
  },
  {
    question: 'Para quem esse curso foi feito?',
    answer: 'Para lojistas e empresários que vendem em marketplaces como Mercado Livre, Shopee e Amazon, tanto iniciantes quanto vendedores mais experientes.',
  },
]

function FaqItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  // O primeiro item abre por padrao para reduzir o estado "pagina vazia".
  const [open, setOpen] = useState(index === 0)

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.36, delay: index * 0.06 }}
      viewport={{ once: true }}
      style={{
        background: open ? THEME.surface : THEME.surfaceAlt,
        borderRadius: THEME.radiusLg,
        border: `1px solid ${open ? 'rgba(185,255,0,0.22)' : THEME.border}`,
        overflow: 'hidden',
        transition: 'all 0.22s ease',
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

        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.24 }} style={{ flexShrink: 0 }}>
          <ChevronDown size={18} style={{ color: open ? THEME.accent : THEME.muted }} />
        </motion.div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ padding: '0 24px 24px 44px', color: THEME.muted, fontSize: '14px', lineHeight: '1.85' }}>
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
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
            Respondemos os pontos que normalmente travam a decisão de quem quer entrar no curso com mais segurança.
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
