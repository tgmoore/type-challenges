type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false;

type Includes<T extends readonly any[], U> = T extends [infer First, ...infer Rest] ? Equal<First, U> extends true ? true : Includes<Rest, U> : false;

/* I learned:
 1. The use of the infer keyword to temporarily hold a reference to a type.
 2. The use of the spread operator and infer to hold a reference to "every" type.
 3. The use of the utility type Equal to check type equality.
*/
