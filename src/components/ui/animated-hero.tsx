
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Meet Amazing Opportunities", "Monetize Their Apps", "Get Hired by Companies", "Showcase Their Work"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          <div className="flex gap-4 flex-col">
            <h1 className="text-3xl md:text-5xl max-w-5xl tracking-tighter text-center font-bold leading-tight">
              <span>Where Vibe Coders</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-6 md:pt-2">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-bold hero-gradient-text text-2xl md:text-4xl"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-xl md:text-2xl leading-relaxed tracking-tight text-gray-600 max-w-4xl text-center mb-12">
              Connect with elite developers who specialize in rapid prototyping, AI-driven development, and cutting-edge tools. Build your next app, hire top talent, or showcase your skills.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="vibe-button text-lg px-8 py-4 gap-4">
              Find Vibe Coders <MoveRight className="w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="vibe-button-outline text-lg px-8 py-4 gap-4">
              Post a Project <PhoneCall className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
