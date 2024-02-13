import Sidebar from '../../components/SideBar/Sidebar';
import Chat from '../../components/Chat/Chat';
import { HomeContainer } from './Home.styles';

const Home = () => {
  return (
    <HomeContainer>
      <Sidebar />
      <Chat />
    </HomeContainer>
  );
}

export default Home;