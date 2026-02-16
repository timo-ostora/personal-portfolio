"use client"

import { useTheme } from "next-themes"


export default function ModeToggle() {
  const {theme, setTheme } = useTheme()
  return (
      <div onClick={() => setTheme(theme === "dark" ? "light" : "dark")} 
      className="py-1.5 pl-1.5 pr-4 dark:pl-4 dark:pr-1.5 rounded-4xl bg-card cursor-pointer transition-all duration-300">
        <span className="w-2 h-2 bg-foreground block rounded-full transition-all duration-300"/>
        <span className="sr-only">Toggle theme</span>
      </div>
  )
}
