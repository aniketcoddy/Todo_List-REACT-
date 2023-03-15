
 const obj={

    funct1 : function(){
        console.log(this)
    },

    funct2 : ()=>{
        console.log(this)
    }
 }

 obj.funct1()
 obj.funct2()
