import { useState } from "react"

function TasbihApp (){
    const [count, setCount] = useState(0)

const Increment = ()=>{
    setCount (count +1)
}
const Decrement = () => {
    if(count > 0){
            setCount (count -1)
    }
}

const Reset = ()=>{
    setCount (0)
}
    return <div>
    <div className="sm:mt-[80px] mt-[52.-%]">
         <h1  className="text-center text-blue-700 sm:mt-0 mt-[42%] mb-10 sm:text-5xl text-3xl font-bold">Tasbiix Application</h1>
        <h1 style={{color: count == 10 ? "red" : " "}} className="text-center mb-10 text-5xl font-bold">{count}</h1>
        <div className="sm:ml-[42%] ml-20 flex gap-10">
        <button className="text-5xl text-white font-bold bg-green-600 p-2 pt-0" onClick={Increment}>+</button>
        <button  className="text-5xl text-white font-bold bg-yellow-500 p-2 pt-0" onClick={Reset}>=</button>
        <button  className="text-5xl text-white font-bold rounded-[2px] pt-0 p-2 bg-red-600" onClick={Decrement}>-</button>
        </div>
    </div>
    
    </div>
}
export default TasbihApp