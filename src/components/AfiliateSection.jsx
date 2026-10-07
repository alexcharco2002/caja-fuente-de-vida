import React from 'react'

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
      highlightAmount: '$10.00 USD',
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
    <section id="afiliate" className="w-full bg-surface-container-low py-space-xl lg:py-24 relative">
      <div className="max-w-[1200px] mx-auto px-gutter lg:px-gutter-desktop">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-space-xl">
          <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container-highest text-tertiary mb-space-xs font-label-md text-label-md uppercase font-bold">
            <span className="material-symbols-outlined text-[16px]">how_to_reg</span>
            Paso a paso
          </div>
          <h2 className="font-headline-lg text-headline-lg lg:text-display-lg text-on-surface tracking-tight">
            Sé parte de nuestra gran familia cooperativa: <span className="text-secondary">¡Afíliate hoy!</span>
          </h2>
          <p className="mt-space-xs font-body-lg text-body-lg text-on-surface-variant">
            Abrir tu cuenta es rápido, seguro y con mínimos requisitos. Tus ahorros fortalecen a toda la comunidad y te abren puertas a crédito inmediato.
          </p>
        </div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg mb-space-xl">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-24 h-24 ${step.bgGlow} rounded-bl-full pointer-events-none`} />
              
              <div>
                <div className="flex items-center justify-between mb-space-md">
                  <span className={`w-10 h-10 rounded-full ${step.badgeClass} font-headline-sm text-headline-sm flex items-center justify-center font-bold`}>
                    {step.num}
                  </span>
                  <span className={`material-symbols-outlined ${step.iconClass} text-[32px]`}>
                    {step.icon}
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-space-xs">
                  {step.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {step.description}
                </p>
              </div>

              <div className="mt-space-md pt-space-sm bg-surface-container-low px-space-sm py-space-xs rounded-lg text-on-surface-variant font-label-sm text-label-sm flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                <span>{step.tag}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Banner Card */}
        <div className="rounded-2xl bg-gradient-to-r from-primary to-primary-container text-on-primary p-space-lg lg:p-space-xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-space-lg">
          <div className="flex flex-col gap-space-xs max-w-2xl text-center md:text-left">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary-fixed">
              Atención personalizada
            </span>
            <h3 className="font-headline-lg text-headline-lg text-on-primary">
              ¿Deseas afiliarte hoy mismo o necesitas asesoría?
            </h3>
            <p className="font-body-md text-body-md text-primary-fixed">
              Nuestros oficiales de crédito y ahorro están listos para recibirte en la agencia o brindarte pre-afiliación remota.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-space-sm shrink-0 w-full md:w-auto">
            <a
              href="https://wa.me/593992345678?text=Hola,%20deseo%20iniciar%20mi%20afiliación%20en%20Caja%20Comunal%20Fuente%20de%20Vida"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-lg py-3.5 h-12 rounded-full bg-secondary text-on-secondary font-label-lg text-label-lg shadow hover:bg-secondary-container hover:text-on-secondary-container transition-all"
            >
              <span className="material-symbols-outlined text-[20px]">send_to_mobile</span>
              <span>Iniciar Afiliación en Línea</span>
            </a>
            <a
              href="#ubicacion"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-lg py-3.5 h-12 rounded-full bg-surface-container-lowest text-primary font-label-lg text-label-lg shadow hover:bg-surface transition-all"
            >
              <span className="material-symbols-outlined text-[20px]">store</span>
              <span>Visitar Agencia</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
