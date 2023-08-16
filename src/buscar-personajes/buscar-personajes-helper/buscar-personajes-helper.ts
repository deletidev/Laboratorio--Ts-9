import { CharacterClasses } from '../buscar-peronajes.model';

const createImg = (url: string, name: string): HTMLImageElement => {
  const img = document.createElement('img');
  img.src = `http://localhost:3000/${url}`;
  img.alt = name;
  return img;
};

export const createDiv = (classes: CharacterClasses): HTMLDivElement => {
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

export const createContainerEspecialidad = (especialidad: string) => {
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

export const characterOverflowCreate = (
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
