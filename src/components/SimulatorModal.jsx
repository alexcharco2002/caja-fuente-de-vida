import React, { useState, useEffect } from 'react'
import '../styles/simulator-modal.css'

export default function SimulatorModal({ isOpen, onClose, initialTab = 'prestamo' }) {
  const [activeTab, setActiveTab] = useState(initialTab)

  // Estados para Préstamo / Microcrédito
  const [loanAmount, setLoanAmount] = useState(1000)
  const [loanRate, setLoanRate] = useState(12.5) // Tasa % anual comunitaria
  const [loanMonths, setLoanMonths] = useState(12) // Plazo en meses
  const [loanFrequency, setLoanFrequency] = useState('mensual') // 'mensual' | 'trimestral'

  // Estados para Inversión / DPF
  const [invAmount, setInvAmount] = useState(1000)
  const [invTermDays, setInvTermDays] = useState(360)

  // Sincronizar pestaña inicial al abrir
  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab)
    }
  }, [initialTab, isOpen])

  // Cerrar con Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'auto'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const formatUSD = (val) =>
    '$' +
    (Number(val) || 0).toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }) +
    ' USD'

  // ==========================================
  // CÁLCULOS DEL PRÉSTAMO
  // ==========================================
  const principal = Math.max(0, parseFloat(loanAmount) || 0)
  const annualRateDecimal = Math.max(0, parseFloat(loanRate) || 0) / 100
  const months = Math.max(1, parseInt(loanMonths) || 1)

  let numPayments = months
  let periodicRate = annualRateDecimal / 12

  if (loanFrequency === 'trimestral') {
    numPayments = Math.max(1, Math.ceil(months / 3))
    periodicRate = annualRateDecimal / 4
  }

  // Cuota fija con fórmula de anualidad / amortización estándar
  let installment = 0
  if (periodicRate > 0) {
    installment =
      (principal * (periodicRate * Math.pow(1 + periodicRate, numPayments))) /
      (Math.pow(1 + periodicRate, numPayments) - 1)
  } else {
    installment = principal / numPayments
  }

  const totalLoanRepay = installment * numPayments
  const totalLoanInterest = totalLoanRepay - principal

  const loanWhatsAppMsg = encodeURIComponent(
    `Hola, he simulado un Crédito Comunal en la web:\n- Monto: ${formatUSD(principal)}\n- Plazo: ${months} meses\n- Modalidad: Pago ${loanFrequency === 'mensual' ? 'Mensual' : 'Trimestral (Cosecha)'}\n- Cuota estimada: ${formatUSD(installment)}\n¿Cuáles son los pasos para solicitarlo?`
  )

  // ==========================================
  // CÁLCULOS DE INVERSIÓN (DPF)
  // ==========================================
  const dpfRates = {
    90: 0.065,
    180: 0.075,
    360: 0.095,
  }
  const currentDpfRate = dpfRates[invTermDays] || 0.095
  const dpfPrincipal = Math.max(0, parseFloat(invAmount) || 0)
  const dpfEarnings = dpfPrincipal * currentDpfRate * (invTermDays / 360)
  const dpfTotal = dpfPrincipal + dpfEarnings

  const dpfWhatsAppMsg = encodeURIComponent(
    `Hola, me interesa simular un Depósito a Plazo Fijo:\n- Monto a invertir: ${formatUSD(dpfPrincipal)}\n- Plazo: ${invTermDays} días (${(currentDpfRate * 100).toFixed(1)}% anual)\n- Ganancia estimada: ${formatUSD(dpfEarnings)}\n¿Cómo puedo aperturar este DPF con Caja Fuente de Vida?`
  )

  return (
    <div className="sim-modal-backdrop" onClick={onClose}>
      <div className="sim-modal-card" onClick={(e) => e.stopPropagation()}>
        
        {/* Cabecera del Modal */}
        <div className="sim-modal-header">
          <div className="sim-modal-title-box">
            <div className="sim-modal-icon-badge">
              <span className="material-symbols-outlined text-[24px]">
                {activeTab === 'prestamo' ? 'payments' : 'trending_up'}
              </span>
            </div>
            <div>
              <h3 className="sim-modal-title">Simulador Financiero Comunal</h3>
              <p className="sim-modal-subtitle">
                Herramienta transparente sin costos ocultos • Caja Fuente De Vida
              </p>
            </div>
          </div>

          <button onClick={onClose} className="sim-close-btn" aria-label="Cerrar simulador">
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Barra de Pestañas Conmutables */}
        <div className="sim-tabs-bar">
          <button
            onClick={() => setActiveTab('prestamo')}
            className={`sim-tab-btn ${activeTab === 'prestamo' ? 'active' : ''}`}
          >
            <span className="material-symbols-outlined text-[18px]">payments</span>
            <span>Simular Préstamo / Crédito</span>
          </button>

          <button
            onClick={() => setActiveTab('inversion')}
            className={`sim-tab-btn ${activeTab === 'inversion' ? 'active' : ''}`}
          >
            <span className="material-symbols-outlined text-[18px]">trending_up</span>
            <span>Simular Inversión (DPF)</span>
          </button>
        </div>

        {/* Contenido según la pestaña activa */}
        <div className="sim-modal-body">
          {activeTab === 'prestamo' ? (
            /* =======================================
               PESTAÑA: SIMULADOR DE PRÉSTAMO
               ======================================= */
            <div className="sim-grid-layout">
              {/* Formulario de Parámetros */}
              <div className="sim-inputs-col">
                {/* 1. Valor / Monto Solicitado */}
                <div className="sim-field-group">
                  <div className="sim-label-row">
                    <label className="sim-field-label">1. Monto del Préstamo ($ USD)</label>
                    <span className="sim-field-hint">Mín. $100</span>
                  </div>
                  <div className="sim-input-box">
                    <span className="sim-input-prefix">$</span>
                    <input
                      type="number"
                      min="100"
                      step="50"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Math.max(0, Number(e.target.value)))}
                      className="sim-input"
                    />
                  </div>
                  {/* Presets rápidos */}
                  <div className="sim-presets-row">
                    {[300, 500, 1000, 2000, 3000].map((preset) => (
                      <button
                        key={preset}
                        type="button"
                        onClick={() => setLoanAmount(preset)}
                        className={`sim-preset-pill ${loanAmount === preset ? 'active' : ''}`}
                      >
                        ${preset}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Porcentaje / Tasa de Interés */}
                <div className="sim-field-group">
                  <div className="sim-label-row">
                    <label className="sim-field-label">2. Tasa de Interés Anual (%)</label>
                    <span className="sim-field-hint">Tasa comunitaria referencial</span>
                  </div>
                  <div className="sim-input-box">
                    <input
                      type="number"
                      min="1"
                      max="35"
                      step="0.5"
                      value={loanRate}
                      onChange={(e) => setLoanRate(Math.max(0, Number(e.target.value)))}
                      className="sim-input"
                    />
                    <span className="sim-input-suffix">% anual</span>
                  </div>
                </div>

                {/* 3. Tiempo / Plazo */}
                <div className="sim-field-group">
                  <label className="sim-field-label">3. Tiempo / Plazo del Préstamo</label>
                  <select
                    value={loanMonths}
                    onChange={(e) => setLoanMonths(Number(e.target.value))}
                    className="sim-select"
                  >
                    <option value={3}>3 meses (Corto plazo)</option>
                    <option value={6}>6 meses (1 semestre)</option>
                    <option value={12}>12 meses (1 año)</option>
                    <option value={18}>18 meses (1 año y medio)</option>
                    <option value={24}>24 meses (2 años)</option>
                  </select>
                </div>

                {/* 4. Modalidad de Pago (Mensual o Trimestral para agricultores) */}
                <div className="sim-field-group">
                  <label className="sim-field-label">4. ¿Cómo deseas pagar?</label>
                  <div className="sim-freq-pills">
                    <button
                      type="button"
                      onClick={() => setLoanFrequency('mensual')}
                      className={`sim-freq-btn ${loanFrequency === 'mensual' ? 'active' : ''}`}
                    >
                      <span className="sim-freq-title">Pago Mensual</span>
                      <span className="sim-freq-sub">{months} cuotas regulares</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setLoanFrequency('trimestral')}
                      className={`sim-freq-btn ${loanFrequency === 'trimestral' ? 'active' : ''}`}
                    >
                      <span className="sim-freq-title">Pago Trimestral</span>
                      <span className="sim-freq-sub">Ideal para cosechas (cada 3 meses)</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Panel de Resultados */}
              <div className="sim-results-card">
                <div>
                  <div className="sim-results-header">
                    <span className="sim-results-tag">Resultado Estimado</span>
                  </div>

                  <div className="sim-main-number-box">
                    <span className="sim-main-label">
                      Tu cuota {loanFrequency === 'mensual' ? 'mensual' : 'trimestral'} estimada:
                    </span>
                    <div className="sim-main-amount">
                      {formatUSD(installment)}
                    </div>
                  </div>

                  <div className="mt-4 sim-breakdown-list">
                    <div className="sim-breakdown-row">
                      <span>Monto solicitado:</span>
                      <strong>{formatUSD(principal)}</strong>
                    </div>
                    <div className="sim-breakdown-row">
                      <span>Número de cuotas:</span>
                      <strong>{numPayments} pagos {loanFrequency === 'mensual' ? 'mensuales' : 'trimestrales'}</strong>
                    </div>
                    <div className="sim-breakdown-row">
                      <span>Interés total estimado:</span>
                      <strong className="text-secondary">{formatUSD(totalLoanInterest)}</strong>
                    </div>
                    <div className="sim-breakdown-row pt-1 border-t border-outline-variant/30">
                      <span>Total final a pagar:</span>
                      <strong className="text-base text-primary">{formatUSD(totalLoanRepay)}</strong>
                    </div>
                  </div>
                </div>

                <a
                  href={`https://wa.me/593992345678?text=${loanWhatsAppMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sim-cta-whatsapp"
                >
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  <span>Solicitar este Préstamo por WhatsApp</span>
                </a>
              </div>
            </div>
          ) : (
            /* =======================================
               PESTAÑA: SIMULADOR DE INVERSIÓN (DPF)
               ======================================= */
            <div className="sim-grid-layout">
              {/* Formulario DPF */}
              <div className="sim-inputs-col">
                <div className="sim-field-group">
                  <div className="sim-label-row">
                    <label className="sim-field-label">Monto a Invertir ($ USD)</label>
                    <span className="sim-field-hint">Mín. $100</span>
                  </div>
                  <div className="sim-input-box">
                    <span className="sim-input-prefix">$</span>
                    <input
                      type="number"
                      min="100"
                      step="50"
                      value={invAmount}
                      onChange={(e) => setInvAmount(Math.max(0, Number(e.target.value)))}
                      className="sim-input"
                    />
                  </div>
                  <div className="sim-presets-row">
                    {[500, 1000, 2500, 5000].map((preset) => (
                      <button
                        key={preset}
                        type="button"
                        onClick={() => setInvAmount(preset)}
                        className={`sim-preset-pill ${invAmount === preset ? 'active' : ''}`}
                      >
                        ${preset}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="sim-field-group">
                  <label className="sim-field-label">Plazo de la Inversión</label>
                  <select
                    value={invTermDays}
                    onChange={(e) => setInvTermDays(Number(e.target.value))}
                    className="sim-select"
                  >
                    <option value={90}>90 días (6.5% Tasa Anual)</option>
                    <option value={180}>180 días (7.5% Tasa Anual)</option>
                    <option value={360}>360 días (9.5% Tasa Anual)</option>
                  </select>
                </div>

                <div className="p-3 rounded-xl bg-surface border border-outline-variant/30 flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">
                    verified
                  </span>
                  <div className="text-xs text-on-surface-variant leading-relaxed">
                    Tu dinero trabaja en proyectos agrícolas y productivos de Sanjapamba con rendimiento garantizado al vencimiento.
                  </div>
                </div>
              </div>

              {/* Panel de Resultados DPF */}
              <div className="sim-results-card">
                <div>
                  <div className="sim-results-header">
                    <span className="sim-results-tag">Rendimiento Garantizado</span>
                  </div>

                  <div className="sim-main-number-box">
                    <span className="sim-main-label">Tu ganancia estimada al vencimiento:</span>
                    <div className="sim-main-amount inversion">
                      {formatUSD(dpfEarnings)}
                    </div>
                  </div>

                  <div className="mt-4 sim-breakdown-list">
                    <div className="sim-breakdown-row">
                      <span>Capital invertido:</span>
                      <strong>{formatUSD(dpfPrincipal)}</strong>
                    </div>
                    <div className="sim-breakdown-row">
                      <span>Tasa aplicada:</span>
                      <strong className="text-secondary">{(currentDpfRate * 100).toFixed(1)}% Anual</strong>
                    </div>
                    <div className="sim-breakdown-row">
                      <span>Plazo acordado:</span>
                      <strong>{invTermDays} días</strong>
                    </div>
                    <div className="sim-breakdown-row pt-1 border-t border-outline-variant/30">
                      <span>Capital final devuelto:</span>
                      <strong className="text-base text-primary">{formatUSD(dpfTotal)}</strong>
                    </div>
                  </div>
                </div>

                <a
                  href={`https://wa.me/593992345678?text=${dpfWhatsAppMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sim-cta-whatsapp"
                >
                  <span className="material-symbols-outlined text-[18px]">verified_user</span>
                  <span>Pactar este Plazo por WhatsApp</span>
                </a>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  )
}
