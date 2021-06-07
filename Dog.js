import { Animal} from './Animal.js';
export class Dog extends Animal{
constructor(animalName,img){
super(animalName);
this.img=img;
}
draw(){
    super.draw(this.img);
    }
}