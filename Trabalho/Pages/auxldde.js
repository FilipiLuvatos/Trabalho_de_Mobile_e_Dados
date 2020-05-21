function Ldde(){


    let head = null
    let last = null
    let tamanho = 0

    const Node = (value) => {
        return{
            value,
            nextNode: null,
            lastNode: null
        }
    }

    const add = (value) => {
        let i = 0;
        if(!head){

            head = Node(value)
            tamanho++
            return head

        }
        let aux = head
   
     
        while(aux.nextNode){
            aux = aux.nextNode
            

        }
       
        aux.nextNode = Node(value)
   
        
        console.log(aux.nextNode, i)
        tamanho++
        return aux.nextNode
        
    }

    return {

        tamanho: () => tamanho, 
        add: (value) => add(value),
        print: () => console.log(head)
    }

}
const list = Ldde()
list.add(1)
list.add(2)
list.add(3)
list.add(4)
//console.log(list.tamanho())
//list.print()