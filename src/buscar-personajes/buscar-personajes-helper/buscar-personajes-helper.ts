import { Character, CharacterClasses } from '../buscar-peronajes.model';

const createImg = (url: string, name: string): HTMLImageElement => {
  const img = document.createElement('img');
  img.src = `http://localhost:3000/${url}`;
  img.alt = name;
  return img;
};

const createDiv = (classes: CharacterClasses): HTMLDivElement => {
  const div = document.createElement('div');
  div.setAttribute('class', `${classes}`);
  return div;
};

const createParagraph = (text: string): HTMLDivElement => {
  const paragraph = document.createElement('p');
  paragraph.innerText = text;
  return paragraph;
};

const createEspecialidad = (): HTMLDivElement => {
  const paragraph = document.createElement('p');
  paragraph.innerText = 'Especialidad ';
  return paragraph;
};

const createSpanEspecialidad = (
  especialidad: string,
  clas: CharacterClasses
) => {
  const spanEspecialidad = document.createElement('p');
  spanEspecialidad.innerText = especialidad;
  spanEspecialidad.setAttribute('class', `${clas}`);
  return spanEspecialidad;
};

const createContainerEspecialidad = (especialidad: string) => {
  const characterEspecilidad = createDiv('character__header');
  characterEspecilidad.dataset.especialidad = especialidad.toLowerCase();
  const especialidadParagraph = createEspecialidad();
  characterEspecilidad.appendChild(especialidadParagraph);
  const spanEspecialidad = createSpanEspecialidad(
    especialidad,
    'character__specialty'
  );
  characterEspecilidad.appendChild(spanEspecialidad);
  return characterEspecilidad;
};

const createContainerHabilidad = (habilidades: string[]) => {
  const containerHabilidad = document.createElement('div');

  const characterHabilidad = document.createElement('p');
  characterHabilidad.innerText = 'HABILIDADES';
  characterHabilidad.setAttribute('class', 'character__habilidad');
  containerHabilidad.appendChild(characterHabilidad);

  const habilidad = document.createElement('p');
  habilidad.innerText = habilidades.join(', ');
  containerHabilidad.appendChild(habilidad);

  return containerHabilidad;
};

const createCharacterTextDiv = (nombre: string, habilidades: string[]) => {
  const createContainerText = createDiv('character__text');

  const characterName = createParagraph(nombre.toUpperCase());
  characterName.setAttribute('class', 'character__title');
  createContainerText.appendChild(characterName);

  const containerHabilidad = createContainerHabilidad(habilidades);
  createContainerText.appendChild(containerHabilidad);

  return createContainerText;
};

const characterOverflowCreate = (
  nombre: string,
  habilidades: string[],
  imagen: string
): HTMLDivElement => {
  const characterOverflow = createDiv('character__overflow');

  const img = createImg(imagen, nombre);
  img.setAttribute('class', 'character__img');
  characterOverflow.appendChild(img);

  const createContainerText = createCharacterTextDiv(nombre, habilidades);
  characterOverflow.appendChild(createContainerText);

  return characterOverflow;
};

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

export const characterPaint = (characters: Character[]) => {
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

export const characterFilterPaint = (
  characters: Character[],
  inputValue: string
) => {
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

export const errorPaint = (error: string) => {
  const divListCharacters = document.getElementById('characters-list');
  if (divListCharacters && divListCharacters instanceof HTMLElement) {
    divListCharacters.textContent = `Se ha producido un error: ${error}`;
  }
};
