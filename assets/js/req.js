/**
 * Fetch data from the form and create the popup
 * */

function STATUSChanged() {
    var API = document.getElementsByName("APIKey")[0].value;
    var OUTLINE = document.getElementsByName("Outline")[0].value;
    GETData(API,OUTLINE);
}


function GETData(API,OUTLINE){

   var url = "https://api.openai.com/v1/engines/davinci/completions";

   var xhr = new XMLHttpRequest();
   xhr.open("POST", url);

   xhr.setRequestHeader("Content-Type", "application/json");
   xhr.setRequestHeader("Authorization", "Bearer "+API);

   xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
         var content = JSON.parse(xhr.responseText);
         pop.open(content['choices'][0]['text'])
      }};

   var data = `{
     "prompt": "${OUTLINE}",
     "temperature": 1,
     "max_tokens": 128,
     "top_p": 0,
     "frequency_penalty": 0.87,
     "presence_penalty": 1.08
   }`;
   xhr.send(data); 
}  

  