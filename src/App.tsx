import './App.css';
import * as React from 'react';
import logo from './logo.svg';
import { updateUserTest, updateUserWithAPI, IUserState } from './tunnel/stores/user';
import { useTunnel } from '@tunneljs/tunnel';

const App: React.FC = () => {
  const { User } = useTunnel<{ User: IUserState }>(['User']);
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1 className='App-title'>Welcome to React</h1>
        {User.loading ? <p>loading</p> : <p>{User.user.name}</p>}
      </header>
      <p className='App-intro' onClick={updateUserWithAPI}>
        Update User With API
      </p>
      <p className='App-intro' onClick={updateUserTest}>
        Update User Without API
      </p>
    </div>
  );
};

export default App;
