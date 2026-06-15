"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail } from "lucide-react"

const initials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")

const leads = [
  {
    name: "Lucas Richards",
    role: "Hackathon Partner",
    email: "lucas.crawford.richards@gmail.com",
    image: "/team/lucas-richards.png",
  },
  {
    name: "David Yang",
    role: "Hackathon Partner",
    email: "",
    image: "/team/david-yang.jpg",
  },
]

const contributors = [
  { name: "Imtiaz Choudhry", role: "Hackathon Partner" },
  { name: "Vim Vasu", role: "Hackathon Partner" },
]

export default function TeamSection() {
  return (
    <section id="team" className="bg-background/50 py-20 sm:py-24">
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

        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
          {leads.map((m, i) => (
            <Card
              key={m.name}
              className="group animate-slide-up rounded-2xl border-primary/15 bg-secondary/40 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <CardHeader className="items-center pb-2">
                <Avatar className="mx-auto h-28 w-28 ring-2 ring-primary/50 ring-offset-2 ring-offset-background transition-transform duration-300 group-hover:scale-105">
                  <AvatarImage src={m.image} alt={m.name} className="object-cover" />
                  <AvatarFallback className="text-xl font-semibold">{initials(m.name)}</AvatarFallback>
                </Avatar>
                <CardTitle className="mt-5 text-lg">{m.name}</CardTitle>
                <span className="mt-1 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {m.role}
                </span>
              </CardHeader>
              {m.email && (
                <CardContent className="pt-0">
                  <a
                    href={`mailto:${m.email}`}
                    className="inline-flex items-center justify-center gap-1.5 break-all text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Mail className="h-3.5 w-3.5 shrink-0" />
                    {m.email}
                  </a>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        <div className="mx-auto mt-6 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
          {contributors.map((m, i) => (
            <div
              key={m.name}
              className="animate-slide-up flex items-center gap-4 rounded-xl border border-primary/10 bg-secondary/30 px-5 py-4"
              style={{ animationDelay: `${(i + 2) * 100}ms` }}
            >
              <Avatar className="h-12 w-12 ring-1 ring-primary/40">
                <AvatarFallback className="text-sm font-semibold">{initials(m.name)}</AvatarFallback>
              </Avatar>
              <div className="text-left">
                <p className="font-medium text-foreground">{m.name}</p>
                <p className="text-xs text-muted-foreground">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
