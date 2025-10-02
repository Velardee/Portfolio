/* eslint-disable react/prop-types */
import GithubL from "../../assets/icons/githubLight.svg";

function CardSkills({ technologies, title }) {
  return (
    <div className="max-w-lg border-0 bg-[#323453] rounded-2xl py-6 px-8">
      <p className="text-2xl font-medium text-center text-white">
        {title}
      </p>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-4 mt-4">
        {technologies?.map((tech, index) => {
          if (tech?.name == "GitHub") {
            return (
              <div
                key={index}
                className="flex flex-col gap-2 justify-center items-center"
              >
                <img src={GithubL} alt={`${tech.name}`} className="w-9" />
                <p className="text-xs font-medium text-white">
                  {tech.name}
                </p>
              </div>
            );
          }

          return (
            <div
              key={index}
              className="flex flex-col gap-2 justify-center items-center"
            >
              <img src={tech.src} alt={`${tech.name}`} className="w-9" />
              <p className="text-xs font-medium text-white">
                {tech.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CardSkills;
