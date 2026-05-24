import Particles from "@tsparticles/react"

function ParticlesBackground(){

return(

<div className="absolute inset-0 -z-10">

<Particles

options={{

background:{
color:{
value:"transparent"
}
},

fpsLimit:60,

particles:{

number:{
value:50
},

color:{
value:"#60a5fa"
},

links:{

enable:true,

color:"#60a5fa",

distance:150,

opacity:.2

},

move:{
enable:true,
speed:1
},

opacity:{
value:.5
},

size:{
value:{
min:1,
max:4
}
}

}

}}

 />

</div>

)

}

export default ParticlesBackground