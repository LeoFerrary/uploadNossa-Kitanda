 window.onload = function(){
 let frutas = [
    { fruta: 'Laranja', preco: 2.99},
    { fruta: 'Manga', preco: 3.75},
    { fruta: 'Banana', preco: 3.90},
    { fruta: 'Abacate', preco: 5.89},
    { fruta: 'Pitaya', preco: 14.99},
]

     const addfruta = document.querySelectorAll('#produtos');
     const cestaDoCliente = document.querySelector("#cestaDoCliente");
     const total = document.querySelector('#mostraTotalCompra');
    
(()=>{
   let totalzinho = 0;
       for(let fru of frutas){
         const filhoLi = document.createElement('li');

           for(listaF in fru){
               if (listaF == 'preco'){
                 produtos.appendChild(filhoLi).setAttribute('data-preco', fru[listaF] );
             } else {
                 produtos.appendChild(filhoLi).textContent = `${fru[listaF]}`;
             }
         }
    }

    const cestaCliente = []
    addfruta.forEach(function(list){
        list.addEventListener(`click`, function(elemento){
        let listLiCliente = document.createElement('li');

         console.log(addfruta);
     
       if( cestaCliente.indexOf(list.textContent) != -1){
         alert(`esse${elemento.target.innerHTML} já está na lista`);
        } else {
        cestaCliente.push(list.textContent);
        console.log(cestaCliente);

    for(let fru of frutas){
        for(let listaF in fru){
            if (listaF == 'preco'){
             cestaDoCliente.appendChild(listLiCliente).setAttribute('data-preco', fru[listaF]);
            } else {
             cestaDoCliente.appendChild(listLiCliente).textContent = elemento.target.innerHTML;
             console.log(cestaDoCliente);
                } 
            }
        }
    }        

        function calculo (idProduto, resultado){
            const preco = document.querySelectorAll(`#${idProduto} > li`);
             const i = document.querySelector(`#${resultado} `);
            
            for (let i of preco) {
                 totalzinho += Number(elemento.target.dataset.preco);
                 console.log(elemento.target.dataset.preco);
            }
            total.value = totalzinho;
        }
        calculo('cestaDoCliente');
        })
    })

})()

}