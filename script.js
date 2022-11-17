let tituloPrato;
let titulobebida;
let titulosobremesa;


function selecionarPrato(pratoclicado){ 
   
  
         const pratoselecionadoanteriormente = document.querySelector('.pratos .selecionado');
         if (pratoselecionadoanteriormente !== null){
            pratoselecionadoanteriormente.classList.remove('selecionado');
         }
         
         pratoclicado.classList.add('selecionado');

         tituloPrato = pratoclicado.querySelector('.titulo').innerHTML; 

         ativarbotaofecharpedido()       

       }
                     
       function selecionarBebida(bebidaclicada){   
                                  
         const bebidaselecionadoanteriormente = document.querySelector('.bebidas .selecionado');
         if (bebidaselecionadoanteriormente !== null){
         bebidaselecionadoanteriormente.classList.remove('selecionado');
         }
         
         bebidaclicada.classList.add('selecionado');
         titulobebida = bebidaclicada.querySelector('.titulo').innerHTML;

         ativarbotaofecharpedido()

       }

       function selecionarSobremesa(sobremesaclicada){
         const sobremesaselecionadoanteriormente = document.querySelector('.sobremesas .selecionado');
         if (sobremesaselecionadoanteriormente !== null){
         sobremesaselecionadoanteriormente.classList.remove('selecionado');
         }
         
         sobremesaclicada.classList.add('selecionado');

         titulosobremesa = sobremesaclicada.querySelector('.titulo').innerHTML;

         ativarbotaofecharpedido()
        
       }
       
       
      function ativarbotaofecharpedido(){
        console.log(tituloPrato , titulobebida, titulosobremesa);

        if(tituloPrato !== undefined){
            if(titulobebida !== undefined){
                if(titulosobremesa !== undefined){
                  console.log('liberar botao?');
                  const botao = document.querySelector('.fazer-pedido')
                  botao.classList.add('ativo');
                    botao.innerHTML = 'fechar pedido';

               
                }

            }

        }
       


        console.log('liberou?');
      }
      function fecharPedido(){
        console.log('ai cuzao');

      }