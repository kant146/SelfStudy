// All the Code for All Students Page Goes Here

// 1.get data from local Storage.
// 2.Catch the table from html page.
// 3.append data to table.
// 4.create admitted data.
// 5.create rejected data.
// 6.delete data from old admission data.
// 7.create a filter function.
// 8.display data.

let LSData = JSON.parse(localStorage.getItem("admission"));
let tbody = document.querySelector("tbody");
let filter = document.getElementById("filter");

function displayTable(data) {
  tbody.innerHTML = null;
  data.forEach(function (element, index) {

      let tr = document.createElement("tr");


      let name = document.createElement("td");
      name.innerText = element.Name;

      let Phone = document.createElement("td");
      Phone.innerText = element.Phone_number;

      let email = document.createElement("td");
      email.innerText = element.email;

      let gender = document.createElement("td");
      gender.innerText = element.Gender;

      let course = document.createElement("td");
      course.innerText = element.Course;

      let accept = document.createElement("td");
      accept.innerText = "Accept";
      accept.addEventListener("click", function () {
        addData("admission-accepted", element);
        deleteData(LSData, index);
      })

      let reject = document.createElement("td");
      reject.innerText = "Reject";
      reject.addEventListener("click", function () {
        addData("admission-rejected", element);
        deleteData(LSData, index);
      })


      tr.append(name, email, course, gender, Phone, accept, reject);

      tbody.append(tr);
    }

  )
}

function addData(key, value) {
  let newLSData = JSON.parse(localStorage.getItem(key)) || [];
  newLSData.push(value);
  localStorage.setItem(key, JSON.stringify(newLSData));
}

function deleteData(data, index) {
  data.splice(index, 1);
  localStorage.setItem("admission", JSON.stringify(data));
  displayTable(data);
}


// filter.addEventListener("change", function(){
//   let filteredData = LSData.filter(function(el){
//     return el.course === filter.value;
//   })
//   displayTable(filteredData);
// });

filter.addEventListener("change", function(){
  let  filteredDAta= LSData.filter(function(el){
   return el.course===filter.value
  })
  displayTable(filteredDAta);
})

displayTable(LSData);