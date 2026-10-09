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
import SimulatorModal from './components/SimulatorModal.jsx'
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx'

export default function App() {
  const [modalType, setModalType] = useState(null)

  const handleOpenModal = (type) => {
    setModalType(type)
  }

  const handleCloseModal = () => {
    setModalType(null)
  }

  const isSimulatorOpen =
    modalType === 'simulador' ||
    modalType === 'simulador-inversion' ||
    modalType === 'simulador-prestamo'

  const isProductModalOpen = modalType === 'ahorro'

  const simulatorInitialTab = modalType === 'simulador-prestamo' ? 'prestamo' : 'inversion'

  return (
    <div className="bg-background min-h-screen text-on-surface antialiased flex flex-col font-sans">
      {/* Barra de navegación superior fija */}
      <Navbar onOpenModal={handleOpenModal} />

      {/* Contenido principal ordenado de forma lógica y sincronizada con el menú */}
      <main className="w-full flex-grow">
        <Hero onOpenModal={handleOpenModal} />
        <ServicesSection onOpenModal={handleOpenModal} />
        <AfiliateSection />
        <WhyChooseUs />
        <Testimonial />
        <LocationSection />
        <FinalCta />
      </main>

      {/* Pie de página institucional */}
      <Footer />

      {/* Modal interactivo de detalles */}
      <ProductModal
        isOpen={isProductModalOpen}
        onClose={handleCloseModal}
      />

      {/* Modal interactivo de Simulador Financiero Dual */}
      <SimulatorModal
        isOpen={isSimulatorOpen}
        onClose={handleCloseModal}
        initialTab={simulatorInitialTab}
      />

      {/* Botón flotante de contacto WhatsApp */}
      <FloatingWhatsApp />
    </div>
  )
}
