import React from 'react'
import Image from 'next/image'
import Logo from '../../public/images/logo.png'
import { GithubIcon, LinkedInIcon, TwitterIcon } from './Icons'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white pt-20 md:pt-16 sm:pt-12 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-12 md:px-6 sm:px-4">
        {/* Footer Content Grid */}
        <div className="grid grid-cols-5 md:grid-cols-3 sm:grid-cols-1 gap-12 mb-12 pb-12 border-b border-slate-700">
          {/* Brand Column */}
          <div>
            <div className="w-fit mb-4">
              <Image src={Logo} alt="AlyaumTech Logo" width={140} height={50} className="h-12 w-auto hover:opacity-80 transition-opacity" />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Building innovative technology solutions for businesses worldwide.
            </p>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Product</h4>
            <ul className="space-y-2">
              <li>
                <a href="#products" className="text-slate-400 hover:text-accent transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 hover:text-accent transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-accent transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-slate-400 hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-accent transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-accent transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <p className="text-slate-400">
                  Dutse, Jigawa State
                </p>
              </li>
              <li>
                <a href="tel:08169525295" className="text-slate-400 hover:text-accent transition-colors">
                  08169525295
                </a>
              </li>
              <li>
                <a href="mailto:alyaumtech@gmail.com" className="text-slate-400 hover:text-accent transition-colors">
                  ✉️ alyaumtech@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Column */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://twitter.com/Y_Uthmaan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 text-slate-400 hover:text-accent transition-colors"
              >
                <TwitterIcon />
              </a>
              <a
                href="https://github.com/Usmaniyya"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 text-slate-400 hover:text-accent transition-colors"
              >
                <GithubIcon />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 text-slate-400 hover:text-accent transition-colors"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex md:flex-col items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">
            &copy; {currentYear} AlyaumTech. All rights reserved.
          </p>
          <div className="flex gap-6 md:justify-center text-sm text-slate-400">
            <a href="#" className="hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
