import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  MapPin, 
  Mail, 
  Menu, 
  X, 
  ChevronRight, 
  ArrowRight, 
  Instagram, 
  Facebook, 
  Linkedin,
  Compass,
  Home,
  Hammer,
  Award,
  Users,
  CheckCircle2
} from 'lucide-react';

// --- Types ---
interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

// --- Data ---
const PROJECTS: Project[] = [
  { id: 1, title: 'Căn hộ Penthouse Vista', category: 'Nội thất căn hộ', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1000' },
  { id: 2, title: 'Biệt thự Thảo Điền', category: 'Thiết kế kiến trúc', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1000' },
  { id: 3, title: 'Văn phòng Creative Hub', category: 'Nội thất văn phòng', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000' },
  { id: 4, title: 'Nhà phố Modern Minimalist', category: 'Thi công trọn gói', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1000' },
  { id: 5, title: 'Showroom Luxury Car', category: 'Nội thất thương mại', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1000' },
  { id: 6, title: 'Căn hộ Studio Indochine', category: 'Nội thất căn hộ', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1000' },
];

const SERVICES: Service[] = [
  { 
    id: 1, 
    title: 'Thiết kế kiến trúc', 
    description: 'Kiến tạo không gian sống đẳng cấp, tối ưu công năng và thẩm mỹ bền vững theo thời gian.',
    icon: <Compass className="w-8 h-8" />
  },
  { 
    id: 2, 
    title: 'Thiết kế nội thất', 
    description: 'Sáng tạo phong cách riêng biệt, phản chiếu cá tính và gu thẩm mỹ tinh tế của gia chủ.',
    icon: <Home className="w-8 h-8" />
  },
  { 
    id: 3, 
    title: 'Thi công trọn gói', 
    description: 'Quy trình thi công chuyên nghiệp, cam kết tiến độ và chất lượng hoàn thiện tỉ mỉ nhất.',
    icon: <Hammer className="w-8 h-8" />
  },
];

const PROCESS_STEPS = [
  { title: 'Tư vấn & Khảo sát', desc: 'Lắng nghe nhu cầu và khảo sát thực trạng mặt bằng.' },
  { title: 'Thiết kế ý tưởng', desc: 'Phác thảo layout và phối cảnh 3D chi tiết.' },
  { title: 'Báo giá & Ký hợp đồng', desc: 'Minh bạch chi phí và cam kết chất lượng.' },
  { title: 'Sản xuất & Thi công', desc: 'Gia công tại xưởng và lắp đặt hoàn thiện.' },
  { title: 'Bàn giao & Bảo hành', desc: 'Nghiệm thu và chăm sóc sau bán hàng tận tâm.' },
];

// --- Components ---

const Logo = ({ className = "w-12 h-12", isLight = false }) => (
  <div className={`flex items-center ${className}`}>
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 80V40L35 20L60 40V80H10Z" stroke={isLight ? "white" : "#94ADA8"} strokeWidth="1.5" />
      <path d="M25 80V30L50 10L75 30V80H25Z" stroke={isLight ? "white" : "#94ADA8"} strokeWidth="1.5" />
      <path d="M38 80V65H52V80" stroke={isLight ? "white" : "#94ADA8"} strokeWidth="1.5" />
    </svg>
    <div className="ml-2 flex flex-col leading-none">
      <span className={`text-2xl font-bold tracking-tighter ${isLight ? 'text-white' : 'text-sage'}`}>PMA</span>
      <span className={`text-lg -mt-1 font-script ${isLight ? 'text-white/90' : 'text-charcoal'}`}>house</span>
    </div>
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <Logo isLight={!isScrolled} className="h-12" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {['Trang chủ', 'Về chúng tôi', 'Dịch vụ', 'Dự án', 'Liên hệ'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(/\s/g, '-')}`} 
              className={`text-sm uppercase tracking-widest font-medium transition-colors hover:text-sage ${isScrolled ? 'text-charcoal' : 'text-white'}`}
            >
              {item}
            </a>
          ))}
          <a 
            href="tel:0931617799" 
            className={`px-6 py-2 rounded-full border text-xs uppercase tracking-widest font-semibold transition-all ${isScrolled ? 'border-charcoal text-charcoal hover:bg-charcoal hover:text-white' : 'border-white text-white hover:bg-white hover:text-charcoal'}`}
          >
            Hotline: 0931 617 799
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? 'text-dark' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-dark' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-8 px-6 md:hidden flex flex-col space-y-6"
          >
            {['Trang chủ', 'Về chúng tôi', 'Dịch vụ', 'Dự án', 'Liên hệ'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(/\s/g, '-')}`} 
                className="text-lg font-serif text-dark border-b border-gray-100 pb-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a href="tel:0931617799" className="text-gold font-bold text-xl">0931 617 799</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="trang-chủ" className="relative h-screen w-full overflow-hidden flex items-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Interior" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="text-sage uppercase tracking-[0.3em] text-sm font-semibold mb-4 block">Kiến tạo không gian sống</span>
          <h1 className="text-6xl md:text-9xl text-white mb-8 leading-tight font-serif">
            PMA <span className="font-script text-sage-dark">house</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl mb-10 max-w-xl font-light leading-relaxed">
            PMA house mang đến giải pháp thiết kế và thi công nội thất trọn gói, 
            biến ngôi nhà mơ ước của bạn thành hiện thực với sự tinh tế và chuyên nghiệp nhất.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-sage text-white px-10 py-4 rounded-full text-sm uppercase tracking-widest font-bold hover:bg-white hover:text-charcoal transition-all flex items-center justify-center group">
              Khám phá dự án
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-white text-white px-10 py-4 rounded-full text-sm uppercase tracking-widest font-bold hover:bg-white hover:text-charcoal transition-all">
              Nhận tư vấn ngay
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-16 bg-white/30 relative">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-sage" />
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="về-chúng-tôi" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80&w=1000" 
                alt="PMA house Interior Design" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-sage p-8 rounded-2xl hidden md:block">
              <div className="text-white text-center">
                <span className="text-5xl font-serif font-bold block">10+</span>
                <span className="text-xs uppercase tracking-widest font-semibold">Năm kinh nghiệm</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sage uppercase tracking-widest text-sm font-bold mb-4 block">Về PMA house</span>
            <h2 className="text-4xl md:text-5xl mb-8 leading-tight">Sứ mệnh kiến tạo <br /> giá trị thẩm mỹ</h2>
            <p className="text-charcoal/80 mb-6 leading-relaxed">
              Tại PMA house, chúng tôi tin rằng mỗi không gian sống là một tác phẩm nghệ thuật phản chiếu tâm hồn của gia chủ. Với đội ngũ kiến trúc sư và thợ lành nghề, chúng tôi không chỉ xây dựng những bức tường, mà còn kiến tạo nên những tổ ấm đong đầy cảm xúc.
            </p>
            <p className="text-charcoal/80 mb-10 leading-relaxed">
              Chúng tôi cam kết mang đến những giải pháp tối ưu nhất về công năng, thẩm mỹ và chi phí, đồng hành cùng khách hàng từ những ý tưởng sơ khai đến khi bàn giao chìa khóa trao tay.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="bg-mint-bg p-3 rounded-lg">
                  <Award className="text-sage w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Chất lượng</h4>
                  <p className="text-xs text-charcoal/50">Tiêu chuẩn thi công cao cấp</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-mint-bg p-3 rounded-lg">
                  <Users className="text-sage w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Tận tâm</h4>
                  <p className="text-xs text-charcoal/50">Lắng nghe và thấu hiểu</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="dịch-vụ" className="py-24 bg-mint-bg">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sage uppercase tracking-widest text-sm font-bold mb-4 block">Dịch vụ của chúng tôi</span>
          <h2 className="text-4xl md:text-5xl mb-6">Giải pháp toàn diện cho không gian của bạn</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="w-16 h-16 bg-mint-bg rounded-2xl flex items-center justify-center text-sage mb-8 group-hover:bg-sage group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl mb-4">{service.title}</h3>
              <p className="text-charcoal/60 mb-8 leading-relaxed">
                {service.description}
              </p>
              <a href="#" className="flex items-center text-sm font-bold uppercase tracking-widest group-hover:text-sage transition-colors">
                Xem chi tiết <ChevronRight className="ml-1 w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const [filter, setFilter] = useState('Tất cả');
  const categories = ['Tất cả', 'Nội thất căn hộ', 'Thiết kế kiến trúc', 'Nội thất văn phòng', 'Thi công trọn gói'];

  const filteredProjects = filter === 'Tất cả' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="dự-án" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <span className="text-sage uppercase tracking-widest text-sm font-bold mb-4 block">Dự án tiêu biểu</span>
            <h2 className="text-4xl md:text-5xl">Những công trình <br /> tâm huyết từ PMA house</h2>
          </div>
          <div className="flex flex-wrap gap-4">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-xs uppercase tracking-widest font-bold transition-all ${filter === cat ? 'bg-charcoal text-white' : 'bg-mint-bg text-charcoal/50 hover:bg-sage/10'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div 
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative overflow-hidden rounded-2xl aspect-[4/5]"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <span className="text-sage text-xs uppercase tracking-widest font-bold mb-2">{project.category}</span>
                  <h3 className="text-white text-2xl mb-4">{project.title}</h3>
                  <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-charcoal hover:bg-sage hover:text-white transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-16 text-center">
          <button className="border-b-2 border-charcoal pb-2 text-sm uppercase tracking-widest font-bold hover:text-sage hover:border-sage transition-all">
            Xem tất cả dự án
          </button>
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  return (
    <section className="py-24 bg-charcoal text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-sage uppercase tracking-widest text-sm font-bold mb-4 block">Quy trình làm việc</span>
          <h2 className="text-4xl md:text-5xl">Chuyên nghiệp & Minh bạch</h2>
        </div>

        <div className="relative">
          {/* Line */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 hidden lg:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 relative z-10">
            {PROCESS_STEPS.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-sage text-2xl font-serif font-bold mx-auto mb-8 group-hover:bg-sage group-hover:text-white transition-all duration-500">
                  0{idx + 1}
                </div>
                <h4 className="text-xl mb-4 font-serif">{step.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="liên-hệ" className="py-24 bg-mint-bg">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          <div className="p-12 md:p-20">
            <span className="text-sage uppercase tracking-widest text-sm font-bold mb-4 block">Liên hệ với chúng tôi</span>
            <h2 className="text-4xl md:text-5xl mb-10">Bắt đầu hành trình kiến tạo không gian</h2>
            
            <div className="space-y-8">
              <div className="flex items-center space-x-6">
                <div className="w-12 h-12 bg-mint-bg rounded-full flex items-center justify-center text-sage">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-charcoal/40 uppercase tracking-widest font-bold">Hotline</p>
                  <a href="tel:0931617799" className="text-xl font-medium hover:text-sage transition-colors">0931 617 799</a>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="w-12 h-12 bg-mint-bg rounded-full flex items-center justify-center text-sage">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-charcoal/40 uppercase tracking-widest font-bold">Địa chỉ</p>
                  <p className="text-lg">34M3, Phường Phước Long, TP.HCM</p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="w-12 h-12 bg-mint-bg rounded-full flex items-center justify-center text-sage">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-charcoal/40 uppercase tracking-widest font-bold">Email</p>
                  <a href="mailto:info@pmadecor.vn" className="text-lg hover:text-sage transition-colors">info@pmadecor.vn</a>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-gray-100 flex space-x-6">
              <a href="#" className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-charcoal/40 hover:bg-sage hover:text-white hover:border-sage transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-charcoal/40 hover:bg-sage hover:text-white hover:border-sage transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-charcoal/40 hover:bg-sage hover:text-white hover:border-sage transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="bg-charcoal p-12 md:p-20 text-white">
            <h3 className="text-3xl mb-8 font-serif">Gửi yêu cầu tư vấn</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-white/50">Họ và tên</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-sage transition-colors" placeholder="Nguyễn Văn A" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-white/50">Số điện thoại</label>
                  <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-sage transition-colors" placeholder="090 123 4567" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-white/50">Dịch vụ quan tâm</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-sage transition-colors appearance-none">
                  <option className="bg-charcoal">Thiết kế nội thất</option>
                  <option className="bg-charcoal">Thiết kế kiến trúc</option>
                  <option className="bg-charcoal">Thi công trọn gói</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-white/50">Lời nhắn</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-sage transition-colors" placeholder="Mô tả sơ lược về nhu cầu của bạn..."></textarea>
              </div>
              <button className="w-full bg-sage text-white py-4 rounded-xl text-sm uppercase tracking-widest font-bold hover:bg-white hover:text-charcoal transition-all">
                Gửi yêu cầu ngay
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <Logo isLight className="h-16 mb-8" />
            <p className="text-white/50 leading-relaxed mb-8">
              Đơn vị thiết kế và thi công nội thất uy tín hàng đầu tại TP.HCM. Chúng tôi cam kết mang lại không gian sống đẳng cấp và tinh tế cho mọi khách hàng.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-serif mb-8">Liên kết nhanh</h4>
            <ul className="space-y-4 text-white/50 text-sm">
              <li><a href="#" className="hover:text-sage transition-colors">Trang chủ</a></li>
              <li><a href="#" className="hover:text-sage transition-colors">Về chúng tôi</a></li>
              <li><a href="#" className="hover:text-sage transition-colors">Dịch vụ</a></li>
              <li><a href="#" className="hover:text-sage transition-colors">Dự án</a></li>
              <li><a href="#" className="hover:text-sage transition-colors">Tin tức</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif mb-8">Dịch vụ</h4>
            <ul className="space-y-4 text-white/50 text-sm">
              <li><a href="#" className="hover:text-sage transition-colors">Thiết kế nội thất căn hộ</a></li>
              <li><a href="#" className="hover:text-sage transition-colors">Thiết kế nội thất biệt thự</a></li>
              <li><a href="#" className="hover:text-sage transition-colors">Thiết kế nội thất văn phòng</a></li>
              <li><a href="#" className="hover:text-sage transition-colors">Thi công trọn gói</a></li>
              <li><a href="#" className="hover:text-sage transition-colors">Sản xuất đồ gỗ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif mb-8">Bản tin</h4>
            <p className="text-white/50 text-sm mb-6">Đăng ký để nhận những xu hướng thiết kế mới nhất.</p>
            <div className="flex">
              <input type="email" placeholder="Email của bạn" className="bg-white/5 border border-white/10 rounded-l-xl px-4 py-3 text-sm focus:outline-none w-full" />
              <button className="bg-sage px-4 rounded-r-xl hover:bg-white hover:text-charcoal transition-all">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/30 text-xs">
            © 2026 PMA house. All rights reserved. Designed with passion.
          </p>
          <div className="flex space-x-8 text-white/30 text-xs">
            <a href="#" className="hover:text-white transition-colors">Chính sách bảo mật</a>
            <a href="#" className="hover:text-white transition-colors">Điều khoản sử dụng</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Process />
        <Contact />
      </main>
      <Footer />
      
      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 z-40 flex flex-col space-y-4">
        <a 
          href="https://zalo.me/0931617799" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-14 h-14 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        >
          <span className="font-bold text-xs">Zalo</span>
        </a>
        <a 
          href="tel:0931617799" 
          className="w-14 h-14 bg-sage text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-pulse"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}

