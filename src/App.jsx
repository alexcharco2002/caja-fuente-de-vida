import React, { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import AfiliateSection from './components/AfiliateSection.jsx'
import ServicesSection from './components/ServicesSection.jsx'
import WhyChooseUs from './components/WhyChooseUs.jsx'
import Testimonial from './components/Testimonial.jsx'
import LocationSection from './components/LocationSection.jsx'
import FinalCta from './components/FinalCta.jsx'
import Footer from './components/Footer.jsx'
import ProductModal from './components/ProductModal.jsx'
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx'

export default function App() {
  const [modalType, setModalType] = useState(null)

  const handleOpenModal = (type) => {
    setModalType(type)
  }

  const handleCloseModal = () => {
    setModalType(null)
  }

  return (
    <div className="bg-background min-h-screen text-on-surface antialiased flex flex-col font-sans">
      {/* Barra de navegación superior fija */}
      <Navbar onOpenModal={handleOpenModal} />

      {/* Contenido principal */}
      <main className="w-full flex-grow">
        <Hero />
        <AfiliateSection />
        <ServicesSection onOpenModal={handleOpenModal} />
        <WhyChooseUs />
        <Testimonial />
        <LocationSection />
        <FinalCta />
      </main>

      {/* Pie de página institucional */}
      <Footer />

      {/* Modal interactivo de detalles */}
      <ProductModal
        isOpen={Boolean(modalType)}
        onClose={handleCloseModal}
      />

      {/* Botón flotante de contacto WhatsApp */}
      <FloatingWhatsApp />
    </div>
  )
}
