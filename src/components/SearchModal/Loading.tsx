import { CircleNotch } from "phosphor-react";

export function Loading() {
  return (
    <div className="max-w-10 max-h-10 flex items-center justify-center overflow-hidden">
      <CircleNotch
        weight="bold"
        size={20}
        className="animate-spin"
      />
    </div>
  );
}
