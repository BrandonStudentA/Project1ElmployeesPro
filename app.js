
// const BASE_URL = 'http://dummy.restapiexample.com/api/v1/employees'
const BASE_URL = 'http://dummy.restapiexample.com/api/v1/employees'
const BASE_URL2 = 'https://randomuser.me/api/?inc=picture,phone,email,login'
  console.log(BASE_URL2)
let employeesArr = []


// console.log(BASE_URL)
let button = document.querySelector('button');
let input = document.querySelector('#inputsearch');
let list = document.querySelector('.holy-grail-content');

// First, onload make API call to get all users
// Create array with the API call results
// button.addEventListner, now you can filter through results
let employeeArray = []

window.addEventListener('load', async () => {
  const res = await axios.get(`${BASE_URL} `)
  let employees = res.data.data

  employeesArr.push(employees)
  

  
})


button.addEventListener('click', (event) => {
  event.preventDefault()
  list.innerHTML = ""
  
  // if (input.value)
  // let res = await axios.get(`${BASE_URL}${input.value}`)
  // let res = await axios.get(`${BASE_URL}`)
  // employees = res.data.data
  // console.log(employees[0].employee_name)


  for (let i = 0; i < 25; i++) {
    console.log(employeesArr[0][i].employee_name, input.value)
    // const employee = employees[i]
    if (employeesArr[0][i].employee_name === input.value) {

      let emps = employeesArr[0][i]
      let keys = Object.keys(emps)
      keys.forEach(key => {
        console.log(key, emps[key])

        list.innerText += `${emps[key]}`

      })
    }

    // button.addEventListener(click, async () => {
    //   const res = await axios.get(`${BASE_URL2} `)
    //   let profile = res.data.email

  //  console.log(profile)
    // })
    // else {
    //   alert('employee not found ');
    // }

    // list.innerHTML += `<div><h1>Employee ID: </h1><h1>Name: ${employee.employee_name}</h1><br><h2>Salary:</h2> </h3>${employee.employee_salary}<br><h2>age:</h2> <h3>${employee.employee_age}</h3></div>`

  }
  //   return 'Employee Not Found';


})