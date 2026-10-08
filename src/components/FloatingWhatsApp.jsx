import React from 'react'
import '../styles/whatsapp.css'

export default function FloatingWhatsApp() {
  return (
    <div className="whatsapp-fab-wrapper group">
      <div className="whatsapp-fab-tooltip">
        ¿Necesitas ayuda? Escríbenos por WhatsApp
      </div>
      
      <a
        href="https://wa.me/593992345678?text=Hola,%20quisiera%20recibir%20información%20de%20la%20Caja%20Comunal%20Fuente%20de%20Vida"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="¿Necesitas ayuda? Escríbenos por WhatsApp"
        className="whatsapp-fab-btn pulse-action"
      >
        <span className="material-symbols-outlined text-[30px]">chat</span>
      </a>
    </div>
  )
}
