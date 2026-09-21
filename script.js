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
                texto: "Substituir produtos descartáveis por opções reutilizáveis (como garrafas de inox e sacolas de pano) e separar o lixo reciclável da casa.",
                afirmacao: [
                    "Busca ativamente reduzir o consumo de plásticos de uso único integrando hábitos reutilizáveis na rotina.",
                    "Prioriza a gestão correta de resíduos e o fortalecimento da reciclagem no dia a dia.",
                    "Acredita que mudanças individuais cotidianas geram grande impacto a longo prazo."
                ]
            },
            {
                texto: "Pressionar empresas nas redes sociais para adotarem embalagens sustentáveis e apoiar marcas que utilizem materiais reciclados.",
                afirmacao: [
                    "Acredita na força da cobrança coletiva para que grandes corporações assumam responsabilidade ambiental.",
                    "Valoriza o consumo consciente focando na origem e produção dos produtos.",
                    "Utiliza a comunicação e o engajamento digital como ferramentas de transformação socioambiental."
                ]
            }
        ]
    },
    {
        enunciado: "Sua escola ou bairro está promovendo uma campanha para reduzir a pegada de carbono e economizar energia. Como você escolhe colaborar com essa iniciativa?",
        alternativas: [
            {
                texto: "Mudar hábitos diários, priorizando transporte sustentável (caminhar, bicicleta) e economizando energia em casa.",
                afirmacao: [
                    "Incentiva a mobilidade urbana sustentável para diminuir a emissão de gases poluentes.",
                    "Foca no consumo consciente de recursos energéticos na escala individual e doméstica.",
                    "Demonstra comprometimento em alinhar ações práticas e rotineiras à preservação do planeta."
                ]
            },
            {
                texto: "Ajudar na organização de oficinas de conscientização para ensinar a comunidade sobre fontes renováveis e eficiência energética.",
                afirmacao: [
                    "Aposta na educação ambiental como ferramenta essencial de engajamento comunitário.",
                    "Busca inspirar e mobilizar outras pessoas para expandir o alcance de causas ecológicas.",
                    "Entende que o conhecimento compartilhado é a chave para uma transformação coletiva duradoura."
                ]
            }
        ]
    },
    {
        enunciado: "O consumo excessivo e o desperdício de alimentos são grandes desafios para o planeta. Como você lida com a alimentação e o consumo de recursos na sua casa?",
        alternativas: [
            {
                texto: "Planejar as refeições semanalmente para reaproveitar sobras e incluir mais refeições à base de plantas.",
                afirmacao: [
                    "Pratica o consumo consciente com foco no aproveitamento integral de alimentos.",
                    "Reconhece o impacto da pecuária no meio ambiente e busca escolhas com menor pegada ecológica.",
                    "Combina economia de recursos com a busca por uma alimentação mais sustentável."
                ]
            },
            {
                texto: "Comprar preferencialmente de pequenos produtores locais, feiras orgânicas e apoiar a agricultura familiar.",
                afirmacao: [
                    "Valoriza a economia local e incentiva o cultivo sustentável de alimentos sem agrotóxicos.",
                    "Compreende a relação entre a origem dos alimentos e a redução de impactos no transporte e produção.",
                    "Apoia modelos de produção que respeitam a biodiversidade e os ciclos da natureza."
                ]
            }
        ]
    },
    {
        enunciado: "Ao planejar a compra de roupas novas para o seu guarda-roupa, qual critério orienta a sua decisão de consumo?",
        alternativas: [
            {
                texto: "Adotar o reuso comprando em brechós, fazendo trocas entre amigos e priorizando peças de alta durabilidade.",
                afirmacao: [
                    "Adere à moda circular e ao reuso como alternativas principais ao consumo desenfreado.",
                    "Pratica o minimalismo no vestuário, reduzindo drasticamente o volume de novas compras.",
                    "Entende que dar vida longa às roupas reduz a extração de novos recursos naturais."
                ]
            },
            {
                texto: "Pesquisar marcas que utilizem tecidos reciclados, orgânicos e mantenham processos éticos de produção.",
                afirmacao: [
                    "Exige transparência e responsabilidade socioambiental das marcas de moda.",
                    "Incentiva o mercado da moda sustentável através de escolhas de compra conscientes.",
                    "Valoriza o respeito aos direitos dos trabalhadores e ao meio ambiente na cadeia produtiva."
                ]
            }
        ]
    },
    {
        enunciado: "Diante das notícias sobre mudanças climáticas e eventos extremos no planeta, como você enxerga o futuro do meio ambiente?",
        alternativas: [
            {
                texto: "Exigindo políticas públicas de preservação e confiando em inovações tecnológicas para reverter danos.",
                afirmacao: [
                    "Entende a preservação ambiental como urgência política que exige leis firmes dos governos.",
                    "Confia na ciência e no desenvolvimento tecnológico como motores de regeneração ambiental.",
                    "Defende soluções estruturais e em grande escala para enfrentar os desafios do clima."
                ]
            },
            {
                texto: "Focando na responsabilidade pessoal e em engajar pessoas próximas para mudarem hábitos do cotidiano.",
                afirmacao: [
                    "Acredita que a transformação global começa na mudança diária de atitude de cada indivíduo.",
                    "Exerce liderança pelo exemplo na sua rede de contatos e na sua comunidade.",
                    "Mantém uma postura ativa e esperançosa diante do futuro por meio da ação direta."
                ]
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
    const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

function aleatorio(lista){
    const posicao = Math.floor(Math.random()*lista.length);
    return lista[posicao];
}

mostraPergunta();