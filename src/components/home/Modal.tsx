import { MouseEventHandler } from "react";
import { ButtonGreen, ButtonRed } from "./Button";

interface ModalProps{
  handleClick: MouseEventHandler<HTMLButtonElement> | undefined,
  isVisible: boolean,
}

export default function Modal({handleClick, isVisible} : ModalProps) {
  return(
    <div className={`${isVisible ? 'block' : 'hidden'} fixed z-50 top-0 left-0 right-0 bottom-0 backdrop-blur-lg w-full h-full flex items-center justify-center flex-col`}>
      <div className="bg-white max-w-md w-full h-64 flex items-center justify-center flex-col gap-4 rounded-lg">
        <p>Are you shure this is a Modal?</p>
        <div className="flex items-center justify-center gap-x-4">
          <ButtonGreen handleClick={handleClick} text="Yes" size="large"/>
          <ButtonRed handleClick={handleClick} text="No" size="large"/>
        </div>
      </div>
    </div>
  )
}