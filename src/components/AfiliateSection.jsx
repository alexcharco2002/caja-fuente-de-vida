import React from 'react'
import '../styles/afiliate.css'

export default function AfiliateSection() {
  const steps = [
    {
      num: 1,
      icon: 'badge',
      badgeClass: 'bg-primary text-on-primary',
      iconClass: 'text-primary',
      bgGlow: 'bg-primary-fixed/20',
      title: 'Documentos Básicos',
      description:
        'Presenta únicamente tu cédula de identidad original y una copia de planilla de servicio básico (agua potable o luz eléctrica).',
      tag: 'Sin trámites complicados',
    },
    {
      num: 2,
      icon: 'savings',
      badgeClass: 'bg-secondary text-on-secondary',
      iconClass: 'text-secondary',
      bgGlow: 'bg-secondary-container/30',
      title: 'Depósito Inicial Accesible',
      description:
        'Apertura tu cuenta con un monto mínimo solidario desde solo $10.00 USD, que queda íntegro a tu nombre en tu libreta.',
      tag: '100% de tu dinero respaldado',
    },
    {
      num: 3,
      icon: 'menu_book',
      badgeClass: 'bg-tertiary text-on-tertiary',
      iconClass: 'text-tertiary',
      bgGlow: 'bg-surface-container-high',
      title: 'Libreta y Activación',
      description:
        'Recibe al instante tu libreta física tradicional de socio y tu código de consulta para chequear tus movimientos con total tranquilidad.',
      tag: 'Entrega en ventanilla en 10 min',
    },
  ]

  return (
    <section id="afiliate" className="afiliate-section">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-6">
        
        {/* Cabecera */}
        <div className="afiliate-header">
          <div className="afiliate-badge">
            <span className="material-symbols-outlined text-[16px]">how_to_reg</span>
            <span>Paso a paso</span>
          </div>
          <h2 className="afiliate-title">
            Sé parte de nuestra gran familia cooperativa: <span className="text-secondary">¡Afíliate hoy!</span>
          </h2>
          <p className="afiliate-desc">
            Abrir tu cuenta es rápido, seguro y con mínimos requisitos. Tus ahorros fortalecen a toda la comunidad y te abren puertas a crédito inmediato.
          </p>
        </div>

        {/* Rejilla de Pasos */}
        <div className="steps-grid">
          {steps.map((step) => (
            <div key={step.num} className="step-card">
              <div className={`step-corner-glow ${step.bgGlow}`} />
              
              <div>
                <div className="step-header">
                  <span className={`step-number-circle ${step.badgeClass}`}>
                    {step.num}
                  </span>
                  <span className={`material-symbols-outlined ${step.iconClass} text-[32px]`}>
                    {step.icon}
                  </span>
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.description}</p>
              </div>

              <div className="step-tag-box">
                <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                <span>{step.tag}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Tarjeta de Banner de Acción */}
        <div className="action-banner-card">
          <div className="banner-text-box">
            <span className="banner-overtitle">Atención personalizada</span>
            <h3 className="banner-title">
              ¿Deseas afiliarte hoy mismo o necesitas asesoría?
            </h3>
            <p className="banner-desc">
              Nuestros oficiales de crédito y ahorro están listos para recibirte en la agencia o brindarte pre-afiliación remota.
            </p>
          </div>

          <div className="banner-actions">
            <a
              href="https://wa.me/593992345678?text=Hola,%20deseo%20iniciar%20mi%20afiliación%20en%20Caja%20Comunal%20Fuente%20de%20Vida"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <span className="material-symbols-outlined text-[20px]">send_to_mobile</span>
              <span>Iniciar Afiliación en Línea</span>
            </a>
            <a href="#ubicacion" className="btn-ghost">
              <span className="material-symbols-outlined text-[20px]">store</span>
              <span>Visitar Agencia</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
