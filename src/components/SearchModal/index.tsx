import { Dialog } from "@headlessui/react";
import { KeyboardEvent, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { useCart } from "../../hooks/useCart";
import { formatPostalCode } from "../../util/format";
import { Loading } from "./Loading";

export function SearchModal() {
  let textInput = useRef<HTMLInputElement | null>(null);
  let cepNumber = "";

  const { modalIsOpen, isLoading, getProducts, postalCode } = useCart();

  function handleSetCep() {
    if (textInput.current !== null) {
      if (textInput.current.value == "") {
        toast.error("Digite um CEP!");
        return;
      }
      cepNumber = textInput.current.value;
    }
  }

  function handleEnterPress(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      handleSearch();
    }
  }

  function handleSearch() {
    handleSetCep();
    cepNumber ? getProducts(cepNumber) : null;
  }

  useEffect(() => {
    if (postalCode) {
      getProducts(postalCode);
    }
  }, []);

  return (
    <>
      <Dialog open={modalIsOpen} onClose={() => {}} className="relative z-50">
        <div className="fixed inset-0 bg-black/50" aria-hidden="true" />

        <div className="fixed inset-0 flex items-center justify-center p-4 ">
          <div className="flex min-h-full items-center justify-center ">
            <Dialog.Panel className="flex flex-col items-center md:w-[550px]  md:h-[275px] rounded-lg bg-white/90 p-4 ">
              <Dialog.Title className="text-2xl flex flex-col gap-1 justify-center items-center m-auto ">
                Bem Vindo ao
                <p className="text-3xl font-bold text-cfred-500">
                  <span className="mr-2 text-cfblue-500">Carrefour</span>- Tech
                  Day
                </p>
              </Dialog.Title>

              {isLoading ? (
                <div className="p-2 flex flex-col gap-2 items-center m-auto">
                  {postalCode !== "" ? (
                    <>
                      <p className="p-2 text-lg">
                        CEP atual:
                        <span className="ml-1 underline underline-offset-2 decoration-1">
                          {formatPostalCode(postalCode)}
                        </span>
                      </p>
                    </>
                  ) : null}
                  <Loading />
                </div>
              ) : (
                <div className="flex flex-col items-center mt-2 p-2 text-lg ">
                  <p className="p-2">
                    Digite um CEP para buscar uma loja mais proxima de você!
                  </p>
                  <div className="mt-4 ">
                    <input
                      ref={textInput}
                      type="text"
                      placeholder="00000-000"
                      pattern="[0-9]{5}-[0-9]{3}"
                      maxLength={8}
                      className="  p-2 w-[150px] bg-slate-200 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-cfblue-500"
                      onKeyDown={(e) => handleEnterPress(e)}
                    />
                    <button
                      onClick={handleSearch}
                      className="text-white  bg-cfblue-500 rounded-r-lg p-2 mr-1 "
                    >
                      Buscar
                    </button>
                  </div>
                </div>
              )}

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
