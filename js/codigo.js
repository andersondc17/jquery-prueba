$(document).ready(function(){


function acciones(){
  $('#caja').click(function(){
    $(this).css('background-color','green');
  });

  $('#caja').mouseout(function(){
    $(this).css('background-color','blueviolet');
});

};

acciones();


 $('body').ready(function(){
  $( "#contenido" ).load( "otros.html #caja",function(){

    acciones(); 


    
  });
  
 });
  
  });


