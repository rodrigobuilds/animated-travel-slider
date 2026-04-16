let btnNext = document.querySelector('.next')
let btnBack = document.querySelector('.back')

let container = document.querySelector('.container')
let list = document.querySelector('.container .list')
let thumb = document.querySelector('.container .thumb')


//Quando o botão for clicado, ele chama a função de mover itens
btnNext.onclick = () => moveItemsOnClick('next')
btnBack.onclick = () => moveItemsOnClick('back')

//Movimentar os itens quando clicar no botão
function moveItemsOnClick(type) {

    let listItems = document.querySelectorAll('.list .list-item')
    let thumbItems = document.querySelectorAll('.thumb .thumb-item')

    
    // Se clicou em "next", botão de avançar
    
    if (type === 'next') {

        // Pega o PRIMEIRO item da lista e joga para o FINAL (Efeito Avançar)
        
        list.appendChild(listItems[0])

        //Faz o mesmo com as miniaturas Thumb
        thumb.appendChild(thumbItems[0])


        container.classList.add('next')

    }
    

    // Caso seja "Back"
    else {

        //Pega o ÚLTIMO item da lista e joga para o INÍCIO (Efeito de voltar)
        //listItems.length - 1 garante que sempre pega o último, mesmo com mais itens
        list.prepend(listItems[listItems.length - 1])

        // Faz o mesmo para miniaturas Thumb
        thumb.prepend(thumbItems[thumbItems.length - 1])

        container.classList.add('back')
    }


    setTimeout(() => {
        container.classList.remove('next')
        container.classList.remove('back')
    }, 3000);


}
