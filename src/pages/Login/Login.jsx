import '../../assets/css/style.css';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Logo from '../../assets/images/logo-idwall.svg';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';



export const Login = () => {
  const navigate = useNavigate(); // Hook para navegação

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const handleLogin = async () => {
    try {

      const response = await fetch('https://localhost:7213/encontrarUsuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        
        body: JSON.stringify({ email, senha }),
        
      });
      
      if (response.ok) {
        // O login foi bem-sucedido, redirecione o usuário para a próxima página
        navigate('/pagina-de-sucesso'); // Substitua com a rota desejada
      } else {
  
        setErro('Credenciais inválidas. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setErro('Ocorreu um erro ao fazer login. Tente novamente mais tarde.');
      
      
    }
  };

  const emailChange = (event) => {
    // Quando o valor do campo de entrada muda, atualizamos o estado com o novo valor
    setEmail(event.target.value);
  };

  const senhaChange = (event) => {
    // Quando o valor do campo de entrada muda, atualizamos o estado com o novo valor
    setSenha(event.target.value);
  };

  return (
    <section id="bg-login">
      <div className="container">
        <div id="box-login">
          <div className="box">
            <img className="logo-login" src={Logo} alt="Logo Idwall" />
            <h2>Acessar conta</h2>
            <h6 className="pb-4 gray">
              Faça login no sistema idwall para começar!
            </h6>
            <FloatingLabel
              controlId="floatingInput"
              label="E-mail"
              className="mb-3 person"
            >
              <Form.Control
                type="email"
                placeholder="name@example.com"
                onChange={emailChange}
                value={email} // Adicione este valor
              />
            </FloatingLabel>
            <FloatingLabel
              className="pb-4"
              controlId="floatingPassword"
              label="Password"
            >
              <Form.Control
                type="password"
                placeholder="Senha"
                onChange={senhaChange}
                value={senha} // Adicione este valor
              />
            </FloatingLabel>
            <Button className="login" onClick={handleLogin}>
              Entrar
            </Button>
            {erro && <p className="text-danger">{erro}</p>}
            <div className="pt-5">
              <Link className="senha" to="/recuperar-senha">
                Esqueceu sua senha?
              </Link>
              <div className="row">
                <p>
                  Não tem conta?
                  <Link className="senha" to="/cadastro">
                    Cadastre-se
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;