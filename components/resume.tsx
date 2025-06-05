"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Download, Eye } from "lucide-react"

export function Resume() {
  const documents = [
    {
      title: "Resume",
      description: "Professional resume highlighting key skills and experiences",
      filename: "John_Mike_Asuncion_Resume.pdf",
      filePath: "/documents/resume.pdf",
    },
    {
      title: "Curriculum Vitae",
      description: "Comprehensive CV using Harvard template format",
      filename: "John_Mike_Asuncion_CV.pdf",
      filePath: "/documents/cv.pdf",
    },
    {
      title: "Cover Letter",
      description: "Professional application letter using Harvard template",
      filename: "John_Mike_Asuncion_Cover_Letter.pdf",
      filePath: "/documents/cover-letter.pdf",
    },
  ]

  return (
    <section
      id="resume"
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-blue-900/30"
    >
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-12 sm:mb-16 text-center px-4">
          Resume & Documents
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-2 sm:px-0">
          {documents.map((doc, index) => (
            <Card
              key={index}
              className="hover:shadow-2xl transition-all duration-300 bg-slate-800/80 border-slate-700 hover:border-blue-500/50"
            >
              <CardHeader className="text-center pb-4 sm:pb-6">
                <div className="mx-auto mb-4 sm:mb-6 p-3 sm:p-4 bg-blue-600/20 rounded-full w-fit">
                  <FileText className="h-8 w-8 sm:h-10 sm:w-10 text-blue-400" />
                </div>
                <CardTitle className="text-white text-lg sm:text-xl px-2">{doc.title}</CardTitle>
                <CardDescription className="text-slate-300 px-2 text-sm sm:text-base">
                  {doc.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4 px-4 sm:px-6">
                <Button
                  variant="outline"
                  className="w-full border-blue-500 text-blue-300 hover:bg-blue-600/20 hover:text-blue-200 py-2 sm:py-3"
                  onClick={() => window.open(doc.filePath, "_blank")}
                >
                  <Eye className="mr-2 h-4 w-4" />
                  Preview
                </Button>
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 sm:py-3"
                  onClick={() => {
                    const link = document.createElement("a")
                    link.href = doc.filePath
                    link.download = doc.filename
                    link.click()
                  }}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}