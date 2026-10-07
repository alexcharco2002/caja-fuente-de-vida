import React, { useEffect } from 'react'

export default function ProductModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'auto'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-on-background/50 backdrop-blur-sm transition-opacity"
      onClick={onClose}
    >
      <div
        className="bg-surface-container-lowest rounded-2xl max-w-lg w-full p-space-lg shadow-2xl relative border border-outline-variant/20 animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-on-surface-variant hover:text-on-surface p-1 rounded-full hover:bg-surface-container-high transition-colors"
          aria-label="Cerrar modal"
        >
          <span className="material-symbols-outlined text-[24px]">close</span>
        </button>

        <div className="w-12 h-12 rounded-xl bg-primary-fixed text-primary flex items-center justify-center mb-space-sm">
          <span className="material-symbols-outlined text-[28px]">savings</span>
        </div>

        <h3 className="font-headline-md text-headline-md text-on-surface mb-space-xs font-bold">
          Detalles del Ahorro Comunal
        </h3>
        
        <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
          Nuestra cuenta de ahorro a la vista está pensada para que tu esfuerzo no pierda valor y esté listo para imprevistos o compras en días de feria.
        </p>

        <ul className="space-y-space-xs font-body-md text-body-md text-on-surface-variant mb-space-lg">
          <li className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-secondary text-[18px]">done</span>
            <span>Apertura rápida con $10 USD.</span>
          </li>
          <li className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-secondary text-[18px]">done</span>
            <span>Intereses calculados sobre saldo diario.</span>
          </li>
          <li className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-secondary text-[18px]">done</span>
            <span>Sin penalizaciones por retiro en ventanilla.</span>
          </li>
          <li className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-secondary text-[18px]">done</span>
            <span>Voz y voto en la asamblea general de socios.</span>
          </li>
        </ul>

        <div className="flex justify-end gap-space-xs pt-space-xs border-t border-outline-variant/20">
          <button
            onClick={onClose}
            className="px-space-md py-2.5 rounded-full bg-surface-container-high text-on-surface font-label-md text-label-md hover:bg-surface-container-highest transition-colors cursor-pointer"
          >
            Cerrar
          </button>
          <a
            href="https://wa.me/593992345678?text=Hola,%20deseo%20abrir%20mi%20Cuenta%20de%20Ahorro%20Comunal"
            target="_blank"
            rel="noopener noreferrer"
            className="px-space-md py-2.5 rounded-full bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors shadow"
          >
            Abrir Cuenta por WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
