var dessertList = ['Chocolate Cake','Cream Brulee','Cheesecake',
                  'Keylime Pie','Cherry Cobbler','Chocolate Chip Cookies']


dessertVoting.onshow=function(){
    // always clear before populating
    drpDesserts.clear()   
    // put array of flavors in the dropdown (called populating it)
    for (i = 0; i < dessertList.length; i++) 
        drpDesserts.addItem(dessertList[i])
}

drpDesserts.onclick=function(s) {
  if (typeof(s) == "object") // means the control was clicked 
    return                   // but no selection made yet so do nothing
else if  (s == "") // a selection made
    ChangeForm(describeYou)  
    else
    drpDesserts.value = s     // make dropdown show choice the user made
    console.log(`The user chose ${s} - that is a great choice.`)
  
}
