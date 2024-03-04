const HealthProgram = () => {
  return (
    <div className="mx-28">
      <div>
        <div>
          <h1 className="text-4xl font-bold text-center mb-20 mt-14">
            Health Program
          </h1>
        </div>
        <div
          className="hero min-h-[270px]"
          style={{
            backgroundImage:
              "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
            backgroundSize: "cover",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
        </div>
      </div>
      <div className="bg-white border px-28 py-7">
        <h1 className="text-xl font-semibold pb-20">Special Feature</h1>
        <p>See More ›</p>
      </div>
    </div>
  );
};

export default HealthProgram;
