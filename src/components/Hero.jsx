import React from 'react'

export default function Hero() {
  return (
    <section id="inicio" className="relative w-full overflow-hidden bg-surface py-space-xl lg:py-24 pt-28">
      {/* Marca de agua institucional del logo oficial en el fondo del Header */}
      <div className="absolute right-[-8%] top-[5%] w-[420px] h-[420px] sm:w-[580px] sm:h-[580px] lg:w-[720px] lg:h-[720px] opacity-[0.08] pointer-events-none select-none -z-0">
        <img
          src="/logo-fuente-de-vida.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      {/* Ambient organic light gradients */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-secondary-container/20 blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full bg-primary-fixed/25 blur-3xl pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-gutter lg:px-gutter-desktop relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg lg:gap-space-xl items-center">
          
          {/* Text & Action Column */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-space-md">
            <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-secondary-container/40 text-on-secondary-container">
              <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                spa
              </span>
              <span className="font-label-md text-label-md font-bold uppercase tracking-wider">
                Minga Financiera Rural • Sanjapamba, Guano
              </span>
            </div>

            <h1 className="font-display-lg text-display-lg-mobile sm:text-display-lg text-on-surface tracking-tight leading-tight">
              Creciendo juntos con el <span className="text-primary">fruto de nuestra tierra</span>
            </h1>

            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              Brindamos soluciones de ahorro y crédito ágiles, seguras y solidarias pensadas especialmente para agricultores, emprendedores y familias de Sanjapamba y sus alrededores.
            </p>

            {/* Slogan Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-high/60 border border-outline-variant/30 text-xs font-semibold text-tertiary">
              <span className="material-symbols-outlined text-[16px] text-secondary">verified</span>
              <span>Lema Oficial: "Juntos Trabajamos Para el Futuro"</span>
            </div>

            <div className="flex flex-wrap items-center gap-space-sm pt-space-xs w-full sm:w-auto">
              <a
                href="#afiliate"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-lg py-3.5 h-12 rounded-full bg-primary text-on-primary font-label-lg text-label-lg shadow-md hover:bg-primary-container transition-all active:scale-95 group"
              >
                <span>Ver Requisitos</span>
                <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </a>

              <a
                href="#simulador"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-lg py-3.5 h-12 rounded-full bg-surface-container-high text-on-surface font-label-lg text-label-lg hover:bg-surface-container-highest transition-all active:scale-95"
              >
                <span className="material-symbols-outlined text-[20px] text-secondary">tune</span>
                <span>Simular Inversión</span>
              </a>
            </div>

            {/* Trust highlights badge row */}
            <div className="pt-space-sm flex flex-wrap items-center gap-space-md text-on-surface-variant">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-secondary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  verified_user
                </span>
                <span className="font-label-sm text-label-sm font-semibold">Fondo Solidario Seguro</span>
              </div>
              <span className="text-outline-variant text-[12px]">•</span>
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-primary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  handshake
                </span>
                <span className="font-label-sm text-label-sm font-semibold">Gobernanza Comunal</span>
              </div>
            </div>
          </div>

          {/* Visual / Hero Photography Column */}
          <div className="lg:col-span-6 relative mt-space-md lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-surface-container-low border border-outline-variant/20">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqcb0PP3PAw3D9LsTv7cKyaZmuaodiccmY3dY885LZYs4IdhIyrTnSTrlxStor0r3wDL7MLKFtfmxyG6lRQRQ8m3mAeJbBvTY5oJl73OPdHraHP8VH0vCQqkNpDT8E84CTOkAob_W7Y9u9UVXiNTzcZtrPjhhdUOTWOQBxPNUL9T4NBC4VsNsweg0MJG9uO5qTcOsSvUu9l8otoJvsoRbhie6uzCBRXs3GCcv70spco8I_4KqX30HZww"
                alt="Familia agricultora de Sanjapamba frente al majestuoso volcán Chimborazo"
                className="w-full h-[420px] sm:h-[480px] lg:h-[510px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-on-surface/60 via-transparent to-transparent"></div>

              {/* Insignia del Logo Oficial en la Esquina Superior */}
              <div className="absolute top-4 right-4 bg-surface-container-lowest/95 backdrop-blur-md px-3 py-2 rounded-2xl shadow-lg border border-outline-variant/30 flex items-center gap-2.5">
                <img
                  src="/logo-fuente-de-vida.png"
                  alt="Sello Oficial Caja Comunal Fuente De Vida"
                  className="w-11 h-11 object-contain drop-shadow-sm"
                />
                <div className="text-left pr-1">
                  <span className="block text-[10px] uppercase font-bold text-tertiary tracking-wider">
                    Sello Oficial
                  </span>
                  <span className="block text-xs font-bold text-primary leading-tight">
                    Fuente De Vida
                  </span>
                </div>
              </div>

              {/* Floating Passbook Stat Widget */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-xs bg-surface-container-lowest/95 backdrop-blur-md p-space-md rounded-xl shadow-lg border border-outline-variant/20">
                <div className="flex items-center gap-space-sm">
                  <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-on-secondary-container text-[22px]">
                      agriculture
                    </span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-label-sm text-label-sm text-tertiary uppercase tracking-wider font-bold">
                      Comunidad Activa
                    </span>
                    <span className="font-headline-sm text-headline-sm text-on-surface truncate">
                      Cosecha y Ahorro Seguro
                    </span>
                  </div>
                </div>
                <p className="mt-space-xs font-body-md text-body-md text-on-surface-variant">
                  Respaldando el trabajo de nuestra gente andina con microcréditos justos y a tiempo.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Credibility Stats Strip */}
        <div className="mt-space-xl grid grid-cols-1 sm:grid-cols-3 gap-space-md p-space-md lg:p-space-lg rounded-2xl bg-surface-container-lowest shadow-md border border-outline-variant/10">
          <div className="flex items-center gap-space-md p-space-sm">
            <div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center shrink-0 text-primary">
              <span className="material-symbols-outlined text-[28px]">calendar_month</span>
            </div>
            <div>
              <div className="font-headline-lg text-headline-lg text-on-surface tracking-tight">+15 Años</div>
              <div className="font-body-md text-body-md text-on-surface-variant">Impulsando el campo y la familia</div>
            </div>
          </div>

          <div className="flex items-center gap-space-md p-space-sm border-t sm:border-t-0 sm:border-l border-outline-variant/20">
            <div className="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center shrink-0 text-secondary">
              <span className="material-symbols-outlined text-[28px]">groups</span>
            </div>
            <div>
              <div className="font-headline-lg text-headline-lg text-on-surface tracking-tight">+2,400</div>
              <div className="font-body-md text-body-md text-on-surface-variant">Socios activos y productivos</div>
            </div>
          </div>

          <div className="flex items-center gap-space-md p-space-sm border-t sm:border-t-0 sm:border-l border-outline-variant/20">
            <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center shrink-0 text-tertiary">
              <span className="material-symbols-outlined text-[28px]">task_alt</span>
            </div>
            <div>
              <div className="font-headline-lg text-headline-lg text-on-surface tracking-tight">98%</div>
              <div className="font-body-md text-body-md text-on-surface-variant">Aprobación crediticia agrícola</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
