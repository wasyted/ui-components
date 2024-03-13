import { MouseEventHandler } from "react"

interface ButtonProps{
  text: string,
  size: 'normal' | 'large' | 'full',
  handleClick: MouseEventHandler<HTMLButtonElement> | undefined,
}

export function ButtonBlue({text, size, handleClick} : ButtonProps) {
  return (
    <button onClick={handleClick} className={`bg-blue-500 ${size === 'large' ? 'px-10' : ''} ${size === 'normal' ? 'px-4' : ''} ${size === 'full' ? 'w-full p-4' : ''} text-white py-1.5 rounded-full shadow-md transition-all hover:bg-blue-400`}>{text}</button>
  )
}

export function ButtonBlack({text, size, handleClick} : ButtonProps) {
  return (
    <button onClick={handleClick} className={`bg-black ${size === 'large' ? 'px-10' : ''} ${size === 'normal' ? 'px-4' : ''} ${size === 'full' ? 'w-full p-4' : ''} text-white px-4 py-1.5 rounded-full shadow-md transition-all hover:border hover:border-white hover:bg-white`}>{text}</button>
  )
}

export function ButtonOrange({text, size, handleClick} : ButtonProps) {
  return (
    <button onClick={handleClick} className={`bg-orange-300 ${size === 'large' ? 'px-10' : ''} ${size === 'normal' ? 'px-4' : ''} ${size === 'full' ? 'w-full p-4' : ''} text-white px-4 py-1.5 rounded-full shadow-md transition-all hover:bg-orange-200`}>{text}</button>
  )
}

export function ButtonGreen({text, size, handleClick} : ButtonProps) {
  return (
    <button onClick={handleClick} className={`bg-lime-500 ${size === 'large' ? 'px-10' : ''} ${size === 'normal' ? 'px-4' : ''} ${size === 'full' ? 'w-full p-4' : ''} text-white px-4 py-1.5 rounded-full shadow-md transition-all hover:bg-lime-400`}>{text}</button>
  )
}

export function ButtonRed({text, size, handleClick} : ButtonProps) {
  return (
    <button onClick={handleClick} className={`bg-red-500 ${size === 'large' ? 'px-8' : ''} ${size === 'normal' ? 'px-4' : ''} ${size === 'full' ? 'w-full p-4' : ''} text-white px-4 py-1.5 rounded-full shadow-md transition-all hover:bg-red-400`}>{text}</button>
  )
}

export function ButtonYellow({text, size, handleClick} : ButtonProps) {
  return (
    <button onClick={handleClick} className={`bg-yellow-400 ${size === 'large' ? 'px-8' : ''} font-bold ${size === 'normal' ? 'px-4' : ''} ${size === 'full' ? 'w-full p-4' : ''} text-zinc-700 px-4 py-1.5 rounded-full shadow-md transition-all hover:bg-yellow-300`}>{text}</button>
  )
}