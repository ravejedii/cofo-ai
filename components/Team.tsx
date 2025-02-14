"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const teamMembers = [
  {
    name: "Lucas Richards",
    role: "Co-Founder",
    email: "lucas.crawford.richards@gmail.com",
    image: "/placeholder.svg?height=100&width=100",
  },
  { name: "David Yang", 
    role: "Co-Founder", 
    email: "", 
    image: "/placeholder.svg?height=100&width=100" 
  },
  {
    name: "Vim Vasu",
    role: "Co-Founder",
    email: "",
    image: "/placeholder.svg?height=100&width=100"
  },
]

export default function TeamSection() {
  return (
    <section id="team" className="py-20 bg-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Our Team</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-foreground sm:text-4xl">
            Meet the Minds Behind COFO.AI
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="bg-secondary/50 border-primary/20 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <Avatar className="w-24 h-24 mx-auto ring-2 ring-primary">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback>
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-center mt-4">{member.name}</CardTitle>
                  <CardDescription className="text-center">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-sm text-muted-foreground">{member.email}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

