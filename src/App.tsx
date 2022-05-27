import { useState } from "react";
import { Header } from "./components/Header";
import { SearchModal } from "./components/SearchModal";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [cep, setCep] = useState("0");
  const [isLoading, setIsLoading] = useState(false)

  function handleCloseModal() {
    setModalIsOpen(false);
  }

  return (
    <>
      <Header />
      {cep}
      <SearchModal isOpen={modalIsOpen} setCep={setCep} isLoading={isLoading}/>


      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}
