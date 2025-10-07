"use client"

import { useState } from "react"
import { Send, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const quickSuggestions = [
  "Repasar fracciones",
  "Dame 1 ejercicio rápido",
  "Explica como si tuviera 10 años",
  "Ayuda con mi tarea",
]

const messages = [
  { id: 1, type: "ai", content: "¡Hola María! 👋 Soy tu tutor de IA. ¿En qué puedo ayudarte hoy?" },
  { id: 2, type: "user", content: "¿Puedes explicarme las fracciones?" },
  {
    id: 3,
    type: "ai",
    content:
      "Claro! Las fracciones representan partes de un todo. Imagina una pizza dividida en 8 partes iguales. Si comes 3 pedazos, has comido 3/8 de la pizza. El número de arriba (3) se llama numerador y el de abajo (8) denominador.",
  },
]

export function TutorView() {
  const [input, setInput] = useState("")

  return (
    <div className="h-[calc(100vh-5rem)] md:h-full flex flex-col max-w-4xl mx-auto p-4 md:p-8">
      {/* Header */}
      <div className="glass-strong rounded-2xl p-6 mb-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Tu Tutor IA</h1>
            <p className="text-muted-foreground">Siempre listo para ayudarte a aprender</p>
          </div>
        </div>
      </div>

      {/* Quick Suggestions */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
        {quickSuggestions.map((suggestion) => (
          <Button
            key={suggestion}
            variant="outline"
            size="sm"
            className="glass border-glass-border whitespace-nowrap hover:border-primary/50 bg-transparent"
          >
            {suggestion}
          </Button>
        ))}
      </div>

      {/* Chat Messages */}
      <Card className="flex-1 glass border-glass-border p-4 overflow-y-auto mb-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex gap-3 ${message.type === "user" ? "flex-row-reverse" : ""}`}>
            <Avatar className={`w-10 h-10 ${message.type === "ai" ? "gradient-primary" : "bg-muted"}`}>
              <AvatarFallback className={message.type === "ai" ? "text-white" : "text-foreground"}>
                {message.type === "ai" ? "🤖" : "M"}
              </AvatarFallback>
            </Avatar>
            <div
              className={`flex-1 max-w-[80%] p-4 rounded-2xl ${
                message.type === "ai" ? "glass border-glass-border" : "gradient-primary text-white"
              }`}
            >
              <p className={`text-sm leading-relaxed ${message.type === "user" ? "text-white" : "text-foreground"}`}>
                {message.content}
              </p>
            </div>
          </div>
        ))}
      </Card>

      {/* Input */}
      <div className="glass-strong rounded-2xl p-4 flex gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe tu pregunta..."
          className="flex-1 glass border-glass-border bg-muted/50 text-foreground"
        />
        <Button size="icon" className="gradient-primary text-white">
          <Send className="w-5 h-5" />
        </Button>
      </div>
    </div>
  )
}
