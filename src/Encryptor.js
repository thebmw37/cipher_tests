function Encryptor(){
}

Encryptor.prototype.caesar = function(pass, num) {

  var cipher = '';
  if(num < 0 || num > 26) {
    alert("Please Enter a number between 0 and 26");
  }
  else {
    for (var i = 0; i < pass.length; i++) {
      var ch = pass.charCodeAt(i);
      if(ch >= 65 && ch <= 90) {
          if((ch + parseInt(num)) > 90) {
            ch = ch + parseInt(num) - 26;
          }
          else {
            ch = ch + parseInt(num);
          }
      }
      else if(ch >= 97 && ch <= 122) {
        if((ch + parseInt(num)) > 122) {
          ch = ch + parseInt(num) - 26;
        }
        else {
          ch = ch + parseInt(num);
        }
      }
      cipher += String.fromCharCode(ch);
      }
      return(cipher);
    }
}

function ordA(a) {
   return a.charCodeAt(0) - 65;
}

Encryptor.prototype.vigenere = function(text, key) {
  var i = 0, b;
  key = key.toUpperCase().replace(/[^A-Z]/g, '');
  return text.toUpperCase().replace(/[^A-Z]/g, '').replace(/[A-Z]/g, function(a) {
    b = key[i++ % key.length];
    return String.fromCharCode(((ordA(a) + (false ? 26 - ordA(b) : ordA(b))) % 26 + 65));
  });
}
