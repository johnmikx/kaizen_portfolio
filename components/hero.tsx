import { Button } from "@/components/ui/button"
import { Download, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo Section - Mobile First */}
          <div className="flex justify-center lg:order-2 lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-blue-400/30 shadow-2xl bg-gradient-to-br from-blue-800 to-slate-700">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="John Mike Asuncion"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-24 sm:h-24 bg-blue-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 sm:w-32 sm:h-32 bg-blue-400/10 rounded-full blur-2xl"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center lg:text-left lg:order-1 space-y-6 lg:space-y-8 w-full">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                John Mike <span className="text-blue-300 block sm:inline">Asuncion</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-blue-200 font-medium leading-relaxed px-4 sm:px-0">
                <span className="text-blue-500">Computer Engineering Student</span>
                <span className="mx-2 text-blue-300">|</span>
                <span className="text-blue-200">Polymath Apprentice</span>
                <span className="mx-2 text-blue-100">|</span>
                <span className="text-blue-50">Kaizen</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start px-4 sm:px-0">
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-500 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto"
              >
                <Link href="#contact">
                  <Mail className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                  Get In Touch
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-blue-400 text-blue-300 hover:bg-blue-800/30 hover:text-blue-200 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto"
              >
                <Link href="#resume">
                  <Download className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                  View Resume
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}