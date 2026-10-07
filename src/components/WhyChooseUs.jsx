import React from 'react'

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: 'shield_with_heart',
      iconContainer: 'bg-secondary-container text-secondary',
      title: 'Respaldo y Transparencia',
      description:
        'Rendición de cuentas periódica en asambleas comunales. Todos nuestros balances son públicos y auditados por el consejo de vigilancia elegido por los propios socios.',
    },
    {
      icon: 'diversity_3',
      iconContainer: 'bg-primary-fixed text-primary',
      title: 'Trato Humano y Cercano',
      description:
        'Hablamos tu mismo idioma y conocemos la realidad del agro. Aquí no eres un número de expediente, eres un vecino, un hermano comunero y un socio respetado.',
    },
    {
      icon: 'nature_people',
      iconContainer: 'bg-tertiary-fixed text-tertiary',
      title: 'Inversión 100% Local',
      description:
        'A diferencia de la banca tradicional, el dinero ahorrado en Sanjapamba no va a grandes corporaciones: se reinvierte en la siembra de parcelas y negocios de nuestra propia gente.',
    },
  ]

  return (
    <section id="valores" className="w-full bg-surface-container-low py-space-xl lg:py-24">
      <div className="max-w-[1200px] mx-auto px-gutter lg:px-gutter-desktop">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-space-xl">
          <span className="font-label-md text-label-md uppercase font-bold text-primary tracking-wider">
            Principios y Valores
          </span>
          <h2 className="font-headline-lg text-headline-lg lg:text-display-lg text-on-surface tracking-tight mt-space-xs">
            ¿Por qué elegir la Caja Comunal Sanjapamba?
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-xs">
            Somos una institución nacida desde las bases comunitarias, donde cada socio tiene voz, voto y participación directa.
          </p>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {pillars.map((p, idx) => (
            <div
              key={idx}
              className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col gap-space-sm border border-outline-variant/10"
            >
              <div className={`w-14 h-14 rounded-2xl ${p.iconContainer} flex items-center justify-center shrink-0`}>
                <span className="material-symbols-outlined text-[32px]">{p.icon}</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface">
                {p.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
