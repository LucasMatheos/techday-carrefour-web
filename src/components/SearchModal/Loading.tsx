import { CircleNotch } from "phosphor-react";


export function Loading(){
  return(
    <div className="w-10 h-10 flex items-center justify-center overflow-hidden">
      <CircleNotch weight="bold" className="w-10 h-10 animate-spin"/>
    </div>
  )
}