import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Award, BadgeIcon as Certificate, FolderOpen } from "lucide-react"

export function Portfolio() {
  const projects = [
    {
      title: "How Are Tech Salaries Shaping Up in 2020–2024? Part 1",
      description: (
        <>
          This <strong>Level 1 analysis</strong> examines tech salary trends from 2020 to 2024 using a dataset of 57,194 salary records. The report addresses three key objectives to provide actionable insights for an international HR consultancy:{" "}
          <strong>Dataset Scope</strong>, <strong>Salary Comparison between Data Scientists and Data Engineers</strong>, and <strong>Remote Work in the US</strong>.
        </>
      ),
      link: "https://github.com/johnmikx/datacamp_mini_projects/blob/main/competition_notebooks/demystifying_data_salaries/demystifying_data_salaries_level1_nb.ipynb",
      tags: ["DataCamp", "Python", "Jupyter", "Numpy", "Pandas", "Matplotlib", "Seaborn"],
    },
    {
      title: "How Are Tech Salaries Shaping Up in 2020–2024? Part 2",
      description: (
        <>
          This <strong>Level 2 analysis</strong> examines tech salary trends from 2020 to 2024 using a dataset of 57,194 salary records. The report addresses three key objectives to provide actionable insights for an international HR consultancy:{" "}
          <strong>Top 5 Job Titles by Salary</strong>, <strong>Remote Work Salary Trends</strong>, and <strong>Salary Distribution by Company Size</strong>.
        </>
      ),
      link: "https://github.com/johnmikx/datacamp_mini_projects/blob/main/competition_notebooks/demystifying_data_salaries/demystifying_data_salaries_level2_nb.ipynb",
      tags: ["DataCamp", "Python", "Jupyter", "Numpy", "Pandas", "Matplotlib", "Seaborn"],
    },
    {
      title: "How Are Tech Salaries Shaping Up in 2020–2024? Part 3",
      description: (
        <>
          This <strong>Level 3 analysis</strong> examines tech salary trends from 2020 to 2024 using a dataset of 57,194 salary records. The report addresses three key objectives to provide actionable insights for an international HR consultancy:{" "}
          <strong>Impact of Country, Experience Level, and Remote Ratio on Salaries</strong>, <strong>Predictive Model for Salary Estimation</strong>, and <strong>Expanded Model with Additional Features</strong>.
        </>
      ),
      link: "https://github.com/johnmikx/datacamp_mini_projects/blob/main/competition_notebooks/demystifying_data_salaries/demystifying_data_salaries_level3_nb.ipynb",
      tags: ["DataCamp", "Python", "Jupyter", "Numpy", "Pandas", "Matplotlib", "Seaborn", "Scikit-Learn"],
    },
  ]

  const certificates = [
    {
      title: "The Fundamental Tournament of Calculus Certificate",
      issuer: "Ateneo Mathematics Society",
      date: "March 15, 2025",
      link: "https://github.com/johnmikx/kaizen_portfolio/blob/main/public/certificates/the-fundamental-tournament-of-calculus-certificate.jpg",
      image: "/certificates/the-fundamental-tournament-of-calculus-certificate.jpg",
    },
    {
      title: "InnOlympics 2025 Certificate",
      issuer: "Google Developer Student Clubs PLM",
      date: "January 12, 2025",
      link: "https://github.com/johnmikx/kaizen_portfolio/blob/main/public/certificates/innolympics-2025-certificate.jpg",
      image: "/certificates/innolympics-2025-certificate.jpg",
    },
    {
      title: "AI Fundamentals Certification",
      issuer: "DataCamp",
      date: "January 2, 2025",
      link: "https://www.datacamp.com/skill-verification/AIF0027630990889",
      image: "/certificates/ai-fundamentals-certification.jpg",
    },
    {
      title: "AI Fundamentals Track Certificate",
      issuer: "DataCamp",
      date: "January 2, 2025",
      link: "https://www.datacamp.com/completed/statement-of-accomplishment/track/ec2b4e4fba025199971016b3e46f0f7e029c5f7f",
      image: "/certificates/ai-fundamentals-track-certificate.jpg",
    },
    {
      title: "Understanding Data Topics Track Certificate",
      issuer: "DataCamp",
      date: "December 28, 2024",
      link: "https://www.datacamp.com/completed/statement-of-accomplishment/track/4d81d00567d933b9ea71b5cf7d2b282b21946c42",
      image: "/certificates/understanding-data-topics-track-certificate.jpg",
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
    <section id="portfolio" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-12 sm:mb-16 text-center px-4">
          Portfolio
        </h2>

        {/* Projects Section */}
        <div className="mb-12 sm:mb-16 px-2 sm:px-0">
          <h3 className="text-2xl sm:text-3xl font-semibold text-blue-300 mb-8 sm:mb-10 flex items-center justify-center sm:justify-start">
            <FolderOpen className="mr-2 sm:mr-3 h-6 w-6 sm:h-8 sm:w-8" />
            Projects & Presentations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="hover:shadow-2xl transition-all duration-300 bg-slate-800/80 border-slate-700 hover:border-blue-500/50"
              >
                <CardHeader>
                  <CardTitle className="text-white text-lg sm:text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-slate-300 text-sm sm:text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="bg-blue-600/20 text-blue-300 border-blue-500/30 text-xs sm:text-sm"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full sm:w-auto border-blue-500 text-blue-300 hover:bg-blue-600/20 hover:text-blue-200"
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
        <div className="mb-12 sm:mb-16 px-2 sm:px-0">
          <h3 className="text-2xl sm:text-3xl font-semibold text-blue-300 mb-8 sm:mb-10 flex items-center justify-center sm:justify-start">
            <Certificate className="mr-2 sm:mr-3 h-6 w-6 sm:h-8 sm:w-8" />
            Certificates & Certifications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {certificates.map((cert, index) => (
              <Card
                key={index}
                className="hover:shadow-2xl transition-all duration-300 bg-slate-800/80 border-slate-700 hover:border-blue-500/50"
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 sm:mb-6 p-3 sm:p-4 bg-blue-600/20 rounded-full w-fit">
                    <Certificate className="h-8 w-8 sm:h-10 sm:w-10 text-blue-400" />
                  </div>
                  <CardTitle className="text-white text-base sm:text-lg px-2">{cert.title}</CardTitle>
                  <CardDescription className="text-slate-300 text-sm px-2">
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
        <div className="px-2 sm:px-0">
          <h3 className="text-2xl sm:text-3xl font-semibold text-blue-300 mb-8 sm:mb-10 flex items-center justify-center sm:justify-start">
            <Award className="mr-2 sm:mr-3 h-6 w-6 sm:h-8 sm:w-8" />
            Awards & Recognition
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {awards.map((award, index) => (
              <Card
                key={index}
                className="hover:shadow-2xl transition-all duration-300 bg-slate-800/80 border-slate-700 hover:border-blue-500/50"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1 pr-4">
                      <CardTitle className="text-white text-lg sm:text-xl">{award.title}</CardTitle>
                      <CardDescription className="text-slate-300 text-sm sm:text-base">
                        {award.organization} • {award.date}
                      </CardDescription>
                    </div>
                    <Award className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-400 flex-shrink-0" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 text-sm sm:text-base">{award.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}