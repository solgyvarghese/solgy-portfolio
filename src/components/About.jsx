import {motion} from "framer-motion"
import {
FaGraduationCap,
FaMapMarkerAlt,
FaLaptopCode,
FaEnvelope
}
from "react-icons/fa"

function About(){

const cards=[

{
icon:<FaGraduationCap/>,
title:"College",
value:"Christ College of Engineering"
},

{
icon:<FaLaptopCode/>,
title:"Degree",
value:"B.Tech Computer Science Engineering"
},

{
icon:<FaMapMarkerAlt/>,
title:"Location",
value:"Kerala, India"
},

{
icon:<FaLaptopCode/>,
title:"Focus",
value:"Full Stack Web Development"
},

{
icon:<FaEnvelope/>,
title:"Email",
value:"solgyvarghese@gmail.com"
}

]

return(

<section
id="about"
className="
py-28
px-8
bg-slate-950
text-white
"
>

<div className="max-w-7xl mx-auto">

<motion.div

initial={{opacity:0}}
whileInView={{opacity:1}}
transition={{duration:1}}

>

<p
className="
text-blue-400
uppercase
tracking-[5px]
mb-4
"
>

About Me

</p>

<h2
className="
text-5xl
font-bold
mb-16
"
>

Who I Am

</h2>

</motion.div>


<div
className="
grid
md:grid-cols-2
gap-14
items-start
"
>

<motion.div

initial={{x:-80,opacity:0}}
whileInView={{x:0,opacity:1}}

transition={{duration:1}}

>

<p
className="
text-gray-300
leading-9
text-lg
"
>

I'm <span className="text-blue-400 font-bold">
Solgy Varghese
</span>,
a Computer Science Engineering student at
Christ College of Engineering, Kerala.

<br/><br/>

I enjoy building complete web applications —
from interactive React frontends to powerful
Python and Django backends.

<br/><br/>

Currently seeking internship and entry-level
opportunities where I can learn, collaborate,
and grow into a skilled full stack engineer.

</p>

</motion.div>


<div
className="
grid
gap-5
"
>

{

cards.map((card,index)=>(

<motion.div

key={index}

initial={{
opacity:0,
x:50
}}

whileInView={{
opacity:1,
x:0
}}

transition={{
delay:index*.15
}}

className="
bg-white/5
backdrop-blur-xl
border
border-white/10
rounded-2xl
p-6
hover:scale-105
duration-300
flex
gap-5
items-center
"

>

<div
className="
text-3xl
text-blue-400
"
>

{card.icon}

</div>

<div>

<p className="text-gray-400">

{card.title}

</p>

<h3 className="font-semibold">

{card.value}

</h3>

</div>

</motion.div>

))

}

</div>

</div>

</div>

</section>

)

}

export default About