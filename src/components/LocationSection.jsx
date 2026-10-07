import React from 'react'

export default function LocationSection() {
  return (
    <section id="ubicacion" className="w-full bg-surface-container-low py-space-xl lg:py-20">
      <div className="max-w-[1200px] mx-auto px-gutter lg:px-gutter-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
          
          {/* Info Column */}
          <div className="lg:col-span-5 flex flex-col gap-space-sm">
            <span className="font-label-md text-label-md uppercase font-bold text-secondary tracking-wider">
              Cercanía y Calidez
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
              Nuestra Casa Comunal en el corazón de Sanjapamba
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Ubicados estratégicamente a pocos pasos de la plaza central, listos para recibirte en tus días de feria, siembra o minga comunal.
            </p>

            <div className="mt-space-xs space-y-space-xs">
              <div className="p-space-sm rounded-xl bg-surface-container-lowest flex items-start gap-space-sm shadow-sm border border-outline-variant/10">
                <span className="material-symbols-outlined text-primary text-[24px] shrink-0 mt-0.5">
                  place
                </span>
                <div>
                  <strong className="block font-headline-sm text-headline-sm text-on-surface">
                    Dirección Central
                  </strong>
                  <span className="font-body-md text-body-md text-on-surface-variant">
                    Plaza Principal de Sanjapamba, a 150m de la Iglesia Comunal. Parroquia Rural, Ecuador.
                  </span>
                </div>
              </div>

              <div className="p-space-sm rounded-xl bg-surface-container-lowest flex items-start gap-space-sm shadow-sm border border-outline-variant/10">
                <span className="material-symbols-outlined text-secondary text-[24px] shrink-0 mt-0.5">
                  schedule
                </span>
                <div>
                  <strong className="block font-headline-sm text-headline-sm text-on-surface">
                    Atención en Agencia
                  </strong>
                  <span className="font-body-md text-body-md text-on-surface-variant">
                    Lunes a Viernes: 08:00 - 12:30 | 14:00 - 17:00<br />
                    Sábados de Feria y Mercado: 08:30 - 13:00
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Map Image Column */}
          <div className="lg:col-span-7">
            <div
              className="w-full h-80 sm:h-96 rounded-2xl shadow-md bg-cover bg-center relative overflow-hidden border border-outline-variant/10"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAAgwYoJIwtMnfn98nVXB_TDOHM7ZSW2evqWyMKZ8VA7f4fpOI28Cc-1STO2Gf0f2eY0D8AI7NFmnDgFHuIDOYm16ZpsDJuLbhoD_7LjGB3_f43VRuRyji5g21UTjHa4QSl7H3b7wU5sozziI5KPxgZlSx6_dYmwhrGyTCwRJdqEzEhll9BndgLctqdkSYHYNji609DkabMfUPiz2DsnqBNSS5GyrHPhsCnAfSb45-Hg7E042062zC6QQ')`,
              }}
            >
              <div className="absolute inset-0 bg-on-surface/20"></div>
              
              <div className="absolute bottom-4 left-4 p-space-sm bg-surface-container-lowest/90 backdrop-blur-md rounded-xl shadow border border-outline-variant/20">
                <div className="flex items-center gap-space-xs text-secondary font-label-md text-label-md font-bold">
                  <span className="material-symbols-outlined text-[18px]">pin_drop</span>
                  <span>Agencia Principal Sanjapamba</span>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=Sanjapamba,Ecuador"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 px-3 py-1.5 bg-surface-container-lowest/90 backdrop-blur-md rounded-full shadow text-xs font-bold text-primary hover:bg-surface transition-all flex items-center gap-1"
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
