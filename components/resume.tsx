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
    <section id="resume" className="py-20 px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-blue-900/30">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-16 text-center">Resume & Documents</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {documents.map((doc, index) => (
            <Card
              key={index}
              className="hover:shadow-2xl transition-all duration-300 bg-slate-800/80 border-slate-700 hover:border-blue-500/50"
            >
              <CardHeader className="text-center pb-6">
                <div className="mx-auto mb-6 p-4 bg-blue-600/20 rounded-full w-fit">
                  <FileText className="h-10 w-10 text-blue-400" />
                </div>
                <CardTitle className="text-white text-xl">{doc.title}</CardTitle>
                <CardDescription className="text-slate-300">{doc.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  variant="outline"
                  className="w-full border-blue-500 text-blue-300 hover:bg-blue-600/20 hover:text-blue-200"
                  onClick={() => window.open(doc.filePath, "_blank")}
                >
                  <Eye className="mr-2 h-4 w-4" />
                  Preview
                </Button>
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white"
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