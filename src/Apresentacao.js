import Quiz from "./Quiz";

import Marvel from "./Marvel";

import Lucifer from "./Lucifer";

import Bruxa from "./Bruxa";

import Conhecimento from "./Conhecimento";

import Fofoca from "./Fofoca";

const Apresentacao = (props) => {

    const alteraTela = props.alteraTela

    return ( 
        <div>

            {localStorage.getItem("pontos")}

            <h1> Bem-vindo ao quiz </h1>
            <p> Você está pronto para começar? </p>
            <button onClick={ ()=> alteraTela( <Quiz alteraTela={alteraTela}/> ) }> Crepúsculo </button>
            <br/>
            <br/>
            <button onClick={ ()=> alteraTela( <Marvel alteraTela={alteraTela}/> ) }> Marvel </button>
            <br/>
            <br/>
            <button onClick={ ()=> alteraTela( <Lucifer alteraTela={alteraTela}/> ) }> Lúcifer </button>
            <br/>
            <br/>
            <button onClick={ ()=> alteraTela( <Bruxa alteraTela={alteraTela}/> ) }> Bruxa </button>
            <br/>
            <br/>
            <button onClick={ ()=> alteraTela( <Conhecimento alteraTela={alteraTela}/> ) }> Conhecimento </button>
            <br/>
            <br/>
            <button onClick={ ()=> alteraTela( <Fofoca alteraTela={alteraTela}/> ) }> Fofoca </button>
        </div>

     );
}

export default Apresentacao;
