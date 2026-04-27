import Head from 'next/head'
import Layout from '@/components/Layout'
import Image from 'next/image'
import bgImage from '../../public/images/bg-image.jpg'
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
              <h2>Our Products</h2>
              <p>Innovative solutions designed for modern businesses</p>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
              <Products
                title="AlyaumHealth"
                summary="State and federal health and social services face increasing challenges. We help them find their way forward with products designed to increase efficiency and improve health outcomes."
                icon={<MdCheckCircle className="w-8 h-8 text-primary" />}
                link={
                  <Link href="/alyaum.ng" target="_blank" className="btn-outline text-sm">
                    Learn More
                  </Link>
                }
              />
              <Products
                title="AlyaumAgro"
                summary="At AlyaumAgro, we focus on using the latest technology to optimize agricultural processes. We drive innovation by making this technology accessible to farmers."
                icon={<MdCheckCircle className="w-8 h-8 text-primary" />}
                link={
                  <Link href="/alyaum.ng" target="_blank" className="btn-outline text-sm">
                    Learn More
                  </Link>
                }
              />
              <Products
                title="AlyaumLearn"
                summary="AlyaumLearn is committed to providing access to global experiences through study abroad opportunities, scholarships, training, and professional development programs."
                icon={<MdCheckCircle className="w-8 h-8 text-primary" />}
                link={
                  <Link href="/alyaum.ng" target="_blank" className="btn-outline text-sm">
                    Learn More
                  </Link>
                }
              />
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
            <div className="grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-8">
              <Team
                fullName="Usman Yahaya"
                name="usman"
                bio="Frontend Developer || Data Scientist || UI/UX Designer"
                img="/images/usman.jpg"
                githubLink="https://github.com/Usmaniyya"
                twitterLink="https://twitter.com/Y_Uthmaan"
                linkedInLink="https://linkedin.com"
              />
              <Team
                fullName="Khalid Abdullahi"
                name="khalid"
                bio="Backend Developer || Data Analyst || Project Manager"
                img="/images/khalid.jpg"
                githubLink="https://github.com/Usmaniyya"
                twitterLink="https://twitter.com/Y_Uthmaan"
                linkedInLink="https://linkedin.com"
              />
              <Team
                fullName="Umar Suleiman"
                name="umar"
                bio="Product Designer || UI/UX Designer || Software Analyst"
                img="/images/umar.jpg"
                githubLink="https://github.com/Usmaniyya"
                twitterLink="https://twitter.com/Y_Uthmaan"
                linkedInLink="https://linkedin.com"
              />
              <Team
                fullName="Salisu Ibrahim"
                name="salisu"
                bio="Data Scientist || Data Analyst || Machine Learning Engineer"
                img="/images/salisu.jpg"
                githubLink="https://github.com/Usmaniyya"
                twitterLink="https://twitter.com/Y_Uthmaan"
                linkedInLink="https://linkedin.com"
              />
            </div>
          </section>

          <section className="section bg-primary text-white text-center" id="contact">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-lg mb-8 opacity-90">
                Let's discuss how we can help transform your business with innovative technology solutions.
              </p>
              <Link href="mailto:usmanyahaya6967@gmail.com" target="_blank" className="btn-base bg-white text-primary hover:bg-slate-50 inline-flex">
                Contact Us
                <MdArrowForward className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </section>
        </Layout>
      </main>
    </>
  )
}
