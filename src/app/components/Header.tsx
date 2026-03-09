import { useEffect, useState } from 'react'
import { THEME } from '../design'
import brandMark from '../../../01.png'

export function Header() {
  // Controla o efeito de vidro mais forte quando o usuario sai do topo da pagina.
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const scrollToForm = () => document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })

  return (
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
        transition: 'all 0.28s ease',
        backdropFilter: scrolled ? 'blur(12px) saturate(128%)' : 'blur(6px) saturate(112%)',
        boxShadow: scrolled ? '0 8px 20px rgba(0,0,0,0.12)' : 'none',
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
          {/* Marca da landing. No mobile o texto pode ser truncado para nao empurrar o CTA. */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              color: THEME.text,
              fontFamily: THEME.bodyFont,
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
          </button>

          {/* CTA fixo para levar o usuario direto ao formulario principal. */}
          <button
            onClick={scrollToForm}
            style={{
              background: 'transparent',
              color: THEME.accent,
              border: `1px solid ${THEME.border}`,
              borderRadius: '999px',
              padding: '9px 14px',
              fontWeight: 700,
              fontSize: '13px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              fontFamily: THEME.bodyFont,
              whiteSpace: 'nowrap',
              flexShrink: 0,
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
            <span className="hidden sm:inline">Garantir vaga grátis</span>
            <span className="sm:hidden">Garantir vaga</span>
          </button>
        </div>
      </div>
    </header>
  )
}
