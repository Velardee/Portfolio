/* eslint-disable react/prop-types */

function MainLayout(props) {
  return (
    <section className="min-h-screen flex justify-center items-center mb-5">
      <div className="w-full md:max-w-[700px] lg:min-w-[1000px] xl:min-w-[1050px] max-w-5xl">
        {props.children}
      </div>
    </section>
  );
}

export default MainLayout;
