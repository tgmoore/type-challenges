type MyPick<T, K extends keyof T> = {
  [Property in K]: T[Property];
}

/* I learned:
1. Solutions may involve the left and right-hand side of the assignment
2. The use of the 'in' operator for Mapped Types
3. Indexed types using the square bracket notation and property keys
*/