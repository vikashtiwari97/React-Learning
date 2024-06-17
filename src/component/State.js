//Form State 
import { useState } from "react";
const State = ()=>{

    const [firstData,getFirstData] = useState('');
    const [secondData,getSecondData] = useState('');

    function getFistInputHandler(event){
         getFirstData(event.target.value);
    }

    function getSecondInputHandler(event){
        getSecondData(event.target.value);
    }

    function submitHandler(event){
        event.preventDefault();

        const data = {
            name:firstData,
            year:secondData
        }
        console.log(data);
        getFirstData('');
        getSecondData('');
        
    }

   



    return(
        <div>
            <form onSubmit={submitHandler}>
            <br/>
            <label>Enter Name</label>
            <input type="text" value={firstData} onChange={getFistInputHandler}/>
            <br/>
            <br/>
            <label>Enter Year</label>
            <input type="text" value={secondData} onChange={getSecondInputHandler}/>
            <br/>
            <br/>
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default State;