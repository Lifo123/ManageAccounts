import { useState } from "react"

 
 
export default function Count(){
    //States
    const [count, setCount] = useState(0)

   return (
       <div className="count pointer fs-2 w-max br-6 mt-4" onClick={() => setCount(count + 1)}>
           Count {count}
       </div>
   )
}