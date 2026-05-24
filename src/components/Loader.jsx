import { useEffect, useState } from "react"

function Loader(){

const [loading,setLoading]=useState(true)

useEffect(()=>{

const timer=setTimeout(()=>{

setLoading(false)

},2000)

return ()=>clearTimeout(timer)

},[])

if(!loading){

return null

}

return(

<div
className="
fixed
inset-0
bg-slate-950
flex
items-center
justify-center
z-[9999]
"
>

<div className="text-center">

<h1
className="
text-6xl
font-bold
text-white
animate-pulse
"
>

Solgy Varghese

</h1>

<p className="text-gray-400 mt-4">

Loading Portfolio...

</p>

</div>

</div>

)

}

export default Loader