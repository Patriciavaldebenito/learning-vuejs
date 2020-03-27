new Vue({
    el: '#app',
    
    data () {
      return {
        courses:[],
        title:'',
        time:'',
        condition:false
      }
    },
    
    computed: {
        totalTime(){
            let total = 0;
            for(let i = 0; i<this.courses.length; i++){

              total += +this.courses[i].time; 

            }
            return total;
           
        }
    },
    
    methods: {
      addCourse(){
        this.courses.push({ title:this.title,time:this.time});
        // console.log(this.courses)
        console.log("largo :",this.courses.length)
        return this.courses.length
      },

 
    }

})