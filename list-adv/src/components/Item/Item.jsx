import React from "react";
import PropTypes from "prop-types";
import "./Item.css";

const Item = ({ item }) => {
  return (
    <div className="item">
      <div className="item-top">
        <div className="item-avatar">
          <img
            src="https://images.ctfassets.net/49vqjgy9zjzd/XASRYtoFDuJ4Pp5CsIkhi/215e3a1cd82209307a85a12a02f38e1b/hoang.jpeg"
            alt={item.displayName}
          />
        </div>
        <div className="item-info">
          <h2 className="item-name">{item.displayName}</h2>
          <h2 className="item-email">{item.email}</h2>
          <p className="item-email">{item.phone}</p>
        </div>
      </div>

      <div className="item-main">
        <div className="item-main__item">
          <h1 className="item-main__title">SKILLS</h1>
          <div className="item-main__skills">
            {item.skillsCollection.items.map((skill, i) => (
              <div key={i} className="item-main__skill">
                <p className="item-main__name">{skill.displayName}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="item-main__item">
          <h1 className="item-main__title">Services</h1>
          <div className="item-main__skills">
            {item.servicesCollection.items.map((service, i) => (
              <div key={i} className="item-main__skill">
                <p className="item-main__name">{service.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

Item.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Item;
