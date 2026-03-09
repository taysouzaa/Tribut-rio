import { motion } from 'motion/react'
import { TrendingUp, Store, Lightbulb } from 'lucide-react'
import { THEME } from '../design'
import instructorImg from '../../../IMG_7944.jpg'
import { SECTION_BACKDROP } from '../sectionBackground'

// Credenciais resumidas que aparecem no bloco de autoridade.
const credentials = [
  { icon: Store, label: 'Operador ativo de e-commerce' },
  { icon: TrendingUp, label: 'Especialista em Mercado Livre' },
  { icon: Lightbulb, label: 'Metodologias testadas e comprovadas' },
]

export function AboutSection() {
  const scrollToForm = () => document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="about" className="lp-section-backdrop" style={{ ...SECTION_BACKDROP, padding: `${THEME.sectionPadding} 24px` }}>
      <div style={{ maxWidth: THEME.maxWidth, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] gap-8 lg:gap-14 items-center">
          {/* Coluna visual com foto do especialista e tarja de identificacao. */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.58 }}
            viewport={{ once: true }}
            style={{ position: 'relative', maxWidth: '500px', width: '100%', margin: '0 auto' }}
          >
            <div
              className="aspect-[4/5] sm:aspect-[3/4]"
              style={{
                borderRadius: THEME.radiusXl,
                overflow: 'hidden',
                border: `1px solid ${THEME.borderStrong}`,
                boxShadow: THEME.shadow,
                position: 'relative',
                background: THEME.surfaceAlt,
              }}
            >
              <img
                src={instructorImg}
                alt="Gabriel Pim"
                loading="lazy"
                decoding="async"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  display: 'block',
                }}
              />

              <div
                style={{
                  position: 'absolute',
                  inset: 'auto 18px 18px 18px',
                  background: 'rgba(28,36,46,0.82)',
                  backdropFilter: 'blur(14px)',
                  borderRadius: THEME.radiusLg,
                  padding: '14px 16px',
                  border: `1px solid ${THEME.border}`,
                }}
              >
                <div style={{ color: THEME.text, fontWeight: 800, fontSize: '18px' }}>Gabriel Pim</div>
                <div style={{ color: THEME.accent, fontSize: '12px', fontWeight: 700, marginTop: '3px' }}>
                  Especialista em e-commerce e tributação
                </div>
              </div>
            </div>
          </motion.div>

          {/* Coluna textual: historia, credenciais e CTA de retorno ao formulario. */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.58 }}
            viewport={{ once: true }}
          >
            <h2
              style={{
                color: THEME.accent,
                fontFamily: THEME.displayFont,
                fontSize: 'clamp(30px, 4vw, 42px)',
                fontWeight: 700,
                lineHeight: 1.08,
                letterSpacing: '-0.05em',
                marginBottom: '20px',
              }}
            >
              Quem é o Gabriel Pim
            </h2>

            <p style={{ color: THEME.muted, fontSize: 'clamp(15px, 1.6vw, 16px)', lineHeight: 1.85, marginBottom: '16px', maxWidth: '56ch' }}>
              Gabriel Pim é especialista em e-commerce com ampla experiência prática no Mercado Livre. Seu trabalho é
              focado em metodologias que criam negócios mais lucrativos, profissionais e sustentáveis.
            </p>
            <p style={{ color: THEME.muted, fontSize: 'clamp(15px, 1.6vw, 16px)', lineHeight: 1.85, marginBottom: '30px', maxWidth: '56ch' }}>
              Como operador da própria loja, conhece por dentro as dores do seller. Nas mentorias e treinamentos,
              compartilha estratégias testadas para ajudar desde iniciantes até empresários experientes a estruturar
              melhor a operação.
            </p>

            <div className="grid grid-cols-1 gap-3" style={{ marginBottom: '32px', maxWidth: '640px' }}>
              {credentials.map(({ icon: Icon, label }, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.36, delay: index * 0.05 }}
                  viewport={{ once: false, amount: 0.55 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '14px 16px',
                    borderRadius: THEME.radiusLg,
                    background: THEME.surface,
                    border: `1px solid ${THEME.border}`,
                  }}
                >
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '12px',
                      background: THEME.accentSoft,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={16} style={{ color: THEME.accent }} />
                  </div>
                  <span style={{ color: THEME.textSoft, fontSize: '14px', fontWeight: 600, lineHeight: 1.55 }}>
                    {label}
                  </span>
                </motion.div>
              ))}
            </div>

            <button
              onClick={scrollToForm}
              className="w-full sm:w-auto"
              style={{
                background: 'rgba(185,255,0,0.1)',
                color: THEME.accent,
                border: '1px solid rgba(185,255,0,0.2)',
                borderRadius: '999px',
                padding: '14px 24px',
                fontWeight: 700,
                fontSize: '15px',
                cursor: 'pointer',
                fontFamily: THEME.bodyFont,
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.background = 'rgba(185,255,0,0.14)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = ''
                e.currentTarget.style.background = 'rgba(185,255,0,0.1)'
              }}
            >
              Aprender com o Gabriel
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
