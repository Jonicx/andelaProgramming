import { BrowserRouter as Router, Switch } from 'react-router-dom';
import RoutesName from './App/Config/routes';
import CustomRoute from './App/Utils/route';
import { MainUi } from './FrontFace/Pages/Client/Home/MainUi';
import { ContactUsUi, BlogUi } from './FrontFace/Pages/Client/Pages/';

const Routes = () =>{
   return (
      <Router basename={process.env.REACT_APP_BASENAME}>
         <Switch>
            <CustomRoute
            exact
            path={RoutesName.home}
            component={MainUi}
            auth={false}
            access={true}	 
            />

            <CustomRoute
            exact
            path={RoutesName.pages.blog}
            component={BlogUi}
            auth={false}
            access={true}
            /> 

            <CustomRoute
            exact
            path={RoutesName.pages.contact}
            component={ContactUsUi}
            auth={false}
            access={true}
            />
         </Switch>
      </Router>
   );
};

export default Routes;