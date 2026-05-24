import { motion } from "framer-motion"

function Navbar(){

return(

<motion.nav

initial={{y:-100}}
animate={{y:0}}
transition={{duration:.8}}

className="
fixed
top-0
w-full
z-50
bg-black/20
backdrop-blur-xl
border-b
border-white/10
"

>

<div
className="
max-w-7xl
mx-auto
px-8
py-5
flex
justify-between
items-center
"
>

<div>

<h1
className="
text-white
font-bold
text-2xl
"
>

SV

</h1>

<p
className="
text-gray-400
text-sm
"
>

Full Stack Developer

</p>

</div>

<div
className="
hidden
md:flex
gap-8
text-white
"
>

<a href="#about">About</a>

<a href="#skills">Skills</a>

<a href="#projects">Projects</a>

<a href="#education">Education</a>

<a href="#contact">Contact</a>

</div>


</div>

</motion.nav>

)

}

export default Navbar