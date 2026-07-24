import Container from "@/components/common/Container";
import Badge from "@/components/ui/Badge";
import CommandBar from "./CommandBar";
import EarthCanvas from "@/components/earth/EarthCanvas";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">

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


          <h1
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

          </h1>


          <p
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
          </p>


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