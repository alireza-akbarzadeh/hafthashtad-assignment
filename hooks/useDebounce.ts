import { useEffect, useRef, useState } from "react"

type Timer = ReturnType<typeof setTimeout>
type SomeFunction = (...args: any[]) => void

type UseDebounceReturnType<Func extends SomeFunction> = [boolean, Func]

/**
 *
 * @param func The original, non debounced function (You can pass any number of args to it)
 * @param delay The delay (in ms) for the function to return
 * @returns The debounced function, which will run only if the debounced function has not been called in the last (delay) ms
 */

export function useDebounce<Func extends SomeFunction>(func: Func, delay = 1000): UseDebounceReturnType<Func> {
  const timer = useRef<Timer>()
  const [isPending, setIsPending] = useState(false) // Add state to track pending status

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current)
    }
  }, [])

  const debouncedFunction = ((...args) => {
    setIsPending(true) // Set pending state to true when function starts
    const newTimer = setTimeout(() => {
      func(...args)
      setIsPending(false) // Set pending state to false after debounce time
    }, delay)
    if (timer.current) clearTimeout(timer.current)
    timer.current = newTimer
  }) as Func

  return [isPending, debouncedFunction] as UseDebounceReturnType<Func> // Return the debounced function and pending state
}
