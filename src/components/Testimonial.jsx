import React from 'react'
import '../styles/testimonial.css'

export default function Testimonial() {
  return (
    <section className="testimonial-section">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-6">
        <div className="testimonial-card-main">
          
          {/* Decoración de fondo */}
          <svg className="testimonial-decor-leaf" fill="currentColor" viewBox="0 0 200 200">
            <path
              d="M45,-60C58.3,-52.7,69.1,-40.4,73.8,-26.3C78.4,-12.2,77,3.6,71.2,17.4C65.5,31.2,55.3,42.9,43.3,51.8C31.2,60.8,17.3,67,1.8,64.5C-13.6,62,-26.3,50.8,-38.3,40.1C-50.4,29.4,-61.7,19.3,-66.4,6.2C-71.1,-6.9,-69.1,-23.1,-60.8,-35.1C-52.4,-47,-37.7,-54.8,-23.4,-61.5C-9.2,-68.2,4.6,-73.8,18.7,-71.4C32.8,-69,45,-60,45,-60Z"
              transform="translate(100 100)"
            />
          </svg>

          <div className="testimonial-grid">
            {/* Foto del socio */}
            <div className="testimonial-photo-col">
              <div className="testimonial-avatar-wrapper">
                <img
                  className="testimonial-avatar-img"
                  alt="Segundo Chimbolema Masabanda, socio agricultor andino"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsxrnTVlQZ9kHt-xtY8o_G6Q0TLMXA_PqbSRnHuwL4ldhkTHy5-D5OO3FbhWUaDS__REWHiadIc0TugKvhvB8wtVIN47uKMPwIYA6mQ_THEhY5bLh8JI5cUS1pmtwbCGOFQ8QVIeazaPukpCRmQMHvGHLbuRHolCk0qFUVSdQz9tnhJOTD7KlEF4e3RB2NC53s4fwrBI4fz6QoUkvELwbs8uOUtsi9lQELZiKVckyZKGHwLriEK6KbJQ"
                />
                <div className="testimonial-quote-badge">
                  <span className="material-symbols-outlined text-[24px]">format_quote</span>
                </div>
              </div>
            </div>

            {/* Testimonio */}
            <div className="testimonial-text-col">
              <div className="testimonial-stars-row">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className="material-symbols-outlined text-[20px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
                <span className="text-xs text-on-surface-variant font-bold ml-1">
                  Socio Productor • 9 Años
                </span>
              </div>

              <blockquote className="testimonial-quote-text">
                “Cuando los bancos grandes nos cerraron las puertas por no tener títulos comerciales, Fuente de Vida creyó en nuestra cosecha de papas. Gracias al crédito comunitario pudimos comprar el tractor para toda la familia y hoy nuestros hijos van a la universidad.”
              </blockquote>

              <div className="pt-1">
                <div className="testimonial-author-name">Segundo Chimbolema Morocho</div>
                <div className="testimonial-author-role">
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
