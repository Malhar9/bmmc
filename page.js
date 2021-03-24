class Form {

    constructor() {
        this.kg = createInput("Weight");
        this.m = createInput("Height");
          this.button = createButton('Calucate');
          this.greeting = createElement('h2');
          this.title = createElement('h2');
          this.result=createElement('h2')
         this.BMI=0
    }
    hide(){
        this.greeting.hide();
        this.result.hide();
        this.button.hide();
        this.kg.hide();
        this.m.hide();
        this.title.hide();
    }
  
    display(){
        this.title.html("Body Mass Index Calcutor");
        this.title.position(displayWidth/2 - 50, 0);
    
        this.kg.position(displayWidth/2 - 40 , displayHeight/2 - 80);
        this.m.position(displayWidth/2 - 30 , displayHeight/2 - 40);
        this.button.position(displayWidth/2 + 30, displayHeight/2);
        this.button.mousePressed(()=>{
          this.kg.hide();
          this.m.hide();
          this.button.hide();
        this.weight = this.kg.value();
        this.height = this.m.value();
        this.BMI=this.weight/(this.height*this.height)
          this.greeting.html("Your BMI is " +this.BMI)
          this.greeting.position(displayWidth/2 - 70, displayHeight/4);
        });
        if(this.BMI>29.9){
          this.result.html("OBESE!!DANGER!! YOU MIGHT SUFFER FROM DISEASES PLEASE DO REGULAR EXERCISE")
          this.result.position(displayWidth/2 - 20, displayHeight/2);
          this.greeting.html("Your BMI is " +this.BMI)
          this.greeting.position(displayWidth/2 - 70, displayHeight/4);
        }
  
        if(this.BMI<29.9&&this.BMI>25){
          this.result.html("overweight!!! dont increase your weight or else you will become obese")
          this.result.position(displayWidth/2 - 20, displayHeight/2);
          this.greeting.html("Your BMI is " +this.BMI)
          this.greeting.position(displayWidth/2 - 70, displayHeight/4);
        }
  
        if(this.BMI<18.5&&this.BMI<0){
          this.result.html("UNDERWEIGHT!!PLEASE PUT ON SOME WEIGHT")
          this.result.position(displayWidth/2 - 20, displayHeight/2);
          this.greeting.html("Your BMI is " +this.BMI)
          this.greeting.position(displayWidth/2 - 70, displayHeight/4);
        }
        if(this.BMI>18.5&&this.BMI<24.9){
          this.result.html("HEALTHY!!PLEASE TRY TO MAINTAIN YOUR WEIGHT")
          this.result.position(displayWidth/2 - 20, displayHeight/2);
          this.greeting.html("Your BMI is " +this.BMI)
          this.greeting.position(displayWidth/2 - 70, displayHeight/4);
        }
  
    }
  }
  