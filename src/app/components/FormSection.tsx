import { useState } from 'react'
import { motion } from 'motion/react'
import { useForm } from 'react-hook-form'
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  FileText,
  Loader2,
  Mail,
  Phone,
  ShoppingBag,
  User,
} from 'lucide-react'
import { THEME } from '../design'
import { SECTION_BACKDROP } from '../sectionBackground'

type FormData = {
  name: string
  whatsapp: string
  whatsappConfirm: string
  email: string
  medal: string
  taxRegime: string
}

type LeadPayload = {
  'Data de entrada de leads': string
  Funil: string
  'Nome completo': string
  'Qual seu e-mail?': string
  'Qual o seu WhatsApp?': string
  'Confirme seu WhatsApp': string
  'Qual é a sua medalha no Mercado Livre?': string
  'Qual é o seu regime tributário atual?': string
}

const DEFAULT_LEAD_WEBHOOK_URL = 'https://n8n.srv1095468.hstgr.cloud/webhook/Tributario'

// Formata o telefone em tempo real para orientar melhor o preenchimento.
function formatPhone(value: string): string {
  const nums = value.replace(/\D/g, '').slice(0, 11)
  if (!nums) return ''
  if (nums.length > 6) return `(${nums.slice(0, 2)}) ${nums.slice(2, 7)}-${nums.slice(7)}`
  if (nums.length > 2) return `(${nums.slice(0, 2)}) ${nums.slice(2)}`
  return nums
}

// Remove o codigo do pais quando o usuario cola ou digita +55 no campo.
function stripBrazilCountryCode(value: string): string {
  return value.trimStart().replace(/^\+55\s*/, '')
}

// Gera a data em pt-BR para casar com a coluna da planilha.
function getLeadEntryDate(date = new Date()): string {
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()
  return `${day}/${month}/${year}`
}

// Centraliza a URL do webhook do n8n para a integracao ficar configuravel por ambiente.
function getLeadWebhookUrl(): string {
  const env = (import.meta as ImportMeta & { env?: Record<string, string | undefined> }).env
  return env?.VITE_LEAD_WEBHOOK_URL?.trim() || DEFAULT_LEAD_WEBHOOK_URL
}

// Mantem o payload alinhado com os nomes exatos esperados na automacao e na planilha.
function buildLeadPayload(data: FormData): LeadPayload {
  return {
    'Data de entrada de leads': getLeadEntryDate(),
    Funil: 'Tributario',
    'Nome completo': data.name.trim(),
    'Qual seu e-mail?': data.email.trim(),
    'Qual o seu WhatsApp?': data.whatsapp.trim(),
    'Confirme seu WhatsApp': data.whatsappConfirm.trim(),
    'Qual é a sua medalha no Mercado Livre?': data.medal.trim(),
    'Qual é o seu regime tributário atual?': data.taxRegime.trim(),
  }
}

// Mantem a pagina de obrigado centralizada em um unico ponto de alteracao.
function getThankYouUrl() {
  return new URL('./tributario-obrigado.html', window.location.href).toString()
}

