import { motion, AnimatePresence } from 'motion/react';
import React, { useState, useEffect } from 'react';
import {
  Stethoscope,
  HeartPulse,
  Home,
  ShieldCheck,
  ShieldPlus,
  ArrowRight,
  Clock,
  PhoneCall,
  MapPin,
  Calendar,
  MessageCircle,
  Sparkles,
  Activity,
  Menu,
  X,
  Droplets,
  Zap,
  Bone
} from 'lucide-react';

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const STAGGER_CONTAINER = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--color-background)] font-sans text-[var(--color-text)]">
      <WelcomeGreeting />
      
      {/* --- FLOATING WHATSAPP BUTTON --- */}
      <a 
        href="https://wa.me/919874769214" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg shadow-[#25D366]/30 hover:scale-110 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group"
        aria-label="Contact on WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
          <path d="M11.9961 1.05078C5.9388 1.05078 1.02613 5.96346 1.02613 12.0207C1.02613 13.9575 1.53037 15.7766 2.4131 17.3486L1 22.4631L6.242 21.088C7.75549 21.8966 9.47953 22.3552 11.2384 22.3552C17.2957 22.3552 22.2084 17.4425 22.2084 11.3852C22.2084 5.32798 17.2957 1.05078 11.2384 1.05078V1.05078ZM11.2384 3.0182C15.8587 3.0182 19.6105 6.77 19.6105 11.3903C19.6105 16.0107 15.8587 19.7625 11.2384 19.7625C9.69766 19.7625 8.24354 19.3456 6.98031 18.6181L6.64332 18.4116L3.63393 19.2001L4.43715 16.273L4.20968 15.9082C3.3986 14.5422 2.94635 12.9863 2.94635 11.3903C2.94635 6.77 6.69811 3.0182 11.3184 3.0182H11.2384ZM17.1856 14.516C17.1121 14.4009 16.9208 14.3312 16.6341 14.1857C16.3473 14.0402 14.9351 13.3429 14.6726 13.2458C14.4102 13.1488 14.2189 13.1003 14.0278 13.3912C13.8366 13.6821 13.287 14.3312 13.1197 14.525C12.9525 14.7189 12.7853 14.7432 12.4985 14.5977C12.2117 14.4522 11.2825 14.1508 10.1783 13.1668C9.31754 12.3999 8.74102 11.4552 8.57366 11.1643C8.4063 10.8734 8.55529 10.7188 8.6992 10.575C8.82855 10.4456 8.98591 10.233 9.12982 10.0637C9.27373 9.89437 9.32168 9.77353 9.41738 9.58022C9.51307 9.38692 9.46513 9.21764 9.39343 9.07261C9.32174 8.92758 8.74811 7.5029 8.50893 6.92487C8.27581 6.36015 8.04169 6.43572 7.86438 6.42168C7.70119 6.40875 7.50993 6.40875 7.31885 6.40875C7.12778 6.40875 6.817 6.48147 6.55404 6.77237C6.29108 7.06327 5.55018 7.76646 5.55018 9.2052C5.55018 10.6439 6.57795 12.0343 6.72146 12.2282C6.86497 12.422 8.76101 15.5036 11.7583 16.6669C13.8407 17.4744 14.4828 17.5147 15.1528 17.4422C15.9329 17.3578 17.208 16.6669 17.471 15.8927C17.734 15.1186 17.734 14.464 17.6623 14.3185L17.1856 14.516Z" />
        </svg>
        <span className="absolute right-full mr-4 bg-white text-stone-800 text-sm font-medium py-1 px-3 rounded-xl shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat with us
        </span>
      </a>

      {/* --- NAVBAR --- */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center gap-2 text-[var(--color-primary)]">
            <HeartPulse className="w-8 h-8 md:w-10 md:h-10" />
            <span className={`font-serif font-bold tracking-tight ${isScrolled ? 'text-2xl md:text-3xl' : 'text-2xl md:text-3xl text-white'}`}>
              PETS WORLD
            </span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <NavLink href="#about" isScrolled={isScrolled}>About</NavLink>
            <NavLink href="#services" isScrolled={isScrolled}>Services</NavLink>
            <NavLink href="#testimonials" isScrolled={isScrolled}>Stories</NavLink>
            <NavLink href="#contact" isScrolled={isScrolled}>Contact</NavLink>
            <a 
              href="#appointment"
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                isScrolled 
                  ? 'bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] shadow-md hover:shadow-lg'
                  : 'bg-white/20 text-white backdrop-blur-sm border border-white/30 hover:bg-white hover:text-[var(--color-primary)]'
              }`}
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-[var(--color-primary)] p-2 bg-white/50 backdrop-blur-sm rounded-full"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <motion.div 
        className={`fixed inset-0 z-30 bg-white pt-24 px-6 flex flex-col gap-6 lg:hidden ${mobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: mobileMenuOpen ? 1 : 0, y: mobileMenuOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
      >
        <MobileNavLink href="#about" onClick={() => setMobileMenuOpen(false)}>About Us</MobileNavLink>
        <MobileNavLink href="#services" onClick={() => setMobileMenuOpen(false)}>Services</MobileNavLink>
        <MobileNavLink href="#testimonials" onClick={() => setMobileMenuOpen(false)}>Testimonials</MobileNavLink>
        <MobileNavLink href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</MobileNavLink>
        <a 
          href="#appointment"
          onClick={() => setMobileMenuOpen(false)}
          className="mt-4 w-full py-4 rounded-xl bg-[var(--color-primary)] text-white text-center font-medium shadow-md flex justify-center items-center gap-2"
        >
          Book Appointment <ArrowRight className="w-4 h-4"/>
        </a>
      </motion.div>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[var(--color-primary-dark)] pt-20 pb-12 lg:pb-0">
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div 
            className="max-w-xl text-white py-12"
            variants={STAGGER_CONTAINER}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={FADE_UP} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
              <Sparkles className="w-4 h-4 text-[var(--color-accent-light)]" />
              <span className="text-sm font-medium tracking-wide uppercase">Premium Pet Healthcare</span>
            </motion.div>
            
            <motion.h1 
              variants={FADE_UP}
              className="text-5xl md:text-7xl font-serif font-light leading-[1.1] mb-6"
            >
              Expert Care for <br/>
              <span className="font-bold italic text-[var(--color-accent-light)]">Hearty Pets</span>
            </motion.h1>
            
            <motion.p 
              variants={FADE_UP}
              className="text-lg md:text-xl text-white/80 font-light leading-relaxed mb-10 max-w-lg"
            >
              We provide all types of animal treatment with compassion, expertise, and state-of-the-art facilities because they are family.
            </motion.p>
            
            <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#appointment" 
                className="px-8 py-4 rounded-full bg-[var(--color-accent)] text-white font-medium hover:bg-[#c26829] transition-all duration-300 shadow-lg shadow-[var(--color-accent)]/30 flex items-center justify-center gap-2 group"
              >
                Book Appointment <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="tel:+918389858475" 
                className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white font-medium hover:bg-white hover:text-[var(--color-primary-dark)] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-5 h-5" /> Call Now
              </a>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            className="relative w-full max-w-sm mx-auto lg:max-w-none lg:w-auto lg:h-[700px] aspect-[9/16] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-[var(--color-primary)]/20 justify-self-center lg:justify-self-end"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <RightSlideshow />
          </motion.div>

        </div>

        {/* Decorative Wave/Gradient at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-background)] to-transparent z-10"></div>
      </section>

      {/* --- TRUST BAR --- */}
      <section className="relative z-20 -mt-8 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div 
          className="bg-white rounded-3xl shadow-xl shadow-black/5 p-8 grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-stone-100"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 text-[var(--color-primary)]">
            <div className="bg-[var(--color-primary)]/10 p-4 rounded-2xl">
              <Clock className="w-7 h-7 flex-shrink-0" />
            </div>
            <div>
              <h3 className="font-semibold text-teal-950">24/7 Emergency</h3>
              <p className="text-sm text-[var(--color-text-muted)]">Always here when you need</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-[var(--color-primary)] md:pl-8 pt-8 md:pt-0">
            <div className="bg-[var(--color-accent)]/10 text-[var(--color-accent)] p-4 rounded-2xl">
              <Home className="w-7 h-7 flex-shrink-0" />
            </div>
            <div>
              <h3 className="font-semibold text-teal-950">Doorstep Service</h3>
              <p className="text-sm text-[var(--color-text-muted)]">Care brought to your home</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-[var(--color-primary)] md:pl-8 pt-8 md:pt-0">
            <div className="bg-[var(--color-primary)]/10 p-4 rounded-2xl">
              <Activity className="w-7 h-7 flex-shrink-0" />
            </div>
            <div>
              <h3 className="font-semibold text-teal-950">Advanced Equipment</h3>
              <p className="text-sm text-[var(--color-text-muted)]">Modern diagnostic tools</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- ABOUT US --- */}
      <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1599443015574-be5fe8a05783?auto=format&fit=crop&w=1200&q=80" 
                alt="Vet with a cat" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-dark)]/40 to-transparent"></div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-3xl shadow-xl max-w-[200px] hidden md:block">
              <div className="flex gap-2 text-[var(--color-accent)] mb-2">
                {[1,2,3,4,5].map(i => <Sparkles key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="font-serif font-bold text-xl leading-tight">Trust & <br/><span className="italic text-[var(--color-primary)]">Compassion</span></p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[var(--color-accent)] font-medium tracking-wide uppercase text-sm mb-4">About Pets World</h2>
            <h3 className="font-serif text-4xl md:text-5xl font-light mb-8 text-teal-950">
              Because they are not just pets,<br/> <span className="font-bold italic">they are family.</span>
            </h3>
            <p className="text-lg text-[var(--color-text-muted)] leading-relaxed mb-6">
              At <strong className="text-[var(--color-primary)] font-medium">PETS WORLD</strong>, our mission is to provide compassionate, advanced veterinary care for every animal that walks through our doors. 
            </p>
            <p className="text-lg text-[var(--color-text-muted)] leading-relaxed mb-6">
              With a team of highly experienced veterinarians, state-of-the-art facilities, and a warm, inviting environment, we ensure your furry companions receive the premium healthcare they truly deserve.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- SERVICES --- */}
      <section id="services" className="py-24 bg-[var(--color-primary)]/5 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-[var(--color-accent)] font-medium tracking-wide uppercase text-sm mb-4">Our Services</h2>
            <h3 className="font-serif text-4xl md:text-5xl font-bold text-teal-950 mb-6">World-Class Healthcare</h3>
            <p className="text-[var(--color-text-muted)] text-lg">Comprehensive veterinary services tailored to meet the unique needs of your best friend.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard 
              icon={<HeartPulse />} 
              title="General Medicine" 
              desc="Comprehensive check-ups and treatments for all common illnesses."
              tooltip="Our general medicine services include thorough physical examinations, diagnosis of common ailments, and comprehensive treatment plans tailored to your pet's specific health needs and lifestyle."
            />
            <ServiceCard 
              icon={<ShieldPlus />} 
              title="Vaccination" 
              desc="Essential immunizations to protect against serious diseases."
              tooltip="We provide core and lifestyle-specific vaccinations to safeguard your pets from preventable, life-threatening diseases, ensuring they build strong immunity from a young age."
            />
            <ServiceCard 
              icon={<Activity />} 
              title="Cardiac Monitor" 
              desc="Continuous heart tracking for senior pets and chronic conditions."
              tooltip="Using advanced telemedicine and continuous monitoring tools, we keep a close eye on your pet's cardiac health, allowing for early detection and management of heart conditions."
            />
            <ServiceCard 
              icon={<Droplets />} 
              title="Skin Treatment" 
              desc="Specialized dermatology care for allergies and skin infections."
              tooltip="Our dermatology specialists diagnose and treat a variety of skin, ear, and nail conditions, from chronic allergies and infections to parasitic issues, providing fast relief."
            />
            <ServiceCard 
              icon={<Bone />} 
              title="Orthopedic Treatment" 
              desc="Expert care for joint, bone, and mobility issues."
              tooltip="We offer advanced orthopedic assessments and treatments for fractures, luxating patellas, cruciate ligament tears, and arthritis to keep your pet moving comfortably."
            />
            <ServiceCard 
              icon={<Zap />} 
              title="Advanced Diagnostics" 
              desc="ECG, NIBP, SPO2, and Pulse Rate Check-up capabilities."
              tooltip="Equipped with modern diagnostic technology, including digital radiography and ultrasound, we can quickly and accurately assess your pet's internal health without invasive procedures."
            />
            <ServiceCard 
              icon={<Stethoscope />} 
              title="Puppy/Kitten Care" 
              desc="Newborn health check-ups complete with customized diet charts."
              tooltip="Start your new companion off right with comprehensive pediatric exams, deworming, nutritional counseling, and specialized care plans designed for growing bodies."
            />
            <ServiceCard 
              icon={<Clock />} 
              title="Emergency Service" 
              desc="24/7 critical care when minutes matter the most."
              tooltip="Our emergency facility is fully staffed and equipped to handle severe traumas, toxicities, and sudden critical illnesses at any time of the day or night."
            />
            <ServiceCard 
              icon={<Home />} 
              title="Doorstep Service" 
              desc="Professional veterinary care delivered directly to your home."
              tooltip="For anxious pets or busy owners, our mobile veterinary unit brings comprehensive wellness exams, vaccinations, and basic treatments directly to the comfort of your living room."
            />
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE US --- */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-[var(--color-accent)] font-medium tracking-wide uppercase text-sm mb-4">The Pets World Difference</h2>
            <h3 className="font-serif text-4xl font-bold text-teal-950 mb-6">Why trust us with your pet?</h3>
            <p className="text-[var(--color-text-muted)] text-lg mb-8">We combine medical excellence with a deeply personal approach, ensuring both you and your pet feel comfortable, understood, and cared for.</p>
            <a href="#appointment" className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold hover:text-[var(--color-primary-dark)] transition-colors border-b-2 border-transparent hover:border-current pb-1">
              Start your journey with us <ArrowRight className="w-4 h-4"/>
            </a>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <FeatureItem title="Experienced Veterinarians" text="Our doctors board-certified specialists passionate about animal health." />
            <FeatureItem title="Modern Diagnostics" text="State-of-the-art lab and imaging equipment for rapid, accurate results." />
            <FeatureItem title="Pricing Transparency" text="Honest, upfront estimates before any treatment begins." />
            <FeatureItem title="Home Visits Available" text="Stress-free care in the comfort of your pet's familiar environment." />
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section id="testimonials" className="py-24 bg-[var(--color-primary-dark)] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
             <h2 className="text-[var(--color-accent-light)] font-medium tracking-wide uppercase text-sm mb-4">Success Stories</h2>
             <h3 className="font-serif text-4xl md:text-5xl font-light mb-6">Stories of Healing & Hope</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              name="Anirban Chatterjee" 
              pet="Max (Golden Retriever)" 
              text="The doorstep service is an absolute blessing. Dr. Roy is incredibly patient and handled Max so gently. I wouldn't trust anyone else with my boy."
            />
            <TestimonialCard 
              name="Sneha Das" 
              pet="Luna & Leo (Cats)" 
              text="Their diagnostic facilities are top-notch. When Luna fell terribly sick, their quick ECG and bloodwork saved her life. Forever grateful to Pets World."
            />
            <TestimonialCard 
              name="Rahul Mitra" 
              pet="Bruno (Labrador)" 
              text="Finally, a vet clinic in Jalpaiguri that feels like a premium hospital. Clean, professional, and transparent about pricing. Exceptional service!"
            />
          </div>
        </div>
      </section>

      {/* --- APPOINTMENT & CONTACT --- */}
      <section id="contact" className="py-24 bg-[var(--color-background)] relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-16 grid grid-cols-1 lg:grid-cols-2 gap-16 relative overflow-hidden">
            
            {/* Background design element */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-primary)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>

            {/* Form Side */}
            <div id="appointment" className="relative z-10">
              <h3 className="font-serif text-3xl font-bold text-teal-950 mb-2">Book an Appointment</h3>
              <p className="text-[var(--color-text-muted)] mb-8">We will get back to you within 2 hours to confirm your schedule.</p>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-stone-700">Your Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/50 focus:border-[var(--color-primary)] transition-all bg-stone-50/50" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-stone-700">Phone Number</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/50 focus:border-[var(--color-primary)] transition-all bg-stone-50/50" placeholder="+91 00000 00000" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-stone-700">Pet Type</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/50 focus:border-[var(--color-primary)] transition-all bg-stone-50/50 appearance-none">
                      <option>Dog</option>
                      <option>Cat</option>
                      <option>Bird</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-stone-700">Service Type</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/50 focus:border-[var(--color-primary)] transition-all bg-stone-50/50 appearance-none">
                      <option>General Medicine</option>
                      <option>Vaccination</option>
                      <option>Cardiac Monitor</option>
                      <option>Skin Treatment</option>
                      <option>Orthopedic Treatment</option>
                      <option>Advanced Diagnostics</option>
                      <option>Puppy/Kitten Care</option>
                      <option>Emergency Service</option>
                      <option>Doorstep Service</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-stone-700">Additional Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/50 focus:border-[var(--color-primary)] transition-all bg-stone-50/50 resize-none" placeholder="Briefly describe your pet's condition..."></textarea>
                </div>
                
                <button className="w-full py-4 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-dark)] transition-all duration-300 shadow-lg shadow-[var(--color-primary)]/20">
                  Request Appointment
                </button>
              </form>
            </div>

            {/* Contact Info Side */}
            <div className="relative z-10 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-3xl font-bold text-teal-950 mb-8">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center flex-shrink-0 text-[var(--color-primary)]">
                      <PhoneCall className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-teal-950 mb-1">Call Us (24/7 Available)</h4>
                      <p className="text-stone-600"><a href="tel:+918389858475" className="hover:text-[var(--color-primary)]">+91 8389858475</a></p>
                      <p className="text-stone-600"><a href="tel:+919874769214" className="hover:text-[var(--color-primary)]">+91 9874769214</a></p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center flex-shrink-0 text-[var(--color-primary)]">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-teal-950 mb-1">Clinic Address</h4>
                      <p className="text-stone-600 max-w-[250px] leading-relaxed">Vivekananda Para Road, N.C, Jalpaiguri, West Bengal 735101</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-[#25D366]/10 rounded-full flex items-center justify-center flex-shrink-0 text-[#25D366]">
                      <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                        <path d="M11.9961 1.05078C5.9388 1.05078 1.02613 5.96346 1.02613 12.0207C1.02613 13.9575 1.53037 15.7766 2.4131 17.3486L1 22.4631L6.242 21.088C7.75549 21.8966 9.47953 22.3552 11.2384 22.3552C17.2957 22.3552 22.2084 17.4425 22.2084 11.3852C22.2084 5.32798 17.2957 1.05078 11.2384 1.05078V1.05078ZM11.2384 3.0182C15.8587 3.0182 19.6105 6.77 19.6105 11.3903C19.6105 16.0107 15.8587 19.7625 11.2384 19.7625C9.69766 19.7625 8.24354 19.3456 6.98031 18.6181L6.64332 18.4116L3.63393 19.2001L4.43715 16.273L4.20968 15.9082C3.3986 14.5422 2.94635 12.9863 2.94635 11.3903C2.94635 6.77 6.69811 3.0182 11.3184 3.0182H11.2384ZM17.1856 14.516C17.1121 14.4009 16.9208 14.3312 16.6341 14.1857C16.3473 14.0402 14.9351 13.3429 14.6726 13.2458C14.4102 13.1488 14.2189 13.1003 14.0278 13.3912C13.8366 13.6821 13.287 14.3312 13.1197 14.525C12.9525 14.7189 12.7853 14.7432 12.4985 14.5977C12.2117 14.4522 11.2825 14.1508 10.1783 13.1668C9.31754 12.3999 8.74102 11.4552 8.57366 11.1643C8.4063 10.8734 8.55529 10.7188 8.6992 10.575C8.82855 10.4456 8.98591 10.233 9.12982 10.0637C9.27373 9.89437 9.32168 9.77353 9.41738 9.58022C9.51307 9.38692 9.46513 9.21764 9.39343 9.07261C9.32174 8.92758 8.74811 7.5029 8.50893 6.92487C8.27581 6.36015 8.04169 6.43572 7.86438 6.42168C7.70119 6.40875 7.50993 6.40875 7.31885 6.40875C7.12778 6.40875 6.817 6.48147 6.55404 6.77237C6.29108 7.06327 5.55018 7.76646 5.55018 9.2052C5.55018 10.6439 6.57795 12.0343 6.72146 12.2282C6.86497 12.422 8.76101 15.5036 11.7583 16.6669C13.8407 17.4744 14.4828 17.5147 15.1528 17.4422C15.9329 17.3578 17.208 16.6669 17.471 15.8927C17.734 15.1186 17.734 14.464 17.6623 14.3185L17.1856 14.516Z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-teal-950 mb-1">WhatsApp Chat & Reports</h4>
                      <p className="text-stone-600"><a href="https://wa.me/919874769214" className="hover:text-[#25D366]">Send reports or chat with our desk</a></p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-10 h-64 w-full rounded-2xl overflow-hidden bg-stone-200 border border-stone-100 relative group">
                <iframe 
                  title="Pets World Location"
                  src="https://maps.google.com/maps?q=Vivekananda%20Para%20Road,%20N.C,%20Jalpaiguri,%20West%20Bengal%20735101&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[var(--color-primary-dark)] text-white pt-20 pb-10 border-t border-[var(--color-primary)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-1.5 lg:col-span-2">
              <div className="flex items-center gap-2 mb-6 text-white">
                <HeartPulse className="w-8 h-8 text-[var(--color-accent-light)]" />
                <span className="font-serif font-bold text-2xl tracking-tight">PETS WORLD</span>
              </div>
              <p className="text-stone-300 font-light max-w-sm mb-6 leading-relaxed">
                Expert Care for Hearty Pets. Delivering premium veterinary medicine with deep compassion in state-of-the-art facilities.
              </p>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/share/1GJztCLPig/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-accent)] transition-colors">
                  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                    <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H7.5V12H10V9.5C10 7.03 11.47 5.66 13.68 5.66C14.75 5.66 15.88 5.86 15.88 5.86V8.25H14.64C13.43 8.25 13.06 9 13.06 9.77V12H15.78L15.34 15H13.06V21.8C17.62 20.83 22 16.82 22 12Z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-4 text-stone-300">
                <li><a href="#about" className="hover:text-[var(--color-accent-light)] transition-colors">About Us</a></li>
                <li><a href="#services" className="hover:text-[var(--color-accent-light)] transition-colors">All Services</a></li>
                <li><a href="#testimonials" className="hover:text-[var(--color-accent-light)] transition-colors">Pet Stories</a></li>
                <li><a href="#appointment" className="hover:text-[var(--color-accent-light)] transition-colors">Book Appointment</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-6">Working Hours</h4>
              <ul className="space-y-4 text-stone-300">
                <li className="flex justify-between"><span>Everyday:</span> <span className="text-white">9AM - 9PM</span></li>
                <li className="flex justify-between border-t border-[var(--color-primary)] pt-4 mt-2">
                  <span className="text-[var(--color-accent-light)] font-medium">Emergencies:</span> 
                  <span className="text-white font-medium">24/7</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-[var(--color-primary)] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-stone-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Pets World Clinic. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* Helper Components */

