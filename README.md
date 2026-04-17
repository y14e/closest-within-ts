# closest-within.ts
TS snippet for the `closest()` method within a range.

## Usage
```ts
import { closestWithin } from './closest-within';

const button = document.querySelector('.button');
const container = document.querySelector('.container');

const card = closestWithin(button, '.card', container);

console.log(card);
```
