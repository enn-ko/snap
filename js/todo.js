let app = new Vue({
    el : "#app",
    data:{
        id: 0,
        message:"",
        lists: [],
    },
    computed:{
        doneTotal(){
            return this.lists.filter(el=> el.isDone === true).length
        }
    },
    methods:{
        create(){
            this.id++
            this.lists.push({
                id:this.id++,
                message:this.message,
                isDelete:false,
                isDone:false,
                isEdit:false,
            }),
            this.message = ""
            localStorage.setItem("todo-list",JSON.stringify(this.lists))
        },
        del(x){
           if(this.lists.length === 1){
            this.lists = this.lists.splice(x,1)
           localStorage.setItem("todo-list",JSON.stringify(this.lists))

           }else{
            this.lists.splice(x,1)
           
           }
        // this.lists = this.lists.splice(x,1)
           localStorage.setItem("todo-list",JSON.stringify(this.lists))
           
            
        },
    },
    mounted(){
        this.lists = JSON.parse(localStorage.getItem("todo-list"))
    }


})
