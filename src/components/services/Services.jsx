import "./services.css";
import Image1 from "../../assests/service-1.svg";
import Image2 from "../../assests/service-2.svg";
import Image3 from "../../assests/service-3.svg";

const data = [
  {
    id: 2,
    image: Image2,
    title: "Web Development",
    description:
      "With expertise in React.js and GoLang, I build fast, scalable, and modern web applications that combine powerful backend logic with elegant and responsive frontend experiences",
  },
  {
    id: 1,
    image: Image1,
    title: "UI/UX design",
    description:
      "Passionate about creating engaging and user-centric designs, I leverage my skills in UI/UX to transform ideas into visually stunning and intuitively navigable digital experiences.",
  },

  {
    id: 3,
    image: Image3,
    title: "Videography",
    description:
      "In the realm of video editing, I bring stories to life by combining technical prowess with creative flair, ensuring each frame resonates with the intended message and captivates the audience.",
  },
];

function Services() {
  return (
    <section className="services container section" id="services">
      <h2 className="section_title">Services</h2>

      <div className="services_container grid">
        {data.map(({ id, image, title, description }) => {
          return (
            <div className="services_card" key={id}>
              <img src={image} alt="" className="services_img" />

              <h3 className="services_title">{title}</h3>
              <p className="services_description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Services;
