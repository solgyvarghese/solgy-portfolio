import {motion} from "framer-motion"

function Education(){

return(

<section
className="py-28 px-8 bg-slate-900 text-white"
id="education"
>

<div className="max-w-5xl mx-auto">

<p className="text-blue-400 uppercase tracking-[5px]">

Education

</p>

<h2 className="text-5xl font-bold mb-20">

My Journey

</h2>

<motion.div

initial={{
opacity:0,
x:-50
}}

whileInView={{
opacity:1,
x:0
}}

className="
border-l-4
border-blue-500
pl-8
"

>

<p className="text-blue-400">

2024–2028

</p>

<h3 className="text-3xl font-bold mt-3">

B.Tech Computer Science Engineering

</h3>

<p className="text-gray-400 mt-4">

Christ College of Engineering, Kerala

</p>

<p className="mt-5 leading-8 text-gray-300">

Currently pursuing Computer Science Engineering with focus on software development and full stack web technologies.

</p>

</motion.div>

</div>

</section>

)

}

export default Education