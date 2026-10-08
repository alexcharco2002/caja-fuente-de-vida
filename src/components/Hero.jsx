import React, { useState, useEffect, useCallback } from 'react'
import '../styles/hero.css'

const carouselSlides = [
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBqcb0PP3PAw3D9LsTv7cKyaZmuaodiccmY3dY885LZYs4IdhIyrTnSTrlxStor0r3wDL7MLKFtfmxyG6lRQRQ8m3mAeJbBvTY5oJl73OPdHraHP8VH0vCQqkNpDT8E84CTOkAob_W7Y9u9UVXiNTzcZtrPjhhdUOTWOQBxPNUL9T4NBC4VsNsweg0MJG9uO5qTcOsSvUu9l8otoJvsoRbhie6uzCBRXs3GCcv70spco8I_4KqX30HZww',
    alt: 'Familia agricultora de Sanjapamba frente al volcán Chimborazo',
    caption: 'Cosecha y Ahorro Seguro',
    sub: 'Respaldando el trabajo de nuestra gente andina con microcréditos ágiles.',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsxrnTVlQZ9kHt-xtY8o_G6Q0TLMXA_PqbSRnHuwL4ldhkTHy5-D5OO3FbhWUaDS__REWHiadIc0TugKvhvB8wtVIN47uKMPwIYA6mQ_THEhY5bLh8JI5cUS1pmtwbCGOFQ8QVIeazaPukpCRmQMHvGHLbuRHolCk0qFUVSdQz9tnhJOTD7KlEF4e3RB2NC53s4fwrBI4fz6QoUkvELwbs8uOUtsi9lQELZiKVckyZKGHwLriEK6KbJQ',
    alt: 'Socio fundador productor agrícola de Sanjapamba Alto',
    caption: 'Socios de por vida',
    sub: 'Más de 2,400 familias campesinas confían en Fuente De Vida.',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAgwYoJIwtMnfn98nVXB_TDOHM7ZSW2evqWyMKZ8VA7f4fpOI28Cc-1STO2Gf0f2eY0D8AI7NFmnDgFHuIDOYm16ZpsDJuLbhoD_7LjGB3_f43VRuRyji5g21UTjHa4QSl7H3b7wU5sozziI5KPxgZlSx6_dYmwhrGyTCwRJdqEzEhll9BndgLctqdkSYHYNji609DkabMfUPiz2DsnqBNSS5GyrHPhsCnAfSb45-Hg7E042062zC6QQ',
    alt: 'Vista aérea de la comunidad de Sanjapamba, Guano, Chimborazo',
    caption: 'Nuestra Casa Comunal',
    sub: 'Ubicados en la Plaza Central de Sanjapamba, Cantón Guano.',
  },
]

const SLIDE_INTERVAL = 8000

