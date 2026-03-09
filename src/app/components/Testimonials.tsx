import { motion } from 'motion/react'
import { Star, Quote } from 'lucide-react'
import { THEME } from '../design'
import brandMark from '../../../01.png'
import { SECTION_BACKDROP, SECTION_FADE } from '../sectionBackground'

// Videos e depoimentos em texto usados como prova social.
const videoTestimonials = [
  {
    id: '1053843838',
    hash: '68dc78ebf1',
    title: 'Clareza para enxergar a operação',
    subtitle: 'Entenda como o conteúdo ajuda a tomar decisão com mais base e menos improviso.',
  },
  {
    id: '1036887425',
    hash: '007c48cf8f',
    title: 'Mais segurança para decidir',
    subtitle: 'Um relato sobre confiança prática para ajustar rota e agir com mais critério.',
  },
  {
    id: '881162783',
    hash: '6e32d2ac89',
    title: 'Visão mais profissional do seller',
    subtitle: 'Percepção de maturidade na leitura da operação e no entendimento do negócio.',
  },
  {
    id: '903619321',
    hash: '20f86fb5aa',
    title: 'Resultado percebido na prática',
    subtitle: 'Veja como a aplicação do método começa a aparecer no dia a dia da operação.',
  },
]

const testimonials = [
  {
    name: 'Paulo Martins',
    role: 'Vendedor — Mercado Livre',
    text: 'Consegui realizar minhas primeiras vendas depois de aplicar o que foi ensinado no grupo. A sensação de ver as vendas acontecendo é boa demais.',
    stars: 5,
    initials: 'PM',
  },
  {
    name: 'Larissa',
    role: 'Aluna — Mentoria',
    text: 'Finalmente entendi alguns pontos que estavam travados. A sensação é realmente de passar de fase quando as coisas começam a dar certo.',
    stars: 5,
    initials: 'LA',
  },
  {
    name: 'Marcelo',
    role: 'Aluno — Mentoria',
    text: 'Os resultados começaram a aparecer e já saiu a primeira venda orgânica. Muito bom ver o progresso acontecendo na prática.',
    stars: 5,
    initials: 'MA',
  },
  {
    name: 'Carlos Andrade',
    role: 'Vendedor — Mercado Livre',
    text: 'A aula de ontem já deu resultado. Apliquei a estratégia e consegui um retorno imediato nas vendas.',
    stars: 5,
    initials: 'CA',
  },
  {
    name: 'Pedro',
    role: 'Aluno — Mentoria',
    text: 'Consegui fazer minha primeira venda fora do catálogo com poucas visitas. Resultado rápido e muito mais clareza no processo.',
    stars: 5,
    initials: 'PE',
  },
  {
    name: 'Letícia',
    role: 'Aluna — Mentoria',
    text: 'Acabou de sair minha primeira venda pelo FULL. A melhor parte é que agora consigo entender melhor o que realmente impacta a operação.',
    stars: 5,
    initials: 'LE',
  },
]

function TestimonialCard({
  name,
  role,
  text,
  stars,
  initials,
}: {
  name: string
  role: string
  text: string
  stars: number
  initials: string
}) {
  return (
    <div
      className="p-5 sm:p-6"
      style={{
        background: THEME.surface,
        borderRadius: THEME.radiusLg,
        border: `1px solid ${THEME.border}`,
        boxShadow: THEME.shadowSoft,
        height: '100%',
      }}
    >
      <Quote size={18} style={{ color: THEME.accent, opacity: 0.4, marginBottom: '14px' }} />
      <p style={{ color: THEME.textSoft, fontSize: '14px', lineHeight: '1.8', marginBottom: '20px' }}>{text}</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: THEME.accentSoft,
            border: '1px solid rgba(185,255,0,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: THEME.accent,
            fontWeight: 700,
            fontSize: '13px',
            flexShrink: 0,
          }}
        >
          {initials}
        </div>
        <div>
          <div style={{ color: THEME.text, fontWeight: 700, fontSize: '14px' }}>{name}</div>
          <div style={{ color: THEME.muted, fontSize: '12px' }}>{role}</div>
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: '2px' }}>
          {Array.from({ length: stars }).map((_, index) => (
            <Star key={index} size={12} style={{ color: THEME.accent, fill: THEME.accent }} />
          ))}
        </div>
      </div>
    </div>
  )
}

