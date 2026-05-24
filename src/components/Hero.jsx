import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"

function Hero() {
  return (
    <section
      id="home"
      className="
      min-h-screen
      flex
      items-center
      px-8
      relative
      overflow-hidden
      bg-gradient-to-br
      from-slate-950
      via-blue-950
      to-slate-900
      text-white
      "
    >

      {/* Background Effects */}

      <div className="absolute inset-0">

        <div
          className="
          absolute
          top-20
          left-20
          w-72
          h-72
          bg-blue-500/10
          rounded-full
          blur-3xl
          "
        />

        <div
          className="
          absolute
          bottom-20
          right-20
          w-80
          h-80
          bg-purple-500/10
          rounded-full
          blur-3xl
          "
        />

      </div>


      <div
        className="
        max-w-7xl
        mx-auto
        w-full
        grid
        md:grid-cols-2
        items-center
        gap-16
        relative
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

            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"/>

            Open to Internships

          </div>


          <h1
            className="
            text-5xl
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

          </h1>



          <div className="mt-5 text-2xl text-blue-300">

            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,

                "React Developer",
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
            max-w-xl
            "
          >

            CS Engineering student at Christ College of Engineering, Kerala —
            passionate about building complete web experiences from frontend to backend.

          </p>



          <div className="mt-10 flex gap-4">

            <a
              href="#projects"
              className="
              bg-blue-600
              hover:bg-blue-700
              px-8
              py-4
              rounded-xl
              font-semibold
              "
            >

              View My Work

            </a>


            <a
              href="#contact"
              className="
              border
              border-gray-500
              px-8
              py-4
              rounded-xl
              "
            >

              Contact

            </a>

          </div>

        </div>




        {/* RIGHT CARD */}

        <motion.div

          animate={{
            y:[0,-10,0]
          }}

          transition={{
            duration:4,
            repeat:Infinity
          }}

          className="
          bg-white/5
          border
          border-white/10
          rounded-3xl
          p-8
          text-center
          max-w-md
          w-full
          mx-auto
          backdrop-blur-xl
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
            "
          >

            SV

          </div>



          <h2 className="text-4xl font-bold mt-6">

            Solgy Varghese

          </h2>


          <p className="text-blue-400">

            B.Tech CSE Student

          </p>


          <p className="text-gray-400 mt-2">

            📍 Kerala, India

          </p>



          <div
            className="
            flex
            justify-center
            gap-2
            flex-wrap
            mt-6
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
            grid
            grid-cols-3
            mt-8
            gap-4
            "
          >

            <div>

              <h3 className="font-bold text-3xl">

                2+

              </h3>

              <p className="text-gray-400 text-sm">

                Projects

              </p>

            </div>


            <div>

              <h3 className="font-bold text-3xl">

                10+

              </h3>

              <p className="text-gray-400 text-sm">

                Technologies

              </p>

            </div>


            <div>

              <h3 className="font-bold text-3xl">

                2nd

              </h3>

              <p className="text-gray-400 text-sm">

                Year

              </p>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  )
}

export default Hero