


jQuery.noConflict();
jQuery(document).ready(function($){
  
    $("button").click(function(){

        console.log('this si click ');
    });


    $('p').click(function(){
 
        
         console.log('p chal padi');
         alert('plese dont tuch p')
        

    });


    $('.my').click(function(){
         
         console.log('thsi si from class');
 
    });

    $("#id").click(function(){
  
        alert('thsi si from id') 
 
    });


    $("#mo").mouseenter(function(){
   
                  
    alert('this si mouse enter')
    });
     
  
});



