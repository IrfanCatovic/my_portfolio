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
          <h3 className="pricing_plan">Basic</h3>
          <p className="pricing_title">
            A simple option but powerfull to manage your social media account
          </p>
          <p className="pricing_support">Email support</p>
          <h3 className="price">
            <em>$</em> 9 <span>Month</span>
          </h3>
          <a href="/pricing" className="btn">
            Get Started
          </a>
        </div>

        <div className="pricing_item best">
          <span className="badge">Recommended</span>
          <img src={Image2} alt="" className="pricing_img" />
          <h3 className="pricing_plan">Premium</h3>
          <p className="pricing_title">
            Creating interactive content, editing videos and photos for your
            account and much more features
          </p>
          <p className="pricing_support">Mon-Fri support</p>
          <h3 className="price">
            <em>$</em> 15 <span>Month</span>
          </h3>
          <a href="/pricing" className="btn">
            Get Started
          </a>
        </div>

        <div className="pricing_item">
          <img src={Image3} alt="" className="pricing_img" />
          <h3 className="pricing_plan">Ultimate</h3>
          <p className="pricing_title">
            A wise option for large companies and individuals
          </p>
          <p className="pricing_support">24/7 support</p>
          <h3 className="price">
            <em>$</em> 19 <span>Month</span>
          </h3>
          <a href="/pricing" className="btn">
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
