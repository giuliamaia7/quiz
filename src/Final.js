import Apresentacao from "./Apresentacao";

const Final = (props) => {

    const alteraTela = props.alteraTela
    
    const pontos = props.pontos

    return ( 
        <div>

            <h1> Parabéns! </h1>
            <p> Você terminou o quiz. </p>
            <p> Sua pontuação foi de:  {pontos}</p>

            <button onClick={ () => alteraTela(<Apresentacao alteraTela={alteraTela}/>) }> Recomeçar </button>

        </div>

     );
}
 
export default Final;
