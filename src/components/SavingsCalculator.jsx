import React, { useState } from 'react'
import '../styles/calculator.css'

export default function SavingsCalculator() {
  const [amount, setAmount] = useState(1000)
  const [term, setTerm] = useState(360)

  const rates = {
    90: 0.065,
    180: 0.075,
    360: 0.095,
  }

  const currentRate = rates[term] || 0.095
  const earnings = (parseFloat(amount) || 0) * currentRate * (term / 360)
  const total = (parseFloat(amount) || 0) + earnings

  const formatUSD = (val) =>
    '$' +
    val.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }) +
    ' USD'

  const whatsappMessage = encodeURIComponent(
    `Hola, me interesa pactar un Depósito a Plazo Fijo de ${formatUSD(
      parseFloat(amount) || 0
    )} por ${term} días con Caja Comunal Fuente de Vida.`
  )

  return (
    <div id="simulador" className="calculator-wrapper">
      <div className="calculator-grid">
        
        {/* Columna Intro */}
        <div className="calc-intro-col">
          <span className="calc-badge">Simulador de Inversión DPF</span>
          <h3 className="calc-title">Conoce cuánto rinden tus ahorros</h3>
          <p className="calc-desc">
            Mueve los valores para simular el interés garantizado que recibirás al confiar en la solidez comunitaria de Sanjapamba.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {[500, 1000, 2500, 5000].map((preset) => (
              <button
                key={preset}
                onClick={() => setAmount(preset)}
                className={`calc-preset-btn ${amount === preset ? 'active' : ''}`}
              >
                ${preset} USD
              </button>
            ))}
          </div>
        </div>

        {/* Panel Interactivo */}
        <div className="calc-panel-card">
          <div className="calc-inputs-grid">
            <div>
              <label className="calc-field-label">Monto a Invertir ($ USD)</label>
              <div className="calc-input-box">
                <span className="calc-input-prefix">$</span>
                <input
                  type="number"
                  min="100"
                  step="50"
                  value={amount}
                  onChange={(e) => setAmount(Math.max(0, Number(e.target.value)))}
                  className="calc-input"
                />
              </div>
            </div>

            <div>
              <label className="calc-field-label">Plazo de Inversión</label>
              <select
                value={term}
                onChange={(e) => setTerm(Number(e.target.value))}
                className="calc-select"
              >
                <option value={90}>90 días (6.5% Anual)</option>
                <option value={180}>180 días (7.5% Anual)</option>
                <option value={360}>360 días (9.5% Anual)</option>
              </select>
            </div>
          </div>

          {/* Salida de Resultados */}
          <div className="calc-result-box">
            <div>
              <span className="text-xs text-on-surface-variant block">Ganancia Estimada al Vencimiento:</span>
              <div className="calc-gain-number">{formatUSD(earnings)}</div>
              <span className="text-xs text-on-surface-variant">
                Capital final devuelto: <strong className="text-on-surface">{formatUSD(total)}</strong>
              </span>
            </div>

            <a
              href={`https://wa.me/593992345678?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-lock-term"
            >
              Pactar este Plazo
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}
