import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="flex items-center flex-col gap-4 justify-between w-full px-2 py-6 bg-white border-t border-gray-200 mt-16 mb-2">
        <div className="flex  items-center gap-4">
            <p className="text-gray-400 text-sm">
                © 2023 Ministerul Educației Naționale
            </p>
        </div>
        <div className="flex items-center gap-4 flex-wrap justify-center">
            <Link href={'#'} className="text-gray-500 text-sm hover:text-blue-500">
                <span>Termeni și condiții</span>
            </Link>
            <Link href={'#'} className="text-gray-500 text-sm hover:text-blue-500">
                <span>Politica de confidențialitate</span>
            </Link>
            <Link href={'#'} className="text-gray-500 text-sm hover:text-blue-500">
                <span>Politica de utilizare cookie-uri</span>
            </Link>

        </div>
    </footer>
  )
}

export default Footer