rdobtnPersonality.onchange=function(){  //use .onchange
   let userChoice = $("input[name=rdobtnPersonality]:checked").prop("value") //Gets text next to radiobutton ex. "you picked chocolate"
   lblDisplay.value = (`You picked ${userChoice}`)
}

btnNextPage1.onclick=function(){
  ChangeForm(favExcersises)
}


