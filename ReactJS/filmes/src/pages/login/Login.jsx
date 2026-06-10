import "./Login.css";
import Botao from "../../components/botao/Botao";
import Logo from "../../assets/img/logo.svg";
import { useContext, useEffect, useState } from "react";
import { UsuarioContext } from "../../context/UsuarioContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  //   state global (UsuarioContext)
  const { usuario, setUsuario } = useContext(UsuarioContext);
  // state local
  //******************** novoUsuario = email **************
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const login = () => {
    setUsuario(email);
    localStorage.setItem("usuario", JSON.stringify(email)); // pegar o dado e colocar no storage
    setEmail("");
    navigate("/generos");
  };

  const verificaLogin = () => {
    const logado = JSON.stringify(localStorage.getItem("usuario"));

    if (logado != undefined || logado != null) {
      setUsuario(usuario);
      navigate("/generos");
    }
  };
  
// carrega os dados do login
  useEffect(() => {
    verificaLogin();
  }, []);

  return (
    <main className="main_login">
      <div className="banner"></div>
      <section className="section_login">
        <img src={Logo} alt="Logo do Filmoteca" />
        <form action="" className="form_login">
          <h1>Login</h1>
          <div className="campos_login">
            <div className="campo_input">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="campo_input">
              <label htmlFor="senha">Senha:</label>
              <input
                type="password"
                name="senha"
                placeholder="Digite sua senha"
              />
            </div>
          </div>
          <Botao nomeDoBotao="Entrar" btnLogin={true} fnLogin={login} />
        </form>
      </section>
    </main>
  );
};

export default Login;
