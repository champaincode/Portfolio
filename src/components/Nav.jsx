import React from "react";

import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquareText } from "react-icons/bs";

import { Link } from "react-scroll";

const navItems = [
  { to: "home",     offset: -200, icon: <BiHomeAlt />,        label: "Inicio" },
  { to: "about",    offset: 0,    icon: <BiUser />,            label: "Sobre mí" },
  { to: "services", offset: 0,    icon: <BsClipboardData />,   label: "Servicios" },
  { to: "work",     offset: 0,    icon: <BsBriefcase />,       label: "Proyectos" },
  { to: "contact",  offset: 0,    icon: <BsChatSquareText />,  label: "Contacto" },
];

const Nav = () => {
  return (
    <nav
      aria-label="Navegación principal"
      className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50"
    >
      <div className="container mx-auto">
        <ul
          role="list"
          className="w-full glass-card h-[72px] max-w-[400px] mx-auto px-5 flex justify-between text-2xl text-white/50 items-center glow-accent list-none m-0 p-0"
        >
          {navItems.map((item) => (
            <li key={item.to} role="listitem">
              <Link
                activeClass="active"
                smooth={true}
                spy={true}
                offset={item.offset}
                to={item.to}
                aria-label={`Ir a ${item.label}`}
                title={item.label}
                className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center hover:text-accent transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:rounded-lg"
              >
                {/* aria-hidden: el icono es decorativo; la etiqueta viene del aria-label del Link */}
                <span aria-hidden="true">{item.icon}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
