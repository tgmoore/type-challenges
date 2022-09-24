type First<T extends any[]> = T extends [] ? never : T[0];

/* I learned:
1. Conditional types can return never to 'guard' certain scenarios.
2. Conditions can continue to narrow types beyond the lefthand side 'extends'.
*/
