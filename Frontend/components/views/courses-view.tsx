"use client"

import { useState } from "react"
import { Search, Plus, BookOpen, Users, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const subjects = ["Todos", "Matemáticas", "Ciencia", "Lenguaje", "Historia", "Arte"]

const availableCourses = [
  {
    id: 1,
    name: "Álgebra Avanzada",
    teacher: "Prof. García",
    description: "Domina ecuaciones, funciones y sistemas algebraicos",
    students: 45,
    duration: "8 semanas",
    subject: "Matemáticas",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    name: "Química Orgánica",
    teacher: "Prof. Martínez",
    description: "Explora compuestos orgánicos y reacciones químicas",
    students: 32,
    duration: "10 semanas",
    subject: "Ciencia",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 3,
    name: "Literatura Contemporánea",
    teacher: "Prof. López",
    description: "Análisis de obras literarias del siglo XX y XXI",
    students: 28,
    duration: "6 semanas",
    subject: "Lenguaje",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 4,
    name: "Historia Mundial",
    teacher: "Prof. Rodríguez",
    description: "Desde las civilizaciones antiguas hasta la era moderna",
    students: 38,
    duration: "12 semanas",
    subject: "Historia",
    color: "from-orange-500 to-red-500",
  },
]

export function CoursesView() {
  const [activeFilter, setActiveFilter] = useState("Todos")
  const [searchQuery, setSearchQuery] = useState("")
  const [showJoinModal, setShowJoinModal] = useState(false)

  return (
    <div className="p-4 md:p-8 space-y-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Cursos</h1>
          <p className="text-muted-foreground">Explora y únete a cursos creados por profesores</p>
        </div>
        <Button className="gradient-primary text-white" onClick={() => setShowJoinModal(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Unirse con código
        </Button>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <Input
          placeholder="Buscar cursos, profesores o materias..."
          className="pl-10 glass border-glass-border bg-transparent"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Subject Filters */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {subjects.map((subject) => (
          <Button
            key={subject}
            variant={activeFilter === subject ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveFilter(subject)}
            className={activeFilter === subject ? "gradient-primary text-white" : "glass border-glass-border"}
          >
            {subject}
          </Button>
        ))}
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {availableCourses.map((course) => (
          <Card
            key={course.id}
            className="glass border-glass-border p-6 hover:border-primary/50 transition-all hover:scale-[1.02]"
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center`}
                >
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs px-2 py-1 rounded-full glass border-glass-border text-muted-foreground">
                  {course.subject}
                </span>
              </div>

              <div>
                <h3 className="font-semibold text-foreground text-xl mb-1">{course.name}</h3>
                <p className="text-sm text-primary mb-2">{course.teacher}</p>
                <p className="text-sm text-muted-foreground">{course.description}</p>
              </div>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>{course.students} estudiantes</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{course.duration}</span>
                </div>
              </div>

              <Button className="w-full gradient-primary text-white">
                Entrar al curso
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Join with Code Modal */}
      {showJoinModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="glass-strong border-glass-border p-6 max-w-md w-full">
            <h2 className="text-2xl font-bold text-foreground mb-4">Unirse a un curso</h2>
            <p className="text-muted-foreground mb-4">Ingresa el código de invitación proporcionado por tu profesor</p>
            <Input
              placeholder="Código del curso (ej: ABC123)"
              className="glass border-glass-border bg-transparent mb-4"
            />
            <div className="flex gap-2">
              <Button
                variant="outline"
                className="flex-1 glass border-glass-border bg-transparent"
                onClick={() => setShowJoinModal(false)}
              >
                Cancelar
              </Button>
              <Button className="flex-1 gradient-primary text-white">Unirse</Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}
