import { useEffect, useState } from 'react'
import {
  CommandDialog,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from './ui/command'
import { Button } from './ui/button'
import { CommandEmpty } from 'cmdk'

export function CommandPallete() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMac, setIsMac] = useState(false)

  useEffect(() => {
    const isMac: boolean =
      typeof window !== 'undefined'
        ? window.navigator.userAgent.indexOf('Mac') > -1
        : false

    setIsMac(isMac)

    const down = (e: KeyboardEvent) => {
      console.log(e.key, e.metaKey, e.ctrlKey)

      if (e.key === 'j' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setIsOpen((isOpen) => !isOpen)
      }
    }

    document.addEventListener('keydown', down)

    return () => document.removeEventListener('keydown', down)
  }, [])

  return (
    <>
      Press
      <Button className="bg-black rounded-md h-6! px-2! py-0.5!">
        <kbd className="pointer-events-none h-5 text-[10px]/[2em]">
          <span className="text-sm">{isMac ? '⌘' : 'Ctrl'}</span> + J
        </kbd>
      </Button>
      to open the command palette.
      <CommandDialog open={isOpen} onOpenChange={setIsOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Actions" className="">
            <CommandItem>Print this page</CommandItem>
          </CommandGroup>
          <CommandGroup heading="Links" className="">
            <CommandItem
              onClick={() => window.open('https://heavycream.dev', '_blank')}
            >
              Personal Website
            </CommandItem>
            <CommandItem
              onClick={() =>
                window.open('https://github.com/pavelbeard', '_blank')
              }
            >
              Github
            </CommandItem>
            <CommandItem
              onClick={() =>
                window.open('https://linkedin.com/in/pavelbeard', '_blank')
              }
            >
              LinkedIn
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
