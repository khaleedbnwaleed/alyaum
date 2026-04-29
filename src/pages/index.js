import Head from 'next/head'
import Layout from '@/components/Layout'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import bgImage from '../../public/images/bg-image.jpg'
import binAmeenImg from '../../public/images/bin-ameen.png'
import iksNigeriaImg from '../../public/images/iks-nigeria.png'
import sharaEcoImg from '../../public/images/Shara_Eco.png'
import gallery1 from '../../public/images/1.jpeg'
import gallery2 from '../../public/images/2.jpeg'
import gallery3 from '../../public/images/3.jpeg'
import gallery4 from '../../public/images/4.jpeg'
import amigoImg from '../../public/images/Amigo.jpg'
import ibrahimImg from '../../public/images/Ibrahim.png'
import abdulImg from '../../public/images/Abdul.jpg'
import Link from 'next/link'
import { SiWebmoney } from 'react-icons/si'
import { FaDesktop } from 'react-icons/fa'
import { PiDevicesBold } from 'react-icons/pi'
import { MdCheckCircle, MdArrowForward } from 'react-icons/md'
import {
  TwitterIcon,
  GithubIcon,
  LinkedInIcon,
  LinkArrow,
} from '../components/Icons'

const Products = ({ title, summary, icon, link }) => {
  return (
    <div className="card-hover p-8 text-center fade-in">
      <div className="flex justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-4 text-slate-900">{title}</h3>
      <p className="text-slate-600 mb-6 leading-relaxed">{summary}</p>
      {link}
    </div>
  )
}

const Services = ({ service, description, icon }) => {
  return (
    <div className="card-hover p-8 text-center fade-in">
      <div className="flex justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-4 text-slate-900">{service}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  )
}

