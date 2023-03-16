type Arr1 = ['a', 'b', 'c'];
type Arr2 = [3, 2, 1];

type TArray = any[];
type First<T> = T extends TArray ? T[0] : never;

// expected to be 'a'
export type head1 = First<Arr1>;
// expected to be 3
export type head2 = First<Arr2>;
