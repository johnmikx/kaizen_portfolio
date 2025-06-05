import { Card, CardContent } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-20 px-6 lg:px-8 bg-slate-800/50">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center">About Me</h2>

        <Card className="border-l-4 border-l-blue-500 shadow-2xl bg-slate-800/80 border-slate-700">
          <CardContent className="p-10">
            <blockquote className="text-lg leading-relaxed text-slate-200 space-y-6">
              <p>
                Known as <strong className="text-blue-300">Kaizen</strong>—a name that reflects my commitment to
                continuous improvement—I'm a Computer Engineering student and self-driven polymath apprentice focused on
                interdisciplinary learning, creative problem-solving, and building real-world tech solutions.
              </p>

              <p>
                As a freshman at the{" "}
                <strong className="text-blue-300">Polytechnic University of the Philippines</strong>, I'm currently
                immersing myself in the foundations of data science, engineering, machine learning, and artificial
                intelligence — all while keeping things fun and creative. I approach tech with adaptability, curiosity,
                consistency, discipline, and just the right amount of chaos.
              </p>

              <p>I'm a student eager to learn, grow, and bring fresh perspectives to the table.</p>

              <p className="text-blue-300 font-medium border-t border-slate-600 pt-6 mt-8">
                Open to internships, collaboration, or just vibing with fellow tech enthusiasts. Let's build cool stuff.
              </p>
            </blockquote>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}