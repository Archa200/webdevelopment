import React,{ useState} from "react";
import { useHistory} from 'react-router-dom';

const Home = () => {
const [marks,setMarks]=useState({
    Maths_first_internal:'',
    Maths_second_internal:'',
    Maths_main:'',
    Maths_II_first_internal:'',
    Maths_II_second_internal:'',
    Maths_II_main:'',
    Science_first_internal:'',
    Science_second_internal:'',
    Science_main:'',
    ML_first_internal:'',
    ML_second_internal:'',
    ML_main:'',
    ACN_first_internal:'',
    ACN_second_internal:'',
    ACN_main:'',
    Lab_1_first_internal:'',
    Lab_1_second_internal:'',
    Lab_1_main:'',
    Lab_2_first_internal:'',
    Lab_2_second_internal:'',
    Lab_2_main:''
    })

    const history=useHistory();

    const handleMark = (e, subject) => {
        const value = e.target.value;
        setMarks((new_marks) => ({
            ...new_marks,
            [subject]: value,
        }));
    };
    
const handleSubmit=()=>{
    console.log('Marks are submitted');
    history.push("/marks")
}
    return (
        <div style={{
            margin:'10px'
        }}>
            <h1>Add Marks</h1>
            <h3>Mathematics paper-1</h3>
            <label>
            Enter First Internal Marks:
                <input
                    type="number"
                    id="mat-1"
                    value={marks.Maths_first_internal}
                    onChange={(e) => handleMark(e, 'Maths_first_internal')}
                />
            </label>    
            <label>
            Enter Second Internal Marks:    
                <input
                    type="number"
                    id="mat-2"
                    value={marks.Maths_second_internal}
                    onChange={(e) => handleMark(e, 'Maths_second_internal')}
                />
            </label>    
            <label>    
            Enter External Examination Marks:    
                <input
                    type="number"
                    id="mat-m"
                    value={marks.Maths_main}
                    onChange={(e) => handleMark(e, 'Maths_main')}
                />
            </label>
            <h3>Mathematics paper-2</h3>
            <label>
            Enter First Internal Marks
                <input
                    type="number"
                    id="math-1"
                    value={marks.Maths_II_first_internal}
                    onChange={(e) => handleMark(e, 'Maths_II_first_internal')}
                />
            </label>
            <label>
            Enter Second Internal Marks:
                <input
                    type="number"
                    id="math-2"
                    value={marks.Maths_II_second_internal}
                    onChange={(e) => handleMark(e, 'Maths_II_second_internal')}
                />
            </label>
            <label>
            Enter External Examination Marks:    
                <input
                    type="number"
                    value={marks.Maths_II}
                    onChange={(e) => handleMark(e, 'Maths_II_main')}
                />
            </label>
            <h3>Science Paper-1</h3>
            <label>
            Enter First Internal Marks:
                <input
                    type="number"
                    id="sc-1"
                    value={marks.Science_first_internal}
                    onChange={(e) => handleMark(e, 'Science_first_internal')}
                />
            </label>
            <label>
            Enter Second Internal Marks:
                <input
                    type="number"
                    id="sc-2"
                    value={marks.Science_second_internal}
                    onChange={(e) => handleMark(e, 'Science_second_internal')}
                />
            </label>
            <label>
            Enter External Examination Marks: 
                <input
                    type="number"
                    id="sc-m"
                    value={marks.Science_main}
                    onChange={(e) => handleMark(e, 'Science_main')}
                />
            </label>
            <h3>Machine Learing Paper-1</h3>
            <label>
            Enter First Internal Marks:
                <input
                    type="number"
                    id="ml-1"
                    value={marks.ML_first_internal}
                    onChange={(e) => handleMark(e, 'ML_first_internal')}
                />
            </label>
            <label>
            Enter Second Internal Marks:
            <input
                    type="number"
                    id="ml-2"
                    value={marks.ML_second_internal}
                    onChange={(e) => handleMark(e, 'ML_second_internal')}
                />
            </label>
            <label>
            Enter External Examination Marks: 
                <input
                    type="number"
                    id="ml=m"
                    value={marks.ML_main}
                    onChange={(e) => handleMark(e, 'ML_main')}
                />
            </label>
            <h3>ACN paper-1</h3>
            <label>
            Enter First Internal Marks:
                <input
                    type="number"
                    id="acn-1"
                    value={marks.ACN_first_internal}
                    onChange={(e) => handleMark(e, 'ACN_first_internal')}
                />
            </label>
            <label>
            Enter Second Internal Marks:
                <input
                    type="number"
                    id="acn-2"
                    value={marks.ACN_second_internal}
                    onChange={(e) => handleMark(e, 'ACN_second_internal')}
                />
            </label>
            <label>
            Enter External Examination Marks:    
                <input
                    type="number"
                    id="acn-m"
                    value={marks.ACN_main}
                    onChange={(e) => handleMark(e, 'ACN_main')}
                />
            </label>
            <h3>Practical Lab paper-1</h3>
            <label>
            Enter First Internal Marks:
                <input
                    type="number"
                    id="l1-1"
                    value={marks.Lab_1_first_internal}
                    onChange={(e) => handleMark(e, 'Lab_1_first_internal')}
                />
            </label>
            <label>
            Enter Second Internal Marks:
                <input
                    type="number"
                    id="l1-2"
                    value={marks.Lab_1_second_internal}
                    onChange={(e) => handleMark(e, 'Lab_1_second_internal')}
                />
            </label>
            <label>
            Enter External Examination Marks: 
                <input
                    type="number"
                    id="l1-m"
                    value={marks.Lab_1_main}
                    onChange={(e) => handleMark(e, 'Lab_1_main')}
                />
            </label>
            <h3>Practical Lab paper-2</h3>
            <label>
            Enter First Internal Marks:
                <input
                    type="number"
                    id="l2-1"
                    value={marks.Lab_2_first_internal}
                    onChange={(e) => handleMark(e, 'Lab_2_first_internal')}
                />
            </label>
            <label>
            Enter Second Internal Marks:
                <input
                    type="number"
                    id="l2-2"
                    value={marks.Lab_2_second_internal}
                    onChange={(e) => handleMark(e, 'Lab_2_second_internal')}
                />
            </label>
            <label>
            Enter External Examination Marks:   
                <input
                    type="number"
                    id="l2-m"
                    value={marks.Lab_2_main}
                    onChange={(e) => handleMark(e, 'Lab_2_main')}
                />
            </label>
            <br />
            <button onClick={handleSubmit} className="headerbutton" style={{
                margin:'20px 10px'
                }}>Submit</button>
        </div>
        
     );
}
 
export default Home;