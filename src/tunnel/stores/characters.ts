import { create } from '@tunneljs/tunnel';
import { StarWarsConnection, Character } from '../typings';

export interface ICharactersState {
  loading: boolean;
  characters: string[];
}

const initial = {
  loading: false,
  characters: [],
} as ICharactersState;

const store = create<ICharactersState>('Characters', initial);

export const getCharacters = async () => {
  try {
    store.update((prev) => ({
      ...prev,
      loading: true,
    }));
    const req = await fetch('https://swapi.dev/api/people');
    const connection: StarWarsConnection<Character> = await req.json();
    const { results } = connection;
    store.update({
      loading: false,
      characters: results.map((e) => e.name),
    });
  } catch (e) {
    store.update((prev) => ({
      ...prev,
      loading: false,
    }));
    throw e;
  }
};
