import Modal from "./Modal";

interface HeaderProps {
  onOpenModal: () => void;
  onCloseModal: () => void;
  isModalOpen: boolean;
}

export default function Header({ onOpenModal, onCloseModal, isModalOpen }: HeaderProps) {
  return (
    <header>
      <img src="/assets/logo_boxe_das_gerais.png" alt="Logo Boxe das Gerais" />

      <nav>
        <ul>
          <li><a href="#inicio">Início</a></li>
          <li><a href="#aulas">Aulas</a></li>
          <li><a href="#cronograma">Cronograma</a></li>
          <li><a href="#videos">Vídeos</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
      
      <a href="#aulas" className="cta-button">Agende sua Aula</a>

      <svg onClick={onOpenModal} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/></svg>
      {isModalOpen && (
        <>
          <div className="modal-overlay" onClick={onCloseModal}></div>
          <Modal onClose={onCloseModal} />
        </>
      )}
    </header>
  );
}
