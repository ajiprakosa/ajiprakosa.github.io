$(document).ready(function($){
   
   createLand();
   function createLand(){
      var htmlData = $('.block-land-group').html();
      var posLeft = 0;
      for (var i=0;i<209;i++)
      { 
         posLeft += 36;
         $('.sky').append('<div class="block-land-group block-land-group-'+i+'"/>');
         $('.block-land-group-'+i).html(htmlData);
         $('.block-land-group-'+i).css('left',posLeft+'px');
      }
      
      $('.block-land-group').wrapAll('<div class="land"/>');
   }
   
   
   
   

});