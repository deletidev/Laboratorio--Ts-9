import { Character, characterPaint } from './buscar-peronajes.model';
import {
  characterOverflowCreate,
  createContainerEspecialidad,
  createDiv
} from './buscar-personajes-helper/buscar-personajes-helper';
import {
  catchCharacters,
  catchCharactersFilter
} from './buscar-personajes.api';

const characterDraw = (character: Character): HTMLDivElement => {
  const characterContainer = createDiv('character__container');
  const { nombre, especialidad, habilidades, imagen } = character;

  const characterEspecilidad = createContainerEspecialidad(especialidad);
  characterContainer.appendChild(characterEspecilidad);

  const characteOverflowDiv = characterOverflowCreate(
    nombre,
    habilidades,
    imagen
  );
  characterContainer.appendChild(characteOverflowDiv);

  return characterContainer;
};

const characterPaint = (characters: Character[]) => {
  const divListCharacters = document.getElementById('characters-list');
  if (divListCharacters && divListCharacters instanceof HTMLElement) {
    if (characters.length) {
      divListCharacters.innerHTML = '';
      characters.forEach(character => {
        divListCharacters.appendChild(characterDraw(character));
      });
    }
  }
};

const characterFilterPaint = (characters: Character[], inputValue: string) => {
  const divListCharacters = document.getElementById('characters-list');
  if (divListCharacters && divListCharacters instanceof HTMLElement) {
    if (characters.length) {
      divListCharacters.innerHTML = '';
      characters.forEach(character => {
        divListCharacters.appendChild(characterDraw(character));
      });
    } else {
      divListCharacters.textContent = `No se ha encontrado ningún personaje que tenga "${inputValue}"`;
    }
  }
};

const errorPaint = (error: string) => {
  const divListCharacters = document.getElementById('characters-list');
  if (divListCharacters && divListCharacters instanceof HTMLElement) {
    divListCharacters.textContent = `Se ha producido un error: ${error}`;
  }
};

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
