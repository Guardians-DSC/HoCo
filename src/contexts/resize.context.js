import React, { createContext, useContext, useState, useEffect } from 'react'

const ResizeContext = createContext()

export function ResizeProvider({ children }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1250)

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => {
        const ismobile = window.innerWidth < 1250
        if (ismobile !== isMobile) {
          setIsMobile(ismobile)
        }
      },
      false
    )
  }, [isMobile])

  const values = {
    isMobile,
    setIsMobile,
  }

  return (
    <ResizeContext.Provider value={values}>{children}</ResizeContext.Provider>
  )
}

export default function useResize() {
  const context = useContext(ResizeContext)

  return { ...context }
}