const Team = ({
  fullName,
  name,
  bio,
  img,
  twitterLink,
  linkedInLink,
  githubLink,
}) => {
  return (
    <div className="card-hover p-6 text-center fade-in">
      <img
        src={img}
        alt={name}
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
      />
      <h3 className="text-xl font-semibold mb-2 text-slate-900">{fullName}</h3>
      <p className="text-slate-600 mb-6 text-sm leading-relaxed">{bio}</p>
      <div className="flex justify-center gap-4">
        <a
          href={twitterLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-6 h-6 text-slate-400 hover:text-primary transition-colors"
        >
          <TwitterIcon />
        </a>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-6 h-6 text-slate-400 hover:text-primary transition-colors"
        >
          <GithubIcon />
        </a>
        <a
          href={linkedInLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-6 h-6 text-slate-400 hover:text-primary transition-colors"
        >
          <LinkedInIcon />
        </a>
      </div>
    </div>
  )
}

const GalleryCarousel = ({ gallery1, gallery2, gallery3, gallery4 }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    { image: gallery1, title: 'Datathon Competition', alt: 'Click-on-Kaduna Datathon 2022 - Team Competition Moment 1' },
    { image: gallery2, title: 'Team Collaboration', alt: 'Click-on-Kaduna Datathon 2022 - Team Collaboration Moment 2' },
    { image: gallery3, title: 'Award Recognition', alt: 'Click-on-Kaduna Datathon 2022 - Award Recognition Moment 3' },
    { image: gallery4, title: 'Team Achievement', alt: 'Click-on-Kaduna Datathon 2022 - Team Achievement Moment 4' },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="space-y-6">
      {/* Main Carousel */}
      <div className="relative w-full h-80 md:h-64 bg-slate-100 rounded-lg overflow-hidden group">
        <div className="relative w-full h-full">
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].alt}
            fill
            sizes="(max-width: 768px) 100vw, 100vw"
            className="object-cover"
          />
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-3 rounded-full transition-all duration-300 shadow-lg"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-3 rounded-full transition-all duration-300 shadow-lg"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Slide Counter */}
        <div className="absolute bottom-4 right-4 bg-black/60 text-white px-4 py-2 rounded-full text-sm font-semibold">
          {currentSlide + 1} / {slides.length}
        </div>
      </div>

      {/* Slide Info and Indicators */}
      <div className="space-y-4">
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-slate-900 mb-2">{slides[currentSlide].title}</h3>
          <p className="text-slate-600">Moment {currentSlide + 1} of {slides.length}</p>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-accent w-8' : 'bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Thumbnail Grid */}
      <div className="grid grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-4">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`relative h-24 rounded-lg overflow-hidden transition-all duration-300 ${
              index === currentSlide ? 'ring-2 ring-accent scale-105' : 'ring-2 ring-transparent hover:ring-slate-300'
            }`}
          >
            <Image
              src={slide.image}
              alt={`Thumbnail ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}

const TeamCarousel = ({ teamMembers }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(teamMembers.length / 3))
    }, 3000)
    return () => clearInterval(interval)
  }, [teamMembers.length])

  const itemsPerSlide = 3
  const totalSlides = Math.ceil(teamMembers.length / itemsPerSlide)
  const visibleMembers = teamMembers.slice(
    currentSlide * itemsPerSlide,
    (currentSlide + 1) * itemsPerSlide
  )

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  return (
    <div className="space-y-6">
      {/* Carousel Container */}
      <div className="relative">
        <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
          {visibleMembers.map((member, index) => (
            <Team
              key={index}
              fullName={member.fullName}
              name={member.name}
              bio={member.bio}
              img={member.img}
              twitterLink={member.twitterLink}
              linkedInLink={member.linkedInLink}
              githubLink={member.githubLink}
            />
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute -left-16 md:-left-12 top-1/2 -translate-y-1/2 z-10 bg-primary hover:bg-primary/90 p-3 rounded-full transition-all duration-300 shadow-lg text-white"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute -right-16 md:-right-12 top-1/2 -translate-y-1/2 z-10 bg-primary hover:bg-primary/90 p-3 rounded-full transition-all duration-300 shadow-lg text-white"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center gap-3">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-primary w-8' : 'bg-slate-300 hover:bg-slate-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

const HeroSection = () => {
  return (
    <section className="section bg-gradient-to-br from-slate-50 to-white">
      <div className="grid grid-cols-2 md:grid-cols-1 gap-12 md:gap-8 items-center">
        <div className="slide-in-left space-y-8">
          <div>
            <h1 className="text-6xl md:text-4xl sm:text-3xl font-bold text-slate-900 mb-4 leading-tight">
              Turning Imaginations Into Reality
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
          </div>
          <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
            We specialize in software solutions for growing businesses. Customized software streamlines processes and helps you realize your dream of a thriving business.
          </p>
          <div className="flex gap-4 md:flex-col flex-wrap">
            <Link href="#contact" className="btn-primary inline-flex">
              Get Started
              <MdArrowForward className="w-5 h-5 ml-2" />
            </Link>
            <Link href="#about" className="btn-secondary inline-flex">
              Learn More
            </Link>
          </div>
        </div>
        <div className="slide-in-right">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl blur-2xl"></div>
            <Image
              src={bgImage}
              alt="Technology Solutions"
              className="w-full h-auto rounded-2xl shadow-lg relative z-10"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

const AboutSection = () => {
  return (
    <section className="section bg-gradient-to-b from-slate-50 to-white" id="about">
      <div className="section-title">
        <h2>About AlyaumTech</h2>
        <p>Driving innovation through technology</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-1 gap-12 md:gap-8">
        <div className="fade-in card p-8 border-l-4 border-primary">
          <h3 className="text-2xl font-semibold mb-4 text-slate-900 flex items-center gap-2">
            <span className="text-primary">✓</span> Our Mission
          </h3>
          <p className="text-slate-600 leading-relaxed">
            To empower businesses with cutting-edge software solutions, leveraging innovative technologies,
            and delivering exceptional value through tailored development services.
          </p>
        </div>
        <div className="fade-in card p-8 border-l-4 border-secondary">
          <h3 className="text-2xl font-semibold mb-4 text-slate-900 flex items-center gap-2">
            <span className="text-secondary">◆</span> Our Vision
          </h3>
          <p className="text-slate-600 leading-relaxed">
            To be a leading software development partner for startups, recognized for our commitment to
            excellence, agility in delivery, and driving digital transformation through impactful solutions.
          </p>
        </div>
      </div>
    </section>
  )
}
export default function Home() {
  const teamMembers = [
    {
      fullName: "Usman Yahaya",
      name: "usman",
      bio: "Frontend Developer || Data Scientist || UI/UX Designer",
      img: "/images/usman.jpg",
      githubLink: "https://github.com/Usmaniyya",
      twitterLink: "https://twitter.com/Y_Uthmaan",
      linkedInLink: "https://linkedin.com",
    },
    {
      fullName: "Khalid Abdullahi",
      name: "khalid",
      bio: "Backend Developer || Data Analyst || Project Manager",
      img: "/images/khalid.jpg",
      githubLink: "#",
      twitterLink: "#",
      linkedInLink: "#",
    },
    {
      fullName: "Umar Suleiman",
      name: "umar",
      bio: "Product Designer || UI/UX Designer || Software Analyst",
      img: "/images/umar.jpg",
      githubLink: "#",
      twitterLink: "#",
      linkedInLink: "#",
    },
    {
      fullName: "Salisu Ibrahim",
      name: "salisu",
      bio: "Data Scientist || Data Analyst || Machine Learning Engineer",
      img: "/images/salisu.jpg",
      githubLink: "#",
      twitterLink: "#",
      linkedInLink: "#",
    },
    {
      fullName: "Muhammad K. Muhammad",
      name: "amigo",
      bio: "Chief Technology Officer",
      img: "/images/Amigo.jpg",
      githubLink: "#",
      twitterLink: "#",
      linkedInLink: "#",
    },
    {
      fullName: "Ibrahim Suleiman",
      name: "ibrahim",
      bio: "Technical Officer",
      img: "/images/Ibrahim.png",
      githubLink: "#",
      twitterLink: "#",
      linkedInLink: "#",
    },
    {
      fullName: "Abdulhakim Aminu",
      name: "abdul",
      bio: "Project Lead",
      img: "/images/Abdul.jpg",
      githubLink: "#",
      twitterLink: "#",
      linkedInLink: "#",
    },
  ]

  return (
    <>
      <Head>
        <title>AlyaumTech - Innovative Software Solutions</title>
        <meta name="description" content="Empowering businesses with cutting-edge software solutions. Web development, software consultancy, and innovative technology services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Layout>
          <HeroSection />

          <AboutSection />

          <section className="section" id="products">
            <div className="section-title">
              <h2>Recent Projects</h2>
              <p>Showcasing our successful client engagements and completed projects</p>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
              <a href="https://www.binameenconsulting.com.ng/" target="_blank" rel="noopener noreferrer" className="card-hover overflow-hidden group">
                <div className="relative w-full h-64 bg-slate-100">
                  <Image src={binAmeenImg} alt="Bin-Ameen Consulting" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-contain p-6 hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Bin-Ameen Consulting</h3>
                  <p className="text-slate-600 text-sm mb-4">Professional consulting services and solutions</p>
                  <span className="inline-flex items-center text-accent font-semibold group-hover:translate-x-1 transition-transform">Visit Site <MdArrowForward className="ml-2" /></span>
                </div>
              </a>
              <a href="https://www.iksnigeria.ng/" target="_blank" rel="noopener noreferrer" className="card-hover overflow-hidden group">
                <div className="relative w-full h-64 bg-slate-100">
                  <Image src={iksNigeriaImg} alt="IKS Nigeria" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-contain p-6 hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">IKS Nigeria</h3>
                  <p className="text-slate-600 text-sm mb-4">Innovation and knowledge solutions for growth</p>
                  <span className="inline-flex items-center text-accent font-semibold group-hover:translate-x-1 transition-transform">Visit Site <MdArrowForward className="ml-2" /></span>
                </div>
              </a>
              <a href="https://www.shara.com.ng/" target="_blank" rel="noopener noreferrer" className="card-hover overflow-hidden group">
                <div className="relative w-full h-64 bg-slate-100">
                  <Image src={sharaEcoImg} alt="Shara Eco" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-contain p-6 hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Shara Eco</h3>
                  <p className="text-slate-600 text-sm mb-4">E-commerce solutions and digital marketplace</p>
                  <span className="inline-flex items-center text-accent font-semibold group-hover:translate-x-1 transition-transform">Visit Site <MdArrowForward className="ml-2" /></span>
                </div>
              </a>
            </div>
          </section>

          <section className="section bg-gradient-to-b from-slate-50 to-white" id="services">
            <div className="section-title">
              <h2>Our Services</h2>
              <p>Comprehensive technology solutions for your business needs</p>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
              <Services
                service="Web Development"
                description="Custom web applications built with modern technologies and best practices."
                icon={<SiWebmoney className="w-12 h-12 text-primary" />}
              />
              <Services
                service="Software Development"
                description="End-to-end software solutions tailored to your specific requirements."
                icon={<PiDevicesBold className="w-12 h-12 text-primary" />}
              />
              <Services
                service="Software Consultancy"
                description="Expert guidance and maintenance services to keep your systems running smoothly."
                icon={<FaDesktop className="w-12 h-12 text-primary" />}
              />
            </div>
          </section>

          <section className="section" id="team">
            <div className="section-title">
              <h2>Meet Our Team</h2>
              <p>Experienced professionals dedicated to your success</p>
            </div>
            <TeamCarousel teamMembers={teamMembers} />
          </section>

          <section className="section bg-gradient-to-b from-slate-50 to-white" id="gallery">
            <div className="section-title">
              <h2>Gallery</h2>
              <p>Click-on-Kaduna Datathon 2022 - Second Runner Up Achievement</p>
            </div>
            <div className="mb-8 p-6 bg-white rounded-lg border-l-4 border-accent card">
              <p className="text-slate-700 leading-relaxed mb-4">
                Our team proudly emerged as <span className="font-semibold text-accent">Second Runner Up</span> at the prestigious Click-on-Kaduna Datathon 2022 competition. The Kaduna State government recognized our outstanding efforts in data digitization and innovative problem-solving, praising our contributions in the Daily Trust article.
              </p>
              <a href="https://dailytrust.com/kaduna-partners-experts-on-data-digitising-to-solve-development-problems/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-accent font-semibold hover:text-secondary transition-colors">
                Read the Daily Trust article <MdArrowForward className="ml-2" />
              </a>
            </div>
            <GalleryCarousel gallery1={gallery1} gallery2={gallery2} gallery3={gallery3} gallery4={gallery4} />
          </section>
        </Layout>
      </main>
    </>
  )
}
