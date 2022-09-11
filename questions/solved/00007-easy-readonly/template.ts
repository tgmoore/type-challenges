type MyReadonly<T> = {
  +readonly [Property in keyof T]: T[Property];
}

/* I learned:
+ and - modifiers for mapped types readonly and optional.
*/