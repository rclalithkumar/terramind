import Container from "@/components/common/Container";
import Badge from "@/components/ui/Badge";
import CommandBar from "./CommandBar";
import EarthCanvas from "@/components/earth/EarthCanvas";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div
          className="
            absolute
            left-1/2
            top-20
            h-[700px]
            w-[700px]
            -translate-x-1/2
            rounded-full
            bg-indigo-500/20
            blur-[180px]
          "
        />

        <div
          className="
            absolute
            right-0
            top-1/3
            h-[500px]
            w-[500px]
            rounded-full
            bg-cyan-500/10
            blur-[180px]
          "
        />

      </div>

      <Container>

        <div
          className="
            flex
            min-h-screen
            pt-32
            flex-col
            items-center
            justify-center
            text-center
          "
        >

          <Badge>
            AI Reality Simulation Platform
          </Badge>


          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="
              mt-8
              max-w-5xl
              text-5xl
              font-semibold
              tracking-tight
              md:text-7xl
            "
          >
            Ask Reality.
            <br />
            <span className="text-indigo-400">
              Simulate Tomorrow.
            </span>
          </motion.h1>


          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.4,
              duration: 1,
            }}
            className="
              mt-8
              max-w-2xl
              text-lg
              text-slate-400
              md:text-xl
            "
          >
            TerraMind uses AI to simulate real-world scenarios
            and visualize possible futures.
          </motion.p>


          {/* Earth */}
          <div
            className="
              relative
              mt-12
              h-130
              w-130
            "
          >

            {/* Glow */}
            <div
              className="
                absolute
                inset-0
                rounded-full
                bg-blue-500/20
                blur-3xl
              "
            />


            {/* 3D Earth */}
            <div className="relative h-full w-full">
              <EarthCanvas />
            </div>

          </div>


          <CommandBar />


        </div>

      </Container>

    </section>
  );
}