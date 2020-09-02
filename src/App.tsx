import './App.css';
import * as React from 'react';
import logo from './logo.svg';
import { updateUserTest, updateUserWithAPI, IUserState } from './tunnel/stores/user';
import { getCharacters, ICharactersState } from './tunnel/stores/characters';
import { useTunnel } from '@tunneljs/tunnel';

const App: React.FC = () => {
  const state = useTunnel<{ User: IUserState; Characters: ICharactersState }>(['User', 'Characters']);
  const { User, Characters } = state;
  console.log(state);
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
      <p className='App-intro' onClick={getCharacters}>
        Get Starwars Characters From API
      </p>
      {Characters?.loading ? <p>Loading...</p> : Characters.characters.map((e) => <p>{e}</p>)}
    </div>
  );
};

export default App;
