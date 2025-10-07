"use client"

import { Search, Bell } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Topbar() {
  return (
    <header className="glass-strong border-b border-glass-border">
      <div className="flex items-center justify-between h-16 px-6">
        <div className="flex items-center gap-4 flex-1">
          <h1 className="text-xl font-bold gradient-text md:hidden">Eduverse</h1>

          <div className="flex-1 max-w-md hidden md:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Buscar materias, juegos..."
                className="pl-10 glass border-glass-border bg-muted/50 text-foreground placeholder:text-muted-foreground"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full" />
          </Button>

          <Avatar className="w-9 h-9 border-2 border-primary">
            <AvatarImage src="/diverse-students-studying.png" />
            <AvatarFallback className="gradient-primary text-white text-sm">MA</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}
