import { THEME } from './design'
import sectionBackdrop from '../../Design sem nome (1).jpg'

// Backdrop compartilhado pelas seções abaixo do hero.
// A ideia aqui e centralizar a linguagem visual interna em um unico objeto.
export const SECTION_BACKDROP = {
  backgroundColor: '#17212B',
  backgroundImage: `
    radial-gradient(circle at 14% 18%, rgba(185,255,0,0.2) 0%, transparent 24%),
    radial-gradient(circle at 86% 14%, rgba(94,154,255,0.16) 0%, transparent 22%),
    radial-gradient(circle at 50% 108%, rgba(185,255,0,0.1) 0%, transparent 32%),
    linear-gradient(180deg, rgba(18,24,31,0.16) 0%, rgba(8,12,18,0.58) 100%),
    linear-gradient(90deg, rgba(9,15,22,0.9) 0%, rgba(9,15,22,0.58) 18%, rgba(9,15,22,0.2) 42%, rgba(9,15,22,0.62) 100%),
    url(${sectionBackdrop})
  `,
  backgroundPosition: '14% 18%, 86% 14%, 50% 108%, center, center, center',
  backgroundSize: '560px 560px, 520px 520px, 780px 380px, auto, auto, cover',
  backgroundRepeat: 'no-repeat, no-repeat, no-repeat, no-repeat, no-repeat, no-repeat',
  backgroundBlendMode: 'screen, screen, screen, normal, normal, normal',
  minHeight: '100svh',
  position: 'relative' as const,
  isolation: 'isolate' as const,
  overflow: 'hidden' as const,
  scrollSnapAlign: 'start' as const,
  scrollSnapStop: 'always' as const,
  borderTop: `1px solid rgba(255,255,255,0.05)`,
  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.015), inset 0 120px 180px rgba(255,255,255,0.015), inset 0 -140px 220px rgba(0,0,0,0.24)',
} as const

export const SECTION_FADE = {
  // Esses fades sao usados no carrossel de depoimentos para esconder a entrada e saida dos cards.
  left: `linear-gradient(to right, ${THEME.bgAlt}, transparent)`,
  right: `linear-gradient(to left, ${THEME.bgAlt}, transparent)`,
} as const
