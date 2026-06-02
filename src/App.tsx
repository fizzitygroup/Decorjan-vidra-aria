import { useState, useEffect } from 'react';
import { 
  MessageCircle, 
  Instagram, 
  MapPin, 
  Clock, 
  ChevronRight, 
  CheckCircle2, 
  Menu, 
  X,
  Maximize,
  Layout,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Phone
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// SEO Keywords for Janaúba-MG
// vidraçaria em Janaúba, box de vidro Janauba, espelhos sob medida Janaúba, fechamento de sacada Janaúba

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = "https://wa.me/5538991276017";
  const instagramUrl = "https://www.instagram.com/decorjanvidracaria/";
  const mapsUrl = "https://www.google.com/maps/place/Decorjan+Vidra%C3%A7aria+Katia+cilene/data=!4m2!3m1!1s0x0:0x8b07a74aedc521a3";

  const Logo = ({ scrolled }: { scrolled: boolean }) => (
    <div className="flex items-center gap-3">
      <div className="relative w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm overflow-hidden border border-slate-100">
        <div className="flex items-baseline font-black text-2xl italic tracking-tighter">
          <span className="text-navy">D</span>
          <div className="w-[2px] h-8 bg-white rotate-[20deg] z-10 mx-[-2px]"></div>
          <span className="text-decor-red">V</span>
        </div>
      </div>
      <div className="flex flex-col leading-none">
        <span className={`font-black text-xl tracking-tight ${scrolled ? 'text-navy' : 'text-white'}`}>DECORJAN</span>
        <span className={`text-[10px] font-bold tracking-[0.2em] ${scrolled ? 'text-decor-red' : 'text-decor-red'}`}>VIDRAÇARIA</span>
      </div>
    </div>
  );
  const services = [
    { title: "Box para Banheiro", icon: <ShieldCheck className="w-6 h-6" />, img: "./public/box.png" },
    { title: "Espelhos Sob Medida", icon: <Sparkles className="w-6 h-6" />, img: "./public/espelho.png" },
    { title: "Fechamento de Sacadas", icon: <Maximize className="w-6 h-6" />, img: "./public/sacada.png" },
    { title: "Portas e Janelas Blindex", icon: <Layout className="w-6 h-6" />, img: "./public/porta.png" },
    { title: "Divisória", icon: <ChevronRight className="w-6 h-6" />, img: "./public/divisoria.png" },
    { title: "Fachadas Comerciais", icon: <CheckCircle2 className="w-6 h-6" />, img: "./public/fachada.png" },
    { title: "Guarda-corpo e Corrimão", icon: <ShieldCheck className="w-6 h-6" />, img: "./public/gc.png" },
    { title: "Forro em PVC", icon: <Layout className="w-6 h-6" />, img: "./public/pvc.png" },
    { title: "Persianas", icon: <Menu className="w-6 h-6" />, img: "./public/persiana.png" },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-navy selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Logo scrolled={scrolled} />

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className={`hover:text-decor-red transition-colors font-medium ${scrolled ? 'text-navy' : 'text-white'}`}>Início</a>
            <a href="#servicos" className={`hover:text-decor-red transition-colors font-medium ${scrolled ? 'text-navy' : 'text-white'}`}>Serviços</a>
            <a href="#contato" className={`hover:text-decor-red transition-colors font-medium ${scrolled ? 'text-navy' : 'text-white'}`}>Contato</a>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-decor-red hover:bg-red-700 text-white px-6 py-2 rounded-full font-semibold transition-all shadow-lg hover:scale-105 flex items-center gap-2"
            >
              <MessageCircle size={18} />
              Orçamento
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-navy" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} className={scrolled ? 'text-navy' : 'text-white'} /> : <Menu size={28} className={scrolled ? 'text-navy' : 'text-white'} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-white shadow-xl py-6 px-6 flex flex-col gap-4 md:hidden"
            >
              <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-navy font-semibold text-lg border-b pb-2">Início</a>
              <a href="#servicos" onClick={() => setIsMenuOpen(false)} className="text-navy font-semibold text-lg border-b pb-2">Serviços</a>
              <a href="#contato" onClick={() => setIsMenuOpen(false)} className="text-navy font-semibold text-lg border-b pb-2">Contato</a>
              <a 
                href={whatsappUrl} 
                className="bg-decor-red text-white py-3 rounded-xl font-bold text-center flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                Solicitar Orçamento
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-24 md:pt-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1920" 
            alt="Ambiente moderno com vidro" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/60 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block bg-decor-red text-white px-4 py-1 rounded-full text-sm font-bold tracking-wider uppercase mb-6">
              Vidraçaria em Janaúba-MG
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Transforme seu ambiente com <span className="text-decor-red">vidro sob medida</span> e acabamento impecável
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed">
              Transformamos espaços com soluções modernas em vidraçaria. Qualidade técnica, segurança e design que valoriza seu imóvel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-decor-red hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl hover:scale-105 flex items-center justify-center gap-3 group"
              >
                Solicitar orçamento no WhatsApp
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#servicos"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center"
              >
                Ver Serviços
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 hidden md:block"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* Stats/Trust Section */}
      <section className="py-12 bg-navy text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-decor-red mb-1">+1000</p>
              <p className="text-sm text-slate-300 uppercase tracking-widest">Projetos Entregues</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-decor-red mb-1">100%</p>
              <p className="text-sm text-slate-300 uppercase tracking-widest">Segurança Garantida</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-decor-red mb-1">Janaúba</p>
              <p className="text-sm text-slate-300 uppercase tracking-widest">Referência Regional</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-decor-red mb-1">Premium</p>
              <p className="text-sm text-slate-300 uppercase tracking-widest">Acabamento Fino</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-navy text-sm font-bold uppercase tracking-[0.3em] mb-4">Nossas Soluções</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-navy mb-6">Excelência em cada detalhe do seu projeto</h3>
            <p className="text-slate-600 text-lg">
              Oferecemos uma linha completa de produtos em vidro e acabamentos para residências e empresas em Janaúba e região.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg group"
              >
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur p-3 rounded-xl text-navy shadow-lg">
                    {service.icon}
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-bold text-navy mb-4">{service.title}</h4>
                  <p className="text-slate-600 mb-6">
                    Soluções personalizadas com materiais de alta resistência e design sofisticado para seu ambiente.
                  </p>
                  <a 
                    href={whatsappUrl} 
                    className="text-decor-red font-bold flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    Saber mais <ChevronRight size={18} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-navy text-sm font-bold uppercase tracking-[0.3em] mb-4 text-center lg:text-left">Por que a Decorjan?</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-navy mb-12 text-center lg:text-left">Compromisso com a qualidade e sua satisfação</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {[
                { title: "Medição Técnica", desc: "Realizamos medições precisas para garantir o encaixe perfeito." },
                { title: "Equipe Especializada", desc: "Profissionais treinados e experientes em instalações complexas." },
                { title: "Materiais Premium", desc: "Trabalhamos apenas com vidros e ferragens de primeira linha." },
                { title: "Prazos Cumpridos", desc: "Respeitamos seu tempo com entregas e montagens ágeis." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-decor-red">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-navy mb-1">{item.title}</h4>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section id="contato" className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-decor-red/10 skew-x-12 translate-x-1/2"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Vamos tirar seu projeto do papel?</h2>
            <p className="text-xl text-slate-300 mb-12">
              Nossa equipe técnica está pronta para realizar medições e consultoria especializada em sua obra. Transforme sua casa ou empresa com quem entende de vidro.
            </p>
            <div className="flex flex-col items-center gap-8">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-decor-red hover:bg-red-700 text-white px-12 py-6 rounded-full font-bold text-2xl transition-all shadow-2xl hover:scale-105 flex items-center gap-4"
              >
                <MessageCircle size={32} />
                Falar com Especialista agora
              </a>
              
              <div className="flex flex-wrap justify-center gap-10 text-white/80">
                <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Instagram size={24} /> @decorjanvidracaria
                </a>
                <div className="flex items-center gap-2">
                  <MapPin size={24} /> Janaúba-MG
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-20 pb-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm overflow-hidden border border-slate-100">
                  <div className="flex items-baseline font-black text-lg italic tracking-tighter">
                    <span className="text-navy">D</span>
                    <div className="w-[1px] h-6 bg-white rotate-[20deg] z-10 mx-[-1px]"></div>
                    <span className="text-decor-red">V</span>
                  </div>
                </div>
                <div className="flex flex-col leading-none">
                  <span className="font-black text-xl tracking-tight text-white">DECORJAN</span>
                  <span className="text-[8px] font-bold tracking-[0.2em] text-decor-red">VIDRAÇARIA</span>
                </div>
              </div>
              <p className="text-slate-400 mb-6">
                Sua vidraçaria de confiança em Janaúba-MG. Qualidade, sofisticação e segurança para seu ambiente.
              </p>
              <div className="flex gap-4">
                <a href={instagramUrl} className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-decor-red transition-colors">
                  <Instagram size={20} />
                </a>
                <a href={whatsappUrl} className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-decor-red transition-colors">
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2">Links Rápidos</h4>
              <ul className="space-y-4 text-slate-400">
                <li><a href="#home" className="hover:text-white transition-colors">Início</a></li>
                <li><a href="#servicos" className="hover:text-white transition-colors">Serviços</a></li>
                <li><a href="#contato" className="hover:text-white transition-colors">Contato</a></li>
                <li><a href={whatsappUrl} className="hover:text-white transition-colors">Orçamentos</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2">Atendimento</h4>
              <ul className="space-y-4 text-slate-400">
                <li className="flex items-start gap-3">
                  <Clock size={20} className="text-decor-red mt-1" />
                  <div>
                    <p className="text-white font-medium">Segunda a Sexta</p>
                    <p>08:00 às 18:00</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock size={20} className="text-decor-red mt-1" />
                  <div>
                    <p className="text-white font-medium">Sábado</p>
                    <p>08:00 às 12:00</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2">Localização</h4>
              <ul className="space-y-4 text-slate-400">
                <li className="flex items-start gap-3">
                  <MapPin size={20} className="text-decor-red mt-1" />
                  <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Janaúba - MG<br />
                    Clique para ver no mapa
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={20} className="text-decor-red mt-1" />
                  <a href={whatsappUrl} className="hover:text-white transition-colors">
                    (38) 99127-6017
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-10 text-center text-slate-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Decorjan Vidraçaria. Todos os direitos reservados.</p>
            <p className="mt-2">Janaúba - Minas Gerais</p>
          </div>
        </div>
      </footer>

      {/* Fixed WhatsApp Button */}
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
        aria-label="Falar no WhatsApp"
      >
        <span className="absolute right-full mr-3 bg-white text-slate-900 px-4 py-2 rounded-lg text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Solicitar Orçamento
        </span>
        <MessageCircle size={32} fill="currentColor" />
      </a>
    </div>
  );
}
