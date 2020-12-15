function openForm() {
  var formdiv = document.getElementById("addEmployeeForm")
  formdiv.style.display = "block";

}

function closeForm() {
  var formdiv = document.getElementById("addEmployeeForm")
  formdiv.style.display = "none"



}

function addListeners() {

  //listener for generation of preferred name

  var firstName = ""
  var lastName = ""

  const fname = document.getElementById('fname')
  const lname = document.getElementById('lname')


  fname.addEventListener("input", (_) => {
    firstName = fname.value
    document.getElementById('pname').value = firstName + " " + lastName
  })

  lname.addEventListener("input", (_) => {
    lastName = lname.value
    document.getElementById('pname').value = firstName + " " + lastName
  })
}


addListeners()




var employeeData = [];





function addEmployee(employee) {
  employeeData.push(employee)
  var empDiv = document.createElement("div")
  empDiv.classList.add("employee")
  var empImgDiv = document.createElement("div")
  empImgDiv.classList.add("a-inline")
  empImgDiv.classList.add("employee-img")
  var empImg = document.createElement("img")
  empImg.src = "man128.png"
  empImg.width = 56
  empImg.height = 56
  empImgDiv.appendChild(empImg)
  empDiv.appendChild(empImgDiv)



  var empData = document.createElement("div")
  empData.classList.add("a-inline")

  var empNameDiv = document.createElement("div")
  var empName = document.createElement("h4")
  empName.classList.add("margin-zero")
  empName.appendChild(document.createTextNode(employee.firstName + " " + employee.lastName))
  empNameDiv.appendChild(empName)
  empData.appendChild(empNameDiv)

  var empTitleDiv = document.createElement("div")
  var empTitle = document.createElement("a")
  empTitle.classList.add("a-small")
  empTitle.appendChild(document.createTextNode(employee.jobTitle))
  empTitleDiv.appendChild(empTitle)
  empData.appendChild(empTitleDiv)



  var empDepartDiv = document.createElement("div")
  var empDepart = document.createElement("a")
  empDepart.classList.add("a-small")
  empDepart.appendChild(document.createTextNode(employee.department))
  empDepartDiv.appendChild(empDepart)
  empData.appendChild(empDepartDiv)


  empDiv.appendChild(empData)
  document.getElementById("employee-content").appendChild(empDiv)


  closeForm() 
}

















function addFilters() {

}

addFilters()



class Employee {

  constructor(firstName,lastName,email,jobTitle,office,department,phoneNumber,skypeId){
      this.firstName = firstName
      this.lastName = lastName
      this.email = email
      this.jobTitle = jobTitle
      this.office = office
      this.department = department
      this.phoneNumber = phoneNumber
      this.skypeId = skypeId
  }
}




function validation() {



const firstName = document.getElementById('fname').value
const lastName = document.getElementById('lname').value
const email = document.getElementById('email').value
const jobTitle = document.getElementById('job_title').value
const office = document.getElementById('office').value
const department = document.getElementById('department').value
const phoneNumber = document.getElementById('phone_number').value
const skypeId = document.getElementById('skype_id').value

addEmployee(new Employee(firstName,lastName,email,jobTitle,office,department,phoneNumber,skypeId))


}



