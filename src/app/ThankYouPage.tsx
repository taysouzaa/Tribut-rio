import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { ArrowLeft, CheckCircle2, Clock3, PlayCircle, ShieldCheck } from 'lucide-react'
import { Footer } from './components/Footer'
import { THEME } from './design'
import { SECTION_BACKDROP } from './sectionBackground'
import brandMark from '../../01.png'

// Passos de continuidade apos o cadastro, para orientar o usuario na pagina de obrigado.
const nextSteps = [
  {
    icon: PlayCircle,
    title: 'Assista com atenção',
    description: 'A aula foi liberada para você começar agora, sem depender de outro acesso.',
  },
  {
    icon: Clock3,
    title: 'Reserve alguns minutos',
    description: 'O conteúdo foi feito para ser direto, prático e aplicável à rotina de quem vende online.',
  },
  {
    icon: ShieldCheck,
    title: 'Leve para a operação',
    description: 'Use a aula para revisar enquadramento, margem e decisões fiscais com mais clareza.',
  },
]

export function ThankYouPage() {
  // O header replica a ideia da landing principal: mais vidro quando sai do topo.
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

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
        minHeight: '100svh',
      }}
    >
      {/* Header proprio da pagina de obrigado, com link de retorno para a landing principal. */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: scrolled
            ? 'linear-gradient(180deg, rgba(33,44,56,0.8), rgba(33,44,56,0.68))'
            : 'linear-gradient(180deg, rgba(33,44,56,0.22), rgba(33,44,56,0.12))',
          borderBottom: `1px solid ${scrolled ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.04)'}`,
          backdropFilter: scrolled ? 'blur(18px) saturate(140%)' : 'blur(8px) saturate(120%)',
          transition: 'all 0.28s ease',
          boxShadow: scrolled ? '0 10px 28px rgba(0,0,0,0.14)' : 'none',
        }}
      >
        <div style={{ maxWidth: THEME.maxWidth, margin: '0 auto', padding: `0 ${THEME.pagePadding}` }}>
          <div
            className="min-h-[62px] sm:min-h-[66px]"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px',
              padding: '0',
            }}
          >
            <a
              href="./"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                textDecoration: 'none',
                color: THEME.text,
                minWidth: 0,
                flex: '1 1 auto',
                overflow: 'hidden',
              }}
            >
              <img
                src={brandMark}
                alt="Método P4"
                style={{
                  width: '28px',
                  height: '28px',
                  objectFit: 'contain',
                  display: 'block',
                  flexShrink: 0,
                }}
              />
              <span style={{ display: 'grid', textAlign: 'left', minWidth: 0, overflow: 'hidden' }}>
                <strong
                  style={{
                    fontSize: '14px',
                    fontWeight: 800,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  Método P4
                </strong>
                <span
                  className="hidden sm:inline"
                  style={{
                    color: THEME.muted,
                    fontSize: '11px',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  Tributário
                </span>
              </span>
            </a>

            <a
              href="./"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'transparent',
                color: THEME.accent,
                border: `1px solid ${THEME.border}`,
                borderRadius: '999px',
                padding: '9px 14px',
                fontWeight: 700,
                fontSize: '13px',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                flexShrink: 0,
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-1px)'
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                e.currentTarget.style.borderColor = 'rgba(185,255,0,0.24)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = ''
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.borderColor = THEME.border
              }}
            >
              <ArrowLeft size={14} />
              <span className="hidden sm:inline">Voltar para a página</span>
              <span className="sm:hidden">Voltar</span>
            </a>
          </div>
        </div>
      </header>

      <main
        className="lp-section-backdrop"
        style={{
          ...SECTION_BACKDROP,
          padding: 'clamp(96px, 14vw, 132px) 24px clamp(72px, 8vw, 88px)',
          minHeight: 'calc(100svh - 66px)',
        }}
      >
        <div style={{ maxWidth: THEME.maxWidth, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          {/* Primeiro bloco: confirma o cadastro e entrega a aula gratuita. */}
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-6 sm:gap-8 lg:gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              style={{ maxWidth: '560px', width: '100%' }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  color: THEME.textSoft,
                  fontSize: '14px',
                  fontWeight: 700,
                  marginBottom: '18px',
                }}
              >
                <CheckCircle2 size={18} style={{ color: THEME.accent, flexShrink: 0 }} />
                Cadastro concluído com sucesso
              </div>

              <h1
                style={{
                  color: THEME.text,
                  fontFamily: THEME.displayFont,
                  fontSize: 'clamp(36px, 5vw, 58px)',
                  fontWeight: 700,
                  lineHeight: 1.02,
                  letterSpacing: '-0.06em',
                  marginBottom: '22px',
                  maxWidth: '12ch',
                }}
              >
                Obrigado pelo interesse.
                <span style={{ color: THEME.accent }}> Assista agora à aula gratuita.</span>
              </h1>

              <p
                style={{
                  color: THEME.muted,
                  fontSize: 'clamp(15px, 1.7vw, 17px)',
                  lineHeight: 1.8,
                  marginBottom: '24px',
                  maxWidth: '52ch',
                }}
              >
                Seu acesso inicial foi liberado. Abaixo está a aula gratuita sobre gestão tributária para quem vende
                em marketplaces e precisa tomar decisões com mais clareza, margem e segurança.
              </p>

              <div
                className="w-full sm:w-auto"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 14px',
                  borderRadius: '16px',
                  background: 'rgba(255,255,255,0.03)',
                  border: `1px solid ${THEME.border}`,
                  color: THEME.textSoft,
                  fontSize: '13px',
                  lineHeight: 1.6,
                }}
              >
                <ShieldCheck size={15} style={{ color: THEME.accent, flexShrink: 0 }} />
                A recomendação é assistir primeiro e depois voltar à operação com os pontos principais anotados.
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.68, delay: 0.08, ease: 'easeOut' }}
              style={{ width: '100%' }}
            >
              {/* Card do video liberado. */}
              <div
                style={{
                  background: THEME.surfaceAlt,
                  borderRadius: THEME.radiusXl,
                  border: `1px solid ${THEME.borderStrong}`,
                  boxShadow: THEME.shadow,
                  overflow: 'hidden',
                  width: '100%',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    padding: '14px 16px',
                    borderBottom: `1px solid ${THEME.border}`,
                    background: 'rgba(255,255,255,0.02)',
                    flexWrap: 'wrap',
                  }}
                >
                  <div>
                    <div style={{ color: THEME.text, fontSize: '16px', fontWeight: 800 }}>Aula gratuita liberada</div>
                    <div style={{ color: THEME.muted, fontSize: '13px', marginTop: '4px' }}>
                      Gestão tributária aplicada para sellers e operações de marketplace
                    </div>
                  </div>
                  <div
                    style={{
                      color: THEME.accent,
                      fontSize: '12px',
                      fontWeight: 800,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Assista agora
                  </div>
                </div>

                <div style={{ padding: 'clamp(14px, 2vw, 22px)' }}>
                  <div
                    style={{
                      position: 'relative',
                      borderRadius: THEME.radiusLg,
                      overflow: 'hidden',
                      border: `1px solid ${THEME.border}`,
                      aspectRatio: '16 / 9',
                      background: THEME.bg,
                    }}
                  >
                    <iframe
                      src="https://www.youtube-nocookie.com/embed/c7btyduJlp8?rel=0&modestbranding=1"
                      title="Aula gratuita sobre Gestão Tributária"
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        border: 'none',
                      }}
                    />
                  </div>

                  <div
                    style={{
                      marginTop: '18px',
                      background: THEME.surface,
                      border: `1px solid ${THEME.border}`,
                      borderRadius: THEME.radiusLg,
                      padding: '16px 16px 18px',
                    }}
                  >
                    <div
                      style={{
                        color: THEME.text,
                        fontSize: '15px',
                        fontWeight: 700,
                        marginBottom: '8px',
                      }}
                    >
                      O que você deve observar nesta aula
                    </div>
                    <p
                      style={{
                        color: THEME.muted,
                        fontSize: '14px',
                        lineHeight: 1.75,
                        margin: 0,
                      }}
                    >
                      Preste atenção na relação entre enquadramento tributário, margem e rotina operacional. Esse é o
                      ponto central para começar a revisar a sua estrutura com mais segurança.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Blocos secundarios com orientacao do que fazer depois de assistir. */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4" style={{ marginTop: '24px' }}>
            {nextSteps.map(({ icon: Icon, title, description }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 18, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                viewport={{ once: false, amount: 0.55 }}
                className="p-5 sm:p-[20px]"
                style={{
                  background: THEME.surface,
                  border: `1px solid ${THEME.border}`,
                  borderRadius: THEME.radiusLg,
                  minHeight: '100%',
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '14px',
                    background: THEME.accentSoft,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '14px',
                  }}
                >
                  <Icon size={18} style={{ color: THEME.accent }} />
                </div>
                <div style={{ color: THEME.text, fontWeight: 700, fontSize: '15px', marginBottom: '8px' }}>{title}</div>
                <div style={{ color: THEME.muted, fontSize: '13px', lineHeight: 1.75 }}>{description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
