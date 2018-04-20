$(document).ready(function() {
  // Le code doit être ecrit içi





$('#a').on('click', function(num) {
$.get("https://geo.api.gouv.fr/regions", function (reg) {
  let regions = reg.length;

  let list = document.createElement('ul');
  list.classList.add('Keke');

  let listElement = document.createElement('li');

  for(let i = 0; i < reg.length; i++) {
    listElement.innerHTML = reg[0].nom;
    list.appendChild(listElement);
  };
  document.querySelector('main').appendChild(list);


});

});

  });

  $('#b').on('click', function(){
  $.get("https://geo.api.gouv.fr/regions", function (NumReg) {
    let CodeReg = NumReg.length;

    let list = document.createElement('ul');
    list.classList.add('Samerli');

    let listElement = document.createElement('li');

    for(let i = 0; i < NumReg.length; i++) {

      listElement.innerHTML = NumReg[0].code;

      list.appendChild(listElement);
    };
    document.querySelector('main').appendChild(list);





  });

    });
