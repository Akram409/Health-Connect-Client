const HealthCard = () => {
  return (
    <div className="mx-28 mt-[90px] bg-[#ADB4BB]">
      <div className="grid grid-cols-2 gap-5 p-16">
        <div className="card w-11/12 card-compact  bg-base-100 shadow-2xl">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title pb-16">Special Feature</h2>
            <div className="card-actions justify-start">
              <p>See More ›</p>
            </div>
          </div>
        </div>
        <div className="card w-11/12 card-compact  bg-base-100 shadow-2xl">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title pb-16">Special Feature</h2>
            <div className="card-actions justify-start">
              <p>See More ›</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthCard;
