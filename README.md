# closest-within.ts
TS snippet for the `closest()` method within a range.

## Usage
```ts
import { closestWithin } from './closest-within';

const container = document.querySelector('.container');
const button = container.querySelector('.button');

const card = closestWithin(button, '.card', container);

console.log(card);
// Element or null
```
