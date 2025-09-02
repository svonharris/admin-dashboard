import { useState } from "react";
import "./Sidebar.css";
import { SidebarData } from "../../Data/Data";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { UilBars } from "@iconscout/react-unicons";
import { UilBox } from "@iconscout/react-unicons";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div
        className={`hamburgerMenu${expanded ? " hamburgerMenu--active" : ""}`}
        onClick={() => setExpanded(!expanded)}
      >
        <UilBars size={30}></UilBars>
      </div>
      <div className={`sidebar${expanded ? " sidebar--active" : ""}`}>
        {/* Logo */}
        <div className="logo">
          <UilBox
            size={60}
            style={{
              filter:
                "invert(62%) sepia(89%) saturate(601%) hue-rotate(304deg) brightness(112%) contrast(101%)",
            }}
          />
          <span>
            Sh<span>o</span>p
          </span>
        </div>
        {/* Menu */}
        <div className="menu">
          {SidebarData.map((item, index) => {
            return (
              <div
                className={selected === index ? "menuItem active" : "menuItem"}
                key={index}
                onClick={() => setSelected(index)}
              >
                <item.icon size={30} />
                <span>{item.heading}</span>
              </div>
            );
          })}
          <div className="menuItem">
            <UilSignOutAlt size={30} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
