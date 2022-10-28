// All the Code for the Admitted page goes here

let adm_accepted = JSON.parse(localStorage.getItem("admission-accepted"));
let tbody= document.querySelector("tbody");

function displayTable(data){
for(let element of data){
  let tr=document.createElement("tr");


  let name=document.createElement("td");
        name.innerText=element.Name;

  let Phone=document.createElement("td");
        Phone.innerText=element.Phone_number;

  let email=document.createElement("td");
  email.innerText=element.email;

  let gender=document.createElement("td");
  gender.innerText=element.Gender;

 let course=document.createElement("td");
 course.innerText=element.Course;

 tr.append(name,email,course,gender,Phone);

 tbody.append(tr);
}

}
displayTable(adm_accepted);