import { useState } from "react"
import {
FaGithub,
FaLinkedin,
FaEnvelope
} from "react-icons/fa"

function Contact(){

const [form,setForm]=useState({

name:"",
email:"",
subject:"",
message:""

})

const handleChange=(e)=>{

setForm({

...form,

[e.target.name]:e.target.value

})

}

const sendMail=()=>{

const body=`

Name: ${form.name}

Recruiter Email: ${form.email}

Message:

${form.message}

`

window.location.href=

`mailto:solgyvarghese@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`

}

return(

<section
id="contact"
className="
py-28
px-8
bg-slate-950
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

Contact

</p>

<h2
className="
text-5xl
font-bold
mb-16
"
>

Let's Connect

</h2>

<div
className="
grid
md:grid-cols-2
gap-12
"
>

{/* LEFT */}

<div>

<div
className="
bg-white/5
p-8
rounded-3xl
border
border-white/10
space-y-8
backdrop-blur-xl
"
>

<a

href="mailto:solgyvarghese@gmail.com"

className="
flex
items-center
gap-5
"

>

<div className="text-blue-400 text-3xl">

<FaEnvelope/>

</div>

<div>

<p className="font-semibold">

Email

</p>

<p className="text-gray-400">

solgyvarghese@gmail.com

</p>

</div>

</a>



<a

href="https://github.com/solgyvarghese"

target="_blank"

rel="noreferrer"

className="
flex
items-center
gap-5
"

>

<div className="text-blue-400 text-3xl">

<FaGithub/>

</div>

<div>

<p className="font-semibold">

GitHub

</p>

<p className="text-gray-400">

github.com/solgyvarghese

</p>

</div>

</a>



<a

href="https://linkedin.com/in/solgyvarghese"

target="_blank"

rel="noreferrer"

className="
flex
items-center
gap-5
"

>

<div className="text-blue-400 text-3xl">

<FaLinkedin/>

</div>

<div>

<p className="font-semibold">

LinkedIn

</p>

<p className="text-gray-400">

linkedin.com/in/solgyvarghese

</p>

</div>

</a>

</div>

</div>


{/* RIGHT */}

<div
className="
bg-white/5
rounded-3xl
p-8
border
border-white/10
backdrop-blur-xl
"
>

<div className="space-y-6">

<input

type="text"

name="name"

placeholder="Your Name"

value={form.name}

onChange={handleChange}

className="
w-full
p-4
rounded-xl
bg-slate-800
border
border-white/10
focus:outline-none
focus:border-blue-500
"

/>



<input

type="email"

name="email"

placeholder="Recruiter Email (for reply)"

value={form.email}

onChange={handleChange}

className="
w-full
p-4
rounded-xl
bg-slate-800
border
border-white/10
focus:outline-none
focus:border-blue-500
"

/>



<input

type="text"

name="subject"

placeholder="Subject"

value={form.subject}

onChange={handleChange}

className="
w-full
p-4
rounded-xl
bg-slate-800
border
border-white/10
focus:outline-none
focus:border-blue-500
"

/>



<textarea

rows="6"

name="message"

placeholder="Message"

value={form.message}

onChange={handleChange}

className="
w-full
p-4
rounded-xl
bg-slate-800
border
border-white/10
focus:outline-none
focus:border-blue-500
"

/>


<button

onClick={sendMail}

className="
w-full
bg-blue-600
hover:bg-blue-700
py-4
rounded-xl
font-semibold
transition
"

>

Send Message

</button>

</div>

</div>

</div>

</div>

</section>

)

}

export default Contact