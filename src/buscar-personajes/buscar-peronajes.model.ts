export interface Character {
  id: string;
  nombre: string;
  apodo: string;
  especialidad: string;
  habilidades: string[];
  amigo: string;
  imagen: string;
}

export type CharacterClasses =
  | 'character__container'
  | 'character__header'
  | 'character__specialty'
  | 'character__overflow'
  | 'character__text';

export interface characterPaint {
  characters: Character[];
  value?: string;
}
