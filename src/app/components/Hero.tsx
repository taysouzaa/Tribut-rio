import { motion } from 'motion/react'
import { Play } from 'lucide-react'
import { THEME } from '../design'
import heroBackground from '../../../Design sem nome.jpg'

export function Hero() {
  // Os dois caminhos principais do hero: ir para o formulario ou saltar para a aula demonstrativa.
  const scrollToForm = () => document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })
  const scrollToVideo = () => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      className="lp-hero"
      style={{
        minHeight: '100svh',
        padding: 'clamp(96px, 14vw, 132px) 24px clamp(64px, 9vw, 92px)',
        position: 'relative',
        overflow: 'hidden',
        isolation: 'isolate',
        scrollSnapAlign: 'start',
        scrollSnapStop: 'always',
      }}
    >
      {/* Foto principal do hero. O enquadramento muda no CSS responsivo mais abaixo. */}
      <img
        className="lp-hero-bg-image"
        src={heroBackground}
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: '92% center',
          filter: 'brightness(1.02) saturate(1.03) contrast(1.02)',
          zIndex: -3,
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      />

      {/* Overlay para garantir leitura do texto sobre a imagem, sem precisar editar a foto original. */}
      <div
        className="lp-hero-overlay"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(90deg, rgba(28,36,46,0.95) 0%, rgba(28,36,46,0.87) 28%, rgba(28,36,46,0.58) 48%, rgba(28,36,46,0.2) 72%, rgba(28,36,46,0.06) 100%), linear-gradient(180deg, rgba(10,14,20,0.08) 0%, rgba(10,14,20,0.2) 100%), radial-gradient(circle at 74% 38%, rgba(185,255,0,0.04) 0%, transparent 24%), radial-gradient(circle at 90% 86%, rgba(255,179,71,0.04) 0%, transparent 16%)',
          zIndex: -2,
          pointerEvents: 'none',
        }}
      />

      {/* Luz decorativa para dar profundidade ao canto superior esquerdo. */}
      <div
        style={{
          position: 'absolute',
          top: '-140px',
          left: '-120px',
          width: '420px',
          height: '420px',
          background: 'radial-gradient(circle, rgba(185,255,0,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: THEME.maxWidth, margin: '0 auto', width: '100%' }}>
        <div className="grid grid-cols-1 items-start">
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="max-w-[560px] lg:max-w-[580px]"
          >
            <h1
              style={{
                color: THEME.text,
                fontFamily: THEME.displayFont,
                fontSize: 'clamp(36px, 5.4vw, 62px)',
                fontWeight: 700,
                lineHeight: 1.02,
                letterSpacing: '-0.06em',
                marginBottom: '22px',
                maxWidth: '15ch',
              }}
            >
              Aprenda tudo sobre <span style={{ color: THEME.accent }}>impostos</span> para quem vende em{' '}
              <span style={{ color: THEME.accent }}>marketplaces</span>
            </h1>

            <p
              style={{
                color: THEME.muted,
                fontSize: 'clamp(16px, 2vw, 18px)',
                lineHeight: 1.78,
                marginBottom: '34px',
                maxWidth: '34ch',
              }}
            >
              Descubra as melhores práticas fiscais para quem vende no Mercado Livre, Shopee, Amazon e outros
              marketplaces. Saiba como calcular corretamente os impostos e garantir que a sua operação esteja 100%
              dentro da lei.
            </p>

            {/* Grupo de CTA principal do hero. No mobile os botoes empilham; no desktop ficam lado a lado. */}
            <div className="grid grid-cols-1 sm:flex gap-3 sm:gap-4" style={{ marginBottom: '28px' }}>
              <button
                onClick={scrollToForm}
                className="w-full sm:w-auto"
                style={{
                  background: THEME.accent,
                  color: THEME.bg,
                  border: 'none',
                  borderRadius: '14px',
                  padding: '16px 28px',
                  fontWeight: 800,
                  fontSize: '15px',
                  cursor: 'pointer',
                  transition: 'all 0.22s ease',
                  fontFamily: THEME.bodyFont,
                  boxShadow: '0 14px 34px rgba(185,255,0,0.18)',
                  minWidth: 'min(206px, 100%)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 18px 40px rgba(185,255,0,0.28)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = ''
                  e.currentTarget.style.boxShadow = '0 14px 34px rgba(185,255,0,0.18)'
                }}
              >
                Garantir vaga grátis
              </button>

              <button
                onClick={scrollToVideo}
                className="w-full sm:w-auto"
                style={{
                  background: THEME.surfaceSoft,
                  color: THEME.text,
                  border: `1px solid ${THEME.border}`,
                  borderRadius: '14px',
                  padding: '16px 24px',
                  fontWeight: 700,
                  fontSize: '15px',
                  cursor: 'pointer',
                  transition: 'all 0.22s ease',
                  fontFamily: THEME.bodyFont,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  minWidth: 'min(168px, 100%)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(185,255,0,0.28)'
                  e.currentTarget.style.color = THEME.accent
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = THEME.border
                  e.currentTarget.style.color = THEME.text
                }}
              >
                <Play size={16} />
                Ver aula grátis
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .lp-hero {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }

          .lp-hero-bg-image {
            object-position: 82% center !important;
          }

          .lp-hero-overlay {
            background:
              linear-gradient(180deg, rgba(28,36,46,0.48) 0%, rgba(28,36,46,0.66) 18%, rgba(28,36,46,0.88) 56%, rgba(28,36,46,0.97) 100%),
              linear-gradient(90deg, rgba(28,36,46,0.92) 0%, rgba(28,36,46,0.82) 34%, rgba(28,36,46,0.34) 62%, rgba(28,36,46,0.08) 100%),
              radial-gradient(circle at 74% 38%, rgba(185,255,0,0.04) 0%, transparent 24%),
              radial-gradient(circle at 90% 86%, rgba(255,179,71,0.04) 0%, transparent 16%) !important;
          }
        }

        @media (max-width: 639px) {
          .lp-hero-bg-image {
            object-position: 78% center !important;
          }

          .lp-hero-overlay {
            background:
              linear-gradient(180deg, rgba(28,36,46,0.46) 0%, rgba(28,36,46,0.72) 20%, rgba(28,36,46,0.92) 54%, rgba(28,36,46,0.99) 100%),
              linear-gradient(90deg, rgba(28,36,46,0.96) 0%, rgba(28,36,46,0.86) 40%, rgba(28,36,46,0.28) 78%, rgba(28,36,46,0.08) 100%) !important;
          }
        }
      `}</style>
    </section>
  )
}
