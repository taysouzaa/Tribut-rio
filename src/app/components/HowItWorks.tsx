import { motion } from 'motion/react'
import { Monitor, Clock, RotateCcw } from 'lucide-react'
import { THEME } from '../design'
import { SECTION_BACKDROP } from '../sectionBackground'

// Cards de apoio que resumem o formato e consumo da aula.
const features = [
  {
    icon: Monitor,
    title: 'Aula gravada',
    desc: 'Assista no seu ritmo, em qualquer dispositivo, sem depender de horário fixo.',
  },
  {
    icon: Clock,
    title: 'Conteúdo objetivo',
    desc: 'A aula vai direto ao ponto e conecta teoria à operação do seller.',
  },
  {
    icon: RotateCcw,
    title: 'Acesso ilimitado',
    desc: 'Você revisa o conteúdo quantas vezes precisar para consolidar o entendimento.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="lp-section-backdrop" style={{ ...SECTION_BACKDROP, padding: `${THEME.sectionPadding} 24px` }}>
      <div style={{ maxWidth: THEME.maxWidth, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '44px' }}
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
            Como funciona a aula?
          </h2>
          <p
            style={{
              color: THEME.muted,
              fontSize: 'clamp(15px, 1.7vw, 17px)',
              margin: '14px auto 0',
              maxWidth: '560px',
              lineHeight: 1.75,
            }}
          >
            Melhor do que explicar é deixar você assistir e entender o nível de clareza entregue nesta aula.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.62 }}
          viewport={{ once: true }}
          style={{
            borderRadius: THEME.radiusXl,
            overflow: 'hidden',
            border: `1px solid ${THEME.borderStrong}`,
            boxShadow: THEME.shadow,
            position: 'relative',
            aspectRatio: '16 / 9',
            background: THEME.surfaceAlt,
          }}
        >
          {/* Video embedado que funciona como aula de demonstracao. */}
          <iframe
            src="https://player.vimeo.com/video/800389026?color=B9FF00&autopause=0&loop=0&muted=0&title=1&portrait=1&byline=1"
            loading="lazy"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 'none',
            }}
            allowFullScreen
            allow="clipboard-write; autoplay"
            title="Aula de demonstração — Método P4 Tributário"
          />
        </motion.div>

        {/* Beneficios que ajudam a interpretar o formato do produto. */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5" style={{ marginTop: '24px' }}>
          {features.map(({ icon: Icon, title, desc }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.42, delay: index * 0.08 }}
              viewport={{ once: false, amount: 0.55 }}
              className="p-5 sm:p-6"
              style={{
                background: THEME.surface,
                borderRadius: THEME.radiusLg,
                border: `1px solid ${THEME.border}`,
                minHeight: '100%',
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '13px',
                  background: THEME.accentSoft,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '14px',
                }}
              >
                <Icon size={19} style={{ color: THEME.accent }} />
              </div>
              <div style={{ color: THEME.text, fontWeight: 700, fontSize: '15px', marginBottom: '8px' }}>{title}</div>
              <div style={{ color: THEME.muted, fontSize: '13px', lineHeight: '1.75' }}>{desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
