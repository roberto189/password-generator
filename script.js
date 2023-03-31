 function generatePassword(){
  let capltrs = confirm("would you like caps?");
console.log(capltrs)
let ltrs = confirm("would you like lowercase letters?")
console.log(ltrs)
let num = confirm("would you like numbers?")
console.log(num)
let spc = confirm("would you like special charachters?")
console.log(spc)
//let passwrdl = prompt("how long would you like your password to be? choose between 8 and 128")
//console.log(passwrdl)
  //var passwordlength = []
  var capletters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var numbers = ["1","2","3","4","5","6","7","8","9"];
  var spchar = ["!","@","#","$","%","&","*","?",",",".","-","_","=","+","/","<",">"];
  
  var pos = []

  if (ltrs = true){
   pos = pos.concat(letters);
  }
  if (num = true){
    pos = pos.concat(numbers)
  }
  if (capltrs = true){
    pos = pos.concat(capletters)
  }
  if (spc = true){
    pos = pos.concat(spchar)
  }
  
    let result = "";
    for ( let i = 0; i < pos.length; i++ ) {
        result += pos[Math.floor(Math.random() * pos.length)];
    }
    console.log("result" + result);
    return result
  
}
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
