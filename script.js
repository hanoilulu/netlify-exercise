h1Element = document.querySelector("#biggest-heading");

let extraParagraph = document.createElement('p');
extraParagraph.id = 'my-name';

extraParagraph.textContent = "Nguyen Mai Anh";

h1Element.appendChild(extraParagraph);

console.log(h1Element);