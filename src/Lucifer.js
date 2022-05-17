import React from 'react';

import Final from "./Final";

const Lucifer= (props) => {

    const alteraTela = props.alteraTela;

    const [ etapa, alteraEtapa ] = React.useState ( 0 );

    const [ pontos, alteraPontos ] = React.useState (0);


    const perguntas  = [
        {
            pergunta: "Em qual temporada Chloé vê a face de lucifer pela primeira vez?",
            respostas: ["4° temporada", "Ultima temporada" , "2° temporada", "3° temporada"],
            correta: 3
        },
        {
            pergunta: "Mazikeen é o que?",
            respostas: ["Um anjo", "Uma demonia", "Uma monstra" , "Humana"],
            correta: 1
        },
        {
            pergunta: "Qual o nome dado a lucifer quando ainda era anjo?",
            respostas: ["Samuel" , "Miguel", "Samael" , "Daniel"],
            correta: 2
        },
        {
            pergunta: "Qual o nome do irmão gemeo de lucifer?",
            respostas: ["Miguel", "Amenadiel", "Daniel" , "Gabriel"],
            correta: 0
        },
        {
            pergunta: "Quem é a mãe da mazekeen?",
            respostas: ["Lilith" , "Charlotte", "Gamigin" , "Hécate"],
            correta: 0
        }
    ];


    const verificaResposta = (i) => {

        const resposta_correta = perguntas [ etapa ].correta;
        if ( resposta_correta == i ){
            {localStorage.setItem("pontos", pontos+5)}
            alteraPontos ( pontos + 5 );
        }

        if ( etapa + 1 < perguntas.length){
            alteraEtapa (etapa + 1);
        }else{
            alteraTela( <Final alteraTela={alteraTela} pontos={pontos}/> );
        }

    }
    
    return ( 
        <div>

            <p> Você tem <strong> {pontos} </strong> </p>

            <h1> { perguntas [ etapa ].pergunta } </h1>
            <ul>
                {
                    perguntas [ etapa ].respostas.map( (r,i) => {
                        return <li onClick={ ()=> verificaResposta (i) } > { r } </li>
                    })
                }
            </ul>
            
        </div>
     );
}
 
export default Lucifer;
