import React ,{ useState }from 'react';
import './App.css';
import data from './components/mock-data.json';

const App = () => {

  const[employees,setEmployees]=useState(data);
  const[addEmpData,setAddEmpData]=useState({
    name:'',
    job:''
  });

  const handleAddedInput=(event)=>{
    event.preventDefault();

    const fieldName=event.target.getAttribute('name');
    const fieldValue=event.target.value;

    const newFormData={...addEmpData};
    newFormData[fieldName]=fieldValue;

    setAddEmpData(newFormData);
  };

  const handleAddSubmit=(event)=>{
    event.preventDefault();

    const newEmployee={
      name:addEmpData.name,
      job:addEmpData.job
    }

    const newEmployees=[...employees,newEmployee];
    setEmployees(newEmployees);
  };

  const handleDeleteClick=(employeeName)=>{
    const newEmployees=[...employees];

    const index=employees.find((emloyee)=>emloyee.name==employeeName);
    newEmployees.slice(index,1);
    setEmployees(newEmployees);
  };

  return (
    <div className='app-container'>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
          </tr>
        </thead>
        <tbody>
          {
            employees.map((emloyee)=>(
              <tr>
                <td>{emloyee.name}</td>
                <td>{emloyee.job}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <h2>Add a new Employee</h2>
      <form onSubmit={handleAddSubmit}>
        <label for="name">Name</label><br></br>
        <input type="text" name='name' required="required" onChange={handleAddedInput}></input><br></br>
        <label for="job">Job</label><br></br>
        <input type="text" name='job' required="required" onChange={handleAddedInput}></input><br></br>
        <button type="submit" id='sub'>Submit</button>
      </form>
    </div>
  )
}

export default App;
