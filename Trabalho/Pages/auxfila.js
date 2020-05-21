const Fila = () => {

    const vetor = []
    var inicio = 0
    var fim = 0
    var tamanho = 5
    var vetorAux = []
    var auxremove = 0


    const add = (value) => {

        if ((fim + 1) % (tamanho + 1) == inicio) {
            return false;
        }

        vetor[fim] = value;
        fim = (fim + 1) % (tamanho + 1);

        return true;

    }
    const remove = () => {


        if (fim == 0) {
            return false
        }

        if (vetor.length == 1) {
 
            vetor[0] = null
        }

        vetor.shift()
    }



    const print = () => console.log(vetor)

    return {
        add,
        remove,
        print,


    }

}

const fila = Fila()

fila.remove()

fila.print()
