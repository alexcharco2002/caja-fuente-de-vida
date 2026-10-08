import React from 'react'
import '../styles/why-choose.css'

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
    <section id="nosotros" className="why-section">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-6">
        
        {/* Título de la sección */}
        <div className="why-header">
          <span className="why-badge">Principios y Valores</span>
          <h2 className="why-title">
            ¿Por qué elegir la Caja Comunal Sanjapamba?
          </h2>
          <p className="why-desc">
            Somos una institución nacida desde las bases comunitarias, donde cada socio tiene voz, voto y participación directa.
          </p>
        </div>

        {/* 3 Pilares */}
        <div className="why-grid">
          {pillars.map((p, idx) => (
            <div key={idx} className="pillar-card">
              <div className={`pillar-icon-box ${p.iconContainer}`}>
                <span className="material-symbols-outlined text-[32px]">{p.icon}</span>
              </div>
              <h3 className="pillar-title">{p.title}</h3>
              <p className="pillar-desc">{p.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
