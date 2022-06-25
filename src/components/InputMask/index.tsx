import { FormEvent, InputHTMLAttributes, MutableRefObject, useCallback } from "react";
import { creditCard, postalCode } from "./masks";

interface InputProps  extends InputHTMLAttributes<HTMLInputElement> {
  mask: "postalCode"| "creditCard",
  refInput?: MutableRefObject<any>
}

export function InputMask({ mask,refInput,...props }: InputProps) {
  const handleKeyUp = useCallback((e: FormEvent<HTMLInputElement>) => {
    if(mask === "postalCode") {
      postalCode(e);
    }
    else{
      creditCard(e)
    }
  }, []);
  return (
    <div>
      <input {...props} ref={refInput} onKeyUp={handleKeyUp} />
    </div>
  );
}
