import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "../../../styles/Header.module.css";

const Header = () => {
  const ref = useRef()
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const ele = document.getElementById('navbar');
      if(window.scrollY > ele.offsetHeight){
        ref.current.classList.add('position-fixed')
      }else{
        ref.current.classList.remove('position-fixed')
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
    ref={ref}
      className={`${
        styles[`header-wrapper`]
      } w-100 d-flex justify-content-center align-items-center flex-grow-1`}
    >
      <div className={styles["search-box"]}>
        <span>
          <Image src="search.svg" alt="search" width={`25`} height={`25`} />
        </span>
        <input
          className={styles["searchbar"]}
          type={`text`}
          placeholder="search"
        />
      </div>
    </div>
  );
};

export default Header;
