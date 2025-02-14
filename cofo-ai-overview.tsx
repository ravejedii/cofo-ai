import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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

export default function COFOAIOverview() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">COFO.AI</CardTitle>
          <CardDescription className="text-xl">
            Chief Operating Officer and Chief Financial Officer for Businesses &lt;$10M in ARR
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Team</h3>
              <ul className="list-disc list-inside">
                <li>Lucas Richards - lucas.crawford.richards@gmail.com</li>
                <li>David Yang</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Current Phase</h3>
              <Badge variant="secondary" className="text-md">
                Red Door Test
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Roadmap</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="relative border-l border-gray-200 dark:border-gray-700">
            {roadmapItems.map((item, index) => (
              <li key={index} className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-background rounded-full -left-3 ring-8 ring-background">
                  {item.completed ? (
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  ) : (
                    <Circle className="w-4 h-4 text-gray-500" />
                  )}
                </span>
                <h3 className={`font-medium leading-tight ${item.completed ? "text-green-500" : ""}`}>{item.title}</h3>
              </li>
            ))}
          </ol>
        </CardContent>
      </Card>
    </div>
  )
}

