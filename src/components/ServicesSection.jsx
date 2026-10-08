import React from 'react'
import SavingsCalculator from './SavingsCalculator.jsx'
import '../styles/services.css'

export default function ServicesSection({ onOpenModal }) {
  return (
    <section id="servicios" className="services-section">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-6">
        
        {/* Cabecera de la sección */}
        <div className="services-header">
          <div className="max-w-2xl">
            <span className="services-badge">Portafolio Solidario</span>
            <h2 className="services-title">
              Servicios hechos a la medida de tu esfuerzo
            </h2>
            <p className="services-desc">
              Respaldamos las faenas de siembra, la educación de los hijos y el crecimiento de los pequeños negocios familiares.
            </p>
          </div>
          <div className="services-trust-tag">
            <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
            <span>Tasas comunitarias justas sin cobros ocultos</span>
          </div>
        </div>

        {/* Rejilla con las 3 tarjetas de producto */}
        <div className="services-grid">
          
          {/* Tarjeta 1: Ahorro Comunal y Vista */}
          <div className="product-card">
            <div>
              <div className="product-icon-box bg-primary-fixed/40 text-primary">
                <span className="material-symbols-outlined text-[32px]">account_balance_wallet</span>
              </div>
              <div className="product-tag text-on-surface">
                Disponibilidad Inmediata
              </div>
              <h3 className="product-name">Ahorro Comunal y Vista</h3>
              <p className="product-description">
                Tu dinero seguro, disponible cuando lo necesites, con rendimientos justos y total confianza comunal.
              </p>
              <div className="product-features-list">
                <div className="product-feature-item">
                  <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                  <span>Cero costos de mantenimiento de cuenta</span>
                </div>
                <div className="product-feature-item">
                  <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                  <span>Retiros inmediatos en ventanilla</span>
                </div>
                <div className="product-feature-item">
                  <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                  <span>Tasa preferencial comunitaria anual</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => onOpenModal('ahorro')}
              className="product-btn bg-surface-container-high text-on-surface hover:bg-primary hover:text-on-primary"
            >
              <span>Ver Detalles</span>
              <span className="material-symbols-outlined text-[18px]">visibility</span>
            </button>
          </div>

          {/* Tarjeta 2: Depósitos a Plazo Fijo */}
          <div className="product-card highlighted">
            <div className="product-ribbon">Mayor Rendimiento</div>
            <div>
              <div className="product-icon-box bg-tertiary-fixed text-tertiary">
                <span className="material-symbols-outlined text-[32px]">trending_up</span>
              </div>
              <div className="product-tag text-tertiary font-semibold">
                Inversión Segura
              </div>
              <h3 className="product-name">Depósitos a Plazo Fijo</h3>
              <p className="product-description">
                Haz rendir tus cosechas y excedentes con las mejores tasas de interés transparentes y confiables de la región.
              </p>
              <div className="product-features-list">
                <div className="product-feature-item">
                  <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                  <span>Plazos flexibles de 90 a 360 días</span>
                </div>
                <div className="product-feature-item">
                  <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                  <span>Tasas de hasta el <strong className="text-secondary font-bold">9.5% anual</strong></span>
                </div>
                <div className="product-feature-item">
                  <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                  <span>Pago mensual de intereses o al vencimiento</span>
                </div>
              </div>
            </div>
            <a href="#simulador" className="product-btn bg-primary text-on-primary hover:bg-primary-container shadow">
              <span>Calcular Rendimiento</span>
              <span className="material-symbols-outlined text-[18px]">calculate</span>
            </a>
          </div>

          {/* Tarjeta 3: Microcréditos Agrícolas */}
          <div className="product-card">
            <div>
              <div className="product-icon-box bg-secondary-container text-secondary">
                <span className="material-symbols-outlined text-[32px]">psychiatry</span>
              </div>
              <div className="product-tag text-secondary font-semibold">
                Apoyo a la Producción
              </div>
              <h3 className="product-name">Microcréditos Agrícolas</h3>
              <p className="product-description">
                Financiamiento oportuno para compra de semillas, abonos, ganado, herramientas mecánicas o insumos.
              </p>
              <div className="product-features-list">
                <div className="product-feature-item">
                  <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                  <span>Sin papeleo asfixiante ni garantes inaccesibles</span>
                </div>
                <div className="product-feature-item">
                  <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                  <span>Periodos de gracia acordes al ciclo de cosecha</span>
                </div>
                <div className="product-feature-item">
                  <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                  <span>Desembolso rápido en un plazo de 48 horas</span>
                </div>
              </div>
            </div>
            <a
              href="https://wa.me/593992345678?text=Hola,%20quisiera%20solicitar%20información%20para%20un%20Microcrédito%20Agrícola"
              target="_blank"
              rel="noopener noreferrer"
              className="product-btn bg-secondary text-on-secondary hover:bg-secondary-container hover:text-on-secondary-container shadow"
            >
              <span>Solicitar Crédito</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
          </div>

        </div>

        {/* Simulador integrado */}
        <SavingsCalculator />

      </div>
    </section>
  )
}
