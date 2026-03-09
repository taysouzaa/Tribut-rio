import { THEME } from '../design'

export function Footer() {
  const currentYear = new Date().getFullYear()

  // Footer compartilhado pelas duas paginas, seguindo o mesmo acabamento de vidro do header.
  return (
    <footer
      style={{
        position: 'relative',
        background: 'linear-gradient(180deg, rgba(33,44,56,0.58), rgba(33,44,56,0.44))',
        borderTop: '1px solid rgba(255,255,255,0.14)',
        backdropFilter: 'blur(12px) saturate(128%)',
        boxShadow: '0 -8px 18px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.04)',
        padding: '28px 24px',
      }}
    >
      <div style={{ maxWidth: THEME.maxWidth, margin: '0 auto', textAlign: 'center' }}>
        <p
          style={{
            color: 'rgba(247,250,252,0.82)',
            fontSize: '13px',
            margin: 0,
            lineHeight: 1.6,
            textShadow: '0 1px 10px rgba(0,0,0,0.14)',
          }}
        >
          © {currentYear} Método P4. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
