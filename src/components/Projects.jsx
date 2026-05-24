import { motion } from "framer-motion"
import { FaGithub } from "react-icons/fa"

import speakup from "../assets/speakup.png"
import food from "../assets/food.png"

function Projects(){

const projects=[

{
title:"Speak Up",
image:speakup,

desc:"Full stack React + Django project using REST APIs with separate frontend and backend architecture.",

tech:[
"React",
"Django",
"Python",
"JavaScript",
"Tailwind"
],

github:"https://github.com/solgyvarghese/speakup"
},

{
title:"Food Donation Website",
image:food,

desc:"Flask + SQLite platform connecting food donors and people in need.",

tech:[
"Python",
"Flask",
"SQLite",
"HTML",
"CSS"
],

github:"https://github.com/solgyvarghese/food-donation-website"
}

]

return(

<section
id="projects"
className="py-28 px-8 bg-slate-950 text-white"
>

<div className="max-w-7xl mx-auto">

<p className="text-blue-400 uppercase tracking-[5px] mb-4">

Projects

</p>

<h2 className="text-5xl font-bold mb-16">

Things I've Built

</h2>

<div className="grid md:grid-cols-2 gap-10">

{

projects.map((p,index)=>(

<motion.div

key={index}

whileHover={{scale:1.03}}

className="
bg-white/5
border
border-white/10
backdrop-blur-xl
rounded-3xl
overflow-hidden
shadow-xl
"

>
<img

src={p.image}

alt={p.title}

className="
w-full
h-72
object-contain
bg-white
p-4
"
/>

<div className="p-8">

<h3 className="text-3xl font-bold">

{p.title}

</h3>

<p className="text-gray-400 mt-5 leading-8">

{p.desc}

</p>

<div className="flex flex-wrap gap-3 mt-6">

{

p.tech.map((tech,i)=>(

<span

key={i}

className="
bg-blue-500/20
text-blue-300
px-4
py-2
rounded-full
text-sm
"

>

{tech}

</span>

))

}

</div>

<div className="mt-8">

<a

href={p.github}

target="_blank"

rel="noreferrer"

className="
inline-flex
items-center
gap-2
bg-blue-600
hover:bg-blue-700
px-6
py-3
rounded-xl
"

>

<FaGithub/>

GitHub

</a>

</div>

</div>

</motion.div>

))

}

</div>

</div>

</section>

)

}

export default Projects