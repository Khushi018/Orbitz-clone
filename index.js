 function moretravel(){
    let ul = document.createElement("ul");
    let li = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    ul.append(li,li2,li3);
    document.querySelector("#moreTravel").append(ul);
 }