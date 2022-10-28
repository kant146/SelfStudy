// All the JS Code for the Add Students Page Goes Here

// steps
// 1.catch the form.
// 2. create an object to store data of the form.
// 3. Store the data inside local Storage.


let Student_form = document.querySelector('#form');

let LSData= JSON.parse(localStorage.getItem("admission"))||[];

Student_form.addEventListener('submit', function(event){
  event.preventDefault(); // this thing prevent the form from refreshing.
  let obj = {
    Name: Student_form.name.value,
    email: Student_form.email.value,
    Phone_number: Student_form.phone.value,
    Gender: Student_form.gender.value,
    Course: Student_form.course.value,
   
  }
  console.log(obj)
  if( obj.Name=="" || obj.email=="" || obj.Phone_number==""){
    alert("Fill the form proper.")
  } 
  else{
  LSData.push(obj);
  localStorage.setItem("admission",JSON.stringify(LSData));
  }
})