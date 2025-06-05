export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 px-6 lg:px-8 border-t border-slate-700">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold text-blue-300">Kaizen</h3>
            <p className="text-slate-400 mt-2">Continuous Improvement Through Technology</p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-slate-400">© {new Date().getFullYear()} John Mike Asuncion. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}