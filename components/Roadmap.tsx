import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Circle } from "lucide-react"

const roadmapItems = [
  { title: "Talking to Wall Street Analyst", completed: true },
  { title: "Talking to Hedge Fund PM's", completed: true },
  { title: "Talking to YC Founders", completed: true },
  { title: "Build Prototype", completed: false },
  { title: "Create Demo Video", completed: false },
  { title: "Secure Cofounders", completed: false },
  { title: "Accept Credit Card Payments", completed: false },
  { title: "Prove Traction (Revenue) Pre-Orders", completed: false },
  { title: "Raise VC Funding", completed: false },
  { title: "Launch Company", completed: false },
]

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Roadmap</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-foreground sm:text-4xl">
            Our Journey to Success
          </p>
        </div>

        <Card className="mt-10 bg-secondary/50 border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Project Milestones</CardTitle>
            <CardDescription>Track our progress as we build and launch COFO.AI</CardDescription>
          </CardHeader>
          <CardContent>
            <ol className="relative border-l border-gray-700">
              {roadmapItems.map((item, index) => (
                <li key={index} className="mb-10 ml-6 animate-slide-up" style={{ animationDelay: `${index * 50}ms` }}>
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-background rounded-full -left-3 ring-8 ring-background">
                    {item.completed ? (
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    ) : (
                      <Circle className="w-4 h-4 text-muted-foreground" />
                    )}
                  </span>
                  <h3
                    className={`font-medium leading-tight ${item.completed ? "text-green-500" : "text-muted-foreground"}`}
                  >
                    {item.title}
                  </h3>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

