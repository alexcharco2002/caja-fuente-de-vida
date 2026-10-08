import React from 'react'
import '../styles/footer.css'

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-6">
        <div className="footer-top-grid">
          
          {/* Columna 1: Identidad */}
          <div className="footer-col">
            <div className="footer-brand-row">
              <img
                alt="Logo Caja Comunal Fuente de Vida Sanjapamba"
                className="footer-logo"
                src="/logo-fuente-de-vida.png"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-primary leading-tight">
                  Fuente De Vida
                </span>
                <span className="text-[10px] text-tertiary font-bold uppercase tracking-wider">
                  Juntos Trabajamos Para el Futuro
                </span>
              </div>
            </div>
            <p className="footer-desc">
              Solidaridad financiera y minga comunitaria al servicio del progreso de las familias de Sanjapamba, Parroquia San Andrés, Cantón Guano y comunidades vecinas.
            </p>
            <div className="footer-seal-tag">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              <span>Guano • San Andrés • Sanjapamba</span>
            </div>
          </div>

          {/* Columna 2: Ubicación */}
          <div className="footer-col">
            <h4 className="footer-heading">Ubicación & Parroquia</h4>
            <div className="footer-info-row">
              <span className="material-symbols-outlined text-tertiary text-[18px] shrink-0 mt-0.5">location_on</span>
              <span>Comunidad de Sanjapamba, Plaza Central, Parroquia Rural, Ecuador</span>
            </div>
            <div className="footer-info-row">
              <span className="material-symbols-outlined text-tertiary text-[18px] shrink-0 mt-0.5">share_location</span>
              <span>A 150m de la Iglesia Comunal</span>
            </div>
          </div>

          {/* Columna 3: Horarios */}
          <div className="footer-col">
            <h4 className="footer-heading">Horarios de Atención</h4>
            <div className="footer-info-row">
              <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">schedule</span>
              <div>
                <p className="font-bold text-on-surface">Lunes a Viernes</p>
                <p>08:00 - 12:30 | 14:00 - 17:00</p>
                <p className="font-bold text-on-surface mt-2">Sábados de Feria y Minga</p>
                <p>08:30 - 13:00</p>
              </div>
            </div>
          </div>

          {/* Columna 4: Contacto */}
          <div className="footer-col">
            <h4 className="footer-heading">Contacto Directo</h4>
            <div className="footer-info-row">
              <span className="material-symbols-outlined text-primary text-[18px] shrink-0">call</span>
              <a href="tel:+593992345678" className="footer-link font-semibold">+593 99 234 5678</a>
            </div>
            <div className="footer-info-row">
              <span className="material-symbols-outlined text-primary text-[18px] shrink-0">mail</span>
              <a href="mailto:atencion@fuentedevida-sanjapamba.org" className="footer-link text-xs">
                atencion@fuentedevida-sanjapamba.org
              </a>
            </div>
            <div className="footer-social-box">
              <p className="text-[11px] text-tertiary font-bold uppercase tracking-wider">Compromiso Social</p>
              <p className="text-xs text-on-surface-variant mt-1">Ahorro seguro, crédito productivo y respaldo mutuo para el campo.</p>
            </div>
          </div>

        </div>

        {/* Barra Inferior */}
        <div className="footer-bottom-bar">
          <p>© 2025 Caja Comunal Fuente de Vida Sanjapamba. Todos los derechos reservados.</p>
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-secondary text-[18px]">shield</span>
            <span>Supervisión Comunal y Principios de Economía Popular y Solidaria</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
