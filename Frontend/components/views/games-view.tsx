"use client"

import { useState } from "react"
import { Clock, Zap, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const filters = ["Todas", "Matemáticas", "Ciencia", "Lenguaje", "Historia"]
const difficulties = ["Fácil", "Media", "Difícil"]

const games = [
  { id: 1, title: "Verdadero o Falso Rápido", subject: "Matemáticas", difficulty: "Fácil", time: "5 min", icon: "🎯" },
  { id: 2, title: "Simulador de Decisiones", subject: "Historia", difficulty: "Media", time: "15 min", icon: "🏛️" },
  { id: 3, title: "Constructor de Conceptos", subject: "Ciencia", difficulty: "Difícil", time: "20 min", icon: "🔬" },
  { id: 4, title: "Desafío de Vocabulario", subject: "Lenguaje", difficulty: "Media", time: "10 min", icon: "📚" },
  { id: 5, title: "Ecuaciones Ninja", subject: "Matemáticas", difficulty: "Difícil", time: "12 min", icon: "🥷" },
  { id: 6, title: "Experimento Virtual", subject: "Ciencia", difficulty: "Fácil", time: "8 min", icon: "⚗️" },
]

export function GamesView() {
  const [activeFilter, setActiveFilter] = useState("Todas")

  return (
    <div className="p-4 md:p-8 space-y-6 max-w-7xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Juegos Educativos</h1>
        <p className="text-muted-foreground">Aprende jugando con nuestros minijuegos interactivos</p>
      </div>

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

      {/* Games Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {games.map((game) => (
          <Card
            key={game.id}
            className="glass border-glass-border p-5 hover:border-primary/50 transition-all hover:scale-105"
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="text-4xl">{game.icon}</div>
                <div
                  className={`px-2 py-1 rounded-lg text-xs font-medium ${
                    game.difficulty === "Fácil"
                      ? "bg-success/20 text-success"
                      : game.difficulty === "Media"
                        ? "bg-warning/20 text-warning"
                        : "bg-destructive/20 text-destructive"
                  }`}
                >
                  {game.difficulty}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-foreground text-lg mb-1">{game.title}</h3>
                <p className="text-sm text-muted-foreground">{game.subject}</p>
              </div>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{game.time}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Trophy className="w-4 h-4" />
                  <span>+50 XP</span>
                </div>
              </div>

              <Button className="w-full gradient-primary text-white">
                <Zap className="w-4 h-4 mr-2" />
                Jugar
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
