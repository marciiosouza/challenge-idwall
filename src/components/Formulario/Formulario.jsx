import { useState } from "react"
import Botao from "../Botao/Botao"
import CampoTexto from "../CampoTexto/CompoTexto"
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa"
import "./Formulario.css"

const Formulario = (props) => {
  

  const [nome, setNome] = useState("")
  const [classificacao, setClassificacao] = useState("")
  const [imagem, setImagem] = useState("")
  const [sexo, setSexo] = useState("")
  const [endereco, setEndereco] = useState("")
  const [nacionalidade, setNacionalidade] = useState("")

  // Arrow Function
  const aoSalvar = (evento) => {
    evento.preventDefault()
    props.aoColaboradorCadastrado({
      nome,
      classificacao,
      imagem,
      sexo,
      endereco,
      nacionalidade
    })
    setNome('')
    setClassificacao('')
    setImagem('')
    setSexo('')
    setEndereco('')
    setNacionalidade('')
  }

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>

        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite o seu nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Classificacao"
          placeholder="Digite o a classificação (FBI, INTERPOL)"
          valor={classificacao}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <CampoTexto
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Sexo"
          itens={props.sexo}
          valor={Sexo}
          aoAlterado={(valor) => setTime(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Classificacao"
          itens={props.classificacao}
          valor={classicicacao}
          aoAlterado={(valor) => setTime(valor)}
        />
        <CampoTexto
          label="Endereco"
          placeholder="Digite o endereço do suspeito"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <CampoTexto
          label="Nacionalidade"
          placeholder="Digite o a nacionalidade do suspeito"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <Botao>Criar card</Botao>
      </form>
    </section>
  )
}

export default Formulario;
