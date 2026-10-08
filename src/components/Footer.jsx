import React from 'react'

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low text-on-surface border-t border-outline-variant/30">
      <div className="max-w-[1200px] mx-auto px-gutter lg:px-gutter-desktop py-space-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg mb-space-xl">
          
          {/* Col 1 */}
          <div className="flex flex-col gap-space-sm">
            <div className="flex items-center gap-space-sm mb-space-xs">
              <img
                alt="Logo Caja Comunal Fuente de Vida Sanjapamba"
                className="h-8 w-auto object-contain"
                src="/logo-fuente-de-vida.png"
              />
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm text-primary font-bold leading-tight">
                  Fuente De Vida
                </span>
                <span className="text-[11px] text-tertiary font-semibold uppercase tracking-wider">
                  Juntos Trabajamos Para el Futuro
                </span>
              </div>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Solidaridad financiera y minga comunitaria al servicio del progreso de las familias de Sanjapamba, Parroquia San Andrés, Cantón Guano y comunidades vecinas.
            </p>
            <div className="mt-space-sm inline-flex items-center gap-space-xs px-space-sm py-space-xs bg-secondary-container/40 text-on-secondary-container rounded-full max-w-fit font-label-sm text-label-sm">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              <span>Guano • San Andrés • Sanjapamba</span>
            </div>
          </div>

          {/* Col 2 */}
          <div className="flex flex-col gap-space-xs">
            <h4 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs font-bold">
              Ubicación & Parroquia
            </h4>
            <p className="font-body-md text-body-md text-on-surface-variant flex items-start gap-space-xs">
              <span className="material-symbols-outlined text-tertiary text-[18px] shrink-0 mt-0.5">
                location_on
              </span>
              <span>Comunidad de Sanjapamba, Plaza Central, Parroquia Rural, Ecuador</span>
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant flex items-start gap-space-xs">
              <span className="material-symbols-outlined text-tertiary text-[18px] shrink-0 mt-0.5">
                share_location
              </span>
              <span>A 150m de la Iglesia Comunal</span>
            </p>
          </div>

          {/* Col 3 */}
          <div className="flex flex-col gap-space-xs">
            <h4 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs font-bold">
              Horarios de Atención
            </h4>
            <div className="flex items-start gap-space-xs font-body-md text-body-md text-on-surface-variant">
              <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">
                schedule
              </span>
              <div>
                <p className="font-body-bold text-body-bold text-on-surface font-semibold">
                  Lunes a Viernes
                </p>
                <p>08:00 - 12:30 | 14:00 - 17:00</p>
                <p className="font-body-bold text-body-bold text-on-surface mt-space-xs font-semibold">
                  Sábados de Feria y Minga
                </p>
                <p>08:30 - 13:00</p>
              </div>
            </div>
          </div>

          {/* Col 4 */}
          <div className="flex flex-col gap-space-xs">
            <h4 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs font-bold">
              Contacto Directo
            </h4>
            <p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-primary text-[18px] shrink-0">
                call
              </span>
              <a href="tel:+593992345678" className="hover:underline">+593 99 234 5678</a>
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-primary text-[18px] shrink-0">
                mail
              </span>
              <a href="mailto:atencion@fuentedevida-sanjapamba.org" className="hover:underline text-xs">
                atencion@fuentedevida-sanjapamba.org
              </a>
            </p>
            <div className="mt-space-sm p-space-sm bg-surface-container rounded-lg">
              <p className="font-label-sm text-label-sm text-tertiary font-bold uppercase tracking-wider">
                Compromiso Social
              </p>
              <p className="font-label-md text-label-md text-on-surface-variant mt-space-xs">
                Ahorro seguro, crédito productivo y respaldo mutuo para el campo.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-space-lg flex flex-col md:flex-row items-center justify-between gap-space-sm bg-surface-container-high/40 p-space-md rounded-lg text-on-surface-variant">
          <p className="font-body-md text-body-md text-center md:text-left">
            © 2025 Caja Comunal Fuente de Vida Sanjapamba. Todos los derechos reservados.
          </p>
          <p className="font-label-md text-label-md flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-secondary text-[18px]">shield</span>
            <span>Supervisión Comunal y Principios de Economía Popular y Solidaria</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
