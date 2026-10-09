import React, { useState, useEffect } from 'react'
import '../styles/navbar.css'

export default function Navbar({ onOpenModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')
  const [isScrolled, setIsScrolled] = useState(false)
  const [bannerDismissed, setBannerDismissed] = useState(false)

  const navLinks = [
    { name: 'Inicio', id: 'inicio', href: '#inicio' },
    { name: 'Servicios', id: 'servicios', href: '#servicios' },
    { name: 'Afíliate', id: 'afiliate', href: '#afiliate' },
    { name: 'Nosotros', id: 'nosotros', href: '#nosotros' },
    { name: 'Ubicación', id: 'ubicacion', href: '#ubicacion' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)

      const scrollPosition = window.scrollY + 140
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const link = navLinks[i]
        const element = document.getElementById(link.id)
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(link.id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    setActiveSection(targetId)
    setMobileMenuOpen(false)

    const targetEl = document.getElementById(targetId)
    if (targetEl) {
      const offset = targetEl.getBoundingClientRect().top + window.pageYOffset - 80
      window.scrollTo({ top: offset, behavior: 'smooth' })
    }
  }

  const handlePortalClick = (e) => {
    e.preventDefault()
    alert('Portal de Socios: Próximamente disponible para consulta de saldos y aportes en línea.')
  }

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : 'top'}`}>
      {/* Cintillo Superior Informativo Comunal */}
      {!bannerDismissed && (
        <div className={`top-announcement-bar ${isScrolled ? 'collapsed' : ''}`}>
          <div className="announcement-inner">
            <div className="announcement-left">
              <span className="announcement-badge">
                <span className="pulse-dot" />
                Aviso Comunal
              </span>
              <div className="announcement-text">
                <span className="material-symbols-outlined text-[15px] text-secondary-fixed">place</span>
                <span className="desktop-text">
                  Atención en feria este sábado de 8:30 a 13:00 en la Plaza Central
                </span>
                <span className="mobile-text">
                  Feria este sábado: 08:30 - 13:00 (Plaza Central)
                </span>
              </div>
            </div>

            <div className="announcement-right">
              <a
                href="https://wa.me/593992345678?text=Hola,%20quisiera%20consultar%20sobre%20la%20atención%20en%20feria"
                target="_blank"
                rel="noopener noreferrer"
                className="announcement-whatsapp-btn"
                title="Escribir al WhatsApp oficial"
              >
                <span className="material-symbols-outlined text-[14px]">chat</span>
                <span className="desktop-wa">+593 99 234 5678</span>
                <span className="mobile-wa">WhatsApp</span>
              </a>

              <button
                onClick={() => setBannerDismissed(true)}
                className="announcement-close-btn"
                aria-label="Cerrar aviso temporal"
                title="Cerrar aviso"
              >
                <span className="material-symbols-outlined text-[15px]">close</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="navbar-inner">
        
        {/* Identidad de la Caja */}
        <a href="#inicio" onClick={(e) => handleNavClick(e, 'inicio')} className="brand-link group">
          <div className="brand-logo-wrapper">
            <img
              src="/logo-fuente-de-vida.png"
              alt="Logo Caja Comunal Fuente De Vida"
              className="brand-logo"
            />
            <div className="brand-shimmer" />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="brand-title">Fuente De Vida</span>
            <span className="brand-subtitle">Guano • San Andrés • Sanjapamba</span>
          </div>
        </a>

        {/* Menú Desktop con Scroll-Spy */}
        <nav className="nav-pill-container">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`nav-link ${isActive ? 'active' : ''}`}
              >
                {link.name}
                {isActive && <span className="nav-link-dot" />}
              </a>
            )
          })}
        </nav>

        {/* Botones de acción */}
        <div className="nav-actions">
          <button onClick={handlePortalClick} className="btn-portal">
            Portal Socios
          </button>

          <a
            href="https://wa.me/593992345678?text=Hola,%20deseo%20comunicarme%20con%20Caja%20Comunal%20Fuente%20de%20Vida"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-contact"
          >
            Contactar
          </a>

          <div className="user-badge">
            <span className="material-symbols-outlined text-[20px]">person</span>
          </div>

          {/* Botón menú móvil */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-on-surface hover:bg-surface-container-high focus:outline-none"
            aria-label="Menú principal"
          >
            <span className="material-symbols-outlined text-[26px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Menú desplegable móvil */}
      {mobileMenuOpen && (
        <div className="mobile-drawer lg:hidden">
          <nav className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="material-symbols-outlined text-[18px]">chevron_right</span>}
                </a>
              )
            })}
            <div className="pt-3 mt-2 border-t border-outline-variant/30 flex flex-col gap-2">
              <button onClick={handlePortalClick} className="btn-portal w-full text-center">
                Portal Socios
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
