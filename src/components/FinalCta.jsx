import React from 'react'
import '../styles/final-cta.css'

export default function FinalCta() {
  return (
    <section className="final-cta-section">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-6">
        <div className="final-cta-card">
          
          <div className="max-w-2xl">
            <span className="final-cta-badge">Tu futuro asegurado</span>
            <h2 className="final-cta-title">
              Únete a más de 2,400 familias que cultivan su tranquilidad financiera
            </h2>
            <p className="final-cta-desc">
              Comienza tu libreta de ahorros con $10 o solicita la visita de un asesor comunitario en tu parcela.
            </p>
          </div>

          <div className="final-cta-buttons">
            <a
              href="https://wa.me/593992345678?text=Hola,%20quisiera%20recibir%20información%20para%20abrir%20mi%20cuenta"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost bg-surface-container-lowest text-on-surface hover:bg-surface shadow-md"
            >
              <span className="material-symbols-outlined text-secondary text-[20px]">chat</span>
              <span>Hablar por WhatsApp</span>
            </a>
            
            <a href="#afiliate" className="btn-primary shadow">
              <span>Afiliarme Ahora</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
