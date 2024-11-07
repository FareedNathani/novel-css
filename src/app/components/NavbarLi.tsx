import Link from 'next/link';
import { NavItemProps } from '../../../types/componentTypes';

const NavbarLi: React.FC<NavItemProps> = ({ href, name }) => {
  return (
    <li className="list-item">
      <Link href={href} className='block custom-link'>
        {name}
      </Link>
    </li>
  );
};

export default NavbarLi;