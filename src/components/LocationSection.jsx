import React from 'react'
import '../styles/location.css'

export default function LocationSection() {
  return (
    <section id="ubicacion" className="location-section">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-6">
        <div className="location-grid">
          
          {/* Columna de Información */}
          <div className="location-info-col">
            <span className="location-badge">Cercanía y Calidez</span>
            <h2 className="location-title">
              Nuestra Casa Comunal en el corazón de Sanjapamba
            </h2>
            <p className="location-desc">
              Ubicados estratégicamente a pocos pasos de la plaza central, listos para recibirte en tus días de feria, siembra o minga comunal.
            </p>

            <div className="mt-2 flex flex-col gap-2">
              <div className="location-card-item">
                <span className="material-symbols-outlined text-primary text-[24px] shrink-0 mt-0.5">
                  place
                </span>
                <div>
                  <strong className="block text-sm font-bold text-on-surface">Dirección Central</strong>
                  <span className="text-xs text-on-surface-variant">
                    Plaza Principal de Sanjapamba, a 150m de la Iglesia Comunal. Parroquia Rural, Ecuador.
                  </span>
                </div>
              </div>

              <div className="location-card-item">
                <span className="material-symbols-outlined text-secondary text-[24px] shrink-0 mt-0.5">
                  schedule
                </span>
                <div>
                  <strong className="block text-sm font-bold text-on-surface">Atención en Agencia</strong>
                  <span className="text-xs text-on-surface-variant">
                    Lunes a Viernes: 08:00 - 12:30 | 14:00 - 17:00<br />
                    Sábados de Feria y Mercado: 08:30 - 13:00
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Columna del Mapa */}
          <div className="location-map-col">
            <div
              className="location-map-box"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAAgwYoJIwtMnfn98nVXB_TDOHM7ZSW2evqWyMKZ8VA7f4fpOI28Cc-1STO2Gf0f2eY0D8AI7NFmnDgFHuIDOYm16ZpsDJuLbhoD_7LjGB3_f43VRuRyji5g21UTjHa4QSl7H3b7wU5sozziI5KPxgZlSx6_dYmwhrGyTCwRJdqEzEhll9BndgLctqdkSYHYNji609DkabMfUPiz2DsnqBNSS5GyrHPhsCnAfSb45-Hg7E042062zC6QQ')`,
              }}
            >
              <div className="location-map-overlay" />
              
              <div className="location-agency-pill">
                <span className="material-symbols-outlined text-[18px]">pin_drop</span>
                <span>Agencia Principal Sanjapamba</span>
              </div>

              <a
                href="https://maps.google.com/?q=Sanjapamba,Ecuador"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gmaps"
              >
                <span>Ver en Google Maps</span>
                <span className="material-symbols-outlined text-[14px]">open_in_new</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
