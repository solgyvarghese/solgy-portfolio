import { motion } from "framer-motion"

function Skills() {

const skills=[

{
title:"Frontend",
items:["HTML","CSS","JavaScript","React","Tailwind"]
},

{
title:"Backend",
items:["Python","Django","REST API","Flask"]
},

{
title:"Database",
items:["MySQL","SQLite"]
},

{
title:"Tools",
items:["Git","GitHub","VS Code","Postman"]
}

]

return(

<section
id="skills"
className="
py-24
px-8
bg-gradient-to-br
from-slate-950
via-blue-950
to-slate-900
text-white
"
>

<div className="max-w-7xl mx-auto">

<p
className="
uppercase
tracking-[6px]
text-blue-400
mb-4
"
>

Skills

</p>

<h2
className="
text-5xl
font-bold
mb-16
"
>

My Toolkit

</h2>


<div
className="
grid
md:grid-cols-2
gap-8
"
>

{

skills.map((skill,index)=>(

<motion.div

key={index}

initial={{
opacity:0,
y:50
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:.6
}}

className="
bg-white/5
border
border-white/10
rounded-3xl
p-8
backdrop-blur-xl
hover:border-blue-500
"

>

<h3
className="
text-2xl
font-bold
mb-6
text-blue-400
"
>

{skill.title}

</h3>

<div className="flex flex-wrap gap-3">

{

skill.items.map((item,i)=>(

<span

key={i}

className="
bg-blue-500/20
px-4
py-2
rounded-full
hover:bg-blue-600
transition
"

>

{item}

</span>

))

}

</div>

</motion.div>

))

}

</div>

</div>

</section>

)

}

export default Skills