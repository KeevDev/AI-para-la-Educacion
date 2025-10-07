"use client"

import { ArrowRight, Sparkles, BookOpen, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Bot } from "lucide-react"

const activeCourses = [
  { id: 1, name: "Álgebra Básica", teacher: "Prof. García", progress: 65, color: "from-blue-500 to-cyan-500" },
  { id: 2, name: "Biología General", teacher: "Prof. Martínez", progress: 40, color: "from-green-500 to-emerald-500" },
  { id: 3, name: "Literatura Moderna", teacher: "Prof. López", progress: 80, color: "from-purple-500 to-pink-500" },
]

const recommendations = [
  { id: 1, title: "Práctica: Ecuaciones Lineales", time: "15 min", type: "Práctica" },
  { id: 2, title: "Nuevo: Curso de Química", time: "8 semanas", type: "Curso" },
  { id: 3, title: "Refuerzo: Verbos Irregulares", time: "20 min", type: "Práctica" },
]

const upcomingEvents = [
  { id: 1, title: "Examen de Álgebra", date: "Mañana", type: "exam" },
  { id: 2, title: "Nuevo curso disponible", date: "Esta semana", type: "course" },
]

export function HomeView() {
  return (
    <div className="p-4 md:p-8 space-y-8 max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="glass-strong rounded-2xl p-6 md:p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Hola, Kevin 👋</h1>
          <p className="text-muted-foreground mb-6">Continúa tu aprendizaje donde lo dejaste</p>
          <Button className="gradient-primary text-white hover:opacity-90">
            Continuar donde quedaste
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">Tus Cursos Activos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {activeCourses.map((course) => (
            <Card key={course.id} className="glass border-glass-border p-5 hover:scale-105 transition-transform">
              <div className="space-y-4">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center`}
                >
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg">{course.name}</h3>
                  <p className="text-sm text-muted-foreground">{course.teacher}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progreso</span>
                    <span className="text-foreground font-medium">{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                </div>
                <Button className="w-full gradient-primary text-white" size="sm">
                  Continuar curso
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* AI Recommendations */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <Bot className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">Recomendado por tu Tutor IA</h2>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {recommendations.map((rec) => (
            <Card
              key={rec.id}
              className="glass border-glass-border p-4 min-w-[280px] hover:border-primary/50 transition-colors"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold text-foreground">{rec.title}</h3>
                <div className="flex gap-2">
                  <span className="text-xs px-2 py-1 rounded-full glass border-glass-border text-muted-foreground">
                    {rec.time}
                  </span>
                  <span className="text-xs px-2 py-1 rounded-full glass border-glass-border text-muted-foreground">
                    {rec.type}
                  </span>
                </div>
                <Button variant="ghost" size="sm" className="w-full text-primary hover:text-primary">
                  Ver más
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">Próximos Eventos</h2>
        </div>
        <div className="space-y-3">
          {upcomingEvents.map((event) => (
            <Card key={event.id} className="glass border-glass-border p-4 hover:border-primary/50 transition-colors">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-foreground">{event.title}</h3>
                  <p className="text-sm text-muted-foreground">{event.date}</p>
                </div>
                <Button variant="ghost" size="sm" className="text-primary">
                  Ver detalles
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
