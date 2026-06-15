"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail } from "lucide-react"

const teamMembers = [
  {
    name: "Lucas Richards",
    role: "Hackathon Partner",
    email: "lucas.crawford.richards@gmail.com",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "David Yang",
    role: "Hackathon Partner",
    email: "",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Vim Vasu",
    role: "Hackathon Partner",
    email: "",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function TeamSection() {
  return (
    <section id="team" className="py-20 sm:py-24 bg-background/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-primary">The Team</h2>
          <p className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Meet the Minds Behind COFO.AI
          </p>
          <p className="mt-4 text-base text-muted-foreground">
            Built at a hackathon by a small team exploring an AI COO&nbsp;+&nbsp;CFO for small businesses.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="group animate-slide-up rounded-2xl border-primary/15 bg-secondary/40 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="items-center pb-2">
                <Avatar className="mx-auto h-24 w-24 ring-2 ring-primary/50 ring-offset-2 ring-offset-background transition-transform duration-300 group-hover:scale-105">
                  <AvatarImage src={member.image} alt={member.name} className="object-cover" />
                  <AvatarFallback className="text-lg font-semibold">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="mt-5 text-lg">{member.name}</CardTitle>
                <span className="mt-1 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {member.role}
                </span>
              </CardHeader>
              {member.email && (
                <CardContent className="pt-0">
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center justify-center gap-1.5 break-all text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Mail className="h-3.5 w-3.5 shrink-0" />
                    {member.email}
                  </a>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
