"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Phone,
  Monitor,
  Gamepad2,
  Smartphone,
  Palette,
  Printer,
  MapPin,
  Clock,
  Star,
  MessageCircle,
  Camera,
  Users,
  Award,
  Menu,
  X,
} from "lucide-react"

export default function LaRamblaFixing() {
  const [activeSection, setActiveSection] = useState("inicio")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    setIsMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const menuItems = [
    { id: "inicio", label: "Inicio" },
    { id: "reparaciones", label: "Reparaciones" },
    { id: "impresion3d", label: "Impresión 3D" },
    { id: "diseno", label: "Diseño Gráfico" },
    { id: "galeria", label: "Galería" },
    { id: "nosotros", label: "Sobre Nosotros" },
    { id: "contacto", label: "Contacto" },
    { id: "resenas", label: "Reseñas" },
  ]

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FEFEFE" }}>
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col md:flex-row items-end md:items-center space-y-2 md:space-y-0 md:space-x-3">
        <div
          className="bg-white px-3 py-2 md:px-4 md:py-2 rounded-full shadow-lg border order-2 md:order-1"
          style={{ borderColor: "#25D366" }}
        >
          <p className="text-xs md:text-sm font-semibold whitespace-nowrap" style={{ color: "#25D366" }}>
            ¿Te atendemos en WhatsApp?
          </p>
        </div>
        <Button
          asChild
          className="font-semibold w-14 h-14 md:w-16 md:h-16 rounded-full shadow-lg hover:scale-105 transition-transform order-1 md:order-2"
          style={{ backgroundColor: "#25D366" }}
        >
          <a
            href="https://wa.me/34958123456?text=Hola,%20me%20gustaría%20información%20sobre%20sus%20servicios"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center text-white hover:text-white"
          >
            <MessageCircle className="w-6 h-6 md:w-8 md:h-8" />
          </a>
        </Button>
      </div>

      <header
        className="fixed top-0 w-full z-40 backdrop-blur-xl border-b shadow-sm"
        style={{ backgroundColor: "#FEFEFE", borderColor: "#CCDA6E" }}
      >
        <div className="container mx-auto px-4 py-3 md:py-4">
          <div className="flex items-center justify-between">
            <img src="/logo.png" alt="La Rambla Fixing" className="h-10 md:h-12 w-auto" />

            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="font-semibold transition-colors hover:scale-105 transform transition-transform"
                  style={{
                    color: activeSection === item.id ? "#A6C946" : "#6E5230",
                  }}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg"
              style={{ color: "#6E5230" }}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t" style={{ borderColor: "#CCDA6E" }}>
              <div className="flex flex-col space-y-4 pt-4">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left font-semibold transition-colors"
                    style={{
                      color: activeSection === item.id ? "#A6C946" : "#6E5230",
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </nav>
          )}
        </div>
      </header>

      <section
        id="inicio"
        className="pt-20 md:pt-24 pb-8 md:pb-12 min-h-screen flex items-center relative"
        style={{
          backgroundImage:
            "url(/placeholder.svg?height=800&width=1200&query=modern%20smartphone%20repair%20workshop%20with%20tools%20and%20devices)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(166, 201, 70, 0.8)" }}></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="mb-8 md:mb-16">
            <img
              src="/logo.png"
              alt="La Rambla Fixing"
              className="w-48 md:w-80 h-auto mx-auto mb-6 md:mb-8 drop-shadow-lg"
            />
            <h2
              className="text-lg md:text-2xl mb-3 md:mb-4 drop-shadow-lg"
              style={{ color: "#FEFEFE", fontFamily: "Open Sans" }}
            >
              Reparación y Tecnología
            </h2>
            <h1
              className="text-2xl md:text-4xl font-bold mb-6 md:mb-8 drop-shadow-lg px-4"
              style={{ color: "#FEFEFE", fontFamily: "Open Sans" }}
            >
              Tu centro tecnológico de confianza
            </h1>
            <p className="text-lg md:text-xl drop-shadow-lg" style={{ color: "#FEFEFE" }}>
              en La Herradura
            </p>
          </div>
        </div>
      </section>

      <section id="reparaciones" className="py-12 md:py-20" style={{ backgroundColor: "#FEFEFE" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <div
              className="w-20 h-20 md:w-24 md:h-24 rounded-3xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg"
              style={{ backgroundColor: "#A6C946" }}
            >
              <Smartphone className="w-10 h-10 md:w-12 md:h-12" style={{ color: "#FEFEFE" }} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4" style={{ color: "#3B3B3B" }}>
              Reparaciones
            </h2>
            <p className="text-lg md:text-xl" style={{ color: "#6E5230" }}>
              Especialistas en dispositivos electrónicos
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Smartphone,
                title: "Teléfonos",
                desc: "Reparación de pantallas, baterías y componentes",
                color: "#A6C946",
              },
              {
                icon: Monitor,
                title: "Ordenadores",
                desc: "Diagnóstico y reparación de equipos de escritorio",
                color: "#6E5230",
              },
              {
                icon: Phone,
                title: "Portátiles",
                desc: "Solución de problemas de hardware y software",
                color: "#A6C946",
              },
              {
                icon: Gamepad2,
                title: "Consolas",
                desc: "Reparación de PlayStation, Xbox y Nintendo",
                color: "#6E5230",
              },
            ].map((service, index) => (
              <div key={index} className="text-center">
                <div
                  className="rounded-3xl p-6 md:p-8 mb-4 shadow-lg border hover:shadow-xl transition-all duration-300"
                  style={{ backgroundColor: "#FEFEFE", borderColor: "#CCDA6E" }}
                >
                  <div
                    className="rounded-2xl p-3 md:p-4 mx-auto w-14 h-14 md:w-16 md:h-16 flex items-center justify-center mb-3 md:mb-4"
                    style={{ backgroundColor: service.color }}
                  >
                    <service.icon className="w-7 h-7 md:w-8 md:h-8" style={{ color: "#FEFEFE" }} />
                  </div>
                  <h3 className="font-semibold text-base md:text-lg mb-2" style={{ color: "#3B3B3B" }}>
                    {service.title}
                  </h3>
                  <p className="text-sm" style={{ color: "#6E5230" }}>
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="impresion3d" className="py-12 md:py-20" style={{ backgroundColor: "#CCDA6E" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <div
              className="w-20 h-20 md:w-24 md:h-24 rounded-3xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg"
              style={{ backgroundColor: "#6E5230" }}
            >
              <Printer className="w-10 h-10 md:w-12 md:h-12" style={{ color: "#FEFEFE" }} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4" style={{ color: "#3B3B3B" }}>
              Impresión 3D
            </h2>
            <p className="text-lg md:text-xl" style={{ color: "#6E5230" }}>
              Damos vida a tus ideas
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div
              className="rounded-3xl p-6 md:p-10 shadow-lg border"
              style={{ backgroundColor: "#FEFEFE", borderColor: "#A6C946" }}
            >
              <ul className="space-y-4 md:space-y-6 text-base md:text-lg" style={{ color: "#6E5230" }}>
                <li className="flex items-center space-x-3 md:space-x-4">
                  <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: "#A6C946" }}></div>
                  <span>Materiales: PLA, ABS, PETG, TPU</span>
                </li>
                <li className="flex items-center space-x-3 md:space-x-4">
                  <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: "#A6C946" }}></div>
                  <span>Amplia gama de colores</span>
                </li>
                <li className="flex items-center space-x-3 md:space-x-4">
                  <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: "#A6C946" }}></div>
                  <span>Prototipos y piezas personalizadas</span>
                </li>
                <li className="flex items-center space-x-3 md:space-x-4">
                  <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: "#A6C946" }}></div>
                  <span>Alta precisión y calidad</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="diseno" className="py-12 md:py-20" style={{ backgroundColor: "#FEFEFE" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <div
              className="w-20 h-20 md:w-24 md:h-24 rounded-3xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg"
              style={{ backgroundColor: "#A6C946" }}
            >
              <Palette className="w-10 h-10 md:w-12 md:h-12" style={{ color: "#FEFEFE" }} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4" style={{ color: "#3B3B3B" }}>
              Diseño Gráfico
            </h2>
            <p className="text-lg md:text-xl" style={{ color: "#6E5230" }}>
              Identidad visual profesional
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
            {Array.from({ length: 6 }, (_, i) => (
              <div key={i} className="aspect-square">
                <div
                  className="w-full h-full rounded-2xl md:rounded-3xl flex items-center justify-center hover:shadow-xl transition-all duration-300 shadow-lg border"
                  style={{ backgroundColor: "#FEFEFE", borderColor: "#A6C946" }}
                >
                  <Palette className="w-8 h-8 md:w-12 md:h-12" style={{ color: "#6E5230" }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="galeria" className="py-12 md:py-20" style={{ backgroundColor: "#CCDA6E" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <div
              className="w-20 h-20 md:w-24 md:h-24 rounded-3xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg"
              style={{ backgroundColor: "#6E5230" }}
            >
              <Camera className="w-10 h-10 md:w-12 md:h-12" style={{ color: "#FEFEFE" }} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4" style={{ color: "#3B3B3B" }}>
              Galería
            </h2>
            <p className="text-lg md:text-xl" style={{ color: "#6E5230" }}>
              Nuestros trabajos
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
            {Array.from({ length: 6 }, (_, i) => (
              <div key={i} className="aspect-square">
                <div
                  className="w-full h-full rounded-2xl md:rounded-3xl flex items-center justify-center hover:shadow-xl transition-all duration-300 shadow-lg border"
                  style={{ backgroundColor: "#FEFEFE", borderColor: "#A6C946" }}
                >
                  <Camera className="w-8 h-8 md:w-12 md:h-12" style={{ color: "#6E5230" }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="nosotros" className="py-12 md:py-20" style={{ backgroundColor: "#FEFEFE" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <div
              className="w-20 h-20 md:w-24 md:h-24 rounded-3xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg"
              style={{ backgroundColor: "#A6C946" }}
            >
              <Users className="w-10 h-10 md:w-12 md:h-12" style={{ color: "#FEFEFE" }} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4" style={{ color: "#3B3B3B" }}>
              Sobre Nosotros
            </h2>
            <p className="text-lg md:text-xl" style={{ color: "#6E5230" }}>
              Desde 2018 en La Herradura
            </p>
          </div>

          <div className="max-w-4xl mx-auto text-center px-4">
            <p className="text-lg md:text-xl leading-relaxed" style={{ color: "#6E5230" }}>
              La Rambla Fixing nació en 2018 con la misión de ofrecer servicios tecnológicos de calidad. Nuestro equipo
              especializado se mantiene actualizado con las últimas tecnologías para brindar soluciones completas a
              particulares y empresas.
            </p>
          </div>
        </div>
      </section>

      <section id="resenas" className="py-12 md:py-20" style={{ backgroundColor: "#CCDA6E" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <div
              className="w-20 h-20 md:w-24 md:h-24 rounded-3xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg"
              style={{ backgroundColor: "#6E5230" }}
            >
              <Award className="w-10 h-10 md:w-12 md:h-12" style={{ color: "#FEFEFE" }} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4" style={{ color: "#3B3B3B" }}>
              Reseñas
            </h2>
            <p className="text-lg md:text-xl" style={{ color: "#6E5230" }}>
              Lo que dicen nuestros clientes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              { name: "María González", comment: "Excelente servicio y muy profesionales" },
              { name: "Carlos Ruiz", comment: "Impresionante trabajo de impresión 3D" },
              { name: "Ana Martín", comment: "El diseño de mi logo quedó espectacular" },
              { name: "Pedro López", comment: "Repararon mi móvil en tiempo récord" },
              { name: "Laura Jiménez", comment: "Muy satisfecha con el servicio técnico" },
              { name: "Miguel Torres", comment: "Profesionales de confianza, los recomiendo" },
            ].map((review, index) => (
              <div
                key={index}
                className="rounded-3xl p-6 md:p-8 shadow-lg border"
                style={{ backgroundColor: "#FEFEFE", borderColor: "#A6C946" }}
              >
                <div className="flex mb-4 md:mb-6" style={{ color: "#A6C946" }}>
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-current" />
                  ))}
                </div>
                <p className="mb-4 md:mb-6 italic text-base md:text-lg" style={{ color: "#6E5230" }}>
                  "{review.comment}"
                </p>
                <p className="font-semibold text-sm md:text-base" style={{ color: "#3B3B3B" }}>
                  - {review.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="py-12 md:py-20" style={{ backgroundColor: "#FEFEFE" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <div
              className="w-20 h-20 md:w-24 md:h-24 rounded-3xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg"
              style={{ backgroundColor: "#A6C946" }}
            >
              <Phone className="w-10 h-10 md:w-12 md:h-12" style={{ color: "#FEFEFE" }} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4" style={{ color: "#3B3B3B" }}>
              Contacto
            </h2>
            <p className="text-lg md:text-xl" style={{ color: "#6E5230" }}>
              Visítanos en La Herradura
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-6 md:p-10 space-y-6 md:space-y-8">
              <div className="flex items-center space-x-4 md:space-x-6">
                <div
                  className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#A6C946" }}
                >
                  <MapPin className="w-7 h-7 md:w-8 md:h-8" style={{ color: "#FEFEFE" }} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg md:text-xl mb-1 md:mb-2" style={{ color: "#3B3B3B" }}>
                    Dirección
                  </h3>
                  <p className="text-base md:text-lg" style={{ color: "#6E5230" }}>
                    Calle Principal, 123
                    <br />
                    18697 La Herradura, Granada
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 md:space-x-6">
                <div
                  className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#A6C946" }}
                >
                  <Phone className="w-7 h-7 md:w-8 md:h-8" style={{ color: "#FEFEFE" }} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg md:text-xl mb-1 md:mb-2" style={{ color: "#3B3B3B" }}>
                    Teléfono
                  </h3>
                  <p className="text-base md:text-lg" style={{ color: "#6E5230" }}>
                    +34 958 123 456
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 md:space-x-6">
                <div
                  className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#A6C946" }}
                >
                  <Clock className="w-7 h-7 md:w-8 md:h-8" style={{ color: "#FEFEFE" }} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg md:text-xl mb-1 md:mb-2" style={{ color: "#3B3B3B" }}>
                    Horario
                  </h3>
                  <p className="text-base md:text-lg" style={{ color: "#6E5230" }}>
                    Lun-Vie: 9:00-19:00
                    <br />
                    Sáb: 10:00-14:00
                  </p>
                </div>
              </div>
            </div>

            <div
              className="rounded-3xl p-3 md:p-4 border"
              style={{ backgroundColor: "#CCDA6E", borderColor: "#A6C946" }}
            >
              <div
                className="w-full h-full rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: "#FEFEFE", minHeight: "300px" }}
              >
                <div className="text-center p-4">
                  <MapPin className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4" style={{ color: "#A6C946" }} />
                  <p className="text-base md:text-lg font-semibold" style={{ color: "#6E5230" }}>
                    Ubicación en Google Maps
                  </p>
                  <p className="text-sm mt-2" style={{ color: "#6E5230" }}>
                    Marco para integrar Google Maps
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t py-8 md:py-12" style={{ backgroundColor: "#CCDA6E", borderColor: "#A6C946" }}>
        <div className="container mx-auto px-4 text-center">
          <img src="/logo.png" alt="La Rambla Fixing" className="h-8 md:h-10 w-auto mx-auto mb-4 md:mb-6" />
          <p className="text-sm md:text-base" style={{ color: "#6E5230" }}>
            © 2024 La Rambla Fixing
          </p>
        </div>
      </footer>
    </div>
  )
}
