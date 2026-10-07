import React from 'react'

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50 group flex items-center">
      {/* Tooltip */}
      <div className="opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 mr-3 px-space-md py-space-xs bg-on-background text-on-tertiary-container rounded-full shadow-[0px_10px_25px_-4px_rgba(2,132,199,0.12)] font-label-md text-label-md whitespace-nowrap">
        ¿Necesitas ayuda? Escríbenos por WhatsApp
      </div>
      
      {/* Button */}
      <a
        href="https://wa.me/593992345678?text=Hola,%20quisiera%20recibir%20información%20de%20la%20Caja%20Comunal%20Fuente%20de%20Vida"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="¿Necesitas ayuda? Escríbenos por WhatsApp"
        className="pulse-action flex items-center justify-center w-14 h-14 rounded-full bg-secondary text-on-secondary shadow-[0px_10px_25px_-4px_rgba(2,132,199,0.12)] hover:bg-secondary-container hover:text-on-secondary-container transition-transform active:scale-95"
      >
        <span className="material-symbols-outlined text-[30px]">chat</span>
      </a>
    </div>
  )
}
