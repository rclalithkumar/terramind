import { Globe } from "lucide-react";
import Container from "@/components/common/Container";
import Button from "@/components/ui/Button";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full">
      <Container>
        <nav
          className="
            mt-6
            flex
            items-center
            justify-between
            rounded-full
            border
            border-white/10
            bg-white/5
            px-6
            py-3
            backdrop-blur-xl
          "
        >

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-indigo-500/20
              "
            >
              <Globe className="h-5 w-5 text-indigo-400" />
            </div>

            <span className="text-lg font-semibold tracking-tight">
              TerraMind
            </span>
          </div>


          {/* Links */}
          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">

            <a className="transition hover:text-white">
              Explore
            </a>

            <a className="transition hover:text-white">
              Research
            </a>

            <a className="transition hover:text-white">
              Docs
            </a>

          </div>


          {/* Action */}
          <Button>
            Simulate
          </Button>

        </nav>
      </Container>
    </header>
  );
}