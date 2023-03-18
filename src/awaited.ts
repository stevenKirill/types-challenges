type ExampleType = Promise<string>;

type MyAwaitedInternal<T> = T extends PromiseLike<infer U>
  ? MyAwaitedInternal<U>
  : T;

type MyAwaited<T extends PromiseLike<any>> = T extends PromiseLike<infer U>
  ? MyAwaitedInternal<U>
  : never;

export type Result = MyAwaited<ExampleType>; // string

//// =>>>>>>>>>>>>>> второе решение

type PromiseLike2<U = any> = {
  then: (onfulfilled: (arg: U) => any) => any;
};

type RecursivelyAwaited<T> = T extends PromiseLike<infer U>
  ? RecursivelyAwaited<U>
  : T;

type MyAwaited2<T extends PromiseLike2> = RecursivelyAwaited<T>;

export type Result2 = MyAwaited2<ExampleType>; // string
