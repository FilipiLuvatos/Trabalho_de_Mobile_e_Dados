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


        for (let i = auxremove; i < vetor.length; i++) {
            vetorAux[i] = vetor[i + 1]
        }


        for (let i = auxremove; i < tamanho; i++) {
           
                vetor[i] = vetorAux[i]
            

        }

        

    }

 

    const print = () => console.log(vetor)

    return {
        add,
        remove,
        print,


    }

}

const fila = Fila()
fila.add(9)
//fila.print()
//fila.remove()
//fila.print()
fila.add(1)
fila.add(2)
fila.add(7)
fila.add(3)
fila.print()
//fila.add(6)
//fila.add(4)
//fila.add(7)//não adicionou
fila.remove()
fila.remove()
fila.remove()

fila.print()