const stats = [
  {
    icon: 'calendar_month',
    value: '+15 Años',
    label: 'Impulsando el campo y la familia',
    colorClass: 'text-primary',
    bgClass: 'bg-primary/10',
    barClass: 'bg-primary',
  },
  {
    icon: 'groups',
    value: '+2,400',
    label: 'Socios activos y productivos',
    colorClass: 'text-secondary',
    bgClass: 'bg-secondary/10',
    barClass: 'bg-secondary',
  },
  {
    icon: 'task_alt',
    value: '98%',
    label: 'Aprobación crediticia agrícola',
    colorClass: 'text-tertiary',
    bgClass: 'bg-tertiary/10',
    barClass: 'bg-tertiary',
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [transitioning, setTransitioning] = useState(false)

  const goToSlide = useCallback((index) => {
    setTransitioning(true)
    setTimeout(() => {
      setCurrentSlide(index)
      setTransitioning(false)
    }, 450)
  }, [])

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % carouselSlides.length)
  }, [currentSlide, goToSlide])

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + carouselSlides.length) % carouselSlides.length)
  }, [currentSlide, goToSlide])

  useEffect(() => {
    const timer = setInterval(nextSlide, SLIDE_INTERVAL)
    return () => clearInterval(timer)
  }, [nextSlide])

  const slide = carouselSlides[currentSlide]

  return (
    <section id="inicio" className="hero-section">
      {/* Marca de agua institucional */}
      <div className="hero-watermark">
        <img src="/logo-fuente-de-vida.png" alt="" className="w-full h-full object-contain" />
      </div>
      <div className="hero-glow-1" />
      <div className="hero-glow-2" />

      {/* ── ÁREA PRINCIPAL: TEXTO IZQUIERDA Y FOTO DERECHA CON FUSIÓN DIAGONAL ── */}
      <div className="hero-main-area">

        {/* Columna Izquierda: Contenido de Texto */}
        <div className="hero-split-left">
          <div className="hero-text-col">
            <div className="hero-badge">
              <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                spa
              </span>
              <span>Minga Financiera Rural • Sanjapamba, Guano</span>
            </div>

            <h1 className="hero-title">
              Creciendo juntos con el <span className="hero-title-accent">fruto de nuestra tierra</span>
            </h1>

            <p className="hero-description">
              Brindamos soluciones de ahorro y crédito ágiles, seguras y solidarias para agricultores, emprendedores y familias de Sanjapamba y sus alrededores.
            </p>

            <div className="hero-slogan-pill">
              <span className="material-symbols-outlined text-[15px] text-secondary">verified</span>
              <span>Lema: "Juntos Trabajamos Para el Futuro"</span>
            </div>

            <div className="hero-buttons">
              <a href="#afiliate" className="hero-btn-primary group">
                <span>Ver Requisitos</span>
                <span className="material-symbols-outlined text-[18px] transition-transform duration-200 group-hover:translate-x-1">
                  arrow_forward
                </span>
              </a>
              <a href="#simulador" className="hero-btn-simular group">
                <span className="material-symbols-outlined text-[18px] text-secondary transition-transform duration-200 group-hover:rotate-45">
                  tune
                </span>
                <span>Simular Inversión</span>
              </a>
            </div>

            <div className="hero-trust-row">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-secondary text-[17px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  verified_user
                </span>
                <span>Fondo Solidario Seguro</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-primary text-[17px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  handshake
                </span>
                <span>Gobernanza Comunal</span>
              </div>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Carrusel Inmersivo con Fusión Diagonal Suave */}
        <div className="hero-split-right">
          <div className="hero-immersive-frame">

            {/* Fotos con transición suave */}
            {carouselSlides.map((item, idx) => (
              <img
                key={idx}
                src={item.src}
                alt={item.alt}
                className={`hero-bg-photo ${
                  idx === currentSlide
                    ? (transitioning ? 'opacity-0' : 'opacity-100 scale-100')
                    : 'opacity-0 scale-105 pointer-events-none'
                }`}
              />
            ))}

            {/* Fusión diagonal suave (degradado que se mezcla sin líneas duras) */}
            <div className="hero-diagonal-fade" />
            <div className="hero-fade-bottom" />
            <div className="hero-fade-top" />

            {/* Sello Oficial Flotante */}
            <div className="hero-floating-seal">
              <img src="/logo-fuente-de-vida.png" alt="Sello Oficial" className="hero-seal-img" />
              <div className="text-left">
                <span className="block text-[9px] uppercase font-bold text-tertiary tracking-wider">
                  Sello Oficial
                </span>
                <span className="block text-xs font-bold text-primary leading-tight">
                  Fuente De Vida
                </span>
              </div>
            </div>

            {/* Tarjeta flotante con descripción de la imagen */}
            <div className={`hero-floating-caption ${transitioning ? 'opacity-0' : 'opacity-100'}`}>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-on-secondary-container text-[17px]">
                    agriculture
                  </span>
                </div>
                <div>
                  <span className="block text-[10px] text-tertiary uppercase tracking-wider font-bold">
                    Comunidad Activa
                  </span>
                  <span className="block text-xs sm:text-sm font-bold text-on-surface leading-tight">
                    {slide.caption}
                  </span>
                </div>
              </div>
              <p className="mt-1 text-[11px] sm:text-xs text-on-surface-variant leading-snug">
                {slide.sub}
              </p>
            </div>

            {/* Flechas de Navegación */}
            <button onClick={prevSlide} className="hero-carousel-nav-btn prev" aria-label="Foto anterior">
              <span className="material-symbols-outlined text-[20px]">chevron_left</span>
            </button>
            <button onClick={nextSlide} className="hero-carousel-nav-btn next" aria-label="Foto siguiente">
              <span className="material-symbols-outlined text-[20px]">chevron_right</span>
            </button>

            {/* Puntos Indicadores Flotantes */}
            <div className="hero-carousel-pills">
              {carouselSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`hero-carousel-pill-dot ${idx === currentSlide ? 'active' : 'inactive'}`}
                  aria-label={`Foto ${idx + 1}`}
                />
              ))}
            </div>

          </div>
        </div>

      </div>

      {/* ── FRANJA DE ESTADÍSTICAS AJUSTADA A LA PÁGINA DE INICIO ── */}
      <div className="stats-strip">
        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-item-card">
              <div className={`stat-corner-accent ${stat.bgClass}`} />
              <div className={`stat-icon-box ${stat.bgClass}`}>
                <span className={`material-symbols-outlined ${stat.colorClass} text-[22px] sm:text-[26px]`}>
                  {stat.icon}
                </span>
              </div>
              <div className="text-center sm:text-left">
                <div className={`stat-value ${stat.colorClass}`}>{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
              <div className={`stat-bottom-line ${stat.barClass}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
