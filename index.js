let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(Ralph){// Append the number 4 to the array
    cats.push("Ralph") // Output: Updated Array: [1, 2, 3, 4]
}
function destructivelyPrependCat(Bob){
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat(remove){
    cats.pop("Ralph")
}
function destructivelyRemoveFirstCat(first){
    cats.shift("Milo")
}
function appendCat(Broom) {
    const newCatsArray = [...cats]; 
    newCatsArray.push("Broom"); 
    return newCatsArray; 
  }
  function prependCat(Arnold) {
    const newCatsArray = [...cats]; 
    newCatsArray.unshift("Arnold"); 
    return newCatsArray; 
  }
  function removeLastCat(Garfield){
    const newCatsArray = [...cats];
    newCatsArray.pop("Garfield")
    return newCatsArray;
  }
  function removeFirstCat(Milo) {
    const newCatsArray = [...cats]; 
    newCatsArray.shift("Milo"); 
    return newCatsArray; 
  }
  
  






//cats.push("Ralph")
//console.log(cats)