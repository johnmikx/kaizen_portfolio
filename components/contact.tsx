import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook, Github } from "lucide-react"

export function Contact() {
  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/john.mikx/",
      color: "hover:text-pink-400",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/johnmikx/",
      color: "hover:text-blue-400",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/mikekaizennn",
      color: "hover:text-blue-500",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/johnmikx",
      color: "hover:text-slate-300",
    },
  ]

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-blue-900/30"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-12 sm:mb-16 text-center px-4">
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 px-2 sm:px-0">
          {/* Contact Information */}
          <Card className="hover:shadow-2xl transition-all duration-300 bg-slate-800/80 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white text-xl sm:text-2xl">Contact Information</CardTitle>
              <CardDescription className="text-slate-300 text-sm sm:text-base">
                Feel free to reach out for opportunities, collaborations, or just to connect!
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400 flex-shrink-0" />
                <span className="text-slate-200 text-sm sm:text-lg break-all">johnmikeasuncion17@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 sm:space-x-4">
                <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400 flex-shrink-0" />
                <span className="text-slate-200 text-sm sm:text-lg">+63 915 432 0935</span>
              </div>
              <div className="flex items-center space-x-3 sm:space-x-4">
                <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400 flex-shrink-0" />
                <span className="text-slate-200 text-sm sm:text-lg">Manila, Philippines</span>
              </div>
            </CardContent>
          </Card>

          {/* Social Media Links */}
          <Card className="hover:shadow-2xl transition-all duration-300 bg-slate-800/80 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white text-xl sm:text-2xl">Connect With Me</CardTitle>
              <CardDescription className="text-slate-300 text-sm sm:text-base">
                Follow me on social media and check out my work on GitHub
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <Button
                      key={index}
                      asChild
                      variant="outline"
                      className={`border-blue-500 text-blue-300 hover:bg-blue-600/20 hover:text-blue-200 ${social.color} py-4 sm:py-6 text-sm sm:text-base`}
                    >
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <IconComponent className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                        {social.name}
                      </a>
                    </Button>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="mt-12 sm:mt-16 text-center px-2 sm:px-0">
          <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white border-blue-500 shadow-2xl">
            <CardContent className="p-6 sm:p-8 lg:p-10">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Ready to Collaborate?</h3>
              <p className="text-blue-100 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed px-2 sm:px-0">
                I'm always open to discussing new opportunities, innovative projects, or just having a conversation
                about technology and engineering.
              </p>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-blue-50 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto"
              >
                <a href="mailto:johnmikeasuncion17@gmail.com">
                  <Mail className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                  Send Me an Email
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}