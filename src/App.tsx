import { useState } from "react";
import { Header } from "./components/Header";
import { SearchModal } from "./components/SearchModal";

import { TesterApi } from "./components/TesterApi";

export default function App() {
  const [modalIsOpen, setModalisOpen] = useState(true);

  function handleCloseModal() {
    setModalisOpen(false);
  }

  return (
    <>
      <Header />
      {/* <TesterApi /> */}

      <SearchModal isOpen={modalIsOpen} />
    </>
  );
}
