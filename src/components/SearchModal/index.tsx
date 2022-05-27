import { Dialog } from "@headlessui/react";
import { WarningCircle } from "phosphor-react";
import { useRef } from "react";
import { toast } from "react-toastify";

interface SearchModalProps {
  isOpen: boolean;
  setCep: (cep: string) => void;
}

export function SearchModal({ isOpen, setCep }: SearchModalProps) {
  let textInput = useRef<HTMLInputElement | null>(null);

  function handleSetCep() {
    if (textInput.current !== null) {
      if (textInput.current.value == "") {
        toast.error("Digite um CEP!");
        return;
      }
      setCep(textInput.current.value);
    }
  }

  return (
    <>
      <Dialog open={isOpen} onClose={() => {}} className="relative z-50">
        <div className="fixed inset-0 bg-black/50" aria-hidden="true" />

        <div className="fixed inset-0 flex items-center justify-center p-4 ">
          <div className="flex min-h-full items-center justify-center ">
            <Dialog.Panel className="flex flex-col items-center w-[550px] h-[275px] rounded-lg bg-white/90 p-4">
              <Dialog.Title className="text-2xl flex flex-col gap-1 justify-center items-center m-auto ">
                Bem Vindo ao
                <p className="text-3xl font-bold text-cfred-500">
                  <span className="mr-2 text-cfblue-500">Carrefour</span>- Tech
                  Day
                </p>
              </Dialog.Title>
              <div className="flex flex-col items-center mt-2 p-2 text-lg ">
                <p className="p-2">
                  Digite um CEP para buscar uma loja mais proxima de você!
                </p>
                <div className="mt-4 ">
                  <input
                    ref={textInput}
                    type="text"
                    placeholder="00000-000"
                    pattern="^\d{5}-\d{3}$"
                    className="  p-2 w-[150px] bg-slate-200 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-cfblue-500"
                  />
                  <button
                    onClick={handleSetCep}
                    className="text-white  bg-cfblue-500 rounded-r-lg p-2 mr-1 "
                  >
                    Buscar
                  </button>
                </div>
              </div>
              <footer className="text-xs text-neutral-400 mt-2 p-2">
                Feito por
                <a
                  href="https://github.com/LucasMatheos"
                  target="_blank"
                  className="underline underline-offset-2 ml-1"
                >
                  Lucas Brito
                </a>
              </footer>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