function NavLink({ href, children, isScrolled }: { href: string, children: React.ReactNode, isScrolled: boolean }) {
  return (
    <a 
      href={href} 
      className={`font-medium tracking-wide text-sm border-b-2 border-transparent transition-all duration-300 hover:-translate-y-0.5 ${
        isScrolled 
          ? 'text-stone-700 hover:text-[var(--color-primary)] hover:border-[var(--color-primary)]' 
          : 'text-white/90 hover:text-white hover:border-white'
      }`}
    >
      {children}
    </a>
  );
}

function MobileNavLink({ href, children, onClick }: { href: string, children: React.ReactNode, onClick: () => void }) {
  return (
    <a 
      href={href}
      onClick={onClick}
      className="text-2xl font-serif font-medium text-teal-950 border-b border-stone-100 pb-4 w-full"
    >
      {children}
    </a>
  );
}

function ServiceCard({ icon, title, desc, tooltip }: { icon: React.ReactNode, title: string, desc: string, tooltip: string }) {
  return (
    <motion.div 
      variants={FADE_UP}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className="bg-white p-8 rounded-[2rem] shadow-lg shadow-black/[0.03] hover:shadow-xl hover:shadow-[var(--color-primary)]/10 hover:-translate-y-2 transition-all duration-300 group border border-stone-50 relative"
    >
      <div className="w-14 h-14 bg-[var(--color-background)] rounded-2xl flex items-center justify-center text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors duration-300 mb-6">
        {React.cloneElement(icon as React.ReactElement, { className: 'w-7 h-7' })}
      </div>
      <h4 className="font-serif text-2xl font-bold text-teal-950 mb-3">{title}</h4>
      <p className="text-[var(--color-text-muted)] leading-relaxed">{desc}</p>
      
      {/* Tooltip Overlay */}
      <div className="absolute inset-0 bg-[var(--color-primary)] text-white p-6 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center pointer-events-none z-10">
        <h4 className="font-serif text-xl font-bold mb-2">{title}</h4>
        <p className="text-sm text-stone-100 leading-relaxed">{tooltip}</p>
      </div>
    </motion.div>
  );
}

