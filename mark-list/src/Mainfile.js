import { useState } from 'react';
import { useHistory} from 'react-router-dom';
import './App.css';

const Mainfile = () => {
  const [name, setName] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  let history = useHistory();

  const handleInput = (e) => {
    const studentName = e.target.value;
    setName(studentName);
    setIsButtonDisabled(!studentName.trim());
  };

  const handleClick = () => {
    console.log('Adding student name');
    console.log(history)
    history.push("home");
  };

  return (

      <div>
        <header className='headerStyle'>
          <label>
            Enter student name:
            <input
              type='text'
              value={name}
              onChange={handleInput}
            />
          </label>
          <button onClick={handleClick} disabled={isButtonDisabled} className='headerbutton'>
            Add
          </button>
        </header>
      </div>
  );
};

export default Mainfile ;
