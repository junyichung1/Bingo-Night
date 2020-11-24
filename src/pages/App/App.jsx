import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';
import CardThemes from '../../components/CardThemes/CardThemes';
import Rankings from '../../components/Rankings/Rankings';
import Events from '../../components/Events/Events';
import Footer from '../../components/Footer/Footer';
import Admin from '../../components/Admin/Admin'






class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      allUsers: []
    };
  }

  /*--- Callback Methods ---*/
  handleLogout = () => {
    userService.logout();
    this.setState({user: null})
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()})
  }
  /*--- Lifecycle Methods ---*/

  async componentDidMount() {
    const allUsers = await userService.getAll();
    console.log(allUsers)
      this.setState({allUsers});
  }

  render() {
    return (
      <>
      <div className="container">
        <NavBar 
        user={this.state.user} 
        handleLogout={this.handleLogout}
        />
        <Switch>
          <Route exact path='/' render={() =>
          <>
          <CardThemes />
          <div className="midsection">
          <Rankings />
          <Events />
          </div>
            
          
          </>
          }/>
          <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
              
            />
          }/>
          <Route exact path='/login' render={({history}) => 
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>

          <Route exact path='/admin' render={() => 
            <Admin
            users={this.state.allUsers}
            />
          }/>
        </Switch>
      </div>
        <div>

        <Footer />
        </div>
      </>
    );
  }
}

export default App;
