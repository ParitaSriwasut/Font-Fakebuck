import { HouseIcon, UserGroupIcon } from "../icons";
import { useLocation } from "react-router-dom";
import MenuItem from "./MenuItem";

const menus = [
  { id: 1, to: "/", Icon: HouseIcon },
  { id: 2, to: "/friend", Icon: UserGroupIcon },
];

export default function Menu() {
  const { pathname } = useLocation();
  console.log(location);
  return (
    <nav className="flex justify-center items-center gap-2">
      {menus.map((el) => (
        <MenuItem
          key={el.id}
          to={el.to}
          Icon={el.Icon}
          active={pathname === el.to}
        />
      ))}

      {/* <MenuItem to="/" Icon={HouseIcon} />
        <MenuItem to="/friend" Icon={UserGroupIcon} /> */}
    </nav>
  );
}
