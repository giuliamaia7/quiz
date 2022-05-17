import React from 'react';

import Final from "./Final";

const Fofoca = (props) => {

    const alteraTela = props.alteraTela;

    const [ etapa, alteraEtapa ] = React.useState ( 0 );

    const [ pontos, alteraPontos ] = React.useState (0);


    const perguntas  = [
        {
            pergunta: "ccccccccccccc",
            respostas: ["2013", "2015", "2008", "2012"],
            correta: 2
        },
        {
            pergunta: "Em qual monumento Peter Parker salva seus colegas em Homem Aranha: De volta ao Lar?",
            respostas: ["Cristo Redentor", "Torre Eiffel" ,"Big Ben" , "Monumento de Washington"],
            correta: 3
        },
        {
            pergunta: "Qunatas jóias do infinito existem?",
            respostas: ["5", "6", "4", "8"],
            correta: 1
        },
        {
            pergunta: "A Viúva negra é originalmente de qual país?",
            respostas: ["Rússia", "Filipinas", "França", "Eslováquia"],
            correta: 0
        },
        {
            pergunta: "Como Nick Fury perdeu o olho?",
            respostas: ["Luta contra o Homem de Ferro" , "Em uma batalha de quando era jovem" , "Arranhão de um gato", "Caiu de um prédio quando criança"],
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
 
export default Fofoca;
