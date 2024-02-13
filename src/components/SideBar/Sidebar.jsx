import Chats from "../Chats/Chats.jsx";
import Navbar from "../NavBar/Navbar.jsx"
import Search from "../Search/Search.jsx"
import { SidebarContainer } from "./SideBar.styles";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Navbar />
      <Search/>
      <Chats />
    </SidebarContainer>
  );
};

export default Sidebar;