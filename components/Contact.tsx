import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Contact() {
  return (
    <section id="contact" className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Contact Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Get in Touch</p>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
            Have questions about COFO.AI? We'd love to hear from you!
          </p>
        </div>

        <div className="mt-10 max-w-lg mx-auto">
          <Card className="bg-secondary/50 border-primary/20">
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
              <CardDescription>We'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="grid grid-cols-1 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground">
                    Name
                  </label>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    className="mt-1 bg-background"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground">
                    Email
                  </label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="mt-1 bg-background"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground">
                    Message
                  </label>
                  <Textarea name="message" id="message" rows={4} className="mt-1 bg-background" required />
                </div>
                <div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

