import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

function Footer(){

return(

<footer
className="
bg-black
border-t
border-white/10
text-white
py-10
px-8
"
>

<div className="max-w-7xl mx-auto">

<div className="
flex
flex-col
md:flex-row
justify-between
items-center
gap-6
">

<div>

<h2 className="text-2xl font-bold">

Solgy Varghese

</h2>

<p className="text-gray-400 mt-2">

B.Tech CSE • Full Stack Developer

</p>

<p className="text-gray-500 text-sm mt-2">

Christ College of Engineering, Kerala

</p>

</div>


<div className="flex gap-6 text-2xl">

<a
href="https://github.com/solgyvarghese"
target="_blank"
rel="noreferrer"
className="hover:text-blue-400 transition"
>

<FaGithub/>

</a>


<a
href="https://linkedin.com/in/solgyvarghese"
target="_blank"
rel="noreferrer"
className="hover:text-blue-400 transition"
>

<FaLinkedin/>

</a>


<a
href="mailto:solgyvarghese@gmail.com"
className="hover:text-blue-400 transition"
>

<FaEnvelope/>

</a>

</div>

</div>

<div
className="
border-t
border-white/10
mt-8
pt-6
text-center
text-gray-500
"
>

© 2026 Solgy Varghese • Built using React + Tailwind

</div>

</div>

</footer>

)

}

export default Footer