import React from 'react';

import Final from "./Final";

const Quiz = (props) => {

    const alteraTela = props.alteraTela;

    const [ etapa, alteraEtapa ] = React.useState ( 0 );

    const [ pontos, alteraPontos ] = React.useState (0);


    const perguntas  = [
        {
            pergunta: "Quantos anos Edward tem nos filmes?",
            respostas: ["109", "104", "113", "102"],
            correta: 1
        },
        {
            pergunta: "Quem foi o verdadeiro amor de Victoria?",
            respostas: ["Riley", "Edward", "James", "Felix"],
            correta: 2
        },
        {
            pergunta: "Em qual filme Jacob beija Bella pela primeira vez?",
            respostas: ["Amanhecer parte 1", "Amanhecer parte 2", "Eclipse", "Lua nova"],
            correta: 2
        },
        {
            pergunta: "Por qual motivo Rosalie não se dava bem com a Bella no começo?",
            respostas: ["Inveja, por bella desperdiçar sua vida humana" , "Gostava do edward" , "Por conta de uma briga", "Todas as alternativas"],
            correta: 0
        },
        {
            pergunta: "Qual é o nome da Bella completo?",
            respostas: ["Bella Swan" , "Bella Cullen" , "Isabella Marie Swan" ,"Isabella Swan"],
            correta: 2
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
 
export default Quiz;
