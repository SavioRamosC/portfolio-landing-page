import { useState } from 'react';
import HeaderMenu from '../HeaderMenu';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full bg-colorBlack text-colorWhite py-3">
      <ul className="flex justify-center items-center">
        <li className="md:ml-auto transition duration-300 hover:text-colorRed">
          <Link className="w-full h-full flex py-2 md:px-12 px-4 rounded-lg" href="/">
            My Projects!
          </Link>
        </li>
        <li className="md:m-auto transition duration-300 hover:text-colorRed  ">
          <Link className="w-full h-full flex py-2 md:px-12 px-4 rounded-lg" href="/">
            Home
          </Link>
        </li>
        <li className="md:mr-auto transition duration-300 hover:text-colorRed">
          <Link className="w-full h-full flex py-2 md:px-12 px-4 rounded-lg" href="/about">
            About
          </Link>
        </li>
        <li
          className="md:top-3 md:right-6 md:absolute transition duration-300 hover:bg-colorGray py-2 px-2 rounded-lg cursor-pointer"
          onClick={toggleMenu}
        >
          ☰
          <HeaderMenu isOpen={isMenuOpen} />
        </li>
      </ul>
    </header>
  );
}
