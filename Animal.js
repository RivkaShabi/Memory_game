export class Animal{
    constructor(animalName){
        this.animalName=animalName;
    }
    get conpare(){
        return this.animalName;
    } 
   draw(img){
    var creatImg = document.createElement("IMG");
             creatImg.setAttribute("src", img);
             creatImg.setAttribute("width", "100");
             creatImg.setAttribute("height", "100");
             //  creatImg.setAttribute("alt", "The Pulpit Rock");
               document.getElementById("card");
           }
   }


