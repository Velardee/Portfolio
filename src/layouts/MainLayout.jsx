/* eslint-disable react/prop-types */

function MainLayout(props) {
  return (
    <section
      className={`flex justify-center px-0 ${
        props.hero ? "min-h-screen items-center" : "items-start py-14 md:py-20"
      }`}
    >
      <div className="w-full md:max-w-[700px] lg:min-w-[1000px] xl:min-w-[1050px] max-w-5xl">
        {props.children}
      </div>
    </section>
  );
}

export default MainLayout;
