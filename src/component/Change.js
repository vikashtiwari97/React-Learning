import './Change.css'
import { useState } from 'react';

let Change = () => {

    //data is the variable and the setData is the method which works to change the data and in the usestate which data is added which is you want to change
    const [data,setData] = useState('Hello Vikash Change me')


    function clickHandler(){
        setData('Hello Vikash I am Changed')
        console.log('clicked me');
    }
    return(
        <div>
            <p>{data}</p>
            <button onClick={clickHandler}>Change</button>
        </div>
    );
}

export default Change;