import React, { useEffect } from 'react'
import '../styles/modal.css'

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
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="modal-close-btn" aria-label="Cerrar modal">
          <span className="material-symbols-outlined text-[24px]">close</span>
        </button>

        <div className="modal-icon-badge">
          <span className="material-symbols-outlined text-[28px]">savings</span>
        </div>

        <h3 className="modal-title">Detalles del Ahorro Comunal</h3>
        
        <p className="modal-description">
          Nuestra cuenta de ahorro a la vista está pensada para que tu esfuerzo no pierda valor y esté listo para imprevistos o compras en días de feria.
        </p>

        <ul className="modal-list">
          <li className="modal-list-item">
            <span className="material-symbols-outlined text-secondary text-[18px]">done</span>
            <span>Apertura rápida con $10 USD.</span>
          </li>
          <li className="modal-list-item">
            <span className="material-symbols-outlined text-secondary text-[18px]">done</span>
            <span>Intereses calculados sobre saldo diario.</span>
          </li>
          <li className="modal-list-item">
            <span className="material-symbols-outlined text-secondary text-[18px]">done</span>
            <span>Sin penalizaciones por retiro en ventanilla.</span>
          </li>
          <li className="modal-list-item">
            <span className="material-symbols-outlined text-secondary text-[18px]">done</span>
            <span>Voz y voto en la asamblea general de socios.</span>
          </li>
        </ul>

        <div className="modal-actions">
          <button onClick={onClose} className="btn-ghost">
            Cerrar
          </button>
          <a
            href="https://wa.me/593992345678?text=Hola,%20deseo%20abrir%20mi%20Cuenta%20de%20Ahorro%20Comunal"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Abrir Cuenta por WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