function VideoTestimonialCard({
  id,
  hash,
  title,
  subtitle,
}: {
  id: string
  hash: string
  title: string
  subtitle: string
}) {
  return (
    <div
      className="p-4 sm:p-[18px]"
      style={{
        background: THEME.surfaceAlt,
        borderRadius: THEME.radiusXl,
        border: `1px solid ${THEME.borderStrong}`,
        boxShadow: THEME.shadowSoft,
        height: '100%',
        backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%)',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
        <div
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '10px',
            background: 'rgba(255,255,255,0.03)',
            border: `1px solid ${THEME.border}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src={brandMark}
            alt="Método P4"
            style={{
              width: '17px',
              height: '17px',
              objectFit: 'contain',
              display: 'block',
              opacity: 0.92,
            }}
          />
        </div>
      </div>

      <div style={{ marginBottom: '16px' }}>
        <div
          className="sm:min-h-[44px]"
          style={{
            color: THEME.text,
            fontSize: '18px',
            lineHeight: 1.2,
            fontWeight: 700,
            letterSpacing: '-0.03em',
            marginBottom: '8px',
          }}
        >
          {title}
        </div>
        <div className="sm:min-h-[64px]" style={{ color: THEME.muted, fontSize: '13px', lineHeight: 1.65 }}>
          {subtitle}
        </div>
      </div>

      <div
        style={{
          borderRadius: '22px',
          overflow: 'hidden',
          border: `1px solid ${THEME.border}`,
          background: '#10161f',
          aspectRatio: '9 / 16',
        }}
      >
        <iframe
          src={`https://player.vimeo.com/video/${id}?h=${hash}&title=0&byline=0&portrait=0&badge=0&autopause=1&player_id=0&app_id=58479`}
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            display: 'block',
          }}
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
          allowFullScreen
          loading="lazy"
          title={title}
        />
      </div>
    </div>
  )
}

export function Testimonials() {
  // No desktop o carrossel percorre duas copias da lista para parecer infinito.
  const items = [...testimonials, ...testimonials]
  const mobileTestimonials = testimonials.slice(0, 3)

  return (
    <section id="testimonials" className="lp-section-backdrop" style={{ ...SECTION_BACKDROP, padding: `${THEME.sectionPadding} 0`, overflow: 'hidden' }}>
      <style>{`
        /* Marquee simples em CSS para desktop. */
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .marquee-track {
          animation: marqueeScroll 52s linear infinite;
          will-change: transform;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div style={{ maxWidth: THEME.maxWidth, margin: '0 auto', padding: `0 ${THEME.pagePadding}`, marginBottom: '52px', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center' }}
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
            O que os alunos dizem
          </h2>
          <p
            style={{
              color: THEME.muted,
              fontSize: 'clamp(15px, 1.7vw, 17px)',
              marginTop: '14px',
              maxWidth: '720px',
              marginInline: 'auto',
              lineHeight: 1.75,
            }}
          >
            Uma amostra do tipo de percepção que o conteúdo gera em quem começa a enxergar a operação com mais
            clareza.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          viewport={{ once: true }}
          style={{ marginTop: '34px' }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {videoTestimonials.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.42, delay: index * 0.08 }}
                viewport={{ once: false, amount: 0.45 }}
              >
                <VideoTestimonialCard {...video} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Mobile usa cards empilhados para manter leitura e toque confortaveis. */}
      <div className="relative z-10 md:hidden" style={{ padding: `0 ${THEME.pagePadding}` }}>
        <div className="grid grid-cols-1 gap-4">
          {mobileTestimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.38, delay: index * 0.06 }}
              viewport={{ once: false, amount: 0.55 }}
            >
              <TestimonialCard {...item} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Desktop usa marquee continuo com fades laterais. */}
      <div className="relative z-10 hidden md:block" style={{ position: 'relative' }}>
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: '120px',
            zIndex: 2,
            background: SECTION_FADE.left,
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: '120px',
            zIndex: 2,
            background: SECTION_FADE.right,
            pointerEvents: 'none',
          }}
        />

        <div style={{ overflow: 'hidden', padding: '8px 0' }}>
          <div className="marquee-track" style={{ display: 'flex', gap: '18px', width: 'fit-content' }}>
            {items.map((item, index) => (
              <div key={index} style={{ minWidth: '308px', maxWidth: '308px', flexShrink: 0 }}>
                <TestimonialCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
