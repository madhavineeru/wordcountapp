let textElement = document.getElementById("textValue");
let characterCountValue = document.getElementById("characterCount");
let wordCountValue = document.getElementById("wordCount");

textElement.addEventListener('input', () =>{
    let InputTextValue = textElement.value;
    let characterValue= InputTextValue.replace(/ /g,"");
    characterCountValue.textContent = characterValue.length;
    let text =  textElement.value.trim();
    wordCountValue.textContent = text.split(/\s+/).filter((eachText) => eachText).length;
});
