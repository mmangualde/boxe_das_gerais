interface ModalProps {
  onClose: () => void;
}

export default function Modal({ onClose }: ModalProps) {
  return (
    <dialog open id="modal">
      <h2>Página de cadastro</h2>
      <form>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />

        <label htmlFor="password">Senha</label>
        <input type="password" id="password" />

        <input type="submit" value="Cadastrar" />
      </form>
      <a href="#">já tenho cadastro/fazer login</a>
      <button onClick={onClose}>Fechar</button>
    </dialog>
  );
}
