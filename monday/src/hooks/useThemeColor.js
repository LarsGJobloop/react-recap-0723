import { useState } from "react"

export function useThemeColor() {
  // The theme variable is something that affects the UI so we
  // have to communicate that fact to React by using the useState hook
  const [ currentTheme, updateTheme ] = useState(localStorage.getItem("theme"))

  // Derive the return value from the currentTheme
  const theme = (currentTheme === "dark") ? "dark" : "bright"

  return {
    theme,
    changeTheme: () => {
      // Get current theme
      const oldTheme = localStorage.getItem("theme")
      // Derive new theme
      const newTheme = (oldTheme === "dark") ? "bright" : "dark"

      // Update local storage
      localStorage.setItem("theme", newTheme)
      // Update application state
      updateTheme(newTheme)
    }
  }
}