/* eslint-disable react/prop-types */
function CardSkills({ technologies, title }) {
  return (
    <div className="max-w-lg bg-[#323453] rounded-2xl py-6 px-8">
      <p className="text-2xl font-medium text-center">{title}</p>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-4 mt-4">
        {technologies?.map((tech, index) => {
          return (
            <div
              key={index}
              className="flex flex-col gap-2 justify-center items-center"
            >
              <img src={tech.src} alt={`${tech.name}`} className="w-9" />
              <p className="text-xs font-medium">{tech.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CardSkills;
