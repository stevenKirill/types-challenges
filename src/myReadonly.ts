export type MyReadonly<T> = {
  readonly [key in keyof T]: T[key];
};

type TShape = {
  name: string;
  age: number;
};

export const example: MyReadonly<TShape> = {
  name: 'kirill',
  age: 27,
};

// example.age = 10
