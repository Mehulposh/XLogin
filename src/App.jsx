import {useState} from 'react';
import './App.css';

function App(){
  const [username,setUsername] = useState('');
  const[password,setPassword] = useState('');
  
  const [submit,setSubmit] = useState(false);
  const [error,seError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(username  === 'user' && password === 'password'){
      setSubmit(true)
    }
    else{
      seError(true)
    }
  }


  return (
    <div>
      <h1>Login Page</h1>
      {error ? ( <h3>Invalid username or password</h3>) : null}

      {submit ? (
        <h2>Welcome, user!</h2>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <div className='formInput'>
              <label> Username : </label>
              <input 
                placeholder='Username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className='formInput'>
              <label>Password :  </label>
              <input 
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type='submit'>
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  )
}


export default App;