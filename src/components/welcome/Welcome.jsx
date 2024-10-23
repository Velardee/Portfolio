import Lottie from "react-lottie";
import welcomeAnimation from "../../lotties/welcomeAnimation.json";
import TypeText from "../../customComponents/TypeText";
import MainLayout from "../../layouts/MainLayout";

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
    <MainLayout>
      <div className="flex flex-col-reverse md:flex-row md:justify-center lg:gap-5 px-6 lg:px-0">
        <div className="flex flex-col gap-2 justify-center w-full">
          <h1 className="text-3xl text-primary dark:text-white font-bold text-center md:text-start">
            Hola, mi <br />
            nombre es{" "}
            <span className="text-lightPurple dark:text-mediumPurple">
              Hugo Velarde.
            </span>
          </h1>
          <h2 className="text-3xl md:text-2xl lg:text-3xl text-primary dark:text-white font-bold text-center md:text-start">
            Soy <br className="md:hidden" />
            <span className="text-lightPurple dark:text-mediumPurple">
              <TypeText />
            </span>
          </h2>
          <div className="px-3 mt-4 relative flex justify-center md:justify-normal">
            <div className="max-w-20 flex flex-col items-center gap-3">
              <p className="text-coolGray text-base animate-slide-up-fade">
                Scroll
              </p>
              <div className="h-32 xl:h-60 w-[1px] border-l border-coolGray absolute top-9 animate-fade-in-right"></div>
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
    </MainLayout>
  );
}

export default Welcome;
