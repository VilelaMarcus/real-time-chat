import Sidebar from '../../components/SideBar/Sidebar';
import Chat from '../../components/Chat/Chat';
import { HomeContainer } from './Home.styles';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../redux/slices/chatsSlice';

const Home = () => {
  
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.setDefaut());
  }, [ currentUser ]);


  return (
    <HomeContainer>
      <Sidebar />
      <Chat />
    </HomeContainer>
  );
}

export default Home;