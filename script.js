const botoesCurtir = document.querySelectorAll(".curtir");
botoesCurtir.arraya.forEach (function(botoesCurtir{
    let curtir = false;
    botaoCurtir.addEventListeer("click", curtir);
    function curtir(){
        const contador = botaoCurtir.querySelector("span");
        if(curtir === false){
            contador.textContent++;
            curtir = true;
 } else{
    contador.texContent--;
    curtir = false;
        
 }
 }
});

const btnTema = document.querySelector(".btn-tema");
btnTema.addEventListeer("click", mudarTema);
function mudarTema(){
    document.body.classList.toggle("tema-escuro");
}