type Tesla = ['tesla', 'model 3', 'model X', 'model Y'];
type SpaceX = [
  'FALCON 9',
  'FALCON HEAVY',
  'DRAGON',
  'STARSHIP',
  'HUMAN SPACEFLIGHT'
];

type Length<T> = T extends any[] ? T['length'] : never;

type Length2<T> = T extends {length: infer R} ? R : never;

export type TeslaLength = Length<Tesla>; // expected 4
export type SpaceXLength = Length2<SpaceX>; // expected 5
