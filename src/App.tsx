import { useState } from "react";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Aulas from "./components/Aulas";
import Cronograma from "./components/Cronograma";
import ContactInfo from "./components/ContactInfo";
import "./index.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Header
        onOpenModal={() => setIsModalOpen(true)}
        isModalOpen={isModalOpen}
        onCloseModal={() => setIsModalOpen(false)}
      />
      <main>
        <Introduction />
        <Aulas />
        <Cronograma />
        <ContactInfo />
      </main>
    </>
  );
}

export default App;
