/* eslint-disable react/prop-types */
function TechnologiesExperience({ technologies }) {
  return (
    <section>
      <p>Algunas de las tecnologías que usé:</p>
      <div className="flex flex-wrap my-4 w-3/4 sm:w-2/4 md:2/5 lg:w-3/5 xl:w-2/4">
        {technologies?.map((tech, index) => {
          return (
            <div key={index} className="w-fit m-2">
              <img src={tech.src} alt={`${tech.name}`} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default TechnologiesExperience;
