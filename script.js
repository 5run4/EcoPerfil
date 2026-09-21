const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "No seu dia a dia, você percebe a grande quantidade de lixo plástico gerada em embalagens de produtos. Qual atitude você decide adotar para reduzir esse impacto?",
        alternativas: [
            {
                texto: "Substituir produtos descartáveis por opções reutilizáveis, como garrafas de inox, sacolas de pano e canudos de metal.",
                afirmacao: "Busca ativamente reduzir o consumo de plásticos de uso único integrando hábitos reutilizáveis na rotina."
            },
            {
                texto: "Separar rigorosamente todo o lixo reciclável da casa e destinar aos pontos de coleta seletiva da cidade.",
                afirmacao: "Prioriza a gestão correta de resíduos e o fortalecimento da reciclagem na sua comunidade."
            },
            {
                texto: "Pressionar empresas e marcas nas redes sociais para que adotem embalagens biodegradáveis ou compostáveis.",
                afirmacao: "Acredita na força da cobrança coletiva para que as grandes corporações assumam a responsabilidade ambiental."
            }
        ]
    },
    {
        enunciado: "Sua escola ou bairro está promovendo uma campanha para reduzir a pegada de carbono e economizar energia. Como você escolhe colaborar com essa iniciativa?",
        alternativas: [
            {
                texto: "Priorizar meios de transporte sustentáveis, como caminhar, andar de bicicleta ou utilizar transporte público.",
                afirmacao: "Incentiva a mobilidade urbana sustentável para diminuir a emissão de gases poluentes."
            },
            {
                texto: "Repensar o consumo de energia em casa, desligando aparelhos fora de uso e aproveitando a luz natural.",
                afirmacao: "Foca no consumo consciente de recursos energéticos na escala individual e doméstica."
            },
            {
                texto: "Ajudar na organização de oficinas para ensinar a comunidade sobre eficiência energética e fontes renováveis.",
                afirmacao: "Aposta na educação ambiental como ferramenta de engajamento e transformação comunitária."
            }
        ]
    },
    {
        enunciado: "O consumo excessivo e o desperdício de alimentos são grandes desafios para o planeta. Como você lida com a alimentação e o consumo de recursos na sua casa?",
        alternativas: [
            {
                texto: "Planejar as refeições semanalmente e reaproveitar sobras e cascas em novas receitas para evitar o desperdício.",
                afirmacao: "Pratica o consumo consciente de alimentos com foco no aproveitamento integral e na economia de recursos."
            },
            {
                texto: "Reduzir o consumo de produtos de origem animal, incluindo mais refeições à base de plantas no cardápio.",
                afirmacao: "Reconhece o impacto da pecuária no meio ambiente e adota escolhas alimentares de menor pegada ecológica."
            },
            {
                texto: "Comprar preferencialmente de pequenos produtores locais e feiras orgânicas da sua região.",
                afirmacao: "Valoriza a economia local e o cultivo sustentável de alimentos sem agrotóxicos."
            }
        ]
    },
    {
        enunciado: "Ao planejar a compra de roupas novas para o seu guarda-roupa, qual critério orienta a sua decisão de consumo?",
        alternativas: [
            {
                texto: "Comprar em brechós, bazares ou praticar a troca de peças com amigos para dar vida longa às roupas.",
                afirmacao: "Adere à moda circular e ao reuso como alternativas principais ao consumo desenfreado."
            },
            {
                texto: "Pesquisar a origem do produto e priorizar marcas que utilizem tecidos reciclados, orgânicos e com processos éticos.",
                afirmacao: "Exige transparência e responsabilidade socioambiental das marcas de moda."
            },
            {
                texto: "Comprar apenas o essencial, priorizando peças duráveis e atemporais para consumir o mínimo possível.",
                afirmacao: "Pratica o minimalismo no vestuário, reduzindo drasticamente o volume de compras."
            }
        ]
    },
    {
        enunciado: "Diante das notícias sobre mudanças climáticas e eventos extremos no planeta, como você enxerga o futuro do meio ambiente?",
        alternativas: [
            {
                texto: "Com preocupação, mas com foco em cobrar políticas públicas de preservação, transição energética e reflorestamento.",
                afirmacao: "Entende a preservação ambiental como uma urgência política que exige leis firmes e ação dos governos."
            },
            {
                texto: "Com otimismo na inovação tecnológica, acreditando que novas soluções de engenharia e ciência vão reverter os danos.",
                afirmacao: "Confia na ciência e no desenvolvimento tecnológico como motores de regeneração ambiental."
            },
            {
                texto: "Com senso de responsabilidade pessoal, focado em fazer a sua parte e inspirar pessoas ao seu redor a mudarem hábitos.",
                afirmacao: "Acredita que a transformação global começa na mudança diária de atitude de cada indivíduo."
            }
        ]
    }
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

mostraPergunta();