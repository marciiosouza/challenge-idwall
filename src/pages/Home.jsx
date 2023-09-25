// import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import '../assets/css/style.css';
// import React from 'react';

export default function Home() {
  return (
      <section id="banner">
        <div className="container">
          <div className="text-banner">
            <h2>Plataforma de verificação de procurados e Sistema de Gerenciamento de Consultas</h2>
            <p>O objetivo principal deste sistema é fornecer uma solução eficiente e intuitiva para o gerenciamento das pessoas procuradas pelo FBI e Interpol. Por meio da integração com as APIs do FBI e Interpol, poderemos obter informações atualizadas sobre os suspeitos e facilitar o trabalho das forças policiais na localização e captura desses indivíduos.</p>
            <Button variant="" className="btn-banner mx-auto">Saiba mais sobre nossa solução!</Button>{' '}
          </div>
        </div>
      </section>
  )
}