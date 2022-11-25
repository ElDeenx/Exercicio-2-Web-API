function onTextReady(json) {
  books = json.results;
  
 /* console.log("main",books)
  console.log(books[0].formats['image/jpeg'])
  console.log(books[0].title)
  console.log(books[0].authors[0].name)
  console.log(books[0].subjects)*/
  info(books);

  divcontent=document.getElementById("content");
  divcontent.innerHTML="";
  console.log("books", books)

  for (let i = 0; i < books.length; i++) {
  	//console.log(books[i].title);
    if (books[i].authors[0]){

    para = document.createElement("P");
    para.innerHTML="<img class=\"\" src=\""+books[i].formats['image/jpeg']+ "\">" + "<br><b>" + books[i].title + "</b>" + "<br>" + books[i].authors[0].name + '<br><br>';
    //node = document.createTextNode(books[i].title + "<br>");
    //para.appendChild(node);

    //node = document.createTextNode(books[i].subjects);
    //para.appendChild(node);

    //document.body.appendChild(para);
    divcontent.appendChild(para);
    }
  }
}

function onResponse(response) {
  return response.json();
}


function info(livros){
  for (let i=0; i<livros.length;i++){
    console.log('estoudentrodainfo')
  //console.log(livros[i].formats['image/jpeg'])
  //console.log(livros[i].title)
  //console.log(livros[i].authors[0].name)
  //console.log(livros[i].subjects)
  }
}

function ascending(){
  fetch('http://gutendex.com/books?sort=ascending')
  .then(onResponse)
  .then(onTextReady);
}

function descending(){
  fetch('http://gutendex.com/books?sort=descending')
  .then(onResponse)
  .then(onTextReady);
}

function popular(){
  fetch('http://gutendex.com/books')
  .then(onResponse)
  .then(onTextReady);
}

fetch('http://gutendex.com/books')
    .then(onResponse)
    .then(onTextReady);



