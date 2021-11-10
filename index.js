function stripUpperCase (string) {
  let newStr = "";
  for (let i = 0; i < string.length; i++){
    if (string[i] === string[i].toLowerCase()){
       newStr += string[i];
    }
  }
  return newStr
}
   console.log(stripUpperCase("YayaAndJarae!!!BBHH"));

