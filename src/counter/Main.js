import { useState } from "react";
const Main = ()=>{
    let [count,setcount] = useState(0)
    function subHandler(){
        setcount(count-1)
    }
    function plusHandler(){
        setcount(count+1)
    }
    function resetHandler(){
        setcount(0)
    }
    return(
            <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10">
            <div className="text-[#0298d4] font-medium text-2xl">Increment & Decrement</div>
            <div className="bg-white flex justify-center items-center gap-12 py-3 rounded-sm text-[25px] text-[#3444151]">
                <button onClick={subHandler} className="border-r-2 text-center w-20 border-[#BFBFBF] text-5xl"> - </button>
                <div className="font-bold gap-12 text-5xl" >{count}</div>
                <button onClick={plusHandler} className="border-l-2 text-center w-20 border-[#BFBFBF] text-5xl"> + </button>
            </div>
            <button onClick={resetHandler} className="bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg">Reset</button>
        </div>
    );
}
export default Main;