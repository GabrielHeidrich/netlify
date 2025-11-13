import { useState } from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import SignupModal from "../components/SignupModal";

import HeroRectangleOne from "../assets/images/rectangleOne.png";
import HeroRectangleTwo from "../assets/images/rectangleTwo.png";

import ProfileImageOne from "../assets/avatars/mae1.jpeg";
import ProfileImageTwo from "../assets/avatars/mae2.jpeg";
import ProfileImageThree from "../assets/avatars/mae3.jpeg";

import Star from "../assets/icons/star-filled.svg";
import StarOuter from "../assets/icons/star-outline.svg";
import Check from "../assets/icons/check.png";

import PersonApron from "../assets/personapron.svg";
import Pets from "../assets/pets.svg";
import Shower from "../assets/shower.svg";

import "../styles/utility.css";
import "../styles/hero.css";
import "../styles/solution.css";
import "../styles/testimonials.css";
import "../styles/pricing.css";
import "../styles/contact.css";
import "../styles/footer.css";

type ToastState = {
  type: "success" | "error";
  message: string;
} | null;

export default function Home() {
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [toast, setToast] = useState<ToastState>(null);

  return (
    <main>
      <Header
        onOpenSignup={() => setShowSignup(true)}
        onOpenLogin={() => setShowLogin(true)}
      />

      <section id="hero">
        <span className="desktop-only">
          <img src={HeroRectangleTwo} alt="Retângulo pequeno hero" />
        </span>
        <img src={HeroRectangleOne} alt="Retângulo grande hero" />

        <div className="container content">
          <p className="desktop-only">Olá</p>

          <h1>
            O cuidado que seu pet merece, <br /> com carinho e segurança!
          </h1>

          <p>
            Banho, tosa, consultas e produtos pet entregues na sua porta.
            Seu amigo feliz e saudável, todos os dias.
          </p>

          <div className="flex gap-1">
            <span>
              <Button text="Cadastre-se" onClick={() => setShowSignup(true)} />
            </span>
            <span className="desktop-only">
              <Button text="Veja mais" secondary />
            </span>
          </div>
        </div>
      </section>

      <section className="container" id="solution">
        <header>
          <span>
            <h2>Soluções</h2>
            <span className="desktop-only">
              <h2>Sob medida para você</h2>
            </span>
          </span>

          <p>
            Inovação é com a gente! A <strong>PetCare</strong> já conquistou
            diversos clientes, seja você mais um deles — veja tudo que pode
            ganhar com nossos serviços.
          </p>
        </header>

        <section className="even-columns">
          <div className="card">
            <span>
              <img src={Pets} alt="ícone campeão" width={64} height={64} />
            </span>
            <div>
              <h3>Amor para Todos os Pets</h3>
              <p>
                Atendemos cães, gatos e até pets exóticos! <br />
                Cada um recebe atenção personalizada, respeitando suas
                necessidades e temperamento.
              </p>
              <hr />
            </div>
          </div>
          <div className="card">
            <span>
              <img src={Shower} alt="ícone campeão" width={64} height={64} />
            </span>
            <div>
              <h3>Banhos e Cuidados Premium</h3>
              <p>
                Utilizamos produtos dermatologicamente testados e técnicas de
                relaxamento para garantir o conforto e bem-estar do seu pet.
              </p>
              <hr />
            </div>
          </div>
          <div className="card">
            <span>
              <img
                src={PersonApron}
                alt="ícone campeão"
                width={64}
                height={64}
              />
            </span>
            <div>
              <h3>Equipe Especializada</h3>
              <p>
                Nossa equipe é formada por profissionais apaixonados e
                certificados, sempre atualizados nas melhores práticas de
                estética e saúde animal. Cuidar do seu pet é nossa vocação.
              </p>
              <hr />
            </div>
          </div>
        </section>
      </section>

      <section id="testimonials">
        <header>
          <span>
            <p className="desktop-only">A opinião de quem confia</p>
            <h2>Cada pet é único pra nós!</h2>
          </span>
          <p>
            Quem já trouxe seu pet pra <strong>PetCare</strong> sabe: aqui
            cada banho, tosa e carinho são feitos com amor e profissionalismo.
            Veja o que nossos clientes dizem sobre a experiência!
          </p>
        </header>

        {/* carrossel */}
        <section className="carousel">
          {/* bloco 1 */}
          <div className="carousel-content">
            {/* CARD 1 */}
            <div className="carousel-card">
              <img src={ProfileImageOne} alt="Imagem perfil cliente" />
              <span className="testimony">
                <p>
                  Levei meu golden pra tosa e o resultado foi incrível! O
                  pelo ficou macio, cheiroso e ele saiu abanando o rabo de
                  alegria.
                </p>
              </span>
              <span className="rating" aria-label="4 de 5 estrelas">
                <img src={Star} alt="estrela" width={22} height={20} />
                <img src={Star} alt="estrela" width={22} height={20} />
                <img src={Star} alt="estrela" width={22} height={20} />
                <img src={Star} alt="estrela" width={22} height={20} />
                <img
                  src={StarOuter}
                  alt="estrela vazia"
                  width={20}
                  height={22}
                />
              </span>
              <span className="names">
                <p>Ana Beatriz</p>
                <p>Mãe da Meg</p>
              </span>
            </div>

            {/* CARD 2 */}
            <div className="carousel-card">
              <img src={ProfileImageTwo} alt="Imagem perfil cliente" />
              <span className="testimony">
                <p>
                  Atendimento excelente! O ambiente é limpo e os
                  profissionais tratam os animais com tanto carinho que
                  meu pug nem quis ir embora.
                </p>
              </span>
              <span className="rating" aria-label="4 de 5 estrelas">
                <img src={Star} alt="estrela" width={22} height={20} />
                <img src={Star} alt="estrela" width={22} height={20} />
                <img src={Star} alt="estrela" width={22} height={20} />
                <img src={Star} alt="estrela" width={22} height={20} />
                <img
                  src={StarOuter}
                  alt="estrela vazia"
                  width={20}
                  height={22}
                />
              </span>
              <span className="names">
                <p>Ana Martins</p>
                <p>Tutora da Lulu</p>
              </span>
            </div>
          </div>

          {/* bloco 2 */}
          <div className="carousel-content">
            <div className="carousel-card">
              <img src={ProfileImageThree} alt="Imagem perfil cliente" />
              <span className="testimony">
                <p>
                  Atendimento incrível e qualidade excelente. Recomendo para
                  quem quer praticidade.
                </p>
              </span>
              <span className="rating" aria-label="4 de 5 estrelas">
                <img src={Star} alt="estrela" width={22} height={20} />
                <img src={Star} alt="estrela" width={22} height={20} />
                <img src={Star} alt="estrela" width={22} height={20} />
                <img src={Star} alt="estrela" width={22} height={20} />
                <img
                  src={StarOuter}
                  alt="estrela vazia"
                  width={20}
                  height={22}
                />
              </span>
              <span className="names">
                <p>Joana Viera</p>
                <p>Mãe da Poli</p>
              </span>
            </div>

            <div className="carousel-card">
              <img src={ProfileImageThree} alt="Imagem perfil cliente" />
              <span className="testimony">
                <p>
                  Meu gato sempre teve medo de banho, mas na PetCare ele
                  ficou super calmo! Dá pra ver que eles entendem de
                  verdade sobre pets.
                </p>
              </span>
              <span className="rating" aria-label="4 de 5 estrelas">
                <img src={Star} alt="estrela" width={22} height={20} />
                <img src={Star} alt="estrela" width={22} height={20} />
                <img src={Star} alt="estrela" width={22} height={20} />
                <img src={Star} alt="estrela" width={22} height={20} />
                <img
                  src={StarOuter}
                  alt="estrela vazia"
                  width={20}
                  height={22}
                />
              </span>
              <span className="names">
                <p>Marina Lopes</p>
                <p>Advogada</p>
              </span>
            </div>
          </div>
        </section>
      </section>

      <section id="pricing" className="container">
        <header>
          <p className="desktop-only">Planos e preços</p>
          <h2>Nossos planos</h2>
        </header>

        <section className="even-columns gap-1.5">
          {/* Plano Básico - Grátis */}
          <div className="pricing-card" aria-label="Plano Básico">
            <span className="plan">
              <h3>Básico</h3>
              <p>1 banho mensal grátis pra novos clientes.</p>
            </span>

            <h2>Grátis</h2>
            <Button text="Assinar agora" secondary key="free" />

            <span className="hr" />

            <span className="features">
              <img src={Check} alt="" width={24} height={24} aria-hidden="true" />
              <p>Retire na loja</p>
            </span>

            <ul className="features" aria-label="Benefícios do plano básico">
              <li className="features">
                <img src={Check} alt="" width={24} height={24} aria-hidden="true" />
                <p>Apenas 1 por CPF</p>
              </li>
            </ul>
          </div>

          {/* Plano Premium */}
          <div className="pricing-card premium" aria-label="Plano Premium">
            <span className="bonus">
              <p>1º MÊS COM DESCONTO</p>
            </span>

            <span className="plan">
              <h3>Premium</h3>
              <p>
                Para quem quer manter o pet sempre limpo, cheiroso e bem
                cuidado, com total comodidade.
              </p>
            </span>

            <span className="price" aria-label="Preço do plano premium">
              <h2>R$ 109,90</h2>
              <p>/mês</p>
            </span>

            <Button text="Assinar agora" key="premium" />

            <span className="hr" />

            <span className="features">
              <img src={Check} alt="" width={24} height={24} aria-hidden="true" />
              <p>4 banhos por mês</p>
            </span>

            <span className="features">
              <img src={Check} alt="" width={24} height={24} aria-hidden="true" />
              <p>Check-up rápido com veterinário parceiro</p>
            </span>

            <span className="features">
              <img src={Check} alt="" width={24} height={24} aria-hidden="true" />
              <p>Entrega e busca em domicílio</p>
            </span>
          </div>
        </section>
      </section>

      {/* ====== CONTATO ====== */}
      <section id="contact" className="container">
        <header className="contact-header">
          <p className="eyebrow">Envie sua dúvida</p>
          <h2>Entre em contato</h2>
          <p className="lead">
            Entre em contato, estamos dispostos a tirar qualquer dúvida,
            seja um orçamento, uma dúvida técnica de algum de nossos serviços.
            Estamos à disposição para responder. 😊
          </p>
        </header>

        <form
          className="contact-form"
          onSubmit={async (e) => {
            e.preventDefault();
            const form = e.currentTarget as HTMLFormElement;
            const email = (form.elements.namedItem("email") as HTMLInputElement)
              .value;
            const message = (
              form.elements.namedItem("message") as HTMLTextAreaElement
            ).value;

            if (!email.trim() || !message.trim()) {
              setToast({
                type: "error",
                message: "Preencha o e-mail e a mensagem, por favor.",
              });
              setTimeout(() => setToast(null), 4000);
              return;
            }

            try {
              const response = await fetch(
                "/.netlify/functions/send-contact",
                {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ email, message }),
                }
              );

              if (!response.ok) {
                throw new Error("Erro ao enviar");
              }

              form.reset();
              setToast({
                type: "success",
                message:
                  "Mensagem enviada com sucesso! Em breve entraremos em contato.",
              });
            } catch (err) {
              console.error(err);
              setToast({
                type: "error",
                message:
                  "Erro ao enviar mensagem. Tente novamente em alguns instantes.",
              });
            } finally {
              setTimeout(() => setToast(null), 4000);
            }
          }}
        >
          <input
            className="input"
            type="email"
            name="email"
            placeholder="Seu Email"
            aria-label="Seu Email"
            required
          />

          <textarea
            className="textarea"
            name="message"
            rows={5}
            placeholder="Motivo do contato. Ex: Gostei muito do serviço X, poderia me enviar um orçamento?"
            aria-label="Mensagem"
            required
          />

          <button type="submit" className="btn-send">
            Enviar
          </button>
        </form>
      </section>

      <footer id="footer">
        <section className="footer-content container">
          {/* Logo e redes */}
          <div className="footer-brand">
            <h3>PetCare</h3>
            <div className="social-links">
              <a href="#" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" aria-label="Facebook">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="#" aria-label="YouTube">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Coluna 1 */}
          <div className="footer-column">
            <h4>Empresa</h4>
            <ul>
              <li>
                <a href="#">Sobre nós</a>
              </li>
              <li>
                <a href="#">Trabalhe conosco</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>

          {/* Coluna 2 */}
          <div className="footer-column">
            <h4>Serviços</h4>
            <ul>
              <li>
                <a href="#">Banho & Tosa</a>
              </li>
              <li>
                <a href="#">Consulta veterinária</a>
              </li>
              <li>
                <a href="#">Pet Delivery</a>
              </li>
            </ul>
          </div>

          {/* Coluna 3 */}
          <div className="footer-column">
            <h4>Recursos</h4>
            <ul>
              <li>
                <a href="#">App PetCare</a>
              </li>
              <li>
                <a href="#">Agendar serviço</a>
              </li>
              <li>
                <a href="#">Clientes</a>
              </li>
            </ul>
          </div>
        </section>

        <section className="footer-bottom">
          <p>
            Feito com amor na aula de <strong>Programação Web</strong> 💙
            <br />
            ©2025 PetCare — Todos os direitos reservados.
          </p>
        </section>
      </footer>

      <SignupModal
        open={showSignup}
        onClose={() => setShowSignup(false)}
        onSubmit={(data) => {
          console.log("Recebido do modal:", data);
        }}
      />

      {showLogin && (
        <div className="signup-overlay" onClick={() => setShowLogin(false)}>
          <div
            className="signup-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <header className="signup-header">
              <h3>Login</h3>
              <button
                onClick={() => setShowLogin(false)}
                aria-label="Fechar"
              >
                ×
              </button>
            </header>

            <form
              className="signup-form"
              onSubmit={(e) => {
                e.preventDefault();
                const data = Object.fromEntries(
                  new FormData(
                    e.currentTarget as HTMLFormElement
                  ).entries()
                );
                console.log("Login:", data);
                setToast({
                  type: "success",
                  message: "Login efetuado! (simulação)",
                });
                setTimeout(() => setToast(null), 4000);
                setShowLogin(false);
              }}
            >
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
                Entrar
              </button>
              <p className="signup-terms">
                Esqueceu sua senha? <a href="#">Recuperar acesso</a>
              </p>
            </form>
          </div>
        </div>
      )}

      {/* TOAST BONITINHO */}
      {toast && (
        <div className={`toast toast-${toast.type}`}>
          {toast.message}
        </div>
      )}
    </main>
  );
}
