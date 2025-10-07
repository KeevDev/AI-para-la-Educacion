"use client"

import { useState } from "react"
import { Camera, Award, Settings, Shield, Users, BookOpen, Clock, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"

const badges = [
  { id: 1, name: "Primera Victoria", icon: "🏆", unlocked: true },
  { id: 2, name: "Racha de 7 días", icon: "🔥", unlocked: true },
  { id: 3, name: "Maestro de Mates", icon: "🧮", unlocked: true },
  { id: 4, name: "Científico Junior", icon: "🔬", unlocked: false },
  { id: 5, name: "Lector Ávido", icon: "📚", unlocked: false },
  { id: 6, name: "Historiador", icon: "🏛️", unlocked: false },
]

const subjects = ["Matemáticas", "Ciencia", "Lenguaje", "Historia"]

const stats = [
  { label: "Horas de estudio", value: "24h", icon: Clock },
  { label: "Precisión promedio", value: "87%", icon: Target },
  { label: "Materias dominadas", value: "3/8", icon: BookOpen },
]

export function ProfileView() {
  const [role, setRole] = useState<"student" | "teacher">("student")

  return (
    <div className="p-4 md:p-8 space-y-8 max-w-4xl mx-auto">
      {/* Profile Header */}
      <Card className="glass-strong border-glass-border p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="relative">
            <Avatar className="w-24 h-24 border-4 border-primary">
              <AvatarImage src="/placeholder.svg?height=96&width=96" />
              <AvatarFallback className="gradient-primary text-white text-2xl">KV</AvatarFallback>
            </Avatar>
            <Button size="icon" className="absolute bottom-0 right-0 w-8 h-8 rounded-full gradient-primary text-white">
              <Camera className="w-4 h-4" />
            </Button>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-2xl font-bold text-foreground mb-1">Kevin Rodríguez</h1>
            <p className="text-muted-foreground mb-4">
              {role === "student" ? "Universitario • Ingeniería" : "Profesor • Matemáticas"}
            </p>

            {role === "student" && (
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Nivel 12</span>
                  <span className="text-foreground font-medium">2,450 / 3,000 XP</span>
                </div>
                <Progress value={82} className="h-3" />
              </div>
            )}
          </div>

          <Button
            variant="outline"
            className="glass border-glass-border bg-transparent"
            onClick={() => setRole(role === "student" ? "teacher" : "student")}
          >
            {role === "student" ? "Cambiar a Profesor" : "Cambiar a Estudiante"}
          </Button>
        </div>
      </Card>

      {role === "student" ? (
        <>
          {/* Statistics */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Estadísticas</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {stats.map((stat) => (
                <Card key={stat.label} className="glass border-glass-border p-4 text-center">
                  <p className="text-2xl font-bold text-foreground mb-1">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* Badges */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Insignias y Logros</h2>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {badges.map((badge) => (
                <Card
                  key={badge.id}
                  className={`glass border-glass-border p-4 text-center ${
                    badge.unlocked ? "hover:scale-105" : "opacity-50"
                  } transition-all`}
                >
                  <div className="text-4xl mb-2">{badge.icon}</div>
                  <p className="text-xs text-foreground font-medium">{badge.name}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* Preferences */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Settings className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Preferencias</h2>
            </div>

            <Card className="glass border-glass-border p-6 space-y-6">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Materias Favoritas</label>
                <div className="flex flex-wrap gap-2">
                  {subjects.map((subject) => (
                    <Button
                      key={subject}
                      variant="outline"
                      size="sm"
                      className="glass border-glass-border bg-transparent"
                    >
                      {subject}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Objetivo Semanal</label>
                <div className="flex gap-2">
                  {["5 hrs", "10 hrs", "15 hrs", "20 hrs"].map((goal) => (
                    <Button key={goal} variant="outline" size="sm" className="glass border-glass-border bg-transparent">
                      {goal}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Avatar del Tutor IA</label>
                <div className="flex gap-4">
                  {["🤖", "🦉", "🐱"].map((avatar) => (
                    <button
                      key={avatar}
                      className="w-16 h-16 rounded-xl glass border-glass-border hover:border-primary/50 transition-colors flex items-center justify-center text-3xl"
                    >
                      {avatar}
                    </button>
                  ))}
                </div>
              </div>
            </Card>
          </section>
        </>
      ) : (
        <>
          <section>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Mis Cursos</h2>
              </div>
              <Button className="gradient-primary text-white">Crear nuevo curso</Button>
            </div>

            <div className="space-y-4">
              {[
                { name: "Álgebra Avanzada", students: 45, progress: 65 },
                { name: "Cálculo I", students: 32, progress: 40 },
              ].map((course) => (
                <Card key={course.name} className="glass border-glass-border p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground text-lg mb-1">{course.name}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{course.students} estudiantes</span>
                        </div>
                        <span>Progreso promedio: {course.progress}%</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="glass border-glass-border bg-transparent">
                        Ver analíticas
                      </Button>
                      <Button size="sm" className="gradient-primary text-white">
                        Gestionar
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Analíticas Generales</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="glass border-glass-border p-4 text-center">
                <p className="text-2xl font-bold text-foreground mb-1">77</p>
                <p className="text-sm text-muted-foreground">Total estudiantes</p>
              </Card>
              <Card className="glass border-glass-border p-4 text-center">
                <p className="text-2xl font-bold text-foreground mb-1">52%</p>
                <p className="text-sm text-muted-foreground">Tasa de completación</p>
              </Card>
              <Card className="glass border-glass-border p-4 text-center">
                <p className="text-2xl font-bold text-foreground mb-1">4.8/5</p>
                <p className="text-sm text-muted-foreground">Calificación promedio</p>
              </Card>
            </div>
          </section>
        </>
      )}

      {/* Privacy - Same for both roles */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <Shield className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">Privacidad y Cuenta</h2>
        </div>

        <Card className="glass border-glass-border p-6 space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
            <p className="text-muted-foreground">kevin.rodriguez@email.com</p>
          </div>
          <Button variant="outline" className="glass border-glass-border bg-transparent">
            Cambiar Contraseña
          </Button>
        </Card>
      </section>
    </div>
  )
}
