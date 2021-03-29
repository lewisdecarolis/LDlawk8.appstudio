
hmbMenu.onclick=function(s){
  if (typeof(s) == "object") { // do nothing - they just clicked on the control
       return
    } else {
       switch(s) {
            case "Dessert Voting":
                // Go to the Overview form
                ChangeForm(dessertVoting)
                break
                 case "Describe You":
                // Go to the Overview form
                ChangeForm(describeYou)
                break
                 case "Favorite Exercises":
                // Go to the Overview form
                ChangeForm(favExcersises)
                break
                 case "Mobile Navigation":
                // Go to the Overview form
                ChangeForm(mobileNav)
                break
       }  //switch
   } //else
}


