import React from 'react'

export default function FinalCta() {
  return (
    <section className="w-full bg-surface py-space-xl">
      <div className="max-w-[1200px] mx-auto px-gutter lg:px-gutter-desktop">
        <div className="bg-gradient-to-br from-secondary to-on-secondary-container text-on-secondary rounded-3xl p-space-lg lg:p-space-xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-space-lg text-center md:text-left">
          
          <div className="max-w-2xl space-y-space-xs">
            <span className="px-space-sm py-space-xs rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm uppercase font-bold tracking-wider inline-block">
              Tu futuro asegurado
            </span>
            <h2 className="font-headline-lg text-headline-lg lg:text-display-lg text-on-secondary tracking-tight">
              Únete a más de 2,400 familias que cultivan su tranquilidad financiera
            </h2>
            <p className="font-body-md text-body-md text-secondary-fixed">
              Comienza tu libreta de ahorros con $10 o solicita la visita de un asesor comunitario en tu parcela.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-space-sm shrink-0 w-full sm:w-auto">
            <a
              href="https://wa.me/593992345678?text=Hola,%20quisiera%20recibir%20información%20para%20abrir%20mi%20cuenta"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-lg py-3.5 h-12 rounded-full bg-surface-container-lowest text-on-surface font-label-lg text-label-lg shadow-md hover:bg-surface transition-all active:scale-95"
            >
              <span className="material-symbols-outlined text-secondary text-[20px]">chat</span>
              <span>Hablar por WhatsApp</span>
            </a>
            
            <a
              href="#afiliate"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-lg py-3.5 h-12 rounded-full bg-primary text-on-primary font-label-lg text-label-lg shadow hover:bg-primary-container transition-all active:scale-95"
            >
              <span>Afiliarme Ahora</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