function FeatureItem({ title, text }: { title: string, text: string }) {
  return (
    <div className="flex gap-4">
      <div className="mt-1 w-6 h-6 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] flex items-center justify-center flex-shrink-0">
        <ShieldCheck className="w-4 h-4" />
      </div>
      <div>
        <h4 className="font-bold text-teal-950 mb-2">{title}</h4>
        <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{text}</p>
      </div>
    </div>
  );
}

function TestimonialCard({ name, pet, text }: { name: string, pet: string, text: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-[var(--color-primary)]/40 p-8 rounded-[2rem] border border-white/10 hover:border-white/20 transition-colors"
    >
      <div className="flex gap-1 text-[var(--color-accent)] mb-6">
        {[1,2,3,4,5].map(i => <Sparkles key={i} className="w-4 h-4 fill-current" />)}
      </div>
      <p className="text-stone-200 italic text-lg leading-relaxed mb-8">"{text}"</p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white font-serif font-bold text-xl uppercase">
          {name.charAt(0)}
        </div>
        <div>
          <h5 className="font-semibold text-white">{name}</h5>
          <p className="text-sm text-[var(--color-accent-light)]">Pet: {pet}</p>
        </div>
      </div>
    </motion.div>
  );
}

function WelcomeGreeting() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.8, transition: { duration: 0.4 } }}
          transition={{ type: 'spring', bounce: 0.4, duration: 0.8 }}
          className="fixed bottom-6 left-6 z-50 drop-shadow-xl pointer-events-none"
        >
          <div className="relative bg-white/90 backdrop-blur-md p-4 rounded-2xl rounded-bl-sm border border-stone-100 flex items-center gap-4">
            <div className="w-12 h-12 relative flex items-center justify-center">
              {/* Dog head svg */}
              <svg viewBox="0 0 64 64" className="w-10 h-10">
                <path d="M40.5,23.5c-0.8-2.5-3.3-4-5.9-3.5c-0.6,0.1-1.3,0.3-1.9,0.5c-0.7,0.3-1.4,0.6-2.1,0.9
                  c-0.7-0.3-1.4-0.6-2.1-0.9c-0.6-0.2-1.2-0.4-1.9-0.5c-2.6-0.5-5.1,1-5.9,3.5c-0.8,2.7-0.4,5.9,0.3,8.5c0.5,1.9,1.2,3.7,2.1,5.3
                  c1.3,2.3,3.1,4.4,5.2,6c1.3,1,2.9,1.5,4.5,1.5c1.6,0,3.2-0.5,4.5-1.5c2.1-1.6,3.9-3.7,5.2-6c0.9-1.6,1.6-3.4,2.1-5.3
                  C40.9,29.4,41.3,26.2,40.5,23.5z" fill="#ea580c"/>
                {/* Ears */}
                <motion.path 
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  style={{ originX: 0.8, originY: 0.2 }}
                  d="M19.5,21.5c-1.2-3.1-4-5.3-7.2-5.7c-3.1-0.4-6.3,1.3-7.7,4.2c-1.3,2.7-1.1,6.1,0.5,8.8c1.3,2.2,3.4,3.9,5.8,4.7
                  c2.3,0.8,4.9,0.8,7.2-0.2C19.7,31.7,20.8,28.7,19.5,21.5z" fill="#9a3412"/>
                <motion.path 
                  animate={{ rotate: [0, -5, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.2 }}
                  style={{ originX: 0.2, originY: 0.2 }}
                  d="M44.5,21.5c1.2-3.1,4-5.3,7.2-5.7c3.1-0.4,6.3,1.3,7.7,4.2c1.3,2.7,1.1,6.1-0.5,8.8c-1.3,2.2-3.4,3.9-5.8,4.7
                  c-2.3,0.8-4.9,0.8-7.2-0.2C44.3,31.7,43.2,28.7,44.5,21.5z" fill="#9a3412"/>
                {/* Nose */}
                <circle cx="32" cy="38" r="3" fill="#292524"/>
                {/* Eyes */}
                <circle cx="26" cy="30" r="2.5" fill="#292524"/>
                <circle cx="38" cy="30" r="2.5" fill="#292524"/>
              </svg>

              {/* Sparkle */}
              <motion.div
                animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="absolute -top-2 -right-2 text-xl"
              >
                ✨
              </motion.div>
            </div>
            <div>
              <h4 className="font-serif font-bold text-lg text-teal-950 leading-none mb-1">Welcome!</h4>
              <p className="text-xs font-medium text-stone-500">We love pets as much as you do.</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const HERO_IMAGES = [
  { url: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1200&q=80", alt: "Happy dog face" },
  { url: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1200&q=80", alt: "Curious cat face" },
  { url: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=80", alt: "Dog face" },
  { url: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1200&q=80", alt: "Cute puppy face" }
];

function RightSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 bg-stone-100">
      <AnimatePresence initial={false}>
        <motion.img
          key={currentIndex}
          src={HERO_IMAGES[currentIndex].url}
          alt={HERO_IMAGES[currentIndex].alt}
          className="absolute inset-0 w-full h-full object-cover object-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          referrerPolicy="no-referrer"
        />
      </AnimatePresence>
    </div>
  );
}
