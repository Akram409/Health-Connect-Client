const BannerTwo = () => {
  return (
    <div>
      <div className="mt-8">
        <div className="hero-content flex-col lg:flex-row bg-[#F2F2F2] shadow-2xl min-w-full">
          <img
            src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            className="w-1/2 rounded-lg shadow-2xl"
          />
          <div className="flex flex-col justify-center text-center items-center">
            <h1 className="text-5xl font-bold">Download App now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn border-2 border-black text-black">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerTwo;
