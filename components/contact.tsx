import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook, Github } from "lucide-react"

export function Contact() {
  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/yourusername",
      color: "hover:text-pink-400",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/yourusername",
      color: "hover:text-blue-400",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://facebook.com/yourusername",
      color: "hover:text-blue-500",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/yourusername",
      color: "hover:text-slate-300",
    },
  ]

  return (
    <section id="contact" className="py-20 px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-blue-900/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-16 text-center">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Information */}
          <Card className="hover:shadow-2xl transition-all duration-300 bg-slate-800/80 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Contact Information</CardTitle>
              <CardDescription className="text-slate-300">
                Feel free to reach out for opportunities, collaborations, or just to connect!
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-blue-400" />
                <span className="text-slate-200 text-lg">johnmike.asuncion@email.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-blue-400" />
                <span className="text-slate-200 text-lg">+63 XXX XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-blue-400" />
                <span className="text-slate-200 text-lg">Manila, Philippines</span>
              </div>
            </CardContent>
          </Card>

          {/* Social Media Links */}
          <Card className="hover:shadow-2xl transition-all duration-300 bg-slate-800/80 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Connect With Me</CardTitle>
              <CardDescription className="text-slate-300">
                Follow me on social media and check out my work on GitHub
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <Button
                      key={index}
                      asChild
                      variant="outline"
                      className={`border-blue-500 text-blue-300 hover:bg-blue-600/20 hover:text-blue-200 ${social.color} py-6`}
                    >
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <IconComponent className="mr-2 h-5 w-5" />
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
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white border-blue-500 shadow-2xl">
            <CardContent className="p-10">
              <h3 className="text-3xl font-bold mb-6">Ready to Collaborate?</h3>
              <p className="text-blue-100 mb-8 text-lg leading-relaxed">
                I'm always open to discussing new opportunities, innovative projects, or just having a conversation
                about technology and engineering.
              </p>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg"
              >
                <a href="mailto:johnmike.asuncion@email.com">
                  <Mail className="mr-3 h-5 w-5" />
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