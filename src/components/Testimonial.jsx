import React from 'react'

export default function Testimonial() {
  return (
    <section className="w-full bg-surface py-space-xl lg:py-24">
      <div className="max-w-[1200px] mx-auto px-gutter lg:px-gutter-desktop">
        <div className="bg-surface-container-lowest rounded-3xl p-space-lg lg:p-space-xl shadow-md relative overflow-hidden border border-outline-variant/10">
          
          {/* Subtle leaf decor SVG */}
          <svg
            className="absolute -bottom-10 -right-10 w-64 h-64 text-secondary-container/20 pointer-events-none"
            fill="currentColor"
            viewBox="0 0 200 200"
          >
            <path
              d="M45,-60C58.3,-52.7,69.1,-40.4,73.8,-26.3C78.4,-12.2,77,3.6,71.2,17.4C65.5,31.2,55.3,42.9,43.3,51.8C31.2,60.8,17.3,67,1.8,64.5C-13.6,62,-26.3,50.8,-38.3,40.1C-50.4,29.4,-61.7,19.3,-66.4,6.2C-71.1,-6.9,-69.1,-23.1,-60.8,-35.1C-52.4,-47,-37.7,-54.8,-23.4,-61.5C-9.2,-68.2,4.6,-73.8,18.7,-71.4C32.8,-69,45,-60,45,-60Z"
              transform="translate(100 100)"
            ></path>
          </svg>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center relative z-10">
            {/* Foto del socio */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative">
                <img
                  className="w-48 h-48 sm:w-56 sm:h-56 rounded-full object-cover shadow-lg border-4 border-surface"
                  alt="Segundo Chimbolema Masabanda, socio fundador y agricultor andino"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsxrnTVlQZ9kHt-xtY8o_G6Q0TLMXA_PqbSRnHuwL4ldhkTHy5-D5OO3FbhWUaDS__REWHiadIc0TugKvhvB8wtVIN47uKMPwIYA6mQ_THEhY5bLh8JI5cUS1pmtwbCGOFQ8QVIeazaPukpCRmQMHvGHLbuRHolCk0qFUVSdQz9tnhJOTD7KlEF4e3RB2NC53s4fwrBI4fz6QoUkvELwbs8uOUtsi9lQELZiKVckyZKGHwLriEK6KbJQ"
                />
                <div className="absolute bottom-2 right-2 w-12 h-12 rounded-full bg-secondary text-on-secondary flex items-center justify-center shadow">
                  <span className="material-symbols-outlined text-[24px]">format_quote</span>
                </div>
              </div>
            </div>

            {/* Testimonio y Calificación */}
            <div className="lg:col-span-8 flex flex-col gap-space-sm text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-space-xs text-tertiary">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className="material-symbols-outlined text-[20px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
                <span className="font-label-sm text-label-sm text-on-surface-variant ml-space-xs font-bold">
                  Socio Productor • 9 Años
                </span>
              </div>

              <blockquote className="font-headline-md text-headline-sm sm:text-headline-md text-on-surface italic leading-snug">
                “Cuando los bancos grandes nos cerraron las puertas por no tener títulos comerciales, Fuente de Vida creyó en nuestra cosecha de papas. Gracias al crédito comunitario pudimos comprar el tractor para toda la familia y hoy nuestros hijos van a la universidad.”
              </blockquote>

              <div className="pt-space-xs">
                <div className="font-headline-sm text-headline-sm text-on-surface font-bold">
                  Segundo Chimbolema Morocho
                </div>
                <div className="font-body-md text-body-md text-on-surface-variant">
                  Socio fundador & Productor Agrícola del Sector Sanjapamba Alto
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
