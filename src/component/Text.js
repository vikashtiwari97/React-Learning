import './Text.css';
import { useState } from 'react';

const Text = ()=>{

    const [a,copy]=useState('');
    
    function textHandler(event){
        copy(event.target.value);
    }
      return(
        <div>
            <p>{a}</p>
             <input type='text' onChange={textHandler}/>
        </div>
      );
}
export default Text;