export function FormSection() {
  const [loading, setLoading] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormData>({ mode: 'onBlur' })
  const whatsapp = watch('whatsapp')

  // Envia os dados do lead para o webhook configurado e so depois redireciona.
  const onSubmit = async (data: FormData) => {
    setSubmitError('')
    setLoading(true)

    try {
      const webhookUrl = getLeadWebhookUrl()

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(buildLeadPayload(data)),
      })

      if (!response.ok) {
        throw new Error('Nao foi possivel enviar seus dados agora. Tente novamente em instantes.')
      }

      window.location.assign(getThankYouUrl())
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : 'Nao foi possivel concluir o envio agora. Tente novamente em instantes.',
      )
    } finally {
      setLoading(false)
    }
  }

  // Funcoes de estilo locais ajudam a manter todos os campos consistentes.
  const inputStyle = (hasError: boolean) => ({
    width: '100%',
    background: 'linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.035))',
    border: `1.5px solid ${hasError ? THEME.danger : 'rgba(255,255,255,0.1)'}`,
    borderRadius: '15px',
    padding: '14px 16px 14px 44px',
    color: THEME.text,
    fontSize: '14px',
    fontFamily: THEME.bodyFont,
    outline: 'none',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease',
    boxSizing: 'border-box' as const,
    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)',
  })

  const selectStyle = (hasError: boolean) => ({
    ...inputStyle(hasError),
    appearance: 'none' as const,
    cursor: 'pointer',
  })

  const labelStyle = {
    display: 'block',
    color: THEME.textSoft,
    fontSize: '12px',
    fontWeight: '800',
    marginBottom: '8px',
    letterSpacing: '0.12em',
    textTransform: 'uppercase' as const,
  }

  const iconWrapper = {
    position: 'absolute' as const,
    left: '14px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: THEME.muted,
    pointerEvents: 'none' as const,
    display: 'flex',
    alignItems: 'center',
  }

  const errorStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    color: THEME.danger,
    fontSize: '12px',
    marginTop: '6px',
  }

  const helperChipStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 12px',
    borderRadius: '999px',
    border: `1px solid ${THEME.border}`,
    background: 'rgba(255,255,255,0.03)',
    color: THEME.textSoft,
    fontSize: '12px',
    fontWeight: 700,
    lineHeight: 1.3,
  }

  return (
    <section
      id="form"
      className="lp-section-backdrop"
      style={{
        ...SECTION_BACKDROP,
        padding: `${THEME.sectionPadding} 24px`,
      }}
    >
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
              fontSize: 'clamp(30px, 4vw, 42px)',
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: '-0.05em',
              marginBottom: '14px',
            }}
          >
            Garanta sua vaga agora
          </h2>
          <p style={{ color: THEME.muted, fontSize: '16px', lineHeight: 1.8, maxWidth: '680px', margin: '0 auto' }}>
            Um formulário mais preciso, com validação clara e estrutura pensada para liberar o acesso sem ruído nem
            perda de lead.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.58 }}
          viewport={{ once: true }}
          style={{
            maxWidth: '860px',
            margin: '0 auto',
            background: 'linear-gradient(180deg, rgba(25,35,48,0.98), rgba(21,30,40,0.98))',
            borderRadius: '24px',
            border: `1px solid ${THEME.borderStrong}`,
            padding: 'clamp(18px, 2.8vw, 26px)',
            boxShadow: '0 26px 58px rgba(0,0,0,0.24), inset 0 1px 0 rgba(255,255,255,0.03)',
          }}
        >
          <motion.form initial={{ opacity: 1 }} onSubmit={handleSubmit(onSubmit)} noValidate>
            {/* Bloco de cabecalho do formulario com contexto e reforco de rapidez. */}
            <div
              style={{
                display: 'grid',
                gap: '12px',
                marginBottom: '18px',
                padding: '14px 16px',
                borderRadius: '20px',
                border: `1px solid ${THEME.border}`,
                background:
                  'linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.015)), radial-gradient(circle at top right, rgba(185,255,0,0.08), transparent 34%)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  gap: '12px',
                  flexWrap: 'wrap',
                }}
              >
                <div style={{ maxWidth: '560px' }}>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '7px 11px',
                      borderRadius: '999px',
                      background: THEME.accentSoft,
                      color: THEME.accent,
                      fontSize: '11px',
                      fontWeight: 800,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      marginBottom: '10px',
                    }}
                  >
                    <CheckCircle2 size={14} />
                    Acesso imediato
                  </div>

                  <h3
                    style={{
                      color: THEME.text,
                      fontFamily: THEME.displayFont,
                      fontSize: 'clamp(20px, 2.6vw, 24px)',
                      fontWeight: 700,
                      letterSpacing: '-0.04em',
                      lineHeight: 1.06,
                      marginBottom: '8px',
                    }}
                  >
                    Preencha os dados para liberar as aulas
                  </h3>

                  <p style={{ color: THEME.muted, fontSize: '13px', lineHeight: 1.65 }}>
                    O formulário foi organizado para reduzir erro de preenchimento e liberar o acesso com clareza,
                    sem fricção no envio.
                  </p>
                </div>

                <div style={helperChipStyle}>
                  <ArrowRight size={14} color={THEME.accent} />
                    Menos de 1 minuto
                  </div>
                </div>
              </div>

              {/* Grade principal dos campos. Em desktop vira duas colunas; em mobile fica uma coluna. */}
              <div
                style={{
                  padding: 'clamp(14px, 2.4vw, 20px)',
                  borderRadius: '18px',
                  border: `1px solid rgba(255,255,255,0.07)`,
                  background: 'rgba(10,14,20,0.12)',
                }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label style={labelStyle}>Nome completo <span style={{ color: THEME.danger }}>*</span></label>
                  <div style={{ position: 'relative' }}>
                    <div style={iconWrapper}><User size={16} /></div>
                    <input
                      {...register('name', {
                        required: 'Nome é obrigatório',
                        minLength: { value: 3, message: 'Mínimo 3 caracteres' },
                      })}
                      placeholder="Ex: Gabriel Pim"
                      style={inputStyle(!!errors.name)}
                      onFocus={(e) => {
                        e.target.style.borderColor = 'rgba(185,255,0,0.45)'
                        e.target.style.boxShadow = '0 0 0 4px rgba(185,255,0,0.08)'
                        e.target.style.background = 'rgba(255,255,255,0.05)'
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = errors.name ? THEME.danger : THEME.border
                        e.target.style.boxShadow = ''
                        e.target.style.background = 'rgba(255,255,255,0.03)'
                      }}
                    />
                  </div>
                  {errors.name && <div style={errorStyle}><AlertCircle size={12} />{errors.name.message}</div>}
                </div>

                <div>
                  <label style={labelStyle}>Qual o seu WhatsApp? <span style={{ color: THEME.danger }}>*</span></label>
                  <div style={{ position: 'relative' }}>
                    <div style={iconWrapper}><Phone size={16} /></div>
                    <input
                      {...register('whatsapp', {
                        required: 'WhatsApp é obrigatório',
                        minLength: { value: 14, message: 'Número incompleto' },
                      })}
                      type="tel"
                      inputMode="numeric"
                      autoComplete="tel-national"
                      placeholder="(99) 9 9999-9999"
                      style={inputStyle(!!errors.whatsapp)}
                      onChange={(e) => {
                        setValue('whatsapp', formatPhone(stripBrazilCountryCode(e.target.value)), {
                          shouldValidate: true,
                          shouldDirty: true,
                        })
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = 'rgba(185,255,0,0.45)'
                        e.target.style.boxShadow = '0 0 0 4px rgba(185,255,0,0.08)'
                        e.target.style.background = 'rgba(255,255,255,0.05)'
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = errors.whatsapp ? THEME.danger : THEME.border
                        e.target.style.boxShadow = ''
                        e.target.style.background = 'rgba(255,255,255,0.03)'
                      }}
                    />
                  </div>
                  {errors.whatsapp && <div style={errorStyle}><AlertCircle size={12} />{errors.whatsapp.message}</div>}
                </div>

                <div>
                  <label style={labelStyle}>Confirme seu WhatsApp <span style={{ color: THEME.danger }}>*</span></label>
                  <div style={{ position: 'relative' }}>
                    <div style={iconWrapper}><Phone size={16} /></div>
                    <input
                      {...register('whatsappConfirm', {
                        required: 'Confirmação é obrigatória',
                        validate: (value) => value === whatsapp || 'Os números de WhatsApp não coincidem',
                      })}
                      type="tel"
                      inputMode="numeric"
                      autoComplete="tel-national"
                      placeholder="(99) 9 9999-9999"
                      style={inputStyle(!!errors.whatsappConfirm)}
                      onChange={(e) => {
                        setValue('whatsappConfirm', formatPhone(stripBrazilCountryCode(e.target.value)), {
                          shouldValidate: true,
                          shouldDirty: true,
                        })
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = 'rgba(185,255,0,0.45)'
                        e.target.style.boxShadow = '0 0 0 4px rgba(185,255,0,0.08)'
                        e.target.style.background = 'rgba(255,255,255,0.05)'
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = errors.whatsappConfirm ? THEME.danger : THEME.border
                        e.target.style.boxShadow = ''
                        e.target.style.background = 'rgba(255,255,255,0.03)'
                      }}
                    />
                  </div>
                  {errors.whatsappConfirm && <div style={errorStyle}><AlertCircle size={12} />{errors.whatsappConfirm.message}</div>}
                </div>

                <div className="md:col-span-2">
                  <label style={labelStyle}>Qual seu e-mail? <span style={{ color: THEME.danger }}>*</span></label>
                  <div style={{ position: 'relative' }}>
                    <div style={iconWrapper}><Mail size={16} /></div>
                    <input
                      {...register('email', {
                        required: 'E-mail é obrigatório',
                        pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'E-mail inválido' },
                      })}
                      type="email"
                      placeholder="email@gmail.com"
                      style={inputStyle(!!errors.email)}
                      onFocus={(e) => {
                        e.target.style.borderColor = 'rgba(185,255,0,0.45)'
                        e.target.style.boxShadow = '0 0 0 4px rgba(185,255,0,0.08)'
                        e.target.style.background = 'rgba(255,255,255,0.05)'
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = errors.email ? THEME.danger : THEME.border
                        e.target.style.boxShadow = ''
                        e.target.style.background = 'rgba(255,255,255,0.03)'
                      }}
                    />
                  </div>
                  {errors.email && <div style={errorStyle}><AlertCircle size={12} />{errors.email.message}</div>}
                </div>

                <div>
                  <label style={labelStyle}>Medalha no Mercado Livre <span style={{ color: THEME.danger }}>*</span></label>
                  <div style={{ position: 'relative' }}>
                    <div style={iconWrapper}><ShoppingBag size={16} /></div>
                    <select
                      {...register('medal', { required: 'Selecione uma opção' })}
                      style={selectStyle(!!errors.medal)}
                      onFocus={(e) => {
                        e.target.style.borderColor = 'rgba(185,255,0,0.45)'
                        e.target.style.boxShadow = '0 0 0 4px rgba(185,255,0,0.08)'
                        e.target.style.background = 'rgba(255,255,255,0.05)'
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = errors.medal ? THEME.danger : THEME.border
                        e.target.style.boxShadow = ''
                        e.target.style.background = 'rgba(255,255,255,0.03)'
                      }}
                    >
                      <option value="" style={{ background: THEME.bg }}>Selecione sua medalha</option>
                      <option value="Não tenho medalha" style={{ background: THEME.bg }}>Não tenho medalha</option>
                      <option value="Mercado Líder" style={{ background: THEME.bg }}>Mercado Líder</option>
                      <option value="Gold" style={{ background: THEME.bg }}>Gold</option>
                      <option value="Platinum" style={{ background: THEME.bg }}>Platinum</option>
                    </select>
                    <div
                      style={{
                        position: 'absolute',
                        right: '14px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        pointerEvents: 'none',
                      }}
                    >
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                        <path d="M1 1L6 6L11 1" stroke={THEME.muted} strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </div>
                  </div>
                  {errors.medal && <div style={errorStyle}><AlertCircle size={12} />{errors.medal.message}</div>}
                </div>

                <div>
                  <label style={labelStyle}>Regime tributário atual <span style={{ color: THEME.danger }}>*</span></label>
                  <div style={{ position: 'relative' }}>
                    <div style={iconWrapper}><FileText size={16} /></div>
                    <select
                      {...register('taxRegime', { required: 'Selecione uma opção' })}
                      style={selectStyle(!!errors.taxRegime)}
                      onFocus={(e) => {
                        e.target.style.borderColor = 'rgba(185,255,0,0.45)'
                        e.target.style.boxShadow = '0 0 0 4px rgba(185,255,0,0.08)'
                        e.target.style.background = 'rgba(255,255,255,0.05)'
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = errors.taxRegime ? THEME.danger : THEME.border
                        e.target.style.boxShadow = ''
                        e.target.style.background = 'rgba(255,255,255,0.03)'
                      }}
                    >
                      <option value="" style={{ background: THEME.bg }}>Selecione seu regime</option>
                      <option value="MEI" style={{ background: THEME.bg }}>MEI</option>
                      <option value="Simples Nacional" style={{ background: THEME.bg }}>Simples Nacional</option>
                      <option value="Lucro Presumido" style={{ background: THEME.bg }}>Lucro Presumido</option>
                      <option value="Lucro Real" style={{ background: THEME.bg }}>Lucro Real</option>
                    </select>
                    <div
                      style={{
                        position: 'absolute',
                        right: '14px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        pointerEvents: 'none',
                      }}
                    >
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                        <path d="M1 1L6 6L11 1" stroke={THEME.muted} strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </div>
                  </div>
                  {errors.taxRegime && <div style={errorStyle}><AlertCircle size={12} />{errors.taxRegime.message}</div>}
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                style={{
                  background: loading ? 'rgba(185,255,0,0.6)' : THEME.accent,
                  color: THEME.bg,
                  border: 'none',
                  borderRadius: '14px',
                  padding: '15px 22px',
                  fontWeight: 800,
                  fontSize: '15px',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  width: '100%',
                  transition: 'all 0.2s ease',
                  fontFamily: THEME.bodyFont,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  boxShadow: loading ? 'none' : '0 14px 34px rgba(185,255,0,0.18)',
                  marginTop: '18px',
                }}
                onMouseEnter={(e) => {
                  if (!loading) {
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = '0 18px 38px rgba(185,255,0,0.28)'
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = ''
                  e.currentTarget.style.boxShadow = loading ? 'none' : '0 14px 34px rgba(185,255,0,0.18)'
                }}
              >
                {/* O botao troca para estado de carregamento durante o envio ao webhook. */}
                {loading ? (
                  <>
                    <Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} />
                    Processando...
                  </>
                ) : (
                  <>
                    Garantir minha vaga gratuita
                    <ArrowRight size={18} />
                  </>
                )}
              </button>

              {submitError && (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginTop: '14px',
                    padding: '12px 14px',
                    borderRadius: '14px',
                    border: `1px solid rgba(255,107,107,0.25)`,
                    background: 'rgba(255,107,107,0.08)',
                    color: '#ffd4d4',
                    fontSize: '13px',
                    lineHeight: 1.55,
                  }}
                >
                  <AlertCircle size={15} style={{ flexShrink: 0 }} />
                  <span>{submitError}</span>
                </div>
              )}

            </div>
          </motion.form>
        </motion.div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  )
}
