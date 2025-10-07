"use client"

import { TrendingUp, Award, Clock, Target } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const kpis = [
  { label: "Precisión Global", value: "87%", icon: Target, color: "text-primary" },
  { label: "Racha Máxima", value: "12 días", icon: Award, color: "text-success" },
  { label: "Tiempo Semanal", value: "8.5 hrs", icon: Clock, color: "text-warning" },
  { label: "Nivel Actual", value: "Nivel 12", icon: TrendingUp, color: "text-secondary" },
]

const subjects = [
  { name: "Matemáticas", mastery: 85, concepts: 24 },
  { name: "Ciencia", mastery: 72, concepts: 18 },
  { name: "Lenguaje", mastery: 91, concepts: 31 },
  { name: "Historia", mastery: 68, concepts: 15 },
]

const recentActivities = [
  { title: "Fracciones Avanzadas", subject: "Matemáticas", status: "completed", score: 95 },
  { title: "Sistema Solar", subject: "Ciencia", status: "completed", score: 88 },
  { title: "Verbos Irregulares", subject: "Lenguaje", status: "in-progress", score: null },
  { title: "Revolución Industrial", subject: "Historia", status: "completed", score: 76 },
]

export function ProgressView() {
  return (
    <div className="p-4 md:p-8 space-y-8 max-w-7xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Tu Progreso</h1>
        <p className="text-muted-foreground">Sigue tu evolución y logros</p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {kpis.map((kpi) => {
          const Icon = kpi.icon
          return (
            <Card key={kpi.label} className="glass border-glass-border p-5">
              <div className="space-y-3">
                <Icon className={`w-8 h-8 ${kpi.color}`} />
                <div>
                  <p className="text-2xl font-bold text-foreground">{kpi.value}</p>
                  <p className="text-sm text-muted-foreground">{kpi.label}</p>
                </div>
              </div>
            </Card>
          )
        })}
      </div>

      {/* Subject Mastery */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">Dominio por Materia</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {subjects.map((subject) => (
            <Card key={subject.name} className="glass border-glass-border p-5">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">{subject.name}</h3>
                    <p className="text-sm text-muted-foreground">{subject.concepts} conceptos</p>
                  </div>
                  <span className="text-2xl font-bold text-primary">{subject.mastery}%</span>
                </div>
                <Progress value={subject.mastery} className="h-3" />
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Recent Activities */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">Actividades Recientes</h2>
        <Card className="glass border-glass-border divide-y divide-glass-border">
          {recentActivities.map((activity, index) => (
            <div key={index} className="p-4 hover:bg-muted/50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">{activity.title}</h3>
                  <p className="text-sm text-muted-foreground">{activity.subject}</p>
                </div>
                <div className="flex items-center gap-3">
                  {activity.status === "completed" ? (
                    <div className="text-right">
                      <p className="text-lg font-bold text-success">{activity.score}%</p>
                      <p className="text-xs text-muted-foreground">Completado</p>
                    </div>
                  ) : (
                    <div className="px-3 py-1 rounded-full bg-warning/20 text-warning text-sm font-medium">
                      En curso
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Card>
      </section>
    </div>
  )
}
