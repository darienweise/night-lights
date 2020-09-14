$(function(){
         // Add event listener for user click 
         // INSIDE FUNCTION possibly add toggle/dropdown parameter?
   $('.button').on('click', function(){
      $(this).css('background-color', "#ffffff");
   })
      
   
})
   
      
      
      
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