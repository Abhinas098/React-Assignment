import React, { useState, useEffect } from "react";
import styles from "./NavLinks.module.css";
import Menu from "../../../../icons/Menu";
import Close from "../../../../icons/Close";

const NavLinks = () => {
  const links = [
    { name: "Home", path: "#home" },
    { name: "Offers", path: "#offers" },
    { name: "Blogs", path: "#blogs" },
    { name: "Contact", path: "#contact" },
  ];

  const [open, setOpen] = useState(false);
  const [path, setPath] = useState("");

  useEffect(() => {
    const handleHashChange = () => {
      setPath(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <>
      <div className={styles.links}>
        {links.map((link) => (
          <a  key={link.name} className={styles.navLink} href={link.path}>
            <p className={link.path === path ? styles.active : styles.name}>
              {link.name}
            </p>
          </a>
        ))}
      </div>

      <div className={styles.menu} onClick={() => setOpen((open) => !open)}>
        {!open ? <Menu /> : <Close />}
      </div>
      {open && (
        <div className={styles.responsiveLinks}>
          {links.map((link) => (
            <a key={link.path} className={styles.navLink} href={link.path}>
              <p className={link.path === path ? styles.active : styles.name}>
                {link.name}
              </p>
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default NavLinks;
