function openForm(){
    document.getElementById("addEmployeeForm").style.display = "block";
    
}

function closeForm() {
  
    document.getElementById("addEmployeeForm").style.display = "none"
    const temp =   document.getElementsByClassName("error")
    Array.from(temp).forEach((e)=>{
      e.innerHTML=""
    })
}


class Employee {
    constructor(firstName,lastName,email,jobTitle,office,department,phoneNumber,skypeId) {
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


var employeeData = [];

var formInputs = ["fname","lname","email","job_title","office","department","phone_number","skype_id"];

function submitEmployee(){
   
}




function addEmployee(employee) {
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
    empName.appendChild(document.createTextNode(employee.firstName+" "+employee.lastName))
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
}






const regValidate = [
  {id:"fname",reg:"^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$",error_id:"fname_error",error_msg:"Please enter your first name"}
  ,{id:"lname",reg:"^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$",error_id:"lname_error",error_msg:"please enter your last name"},
  {id:"email",reg:"^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$" ,error_id:"email_error",error_msg:"please enter a valid email address"},
  {id:"phone_number",reg:"^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$",error_id:"phone_number_error",error_msg:"please enter a valid phone number"},  
  
]

const selectValidate =[
  {id:"job_title",select_id:"job_title_select",error_msg:"please prefer a job title",error_id:"job_title_error"},
  {id:"office",select_id:"office_select",error_msg:"please prefer an office",error_id:"office_error"},
  {id:"department",select_id:"department_select",error_msg:"please prefer a department",error_id:"department_error"},
]


regValidate.forEach((e)=>{
  const ele =document.getElementById(e.id)
  ele.addEventListener("focus",(_)=>{
    document.getElementById(e.error_id).innerHTML =""
  })
})

selectValidate.forEach((e)=>{
  const ele =document.getElementById(e.id)
  ele.addEventListener("focus",(_)=>{
    document.getElementById(e.error_id).innerHTML =""
  })

})

document.getElementById("skype_id").addEventListener("focus",(_)=>{
  document.getElementById("skype_id_error").innerHTML =""
})



var firstName = ""
var lastName = ""

const fname = document.getElementById('fname')
const lname = document.getElementById('lname')


fname.addEventListener("input",(_)=>{
  firstName = fname.value
  console.log(firstName)
  document.getElementById('pname').value = firstName+" "+lastName
})

lname.addEventListener("input",(_)=>{
  lastName = lname.value
  document.getElementById('pname').value = firstName+" "+lastName
})



function validation(){
  var flag = true;
  regValidate.forEach((e)=>{
    const val = document.getElementById(e.id);
    const regx = new RegExp(e.reg)
    if(regx.test(val.value)){
      document.getElementById(e.error_id).innerHTML = ""
    }else{
      document.getElementById(e.error_id).innerHTML = e.error_msg
      flag = false
    }
  })

  selectValidate.forEach((e)=>{
    const val = document.getElementById(e.id);
    if(val.value==""){
      document.getElementById(e.error_id).innerHTML = e.error_msg
      flag = false
    }else{
      document.getElementById(e.error_id).innerHTML =""    }
  })

  const skypeId = document.getElementById("skype_id")
  if(skypeId.value==""){
    flag = false
    document.getElementById("skype_id_error").innerHTML = "please enter a valid skypeid"
  }else{
    document.getElementById("skype_id_error").innerHTML = ""
  }

  if(flag){
   const values = formInputs.map((e)=>{
     const temp = document.getElementById(e)
      return temp.value;
    })
    addEmployee(new Employee(values[0],values[1],values[2],values[3],values[4],values[5],values[6],values[7]))
    closeForm()
  }

}