import React, { useState } from 'react'

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
    <div id="simulador" className="mt-space-xl p-space-lg lg:p-space-xl rounded-2xl bg-surface-container-low shadow-sm">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
        
        {/* Intro */}
        <div className="lg:col-span-5">
          <span className="font-label-sm text-label-sm text-tertiary uppercase font-bold tracking-wider">
            Simulador de Inversión DPF
          </span>
          <h3 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-space-xs">
            Conoce cuánto rinden tus ahorros
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
            Mueve los valores para simular el interés garantizado que recibirás al confiar en la solidez comunitaria de Sanjapamba.
          </p>
          <div className="mt-space-md flex flex-wrap gap-2">
            {[500, 1000, 2500, 5000].map((preset) => (
              <button
                key={preset}
                onClick={() => setAmount(preset)}
                className={`px-3 py-1 text-xs rounded-full border transition-all ${
                  amount === preset
                    ? 'bg-primary text-on-primary border-primary font-bold'
                    : 'bg-surface border-outline-variant/40 text-on-surface hover:bg-surface-container-high'
                }`}
              >
                ${preset} USD
              </button>
            ))}
          </div>
        </div>

        {/* Inputs & Result Panel */}
        <div className="lg:col-span-7 bg-surface-container-lowest p-space-md lg:p-space-lg rounded-xl shadow-sm border border-outline-variant/10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md mb-space-md">
            <div>
              <label className="block font-label-md text-label-md text-on-surface mb-space-xs font-semibold">
                Monto a Invertir ($ USD)
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 font-headline-sm text-on-surface-variant">
                  $
                </span>
                <input
                  type="number"
                  min="100"
                  step="50"
                  value={amount}
                  onChange={(e) => setAmount(Math.max(0, Number(e.target.value)))}
                  className="w-full h-12 pl-8 pr-4 bg-surface-container-low rounded-lg text-on-surface font-headline-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div>
              <label className="block font-label-md text-label-md text-on-surface mb-space-xs font-semibold">
                Plazo de Inversión
              </label>
              <select
                value={term}
                onChange={(e) => setTerm(Number(e.target.value))}
                className="w-full h-12 px-3 bg-surface-container-low rounded-lg text-on-surface font-body-md focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
              >
                <option value={90}>90 días (6.5% Anual)</option>
                <option value={180}>180 días (7.5% Anual)</option>
                <option value={360}>360 días (9.5% Anual)</option>
              </select>
            </div>
          </div>

          {/* Calculation Output Highlight Box */}
          <div className="p-space-md rounded-xl bg-surface-container flex flex-col sm:flex-row items-center justify-between gap-space-md">
            <div>
              <span className="font-label-sm text-label-sm text-on-surface-variant block">
                Ganancia Estimada al Vencimiento:
              </span>
              <div className="font-headline-lg text-headline-lg text-secondary font-bold">
                {formatUSD(earnings)}
              </div>
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                Capital final devuelto:{' '}
                <strong className="text-on-surface font-bold">{formatUSD(total)}</strong>
              </span>
            </div>

            <a
              href={`https://wa.me/593992345678?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-space-md py-space-sm rounded-full bg-secondary text-on-secondary font-label-lg text-label-lg hover:bg-secondary-container hover:text-on-secondary-container transition-all active:scale-95 shrink-0"
            >
              Pactar este Plazo
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
