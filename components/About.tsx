import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, TrendingUp, Zap, BarChart } from "lucide-react"

const features = [
  {
    title: "AI-Powered Insights",
    description: "Leverage machine learning algorithms to analyze your business data and provide actionable insights.",
    icon: Brain,
  },
  {
    title: "Financial Forecasting",
    description: "Accurate revenue projections and expense management to help you make informed financial decisions.",
    icon: TrendingUp,
  },
  {
    title: "Operational Efficiency",
    description: "Streamline your business processes and identify areas for improvement to boost productivity.",
    icon: Zap,
  },
  {
    title: "Strategic Planning",
    description: "Develop data-driven strategies to achieve your business goals and stay ahead of the competition.",
    icon: BarChart,
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">About COFO.AI</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-foreground sm:text-4xl">
            Empowering Your Business Growth
          </p>
          <p className="mt-4 max-w-2xl text-xl text-muted-foreground lg:mx-auto">
            COFO.AI combines artificial intelligence with financial and operational expertise to provide unparalleled
            guidance for growing businesses.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-secondary/50 border-primary/20 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <feature.icon className="h-6 w-6 text-primary" />
                  <CardTitle className="mt-2">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

