import Sidebar from '../../components/SideBar/Sidebar';
import Chat from '../../components/Chat/Chat';
import { HomeContainer } from './Home.styles';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../../redux/slices/chatsSlice';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.setDefaut());
  }, []);


  return (
    <HomeContainer>
      <Sidebar />
      <Chat />
    </HomeContainer>
  );
}

export default Home;