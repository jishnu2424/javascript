class student{
    constructor(name,age,email){
        this.name=name;
        this.age=age;
        this.email=email;
    }
    display(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.email)
    }
    
}

let c=new student("anu",20,"efr@gmail.com");
c.display();