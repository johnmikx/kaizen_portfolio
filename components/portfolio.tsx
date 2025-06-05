import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Award, BadgeIcon as Certificate, FolderOpen } from "lucide-react"

export function Portfolio() {
  const projects = [
    {
      title: "Project Title 1",
      description: "Brief description of your project and technologies used",
      link: "https://github.com/yourusername/project1",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Project Title 2",
      description: "Another project showcasing your skills and creativity",
      link: "https://github.com/yourusername/project2",
      tags: ["Python", "Machine Learning", "TensorFlow"],
    },
  ]

  const certificates = [
    {
      title: "Certificate Name 1",
      issuer: "Issuing Organization",
      date: "2024",
      link: "https://certificate-link.com",
      image: "/certificates/cert1.jpg",
    },
    {
      title: "Certificate Name 2",
      issuer: "Another Organization",
      date: "2024",
      link: "https://certificate-link.com",
      image: "/certificates/cert2.jpg",
    },
  ]

  const awards = [
    {
      title: "Award Title 1",
      organization: "Awarding Organization",
      date: "2024",
      description: "Brief description of the achievement",
    },
    {
      title: "Award Title 2",
      organization: "Another Organization",
      date: "2023",
      description: "Another significant achievement",
    },
  ]

  return (
    <section id="portfolio" className="py-20 px-6 lg:px-8 bg-slate-800/50">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-16 text-center">Portfolio</h2>

        {/* Projects Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-blue-300 mb-10 flex items-center">
            <FolderOpen className="mr-3 h-8 w-8" />
            Projects & Presentations
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="hover:shadow-2xl transition-all duration-300 bg-slate-800/80 border-slate-700 hover:border-blue-500/50"
              >
                <CardHeader>
                  <CardTitle className="text-white text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-slate-300">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="bg-blue-600/20 text-blue-300 border-blue-500/30"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    className="border-blue-500 text-blue-300 hover:bg-blue-600/20 hover:text-blue-200"
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Project
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certificates Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-blue-300 mb-10 flex items-center">
            <Certificate className="mr-3 h-8 w-8" />
            Certificates & Certifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <Card
                key={index}
                className="hover:shadow-2xl transition-all duration-300 bg-slate-800/80 border-slate-700 hover:border-blue-500/50"
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-6 p-4 bg-blue-600/20 rounded-full w-fit">
                    <Certificate className="h-10 w-10 text-blue-400" />
                  </div>
                  <CardTitle className="text-white text-lg">{cert.title}</CardTitle>
                  <CardDescription className="text-slate-300">
                    {cert.issuer} • {cert.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-blue-500 text-blue-300 hover:bg-blue-600/20 hover:text-blue-200"
                  >
                    <a href={cert.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Certificate
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Awards Section */}
        <div>
          <h3 className="text-3xl font-semibold text-blue-300 mb-10 flex items-center">
            <Award className="mr-3 h-8 w-8" />
            Awards & Recognition
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <Card
                key={index}
                className="hover:shadow-2xl transition-all duration-300 bg-slate-800/80 border-slate-700 hover:border-blue-500/50"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-white text-xl">{award.title}</CardTitle>
                      <CardDescription className="text-slate-300">
                        {award.organization} • {award.date}
                      </CardDescription>
                    </div>
                    <Award className="h-8 w-8 text-yellow-400 flex-shrink-0" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">{award.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}