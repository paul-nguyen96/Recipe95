import React, { useEffect, useRef, useState } from "react";
import { Button, Separator, MenuList, MenuListItem } from "react95";

function Menu() {
  const [showMenu, setShowMenu] = useState(false);
  const [activeButton, setActiveButton] = useState(false)

  //Display Menu when clicked
  const handleActiveMenu = () => {
    setShowMenu(!showMenu);
  };

  //Make the menu button have an active background when clicked
  const handleActiveButton = () => {
    setActiveButton(!activeButton)
  }

  //Close menu when clicking outside menu
  const ref = useRef();
  useEffect(() => {
    const checkOutsideClick = (e) => {
      if (showMenu && ref.current && activeButton && !ref.current.contains(e.target)) {
        setShowMenu(!showMenu);
        setActiveButton(!activeButton);
      }
    };
    document.addEventListener("mousedown", checkOutsideClick);
    return () => {
      document.removeEventListener("mousedown", checkOutsideClick);
    };
  }, [showMenu, activeButton]);

  return (
    <div
      ref={ref}
      onClick={handleActiveMenu}
      style={{ position: "relative", display: "inline-block" }}
    >
      {showMenu && (
        <MenuList
          style={{
            position: "absolute",
            left: "0",
            top: "100%",
          }}
        >
          <MenuListItem>
            <img
              style={{ width: 22, marginRight: 8 }}
              src={require("../assets/file.png")}
              alt="aboutLogo"
            />
            <a
              href="https://github.com/paul-nguyen96/Recipe95"
              style={{ cursor: "default" }}
            >
              GitHub Repo
            </a>
          </MenuListItem>
          <MenuListItem>
            <img
              style={{ width: 22, marginRight: 8 }}
              src={require("../assets/computer.png")}
              alt="aboutLogo"
            />
            <span>About</span>
          </MenuListItem>
          <Separator />
          <MenuListItem>Start</MenuListItem>
        </MenuList>
      )}
      <Button onClick={handleActiveButton} active={activeButton} style={{ fontWeight: "bold", marginRight: 6 }}>
        <img
          src={require("../assets/windows.png")}
          alt="winlogo"
          style={{ marginLeft: -2, marginRight: 5, width: 20 }}
        />
        Recipe95
      </Button>
    </div>
  );
}

export default Menu;
