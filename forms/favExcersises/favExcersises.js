var exercises = ["pullups","pushups","situps","jogging","plank","curls"]
var coreExercises = ["situps","plank"]

favExcersises.onshow=function(){
  selExercises.clear()   
    // put array of flavors in the dropdown (called populating it)
    for (i = 0; i < coreExercises.length; i++) 
        selExercises.addItem(coreExercises[i])
}
favExcersises.onshow=function(){
  selExercises.clear()   
    // put array of flavors in the dropdown (called populating it)
    for (i = 0; i < exercises.length; i++) 
        selExercises.addItem(exercises[i])
}


// multiple list choices allowed; uses button onclick
// Comment code above, and uncomment code below

btnCore.onclick=function(){
  // returns array of the choices' text
    let message = " You chose situps and planks - those are the two core exercises.   " 
  for (i = 0; i < selExercises.text.length; i++)
     message = message + selExercises.text[i] + ", "
     
  // remove the last comma
  // slice drops last 2 characters (comma and space)
  //     starts at 0, and goes to end of the 
  //     string minus 2 characters
  message = message.slice(0, -2)
  lblCore.value = message
  
}
