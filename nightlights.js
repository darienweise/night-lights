// const lightColor = ;

$(function(){
         // Add event listener for user click 
         // INSIDE FUNCTION possibly add toggle/dropdown parameter?
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
   
   // $('.clear').on('click', function(){
   //    confirm('Do you want to clear?');
   //    if(Boolean == true)($('.button').css('background-color', "plum"))
   //    });
   // });
})
   

// if ($('.button').css("background-color")=="#FDFFEB"){
//    $('.button').on('click', function(){
//    $(this).css('background-color', "blue");
// })
// }

// $('.button').on('click', function(){
//    if($('.button').css("background-color") === "#FDFFEB") {
//     $('.button').css('background-color', "#333333");
//    }
// })
// if( $(this).css("background-color") == "Crimson" )  
      
      
         // if radio button is clicked
         // and div with class of button is clicked
         // make border of clicked div inherit the radio button's color
      
      // add conditional click listener
         // on button.clear click
         // and if div.button color value is true
         // change the div.button border color to default value
      
      // add event listener for click on button.clear
         // if button.clear button is clicked
         // confirm user if they want to clear the screen
         // if true then set all div.button classes to default colour
         // false then do nothing.
      
      
      //stretch goal: 
      // create listener for click
         // if any div.button is border color true
            // confirm with user "Do you want to clear the page and add the template?"
            // if true
               // add template border color to specified array of div.buttons
            // if false do nothing.