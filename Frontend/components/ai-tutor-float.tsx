"use client"

import { Bot } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AiTutorFloatProps {
  onClick: () => void
}

export function AiTutorFloat({ onClick }: AiTutorFloatProps) {
  return (
    <Button
      onClick={onClick}
      size="icon"
      className="fixed bottom-24 right-6 md:bottom-8 md:right-8 w-14 h-14 rounded-full gradient-primary shadow-2xl gradient-glow z-50 hover:scale-110 transition-transform"
    >
      <Bot className="w-7 h-7 text-white" />
    </Button>
  )
}
