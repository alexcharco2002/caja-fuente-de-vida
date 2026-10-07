import React from 'react'
import SavingsCalculator from './SavingsCalculator.jsx'

export default function ServicesSection({ onOpenModal }) {
  return (
    <section id="servicios" className="w-full bg-surface py-space-xl lg:py-24">
      <div className="max-w-[1200px] mx-auto px-gutter lg:px-gutter-desktop">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-md">
          <div className="max-w-2xl">
            <span className="font-label-md text-label-md uppercase font-bold text-primary tracking-wider">
              Portafolio Solidario
            </span>
            <h2 className="font-headline-lg text-headline-lg lg:text-display-lg text-on-surface tracking-tight mt-space-xs">
              Servicios hechos a la medida de tu esfuerzo
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-xs">
              Respaldamos las faenas de siembra, la educación de los hijos y el crecimiento de los pequeños negocios familiares.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md bg-secondary-container/20 px-3 py-1.5 rounded-full">
            <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
            <span className="font-medium text-secondary">Tasas comunitarias justas sin cobros ocultos</span>
          </div>
        </div>

        {/* 3 Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          
          {/* Card 1: Ahorro a la Vista */}
          <div className="rounded-2xl bg-surface-container-lowest p-space-lg shadow-sm flex flex-col justify-between hover:shadow-md transition-all group border border-outline-variant/10">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-primary-fixed/40 flex items-center justify-center text-primary mb-space-md">
                <span className="material-symbols-outlined text-[32px]">account_balance_wallet</span>
              </div>
              <div className="inline-flex items-center px-space-sm py-space-xs rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm mb-space-xs">
                Disponibilidad Inmediata
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-space-xs">
                Ahorro Comunal y Vista
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                Tu dinero seguro, disponible cuando lo necesites, con rendimientos justos y total confianza comunal.
              </p>
              <div className="space-y-space-xs mb-space-lg">
                <div className="flex items-center gap-space-xs text-on-surface-variant font-body-md text-body-md">
                  <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                  <span>Cero costos de mantenimiento de cuenta</span>
                </div>
                <div className="flex items-center gap-space-xs text-on-surface-variant font-body-md text-body-md">
                  <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                  <span>Retiros inmediatos en ventanilla</span>
                </div>
                <div className="flex items-center gap-space-xs text-on-surface-variant font-body-md text-body-md">
                  <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                  <span>Tasa preferencial comunitaria anual</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => onOpenModal('ahorro')}
              className="w-full inline-flex items-center justify-center gap-space-xs py-3 rounded-full bg-surface-container-high text-on-surface font-label-lg text-label-lg hover:bg-primary hover:text-on-primary transition-colors cursor-pointer"
            >
              <span>Ver Detalles</span>
              <span className="material-symbols-outlined text-[18px]">visibility</span>
            </button>
          </div>

          {/* Card 2: DPF Inversión (Featured) */}
          <div className="rounded-2xl bg-surface-container-lowest p-space-lg shadow-md flex flex-col justify-between hover:shadow-xl transition-all relative overflow-hidden border-2 border-tertiary/20">
            <div className="absolute top-0 right-0 px-space-md py-1 bg-tertiary text-on-tertiary font-label-sm text-label-sm uppercase font-bold rounded-bl-xl tracking-wider">
              Mayor Rendimiento
            </div>
            <div>
              <div className="w-14 h-14 rounded-2xl bg-tertiary-fixed flex items-center justify-center text-tertiary mb-space-md">
                <span className="material-symbols-outlined text-[32px]">trending_up</span>
              </div>
              <div className="inline-flex items-center px-space-sm py-space-xs rounded-full bg-surface-container-high text-tertiary font-label-sm text-label-sm mb-space-xs font-semibold">
                Inversión Segura
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-space-xs">
                Depósitos a Plazo Fijo
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                Haz rendir tus cosechas y excedentes con las mejores tasas de interés transparentes y confiables de la región.
              </p>
              <div className="space-y-space-xs mb-space-lg">
                <div className="flex items-center gap-space-xs text-on-surface-variant font-body-md text-body-md">
                  <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                  <span>Plazos flexibles de 90 a 360 días</span>
                </div>
                <div className="flex items-center gap-space-xs text-on-surface-variant font-body-md text-body-md">
                  <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                  <span>Tasas de hasta el <strong className="text-secondary font-bold">9.5% anual</strong></span>
                </div>
                <div className="flex items-center gap-space-xs text-on-surface-variant font-body-md text-body-md">
                  <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                  <span>Pago mensual de intereses o al vencimiento</span>
                </div>
              </div>
            </div>
            <a
              href="#simulador"
              className="w-full inline-flex items-center justify-center gap-space-xs py-3 rounded-full bg-primary text-on-primary font-label-lg text-label-lg hover:bg-primary-container transition-colors shadow"
            >
              <span>Calcular Rendimiento</span>
              <span className="material-symbols-outlined text-[18px]">calculate</span>
            </a>
          </div>

          {/* Card 3: Microcréditos Agrícolas */}
          <div className="rounded-2xl bg-surface-container-lowest p-space-lg shadow-sm flex flex-col justify-between hover:shadow-md transition-all group border border-outline-variant/10">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-secondary-container flex items-center justify-center text-secondary mb-space-md">
                <span className="material-symbols-outlined text-[32px]">psychiatry</span>
              </div>
              <div className="inline-flex items-center px-space-sm py-space-xs rounded-full bg-surface-container-high text-secondary font-label-sm text-label-sm mb-space-xs font-semibold">
                Apoyo a la Producción
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-space-xs">
                Microcréditos Agrícolas
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                Financiamiento oportuno para compra de semillas, abonos, ganado, herramientas mecánicas o insumos.
              </p>
              <div className="space-y-space-xs mb-space-lg">
                <div className="flex items-center gap-space-xs text-on-surface-variant font-body-md text-body-md">
                  <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                  <span>Sin papeleo asfixiante ni garantes inaccesibles</span>
                </div>
                <div className="flex items-center gap-space-xs text-on-surface-variant font-body-md text-body-md">
                  <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                  <span>Periodos de gracia acordes al ciclo de cosecha</span>
                </div>
                <div className="flex items-center gap-space-xs text-on-surface-variant font-body-md text-body-md">
                  <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                  <span>Desembolso rápido en un plazo de 48 horas</span>
                </div>
              </div>
            </div>
            <a
              href="https://wa.me/593992345678?text=Hola,%20quisiera%20solicitar%20información%20para%20un%20Microcrédito%20Agrícola"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-space-xs py-3 rounded-full bg-secondary text-on-secondary font-label-lg text-label-lg hover:bg-secondary-container hover:text-on-secondary-container transition-colors shadow"
            >
              <span>Solicitar Crédito</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
          </div>

        </div>

        {/* Embedded Interactive Calculator */}
        <SavingsCalculator />

      </div>
    </section>
  )
}
