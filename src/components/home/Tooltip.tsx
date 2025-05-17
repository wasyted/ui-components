interface TooltipProps{
  text: string,
  isVisible: boolean,
}

export default function Tooltip({text, isVisible} : TooltipProps){
  return(
    <div className={`${isVisible ? 'opacity-100' : 'opacity-0'} transition-all text-white font-bold bg-black absolute z-50 bottom-full flex items-center justify-center border px-2 py-1.5 rounded-lg text-center mb-3`}>
      <p>{text}</p>
    </div>
  )
}