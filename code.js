let smartPeople = ['Jared','Muddathir','Clayton','Yasseen','Ikhlaas','Saleem'];

let ul = document.createElement("ul");

document.getElementById("names").appendChild(ul);

smartPeople.forEach((people)=>{
  var li = document.createElement("li");
  ul.appendChild(li);
  li.innerHTML += people;
});