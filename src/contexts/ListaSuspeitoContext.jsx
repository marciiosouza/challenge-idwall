import { createContext, useContext, useState } from "react";

// ({}) => objeto vazio
const ListaSuspeitosContext = createContext ({}) 
export function ListaSuspeitosProvider ({children}) {
  const [resultadosPesquisa, setResultadosPesquisa] = useState([]);
  const [erro, setErro] = useState()

  const fetchSuspeitos = async () => {
    try {
      const response = await fetch("https://localhost:7213/Suspeito", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setResultadosPesquisa(data);
        console.log(data);
        console.log("API");
      } else {
        setErro("Erro na resposta da API.");
      }
    } catch (error) {
      console.error("Erro ao fazer a requisição à API:", error);
      setErro("Tente novamente mais tarde.");
    }
  };

  return (
    
    <ListaSuspeitosContext.Provider value={{resultadosPesquisa, setResultadosPesquisa, fetchSuspeitos, erro}}>
      {children}

    </ListaSuspeitosContext.Provider>
  )
}

/**
 * @returns {{
 *  resultadosPesquisa: []
 *  setResultadosPesquisa: import('react').Dispatch<import('react').SetStateAction<[]>>
 *  fetchSuspeitos: () => Promise<void>
 *  erro: string
 * }}
*/

export const useListaSuspeitoContext = () =>  {
  const context = useContext(ListaSuspeitosContext)

  if (!context) {
    throw new Error('useListaSuspeitoContext must be used within an ListaSuspeitosContext provider');
  }
  return context
}
