type TupleToObject<T extends readonly (string|number)[]> = {
  [Property in T[number]]: Property;
};

/* I learned:
1. Indexing array types with Type[number] to expose the property types
*/