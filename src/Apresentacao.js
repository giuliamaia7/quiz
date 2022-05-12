import Quiz from "./Quiz";

const Apresentacao = (props) => {

    const alteraTela = props.alteraTela

    return ( 
        <div>

            {localStorage.getItem("pontos")}

            <h1> Bem-vindo ao quiz </h1>
            <p> Você está pronto para começar? </p>
            <button onClick={ ()=> alteraTela( <Quiz alteraTela={alteraTela}/> ) }> Começar </button>
        </div>

     );
}
 
export default Apresentacao;
