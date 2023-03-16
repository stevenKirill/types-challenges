const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const;

type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [Key in T[number]]: Key;
};

// expected { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}

export type Result = TupleToObject<typeof tuple>;
