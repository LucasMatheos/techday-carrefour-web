import { Fragment, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Loading } from "../../SearchModal/Loading";
import { X } from "phosphor-react";
import { useCart } from "../../../hooks/useCart";
import { ShoppingDoneMessage } from "./ShoppingDoneMessage";
import { useNavigate } from "react-router-dom";
import { InputMask } from "../../InputMask";

type PaymentData = {
  cardNumber: string;
  cvv: string;
  expiryDate: string;
  name: string;
}

interface PaymentFormProps {
  paymentFormIsOpen: boolean;
  setPaymentFormIsOpen: (state: boolean) => void;
}

const CreatePaymentFormSchema = yup.object().shape({
  cardNumber: yup
    .string()
    .matches(/^[0-9]{16}$/, "Cartão inválido")
    .required("Número do cartão é obrigatório"),

  name: yup.string().required("Nome obrigatório"),
  expiryDate: yup.string().required("Data de expiração é obrigatória"),
  cvv: yup
    .string()
    .matches(/^[0-9]{3}$/, "Código inválido")
    .required("Código é obrigatório"),
});

export function PaymentForm({
  paymentFormIsOpen,
  setPaymentFormIsOpen,
}: PaymentFormProps) {
  const { register, handleSubmit, formState } = useForm<PaymentData>({
    resolver: yupResolver(CreatePaymentFormSchema),
  });

  const { cart } = useCart();
  const navigate = useNavigate();
  const { errors } = formState;

  const handlePaymentConfirm: SubmitHandler<PaymentData> = async (value) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
  };

  useEffect(() => {
    if (cart.length === 0) {
      navigate("/");
    }
  }, []);

  return (
    <Transition show={paymentFormIsOpen} as={Fragment}>
      <Dialog
        onClose={() => setPaymentFormIsOpen(false)}
        className="relative z-50 "
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="fixed inset-0 flex items-center justify-center">
            {(formState.isSubmitSuccessful) ? (
              <ShoppingDoneMessage />
            ) : (
              <Dialog.Panel className="mx-auto relative  rounded-xl bg-white w-[calc(100vw-1rem)] sm:w-[450px]  p-2">
                <button
                  onClick={() => setPaymentFormIsOpen(false)}
                  className="absolute right-0 mr-2 "
                >
                  <X size={28} color="gray" />
                </button>
                <Dialog.Title className="font-bold p-2 text-xl">
                  Pagamento
                </Dialog.Title>
                <form onSubmit={handleSubmit(handlePaymentConfirm)}>
                  <div className=" p-1">
                    <label className="p-1  font-bold flex flex-col gap-1 h-[80px]">
                      Número do Cartão:
                      <input
                        id="cardNumber"
                        type="text"
                        maxLength={16}
                        placeholder="0000 0000 0000 0000"
                        className={`border-[1px] border-black/40 rounded-md p-1 w-full ${
                          errors.cardNumber ? "border-red-500" : ""
                        }`}
                        {...register("cardNumber")}
                      />
                      {errors.cardNumber && (
                        <p className="text-xs font-normal text-red-500  mt-[-3px]">
                          {errors.cardNumber.message}
                        </p>
                      )}
                    </label>
                    <label className="p-1  font-bold flex flex-col gap-1 h-[80px]">
                      Nome do Titular:
                      <input
                        id="name"
                        type="text"
                        placeholder="ex. Lucas Brito"
                        className={`border-[1px] border-black/40 rounded-md p-1 ${
                          errors.name ? "border-red-500" : ""
                        }`}
                        {...register("name")}
                      />
                      {errors.name && (
                        <p className="text-xs font-normal text-red-500  mt-[-3px]">
                          {errors.name.message}
                        </p>
                      )}
                    </label>
                    <div className="flex justify-between">
                      <label className="p-1 font-bold flex flex-col gap-1 h-[90px]">
                        Data de Expiração:
                        <input
                          id="expiryDate"
                          placeholder="00/00"
                          type="month"
                          className={`border-[1px] border-black/40 rounded-md p-1 ${
                            errors.expiryDate ? "border-red-500" : ""
                          }`}
                          {...register("expiryDate")}
                        />
                        {errors.expiryDate && (
                          <p className="text-xs font-normal text-red-500 mt-[-3px]">
                            {errors.expiryDate.message}
                          </p>
                        )}
                      </label>
                      <label className="p-1  font-bold flex flex-col gap-1 h-[90px]" >
                        CVV:
                        <input
                          id="cvv"
                          maxLength={3}
                          type="text"
                          className={`border-[1px] border-black/40 rounded-md p-1 w-24 ${
                            errors.cvv ? "border-red-500" : ""
                          }`}
                          {...register("cvv")}
                        />
                        {errors.cvv && (
                          <p className="text-xs font-normal text-red-500  mt-[-3px]">
                            {errors.cvv.message}
                          </p>
                        )}
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="mx-auto  my-3 bg-cfblue-500 flex justify-center text-[#fff] border-0 rounded-md py-2 px-3 font-bold uppercase hover:bg-cfblue-900 transition duration-300"
                    >
                      {formState.isSubmitting ? <Loading /> : "Confirmar"}
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            )}
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}
