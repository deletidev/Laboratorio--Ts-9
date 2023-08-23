import { Character } from './buscar-peronajes.model';
import {
  characterFilterPaint,
  characterPaint,
  errorPaint
} from './buscar-personajes-helper/buscar-personajes-helper';

import {
  catchCharacters,
  catchCharactersFilter
} from './buscar-personajes.api';

export const charactersPaint = async () => {
  try {
    const characters: Character[] = await catchCharacters();
    characterPaint(characters);
  } catch (error: any) {
    errorPaint(error.message);
  }
};

export const filter = async () => {
  try {
    const search = document.getElementById('search');
    if (search && search instanceof HTMLInputElement) {
      const inputValue = search.value;
      const characters: Character[] = await catchCharactersFilter(inputValue);
      characterFilterPaint(characters, inputValue);
    }
  } catch (error: any) {
    errorPaint(error.message);
  }
};
