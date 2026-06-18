export default function HomeSlider() {
  const clients = [8, 6, 5, 3, 7, 1, 4, 2];

  return (
    <div className="section-partner">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="partner-wrap">
              <p className="text-secondary text fw-semibold">
                Trusted by 100+ <br /> top-tier brands
              </p>
              <div className="infinite-slider-wrapper">
                <div className="infinite-slider-track">
                  {[...clients, ...clients].map((n, i) => (
                    <div className="slide-item" key={i}>
                      <img src={`/assets/images/clients/${n}.png`} alt="" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
