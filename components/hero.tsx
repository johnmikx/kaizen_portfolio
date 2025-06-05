import { Button } from "@/components/ui/button"
import { Download, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                John Mike <span className="text-blue-300">Asuncion</span>
              </h1>
              <p className="text-xl sm:text-2xl text-blue-200 font-medium leading-relaxed">
                Computer Engineering Student | Polymath Apprentice | <span className="text-blue-300">Kaizen</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 text-lg">
                <Link href="#contact">
                  <Mail className="mr-3 h-5 w-5" />
                  Get In Touch
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-blue-400 text-blue-300 hover:bg-blue-800/30 hover:text-blue-200 px-8 py-4 text-lg"
              >
                <Link href="#resume">
                  <Download className="mr-3 h-5 w-5" />
                  View Resume
                </Link>
              </Button>
            </div>
          </div>

          {/* Photo Section */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-blue-400/30 shadow-2xl bg-gradient-to-br from-blue-800 to-slate-700">
                {/* TODO: Replace with your actual photo */}
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
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}