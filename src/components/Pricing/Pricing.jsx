import "./pricing.css";
import Image1 from "../../assests/price-1.svg";
import Image2 from "../../assests/price-2.svg";
import Image3 from "../../assests/price-3.svg";

function Pricing() {
  return (
    <section className="pricing container section">
      <h2 className="section_title">Pricing Plan</h2>
      <div className="pricing_container grid">
        <div className="pricing_item">
          <img src={Image1} alt="" className="pricing_img" />
          <h3 className="pricing_plan"></h3>
          <p className="pricing_title"></p>
          <p className="pricing_support"></p>
          <h3 className="price">
            <em>$</em> 9 <span>Month</span>
          </h3>
          <a href="#" className="btn">
            Get Started
          </a>
        </div>

        <div className="pricing_item">
          <img src={Image2} alt="" className="pricing_img" />
          <h3 className="pricing_plan"></h3>
          <p className="pricing_title"></p>
          <p className="pricing_support"></p>
          <h3 className="price">
            <em>$</em> 9 <span>Month</span>
          </h3>
          <a href="#" className="btn">
            Get Started
          </a>
        </div>

        <div className="pricing_item">
          <img src={Image3} alt="" className="pricing_img" />
          <h3 className="pricing_plan"></h3>
          <p className="pricing_title"></p>
          <p className="pricing_support"></p>
          <h3 className="price">
            <em>$</em> 9 <span>Month</span>
          </h3>
          <a href="#" className="btn">
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
