"use client"

import type React from "react"

import { useState } from "react"
import { Home, BookOpen, Zap, Bot, User } from "lucide-react"
import { BottomNav } from "@/components/bottom-nav"
import { Sidebar } from "@/components/sidebar"
import { Topbar } from "@/components/topbar"
import { HomeView } from "@/components/views/home-view"
import { CoursesView } from "@/components/views/courses-view"
import { PracticesView } from "@/components/views/practices-view"
import { TutorView } from "@/components/views/tutor-view"
import { ProfileView } from "@/components/views/profile-view"
import { AiTutorFloat } from "@/components/ai-tutor-float"
import { useMobile } from "@/hooks/use-mobile"

export type NavItem = {
  id: string
  label: string
  icon: React.ComponentType<{ className?: string }>
}

const navItems: NavItem[] = [
  { id: "home", label: "Inicio", icon: Home },
  { id: "courses", label: "Cursos", icon: BookOpen },
  { id: "practices", label: "Prácticas", icon: Zap },
  { id: "tutor", label: "Tutor IA", icon: Bot },
  { id: "profile", label: "Perfil", icon: User },
]

export default function Page() {
  const [activeView, setActiveView] = useState("home")
  const isMobile = useMobile()

  const renderView = () => {
    switch (activeView) {
      case "home":
        return <HomeView />
      case "courses":
        return <CoursesView />
      case "practices":
        return <PracticesView />
      case "tutor":
        return <TutorView />
      case "profile":
        return <ProfileView />
      default:
        return <HomeView />
    }
  }

  return (
    
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Topbar />
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 rounded-full bg-primary/30 particle" />
        <div
          className="absolute top-40 right-20 w-3 h-3 rounded-full bg-secondary/20 particle"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-40 left-1/4 w-2 h-2 rounded-full bg-primary/20 particle"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-secondary/30 particle"
          style={{ animationDelay: "3s" }}
        />
      </div>

      {isMobile ? (
        <>
          <main className="pb-20 relative z-10">{renderView()}</main>
          <BottomNav items={navItems} activeView={activeView} onViewChange={setActiveView} />
          <AiTutorFloat onClick={() => setActiveView("tutor")} />
        </>
      ) : (
        <div className="flex h-screen">
          <Sidebar items={navItems} activeView={activeView} onViewChange={setActiveView} />
          <div className="flex-1 flex flex-col overflow-hidden">
            <Topbar />
            <main className="flex-1 overflow-y-auto relative z-10">{renderView()}</main>
          </div>
          {activeView !== "tutor" && <AiTutorFloat onClick={() => setActiveView("tutor")} />}
        </div>
      )}
    </div>
  )
}
