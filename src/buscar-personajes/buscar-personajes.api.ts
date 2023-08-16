import { Character } from './buscar-peronajes.model';

export const catchCharacters = async (): Promise<Character[]> => {
  const response = await fetch('http://localhost:3000/personajes');

  if (!response.ok) {
    if (response.status === 400) {
      throw new Error('Petición incorrecta: ' + response.statusText);
    } else if (response.status === 401) {
      throw new Error('No autorizado');
    } else if (response.status === 403) {
      throw new Error('Acceso prohibido');
    } else if (response.status === 404) {
      throw new Error('Página no encontrada');
    } else if (response.status === 500) {
      throw new Error('Error interno del servidor');
    } else if (response.status === 503) {
      throw new Error('Servicio no disponible');
    } else if (response.status === 504) {
      throw new Error('Tiempo de espera de la puerta de enlace agotado');
    } else {
      throw new Error('Error desconocido: ' + response.statusText);
    }
  }

  const data: Character[] = await response.json();
  return data;
};

export const catchCharactersFilter = async (
  inputValue: string
): Promise<Character[]> => {
  const response = await fetch(
    `http://localhost:3000/personajes?nombre_like=${inputValue}`
  );

  if (!response.ok) {
    if (response.status === 400) {
      throw new Error('Petición incorrecta: ' + response.statusText);
    } else if (response.status === 401) {
      throw new Error('No autorizado');
    } else if (response.status === 403) {
      throw new Error('Acceso prohibido');
    } else if (response.status === 404) {
      throw new Error('Página no encontrada');
    } else if (response.status === 500) {
      throw new Error('Error interno del servidor');
    } else if (response.status === 503) {
      throw new Error('Servicio no disponible');
    } else if (response.status === 504) {
      throw new Error('Tiempo de espera de la puerta de enlace agotado');
    } else {
      throw new Error('Error desconocido: ' + response.statusText);
    }
  }

  const data: Character[] = await response.json();
  return data;
};
