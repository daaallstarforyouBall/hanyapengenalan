const txtElement = ['allo', 'cayank', 'aida'];
let count = 0; // Ganti Let menjadi let (penulisan "let" dengan huruf kecil)
let txtIndex = 0; // Ganti Let menjadi let
let currentTxt = ''; // Ganti Let menjadi let
let words = ''; // Ganti Let menjadi let

(function ngetik(){

  if(count == txtElement.length){
    count = 0;
  }

  currentTxt = txtElement[count];

  words = currentTxt.slice(0, ++txtIndex);
  document.querySelector('.efek-ngetik').textContent = words;

  if(words.length == currentTxt.length){
    count++;
    txtIndex = 0;
  }
  setTimeout(ngetik, 500);

})();
