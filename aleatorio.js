
const nomes = ["Bruna", "Jaqueline", "Lorena", "Nicoly", "Bianca", "Isabella"];

export function aleatorio(lista){
    const posicao = Math.floor(Math.random()*lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes);