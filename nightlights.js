$(function(){
   $('.button').on('click', function(){
         $(this).css('background-color', "white")
   })
   $('.wLight').click(function(){
      $('.button').on('click', function(){
         $(this).css('background-color', "white")
      })
   })

   $('.mLight').click(function(){
      $('.button').on('click', function(){
         $(this).css('background-color', "magenta")
      })
   })
   
   $('.gLight').click(function(){
      $('.button').on('click', function(){
         $(this).css('background-color', "lime")
      })
   })

   $('.cLight').click(function(){
      $('.button').on('click', function(){
         $(this).css('background-color', "cyan")
      })
   })

   $('.yLight').click(function(){
      $('.button').on('click', function(){
         $(this).css('background-color', "yellow")
      })
   })

   $('.pLight').click(function(){
      $('.button').on('click', function(){
         $(this).css('background-color', "plum")
      })
   })

   $('.delete').click(function(){
      $('.button').on('click', function(){
         $(this).css('background-color', "inherit")
      })
   })
   
   $('.clear').click(function(){
      $('.button').css('background-color', "black")
   })
})