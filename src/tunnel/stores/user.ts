import { create } from '@tunneljs/tunnel';

export interface IUserState {
  user: {
    name: string;
  };
  loading: boolean;
}

const initialState = {
  user: {
    name: 'Change the user name',
  },
  loading: false,
} as IUserState;

const userStore = create<IUserState>('User', initialState);

export const updateUserWithAPI = async () => {
  userStore.update((previous) => ({
    ...previous,
    loading: true,
  }));

  const req = await fetch('https://swapi.dev/api/people/1');
  const res = await req.json();

  const user = {
    name: res.name,
  };

  userStore.update({
    user,
    loading: false,
  });
};

export const updateUserTest = () => {
  const user = {
    name: 'Luiz Fernando',
  };

  userStore.update((previous): any => ({
    ...previous,
    user,
  }));
};

export default userStore.enum;
