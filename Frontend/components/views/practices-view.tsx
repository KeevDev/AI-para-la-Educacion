"use client"

import { useState } from "react"
import { Clock, Zap, Trophy, Brain, Target, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const filters = ["Todas", "Matemáticas", "Ciencia", "Lenguaje", "Historia"]

const practices = [
  {
    id: 1,
    title: "Ejercicios Adaptativos IA",
    subject: "Matemáticas",
    difficulty: "Media",
    time: "15 min",
    xp: 75,
    type: "adaptive",
    icon: Brain,
  },
  {
    id: 2,
    title: "Simulador de Experimentos",
    subject: "Ciencia",
    difficulty: "Difícil",
    time: "20 min",
    xp: 100,
    type: "simulator",
    icon: Sparkles,
  },
  {
    id: 3,
    title: "Quiz Inteligente",
    subject: "Historia",
    difficulty: "Fácil",
    time: "10 min",
    xp: 50,
    type: "quiz",
    icon: Target,
  },
  {
    id: 4,
    title: "Reto de Vocabulario",
    subject: "Lenguaje",
    difficulty: "Media",
    time: "12 min",
    xp: 60,
    type: "challenge",
    icon: Zap,
  },
  {
    id: 5,
    title: "Práctica de Ecuaciones",
    subject: "Matemáticas",
    difficulty: "Difícil",
    time: "18 min",
    xp: 90,
    type: "adaptive",
    icon: Brain,
  },
  {
    id: 6,
    title: "Laboratorio Virtual",
    subject: "Ciencia",
    difficulty: "Media",
    time: "15 min",
    xp: 70,
    type: "simulator",
    icon: Sparkles,
  },
]

export function PracticesView() {
  const [activeFilter, setActiveFilter] = useState("Todas")

  return (
    <div className="p-4 md:p-8 space-y-6 max-w-7xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Prácticas Interactivas</h1>
        <p className="text-muted-foreground">Aprende jugando con ejercicios adaptativos y simulaciones</p>
      </div>

      {/* XP Progress Banner */}
      <Card className="glass-strong border-glass-border p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">XP Acumulado esta semana</p>
              <p className="text-2xl font-bold text-foreground">450 XP</p>
            </div>
          </div>
          <Button variant="outline" size="sm" className="glass border-glass-border bg-transparent">
            Ver ranking
          </Button>
        </div>
      </Card>

      {/* Filters */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {filters.map((filter) => (
          <Button
            key={filter}
            variant={activeFilter === filter ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveFilter(filter)}
            className={activeFilter === filter ? "gradient-primary text-white" : "glass border-glass-border"}
          >
            {filter}
          </Button>
        ))}
      </div>

      {/* Practices Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {practices.map((practice) => {
          const Icon = practice.icon
          return (
            <Card
              key={practice.id}
              className="glass border-glass-border p-5 hover:border-primary/50 transition-all hover:scale-105"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div
                    className={`px-2 py-1 rounded-lg text-xs font-medium ${
                      practice.difficulty === "Fácil"
                        ? "bg-success/20 text-success"
                        : practice.difficulty === "Media"
                          ? "bg-warning/20 text-warning"
                          : "bg-destructive/20 text-destructive"
                    }`}
                  >
                    {practice.difficulty}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-1">{practice.title}</h3>
                  <p className="text-sm text-muted-foreground">{practice.subject}</p>
                </div>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{practice.time}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Trophy className="w-4 h-4" />
                    <span>+{practice.xp} XP</span>
                  </div>
                </div>

                <Button className="w-full gradient-primary text-white">
                  <Zap className="w-4 h-4 mr-2" />
                  Comenzar
                </Button>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
