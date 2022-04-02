import {useState} from 'react';
import GeneratePassword from './passwordUtils';

function App() {
  const [passwordLength, setPasswordLength] = useState(6);

  const [password, setPassword] = useState("");

  const [passwords, setPasswords] = useState([]);

  const [btnDisabled, setBtnDisabled] = useState(false);

  const handleSliderChange = (event) => {
    setPasswordLength(event.target.value);
      
    setPassword(GeneratePassword(event.target.value));

    setBtnDisabled(false);

    // const GeneratePassword = GeneratePassword(event.target.value);
    // setPassword(GeneratePassword);
    
  }

  const handleSavePassword = (e) => {
    setPasswords([...passwords, password]);

    setBtnDisabled(true);
  }

  const setPasswordLengthColor = (pwLength) => {

    if(!pwLength) pwLength = passwordLength;

    if (pwLength < 11) {
      return "bg-danger";
    } else if (pwLength >= 11 && pwLength < 20) {
      return "bg-warning";
    } else {
      return "bg-success";
    }
  }




  return (
    <div className="container">
       { /* Container */ }
      <div className="row">
        <div className="col-12">
          <div className="d-flex den justify-content-center align-items-center">
            { /* Card Section */ }
            <div className="card mt-3">
              <div className="card-body">
                <div className="card-title text-center">
                  <h2 className='text-info'>Simple Password Generator</h2>
                  <p>Create secure passwords with Simple Password Generator</p>
                </div>

                { /* Slider Start*/ }
                <div className='mt-2'>
                  <label className='form-label' htmlFor='password-length-slider'>
                    Password Lenghth <span className={`badge ${setPasswordLengthColor()}`} >{passwordLength}</span>
                  </label>            
                  <input
                    id='password-length-slider' 
                    className='form-range' 
                    type="range"
                    min={6}
                    max={40}
                    step={1}
                    value={passwordLength}
                    onChange={handleSliderChange}
                  />
                </div>

                { /* Slider End*/ }

                <div className='mt-2'>
                { /* Text Input Section */ }
                  <input 
                    className="form-control 
                    text-center"
                    type="text"
                    style={{cursor: 'pointer'}}
                    value={password}
                    readOnly={true}
                  />
                  
                  { /* Buttons Section */ }
                  <button className='btn btn-info mt-3' disabled={btnDisabled} onClick={e => handleSavePassword(e)} >Save</button>

                  <button className='btn btn-outline-info mt-3 float-end'>Reset Saved Password</button>
                </div>
              </div>
            </div>
            { /* Password List Card */ }
            <div className='card mt-3'>
              <div className='card-body'>
                <div className='car-header text-center'>
                  <h2 className='text-info'>Recent Generated Passwords</h2>
                </div>
                <ul className='list-group list-group-flush text-center'>
                  {passwords.map((password, index) => (
                    <li className='list-group-item' key={index}>
                     <span className='fst-italic float-start'>{index + 1}</span>
                      <div className={`badge ${setPasswordLengthColor(password.length)}`} style={{curosr: "point"}}>
                        {password}
                     </div>
                   </li>
                  ))}

                </ul>
             </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
