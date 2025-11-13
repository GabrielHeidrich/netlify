import "../styles/modal.css";

interface SignupModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
}

export default function SignupModal({ open, onClose, onSubmit }: SignupModalProps) {
  if (!open) return null;

  return (
    <div className="signup-overlay" onClick={onClose}>
      <div className="signup-modal" onClick={(e) => e.stopPropagation()}>
        <header className="signup-header">
          <h3>Cadastre-se</h3>
          <button onClick={onClose} aria-label="Fechar">×</button>
        </header>

        <form
          className="signup-form"
          onSubmit={(e) => {
            e.preventDefault();
            const data = Object.fromEntries(
              new FormData(e.currentTarget as HTMLFormElement).entries()
            );
            onSubmit(data);
            alert("Cadastro realizado com sucesso!");
            onClose();
          }}
        >
          <label>
            <span>Nome completo</span>
            <input type="text" name="nome" placeholder="Ex: João Silva" required />
          </label>

          <label>
            <span>CPF</span>
            <input
              type="text"
              name="cpf"
              placeholder="000.000.000-00"
              maxLength={14}
              required
            />
          </label>

          <label>
            <span>Nome do Pet</span>
            <input
              type="text"
              name="pet"
              placeholder="Ex: Thor, Luna..."
              required
            />
          </label>

          <label>
            <span>E-mail</span>
            <input
              type="email"
              name="email"
              placeholder="seuemail@exemplo.com"
              required
            />
          </label>

          <label>
            <span>Senha</span>
            <input
              type="password"
              name="senha"
              placeholder="••••••••"
              required
            />
          </label>

          <button className="signup-submit" type="submit">
            Cadastrar
          </button>

          <p className="signup-terms">
            Ao se cadastrar, você concorda com nossos{" "}
            <a href="#">termos de uso</a> e <a href="#">política de privacidade</a>.
          </p>
        </form>
      </div>
    </div>
  );
}
