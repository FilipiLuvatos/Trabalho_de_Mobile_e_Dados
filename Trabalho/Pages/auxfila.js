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

    const Busca = (value) => {

        for (let i = 0; i < vetor.length; i++) {
            if(vetor[i] == value){
                return console.log(vetor[i])
            }
                
            
        }

    }


    const print = () => console.log(vetor)

    return {
        add,
        remove,
        print,
        Busca


    }

}

const fila = Fila()

fila.add(10)
fila.add(5)
fila.add(66)
fila.add(23)

fila.print()

fila.Busca(66)
