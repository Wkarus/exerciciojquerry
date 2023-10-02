const form =document.getElementById('form-lista')
const lista = [];
let linha ='<li>';

form.addEventListener('submit', function(e) {
e.preventDefault();


const inputNomeLista= document.getElementById('nova-lista');


linha += `<li>${inputNomeLista.value}</li>`;


const listaTarefas = document.querySelector('ul');
listaTarefas.innerHTML = linha; 

$('li').click(function() {
    $(this).addClass("finalizada");
});

});

