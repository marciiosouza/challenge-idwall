
import Legenda from "../Legenda/Legenda"
import "./Banner.css"

import React, { useEffect, useState } from 'react';
import './Banner.css';

const Banner = () => {
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const fetchUsuario = async () => {
      try {
        // Faça sua lógica de autenticação aqui
        // Por exemplo, fazer uma solicitação de API para autenticar o usuário
        const response = await fetch('https://localhost:7213/Suspeito', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          // Converte a resposta em formato JSON
          const data = await response.json(); 
          // Agora 'data' contém os dados da resposta da API
          console.log(data);
        }
      } catch (error) {
        console.error("Erro ao fazer login:", error)
        setErro("Tente novamente mais tarde.")
      }
    };

    fetchUsuario(); // Chama a função que realiza a autenticação quando o componente é montado.
  }, []); // O segundo argumento é uma matriz de dependências vazia, indicando que este efeito é executado uma vez.


  return (

    <>
    <section id="banner-suspeitos">
      <div className="container">
        <div className="grid">
          <h2 className="tittle-suspeito">Cadastrar Suspeitos</h2>
          {/* {erro && <p>{erro}</p>} */}
        </div>
      </div>
    </section>
      

      <main>
        <Legenda />
      </main>
    </>
  )

}

export default Banner;
