import {useState,useEffect} from "react"

function ThemeToggle(){

const[dark,setDark]=useState(true)

useEffect(()=>{

if(dark){

document.documentElement.classList.add("dark")

}else{

document.documentElement.classList.remove("dark")

}

},[dark])

return(

<button

onClick={()=>setDark(!dark)}

className="
fixed
bottom-8
right-8
bg-blue-600
text-white
p-4
rounded-full
z-50
"

>

{dark?"☀️":"🌙"}

</button>

)

}

export default ThemeToggle