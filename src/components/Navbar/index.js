import Image from 'next/image';
import styles from '../../../styles/Navbar.module.css';

const Navbar = () =>{
  return(
    <div id='navbar' className={`${styles[`navbar-wrapper`]} w-100 p-2 d-flex justify-content-between align-items-center flex-grow-1`}>
      <div className={styles['left-block']}>
        <span>
          <Image src="menu.svg" alt="menu" width={`25`} height={`25`} />
        </span>
      </div>
      <div className={`d-flex`}>
        <span>
          <Image src="cart.svg" alt="cart" width={`25`} height={`25`} />
        </span>
        <span style={{paddingLeft:'1rem'}}>
          <Image src="user.svg" alt="user" width={`25`} height={`25`} />
        </span>
      </div>
    </div>
  )
}

export default Navbar;