import "./home.css";
import Me from "../../assests/selfie.png";

function Home() {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home_img" />
        <h1 className="home_name">Irfan Ćatović</h1>
        <span className="home_education">
          I'm a full stack developer and graphic designer
        </span>
      </div>
    </section>
  );
}

export default Home;
