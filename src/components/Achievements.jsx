import { motion } from "framer-motion"

function Achievements(){

const data=[

{
number:"2+",
label:"Projects Completed"
},

{
number:"10+",
label:"Technologies Learned"
},

{
number:"∞",
label:"Curiosity"
}

]

return(

<section
className="
py-28
px-8
bg-slate-900
text-white
"
>

<div className="max-w-7xl mx-auto">

<p
className="
text-blue-400
uppercase
tracking-[5px]
mb-4
"
>

Achievements

</p>

<h2
className="
text-5xl
font-bold
mb-16
"
>

Milestones

</h2>

<div className="grid md:grid-cols-4 gap-8">

{

data.map((item,index)=>(

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
delay:index*.2
}}

whileHover={{
scale:1.05
}}

className="
bg-white/5
border
border-white/10
rounded-3xl
backdrop-blur-xl
p-8
text-center
"

>

<h2
className="
text-5xl
font-bold
text-blue-400
"
>

{item.number}

</h2>

<p
className="
mt-4
text-gray-400
"
>

{item.label}

</p>

</motion.div>

))

}

</div>

</div>

</section>

)

}

export default Achievements