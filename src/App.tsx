import { useState } from "react";
import { Header } from "./components/Header";

import { TesterApi } from "./components/TesterApi";

export default function App() {
  return (
    <>
      <Header />
      <TesterApi />

    </>
  );
}
