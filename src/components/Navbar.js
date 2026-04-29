import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../public/images/logo.png'

const CustomMobileLink = ({ title, href, className = '', toggle }) => {
  const handleClick = () => {
    toggle()
  }
  return (
    <button onClick={handleClick}>
      <a className={`${className} cursor-pointer text-lg font-semibold`} href={href}>
        {title}
      </a>
    </button>
  )
}

const CustomLink = ({ title, href, className = '' }) => {
  return (
    <a
      className={`${className} cursor-pointer font-medium text-slate-200 hover:text-white transition-colors relative group`}
      href={href}
    >
      {title}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
    </a>
  )
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="fixed w-full top-0 z-50 bg-slate-900 border-b border-slate-800 shadow-lg">
      <nav className="flex w-full justify-between items-center px-12 md:px-6 py-3">
        <div className="flex items-center">
          <Link href="/">
            <Image src={Logo} alt="Alyaum Technology Logo" width={160} height={60} className="h-12 w-auto hover:opacity-80 transition-opacity" priority />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="flex items-center gap-8 md:hidden">
          <CustomLink title="Home" href="/" />
          <CustomLink title="About" href="#about" />
          <CustomLink title="Services" href="#services" />
          <CustomLink title="Projects" href="#products" />
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex gap-3">
          <a href="#contact" className="btn-primary text-sm">
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:flex hidden flex-col items-center justify-center cursor-pointer"
          onClick={handleClick}
        >
          <span
            className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              isOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-0.5'
            }`}
          ></span>
          <span
            className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          ></span>
          <span
            className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              isOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-0.5'
            }`}
          ></span>
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-20 left-0 right-0 bg-white border-b border-slate-100 shadow-lg md:flex flex-col hidden">
            <nav className="flex flex-col items-stretch gap-0 p-4">
              <CustomMobileLink
                title="Home"
                href="/"
                className="px-4 py-3 hover:bg-slate-50 text-slate-700 hover:text-primary rounded-md transition-colors"
                toggle={handleClick}
              />
              <CustomMobileLink
                title="About"
                href="#about"
                className="px-4 py-3 hover:bg-slate-50 text-slate-700 hover:text-primary rounded-md transition-colors"
                toggle={handleClick}
              />
              <CustomMobileLink
                title="Services"
                href="#services"
                className="px-4 py-3 hover:bg-slate-50 text-slate-700 hover:text-primary rounded-md transition-colors"
                toggle={handleClick}
              />
              <CustomMobileLink
                title="Projects"
                href="#products"
                className="px-4 py-3 hover:bg-slate-50 text-slate-700 hover:text-primary rounded-md transition-colors"
                toggle={handleClick}
              />
            </nav>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar
