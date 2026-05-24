import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"

function Hero(){

return(

<section
className="
min-h-screen
flex
items-center
justify-center
relative
overflow-hidden
bg-gradient-to-br
from-slate-950
via-blue-950
to-slate-900
text-white
px-8
"
>

<div className="absolute inset-0">

<div
className="
absolute
top-20
left-20
w-72
h-72
bg-blue-500/20
blur-3xl
rounded-full
animate-pulse
"
></div>

<div
className="
absolute
bottom-10
right-10
w-96
h-96
bg-purple-500/20
blur-3xl
rounded-full
animate-pulse
"
></div>

</div>


<div
className="
max-w-7xl
mx-auto
grid
md:grid-cols-2
gap-16
items-center
z-10
"
>

{/* LEFT SIDE */}

<div>

<div
className="
inline-flex
items-center
gap-2
bg-green-500/20
px-4
py-2
rounded-full
mb-6
"
>

<div
className="
w-3
h-3
bg-green-400
rounded-full
animate-pulse
"
></div>

Open to Internships

</div>


<motion.h1

initial={{
opacity:0,
y:50
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:1
}}

className="
text-6xl
md:text-7xl
font-bold
leading-tight
"
>

Hi, I'm

<span
className="
block
bg-gradient-to-r
from-blue-400
to-purple-500
bg-clip-text
text-transparent
"
>

Solgy Varghese

</span>

</motion.h1>


<div
className="
mt-6
text-2xl
text-blue-300
"
>

<TypeAnimation

sequence={[

"Full Stack Developer",
2000,

"React Developer",
2000,

"Django Developer",
2000,

"Python Developer",
2000,

"B.Tech Student",
2000

]}

speed={50}

repeat={Infinity}

/>

</div>


<p
className="
mt-6
text-gray-300
leading-8
"
>

CS Engineering student at Christ College of Engineering, Kerala — passionate about building complete web experiences from pixel-perfect frontends to robust backends.

</p>


<div
className="
mt-10
flex
gap-4
flex-wrap
"
>

<a

href="#projects"

className="
bg-blue-600
hover:bg-blue-700
px-8
py-4
rounded-xl
font-semibold
transition
"

>

View My Work

</a>


<a

href="#contact"

className="
border
border-gray-500
hover:bg-white
hover:text-black
px-8
py-4
rounded-xl
transition
"

>

Contact

</a>

</div>

</div>



{/* RIGHT SIDE */}

<div>

<motion.div

animate={{
y:[0,-20,0]
}}

transition={{
repeat:Infinity,
duration:4
}}

className="
bg-white/5
backdrop-blur-xl
border
border-white/10
rounded-3xl
p-8
text-center
shadow-2xl
"

>

<div
className="
w-40
h-40
rounded-full
mx-auto
flex
items-center
justify-center
text-6xl
font-bold
bg-gradient-to-r
from-blue-500
to-purple-600
shadow-xl
"
>

SV

</div>

<h2
className="
text-3xl
font-bold
mt-6
"
>

Solgy Varghese

</h2>

<p className="text-blue-400">

B.Tech CSE Student

</p>

<p className="text-gray-400 mt-3">

Full Stack Developer

</p>

<p className="text-gray-400">

📍 Kerala, India

</p>


<div
className="
mt-4
flex
justify-center
gap-2
flex-wrap
"
>

<span className="bg-blue-500/20 px-3 py-1 rounded-full">

React

</span>

<span className="bg-blue-500/20 px-3 py-1 rounded-full">

Django

</span>

<span className="bg-blue-500/20 px-3 py-1 rounded-full">

Python

</span>

</div>


<div
className="
mt-6
bg-green-500/20
rounded-full
py-2
"

>

🟢 Open to internships

</div>


<div
className="
grid
grid-cols-3
gap-4
mt-8
text-center
"
>

<div>

<h2 className="text-2xl font-bold">

2+

</h2>

<p className="text-gray-400 text-sm">

Projects

</p>

</div>


<div>

<h2 className="text-2xl font-bold">

10+

</h2>

<p className="text-gray-400 text-sm">

Technologies

</p>

</div>


<div>

<h2 className="text-2xl font-bold">

∞

</h2>

<p className="text-gray-400 text-sm">

Curiosity

</p>

</div>

</div>

</motion.div>

</div>

</div>

</section>

)

}

export default Hero