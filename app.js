
let employeesArr = []
let employeeDataArr = []

const BASE_URL = 'http://dummy.restapiexample.com/api/v1/employees'

let button = document.querySelector('button');
let input = document.querySelector('#inputsearch');
let list = document.querySelector('.holy-grail-content');

// First, onload make API call to get all users
// Create array with the API call results
// button.addEventListner, now you can filter through results
let employeeArray = []


const getApiData = async () => {
  const employeeData = await axios.get(BASE_URL)
  const employees = employeeData.data.data

  const BASE_URL2 = `https://randomuser.me/api/?results=${employees.length}&inc=picture,phone,email,login`
  const randomUsers = await axios.get(BASE_URL2)
  employeeArray = await assignRandomUserToEmployee(employees, randomUsers.data.results)
}

const assignRandomUserToEmployee = (employees, randomUsers) => {
  let data = []
  for (let i = 0; i < employees.length; i++) {
    const employee = employees[i];
    const user = randomUsers[i]
    // console.log(user, employee)
    const mappedData = {
      ID: employee.id,
      name: employee.employee_name,
      phone_number: user.phone,
      salary: employee.employee_salary,
      avatar: user.picture.large
    }

    data.push(mappedData)
  }
  return data
}
//finding employee by search 

const findEmployee = (employeeName) => {
  const resp = employeeArray.filter(employee => {
    if (employee.name == employeeName) {
      return list.innerHTML = `<div class="results"> <h1>Name: ${employee.name}</h1> <h2>Phone: ${employee.phone_number}</h2><h3>Salary: $ ${employee.salary}</h3> <img id=profile src='${employee.avatar}'></img></div>`;
    }

  })

  // console.log('employeeArray',employeeArray)
  console.log('resp', resp)

}


window.addEventListener('load', async () => {
  await getApiData()
  let value = ''
  input.addEventListener('change', (event) => {
    value = event.target.value
    console.log(value)
  })
  button.addEventListener('click', (event) => {
    event.preventDefault()
    findEmployee(value)
    list.scrollIntoView()
    input.value = ''
  })
})


