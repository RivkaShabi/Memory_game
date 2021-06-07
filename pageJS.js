import { AnimalType} from './AnimalType.js';
import { Animal} from './Animal.js';
import { AnimalArray} from './AnimalArray.js';
//עירבוב רנדומלי של הכרטיסים

function arrangeCard() { 
    AnimalArray.sort(() => 0.5 - Math.random())
    }
    