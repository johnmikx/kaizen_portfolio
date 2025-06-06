import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 px-6 lg:px-8 border-t border-slate-700">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Brand with Logo */}
          <div className="mb-6 md:mb-0 flex items-center space-x-3 text-center md:text-left">
            <Image
              src="/logo.png"
              alt="Kaizen Logo"
              width={40}
              height={40}
              className="rounded-sm"
            />
            <div>
              <h3 className="text-2xl font-bold text-blue-300">Kaizen</h3>
              <p className="text-slate-400 mt-1 text-sm">Continuous Improvement Through Technology</p>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-slate-400">© {new Date().getFullYear()} John Mike Asuncion. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}