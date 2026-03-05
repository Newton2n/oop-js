class human{
    galaxy="Milky Way";
    #from ="Earth";
    #country ="Bangladesh";
    #humanity =1;
    constructor(type,gender){
          this.type =type;
          this.gender=gender;
          
    }
    get humanity(){
     return this.#humanity
    }
    set humanity(humanity){
        if(humanity<0){
            console.log("humanity is 0 cannot set")
        }else{
            this.#humanity =humanity;
        }
       
    }

};
class cat extends human{
    constructor(type,gender,nationality,cute){
       super(type,gender,nationality);
       this.cute= cute;
    }
}
const newton = new human("Adult","Male","Bangladeshi");
// newton.humanity="12";
console.log(newton.humanity)
console.log(newton.galaxy)