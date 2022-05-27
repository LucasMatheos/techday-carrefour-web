import { useState } from "react";
import { Header } from "./components/Header";
import { SearchModal } from "./components/SearchModal";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const [modalIsOpen, setModalisOpen] = useState(true);
  const [cep, setCep] = useState("0");

  function handleCloseModal() {
    setModalisOpen(false);
  }

  return (
    <>
      <Header />
      {cep}
      <SearchModal isOpen={modalIsOpen} setCep={setCep} />
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
