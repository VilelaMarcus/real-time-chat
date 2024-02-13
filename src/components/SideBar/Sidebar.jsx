import Navbar from "../NavBar/Navbar.jsx"
import Search from "../Search/Search.jsx"
import { SidebarContainer } from "./SideBar.styles";
// import Chats from "../tr/Chats"

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Navbar />
      <Search/>
      {/* <Chats/> */}
    </SidebarContainer>
  );
};

export default Sidebar;