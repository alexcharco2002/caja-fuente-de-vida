import React, { useState } from 'react'

export default function Navbar({ onOpenModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Afíliate', href: '#afiliate' },
    { name: 'Nosotros', href: '#valores' },
    { name: 'Ubicación', href: '#ubicacion' },
  ]

  const handlePortalClick = (e) => {
    e.preventDefault()
    alert('Portal de Socios: Próximamente disponible para consulta de saldos y aportes en línea.')
  }

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-[1200px] mx-auto px-gutter lg:px-gutter-desktop flex items-center justify-between gap-space-md">
        
        {/* Logo and Entity Identity */}
        <a href="#inicio" className="flex items-center gap-space-sm min-w-0 group">
          <img
            src="/logo-fuente-de-vida.png"
            alt="Logo Oficial Caja Comunal Fuente De Vida"
            className="h-12 w-12 object-contain shrink-0 rounded-full transition-transform group-hover:scale-105 shadow-sm"
          />
          <div className="flex flex-col min-w-0">
            <span className="font-headline-sm text-headline-sm text-primary tracking-tight truncate leading-tight">
              Fuente De Vida
            </span>
            <span className="font-label-sm text-label-sm text-tertiary tracking-wide uppercase truncate text-[10px] sm:text-xs">
              Guano • San Andrés • Sanjapamba
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-space-xs p-1 bg-surface-container-low rounded-full">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-space-md py-space-sm rounded-full font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-space-sm shrink-0">
          <button
            onClick={handlePortalClick}
            className="hidden sm:inline-flex items-center justify-center px-space-lg py-space-sm h-11 rounded-full bg-primary text-on-primary font-label-lg text-label-lg shadow-[0px_4px_20px_-2px_rgba(120,53,15,0.06)] hover:bg-primary-container hover:text-on-primary-container transition-all active:scale-95"
          >
            Portal Socios
          </button>

          <a
            href="https://wa.me/593992345678?text=Hola,%20deseo%20comunicarme%20con%20Caja%20Comunal%20Fuente%20de%20Vida"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-space-md py-space-sm h-11 rounded-full bg-secondary text-on-secondary font-label-lg text-label-lg hover:bg-secondary-container hover:text-on-secondary-container transition-all active:scale-95"
          >
            Contactar
          </a>

          {/* User Icon indicator */}
          <div className="hidden sm:flex w-9 h-9 rounded-full bg-primary items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </div>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-on-surface-variant hover:bg-surface-container-high focus:outline-none"
            aria-label="Menú principal"
          >
            <span className="material-symbols-outlined text-[26px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-outline-variant/30 bg-surface/95 backdrop-blur-xl px-gutter py-space-md">
          <nav className="flex flex-col gap-space-xs">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-space-md py-space-sm rounded-xl font-label-lg text-on-surface hover:bg-surface-container-high transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-space-sm border-t border-outline-variant/20 flex flex-col gap-space-xs">
              <button
                onClick={(e) => {
                  setMobileMenuOpen(false)
                  handlePortalClick(e)
                }}
                className="w-full text-center py-2.5 rounded-full bg-primary text-on-primary font-label-lg"
              >
                Portal Socios
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
