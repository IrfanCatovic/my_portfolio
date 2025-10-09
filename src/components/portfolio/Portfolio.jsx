import "./portfolio.css";
import Menu from "./Menu";
import { useState } from "react";

function Portfolio() {
  const [items, setItems] = useState(Menu);

  const filterItem = (categoryItem) => {
    const updatedItem = Menu.filter((curEl) => {
      return curEl.category === categoryItem;
    });

    setItems(updatedItem);
  };

  return (
    <section className="work container section" id="work">
      <h2 className="section_title">Recent Works</h2>

      <div className="work_filters">
        <span className="work_item" onClick={() => setItems(Menu)}>
          Everything
        </span>
        <span className="work_item" onClick={() => filterItem("Development")}>
          Development
        </span>
        <span className="work_item" onClick={() => filterItem("Art")}>
          Art
        </span>
        <span className="work_item" onClick={() => filterItem("Design")}>
          Design
        </span>
        <span className="work_item" onClick={() => filterItem("Branding")}>
          Branding
        </span>
      </div>

      <div className="work_container grid">
        {items.map((elem) => {
          const { id, image, title, category, link, code } = elem;
          return (
            <div className="work_card" key={id}>
              <div className="work_thumbnail">
                <img src={image} alt="" className="work_img" />
                <div className="work_mask"></div>

                <span className="work_category">{category}</span>
                <h3 className="work_title">{title}</h3>
                <h5 style={{ textAlign: "center" }}>{code}</h5>
                <a
                  href={link}
                  className="work_button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa-solid fa-play"></i>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
