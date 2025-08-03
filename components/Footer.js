import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-teal-700 to-emerald-600 text-white">
      <div className="container px-5 py-6 mx-auto flex flex-col md:flex-row justify-center md:justify-around items-center text-center md:text-left">
        <p className="text-sm mb-2 md:mb-0">
          Copyright &copy; easytree.website {new Date().getFullYear()}. All rights reserved
          </p>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <Link
              href="/privacypolicy"
              className="hover:text-green-300 hover:text-base hover:font-bold transition-all"
            >
              Privacy Policy
            </Link>
            <Link
              href="/termsandconditions"
              className="hover:text-green-300 hover:text-base hover:font-bold transition-all"
            >
              Terms &amp; Conditions
            </Link>
          </div>
      </div>
    </footer>
  )
}

export default Footer
