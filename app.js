
const BASE_URL = 'http://dummy.restapiexample.com/api/v1/employees'




// console.log(BASE_URL)
let button = document.querySelector('button');
let input = document.querySelector('input');
let list = document.querySelector('#employeeList');


button.addEventListener('click', async (event) => {
  event.preventDefault()
  let res = await axios.get(`${BASE_URL}${input.value}`)
  // const employees = res.data.data[i].id

  for (let i = 0; i < employees.length; i++) {
    employees = res.data.data[i].id
   let employees2 = res.data.data[i].employee_name
    // let emplpoyeeslist = employees;
    // let emplpoyeeSalery = employees.employee_salary;
    // let employeeAge = employees.employee_age;
    // let emplpoyeeImage = employees.profile_image;
    list.innerHTML += `${employees2}`

  }
  console.log('clicked', res);
});