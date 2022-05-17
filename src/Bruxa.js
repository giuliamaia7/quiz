import React from 'react';

import Final from "./Final";

const Bruxa = (props) => {

    const alteraTela = props.alteraTela;

    const [ etapa, alteraEtapa ] = React.useState ( 0 );

    const [ pontos, alteraPontos ] = React.useState (0);


    const perguntas  = [
        {
            pergunta: "Ambrose é o que de Sabrina?",
            respostas: ["Primo" , "Tio", "Melhor Amigo" , "Irmão"],
            correta: 0
        },
        {
            pergunta: "Qual Personagem é filha do padre BlackWood?",
            respostas: ["Dorcas", "Prudence" , "Sabrina" , "Agatha"],
            correta: 1
        },
        {
            pergunta: "Em que ano a série foi lançada?",
            respostas: ["2016", "2019", "2018", "2017"],
            correta: 2
        },
        {
            pergunta: "Quantas temporadas tem a série?",
            respostas: ["2", "3", "5", "4"],
            correta: 3
        },
        {
            pergunta: "Qual o nome da atris que interpreta a personagem pricipal?",
            respostas: ["Lucy Davis", "Miranda Otto", "Abigail Owen" , "Kiernan Shipka" ],
            correta: 3
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
 
export default Bruxa;
