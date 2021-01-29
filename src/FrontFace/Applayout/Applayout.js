import {useEffect} from 'react';
import { NotificationContainer } from 'react-notifications';
import { NavBarUi } from '../Components/Navbar/NavBarUi';
import { Footer } from '../Components/Footer/Footer';

import 'react-notifications/lib/notifications.css';

const Applayout = props =>{
   useEffect(() =>{
      window.scrollTo({
			top: 0,
			left: 0,
      });
   }, []);
   return(
      <>
      <NotificationContainer/>
      <NavBarUi/>

      <main>{props.children}</main>

      <Footer/>
      </>
   );
};

export default Applayout;