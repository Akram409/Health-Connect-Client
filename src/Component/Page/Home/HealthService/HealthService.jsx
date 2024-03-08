const HealthService = () => {
  return (
    <div className="bg-[#ADB4BB] px-28 py-28">
      <div>
        <h1 className=" text-3xl lg:text-6xl font-bold text-center mb-16">Health Services</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center">
        <div className="card  bg-neutral text-neutral-content">
          <div className="card-body items-center text-center">
            <h2 className="card-title">Service-1</h2>
            <p>We are using cookies for no reason.</p>
            <div className="card-actions justify-center">
              <button className="btn btn-primary">Accept</button>
            </div>
          </div>
        </div>
        <div className="card  bg-neutral text-neutral-content">
          <div className="card-body items-center text-center">
            <h2 className="card-title">Service-2</h2>
            <p>We are using cookies for no reason.</p>
            <div className="card-actions justify-center">
              <button className="btn btn-primary">Accept</button>
            </div>
          </div>
        </div>
        <div className="card  bg-neutral text-neutral-content">
          <div className="card-body items-center text-center">
            <h2 className="card-title">Service-3</h2>
            <p>We are using cookies for no reason.</p>
            <div className="card-actions justify-center">
              <button className="btn btn-primary">Accept</button>
            </div>
          </div>
        </div>
        <div className="card  bg-neutral text-neutral-content">
          <div className="card-body items-center text-center">
            <h2 className="card-title">Service-4</h2>
            <p>We are using cookies for no reason.</p>
            <div className="card-actions justify-center">
              <button className="btn btn-primary">Accept</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HealthService;
