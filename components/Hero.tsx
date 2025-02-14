import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <div className="gradient-bg py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">AI-Powered COO & CFO</span>
            <span className="block gradient-text">for Growing Businesses</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            COFO.AI provides intelligent operational and financial guidance for businesses under $10M in ARR, helping
            you scale efficiently and make data-driven decisions.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <Button size="lg" className="w-full sm:w-auto animate-pulse">
                Get Started
              </Button>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

