import Lottie from "react-lottie";
import welcomeAnimation from "../../lotties/welcomeAnimation.json";
import TypeText from "../../customComponents/TypeText";

function Welcome() {
  const animationOptions = {
    loop: true,
    autoPlay: true,
    animationData: welcomeAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section className="h-screen flex justify-center items-center">
      <div className="flex flex-col-reverse md:flex-row md:justify-center lg:gap-5 px-6 lg:px-0 w-full md:max-w-[700px] lg:min-w-[1000px] xl:min-w-[1050px] max-w-5xl">
        <div className="flex flex-col gap-2 justify-center w-full">
          <h1 className="text-3xl text-white font-bold text-center md:text-start">
            Hola, mi <br />
            nombre es <span className="text-[#9395E3]">Hugo Velarde.</span>
          </h1>
          <h2 className="text-3xl md:text-2xl lg:text-3xl text-white font-bold text-center md:text-start">
            Soy <br className="md:hidden " />
            <span className="text-[#9395E3]">
              <TypeText />
            </span>
          </h2>
          <div className="px-3 mt-4 relative flex justify-center md:justify-normal">
            <div className="max-w-20 flex flex-col items-center gap-3">
              <p className="text-[#A2A3BB] text-base animate-slide-up-fade">
                Scroll
              </p>
              <div className="h-36 md:h-60 w-[1px] border-l border-[#A2A3BB] absolute top-9 animate-fade-in-right"></div>
            </div>
          </div>
        </div>
        <div className="animate-fade-in">
          <div className="sm:visible lg:hidden">
            <Lottie
              options={animationOptions}
              height={250}
              width={250}
              aria-label="Animación"
            />
          </div>
          <div className="hidden lg:flex">
            <Lottie
              options={animationOptions}
              height={500}
              width={500}
              aria-label="Animación"
            />
          </div>
        </div>
      </div>
      {/* <div className="grid grid-cols-4 grid-rows-8 gap-5">
        <div className="col-span-2 row-span-2 col-start-1 row-start-3">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl text-white font-bold">
              Hola, mi <br />
              nombre es <span className="text-[#9395E3]">Hugo Velarde.</span>
            </h1>
            <h2 className="text-3xl text-white font-bold">
              Soy <span className="text-[#9395E3]">Desarrollador web</span>
            </h2>
          </div>
        </div>
        <div className="col-span-2 row-span-6 col-start-3 row-start-1 animate-fade-in">
          {" "}
          <Lottie
            options={animationOptions}
            height={500}
            width={500}
            aria-label="Animación"
          />
        </div>
        <div className="col-span-1 row-span-3 row-start-5">
          <div className="lg:h-full max-w-20 px-3 flex flex-col gap-3 items-center">
            <p className="text-[#A2A3BB] text-base animate-slide-up-fade">
              Scroll
            </p>
            <div className="h-4 lg:h-full  w-[1px] border-l border-[#A2A3BB] animate-fade-in-right"></div>
          </div>
        </div>
      </div> */}
    </section>
  );
}

export default Welcome;
