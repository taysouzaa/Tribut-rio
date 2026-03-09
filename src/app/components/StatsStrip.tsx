import { motion } from 'motion/react'
import { Users, BookOpen, Star, RefreshCw } from 'lucide-react'
import { THEME } from '../design'

const stats = [
  { icon: Users, value: '5.000+', label: 'lojistas impactados' },
  { icon: BookOpen, value: '21', label: 'aulas completas' },
  { icon: Star, value: 'R$0,00', label: 'investimento' },
  { icon: RefreshCw, value: 'Atual', label: 'conteúdo revisado' },
]

export function StatsStrip() {
  return (
    <section
      style={{
        background: 'rgba(255,255,255,0.02)',
        borderTop: `1px solid ${THEME.border}`,
        borderBottom: `1px solid ${THEME.border}`,
        padding: '26px 24px',
      }}
    >
      <div style={{ maxWidth: THEME.maxWidth, margin: '0 auto' }}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map(({ icon: Icon, value, label }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              viewport={{ once: true }}
              style={{
                textAlign: 'center',
                padding: '18px 14px',
                borderRadius: THEME.radiusMd,
                background: 'rgba(255,255,255,0.02)',
                border: `1px solid ${THEME.border}`,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '38px',
                  height: '38px',
                  borderRadius: '12px',
                  background: THEME.accentSoft,
                  margin: '0 auto 10px',
                }}
              >
                <Icon size={17} style={{ color: THEME.accent }} />
              </div>
              <div
                style={{
                  color: THEME.text,
                  fontSize: '24px',
                  fontWeight: 800,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.1,
                }}
              >
                {value}
              </div>
              <div style={{ color: THEME.muted, fontSize: '12px', marginTop: '6px', fontWeight: 600 }}>
                {label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
