"use client"

import type { NavItem } from "@/app/page"
import { Sparkles } from "lucide-react"

interface SidebarProps {
  items: NavItem[]
  activeView: string
  onViewChange: (view: string) => void
}

export function Sidebar({ items, activeView, onViewChange }: SidebarProps) {
  return (
    <aside className="w-64 glass-strong border-r border-glass-border flex flex-col">
      <div className="p-6 border-b border-glass-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">Eduverse</h1>
            <p className="text-xs text-muted-foreground">Aprende con IA</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeView === item.id

          return (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                isActive
                  ? "gradient-primary text-white shadow-lg"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          )
        })}
      </nav>

      <div className="p-4 border-t border-glass-border">
        <div className="glass rounded-xl p-3 text-center">
          <p className="text-xs text-muted-foreground">Nivel 12 • 2,450 XP</p>
        </div>
      </div>
    </aside>
  )
}
