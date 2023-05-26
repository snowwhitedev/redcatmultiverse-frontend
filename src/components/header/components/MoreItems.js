import NavbarDropdown from "react-navbar-dropdown";
import { useRouter } from 'next/router';
import styles from "./MoreItems.module.scss";

const MoreItems = ({ moreItems }) => {
  const router = useRouter();

  const handleClickItem = (item) => {
    switch (item) {
      case 'community':
        router.push({ pathname: `/community` });
        break;
      case 'roadmap':
        router.push({ pathname: `/roadmap` });
        break;
      case 'whitepaper':
        window.open('https://whitepaper.redcatmultiverse.io/', '_blank');
        break;
      case 'blog':
        window.open('https://blog.redcatmultiverse.io/', '_blank');
        break;
      case 'play-learn-earn':
        router.push({ pathname: `/play-learn-earn`, query: { step: 'play' } });
        break;
      default:
        break;
    }
  }

  return (
    <NavbarDropdown>
      <NavbarDropdown.Toggle className="menu__item" style={{ padding: '0px' }}>
        <NavbarDropdown.Open>
          <span>|</span>
          <a className={styles.navMoreToggle}>More</a>
        </NavbarDropdown.Open>
        <NavbarDropdown.Close>
          <span>|</span>
          <a className={styles.navMoreToggle}>More</a>
        </NavbarDropdown.Close>
      </NavbarDropdown.Toggle>
      <NavbarDropdown.CSSTransitionMenu
        className="nav-dropdown-menu"
        classNames="nav-dropdown-menu"
        timeout={200}
      >
        {moreItems.map((item, idx) => {
          return (
            <NavbarDropdown.Item key={idx} className="nav-dropdown-menu-item" onClick={() => handleClickItem(item.link)}>
              <div className="nav-dropdown-menu-item__text">{item.name}</div>
            </NavbarDropdown.Item>
          )
        })}
      </NavbarDropdown.CSSTransitionMenu>
    </NavbarDropdown>
  );
};

export default MoreItems;
