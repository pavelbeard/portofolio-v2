import { cn } from '@/lib/utils'
import { CommandPallete } from './CommandPallete'
import { useEffect, useState } from 'react'

export default function Footer() {
  const [isLaptop, setIsLaptop] = useState(false)

  useEffect(() => {
    const isLaptop = navigator.userAgent.match(
      /(Macintosh|Windows).+AppleWebKit/
    )
    setIsLaptop(!!isLaptop)
  }, [])

  return (
    <footer
      className={cn(
        isLaptop ? 'fixed bottom-0 left-0 right-0 print:hidden' : 'hidden',
        'p-2 border-t-1 border-t-purple-400 bg-purple-600 text-white'
      )}
      aria-label="Quick links"
    >
      <div className="flex items-center text-sm gap-1 place-content-center">
        <CommandPallete />
      </div>
    </footer>
  )
}
