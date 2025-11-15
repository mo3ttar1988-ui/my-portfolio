const app={
    data(){
        return{
            products:products,
            path:"product",
            cart:[]
        }
    },
methods:{
    add(pro){
        let check=this.cart.some(function(ele){
            return ele.pro.id==pro.id
 
        })
        if(check==false){
            this.cart.push({pro:pro,count:1})
     }else{
        let added=this.cart.find(function(ele){
            return ele.pro.id==pro.id
        })
        added.count++
     }
     pro.stock--
        

    }
},
}
Vue.createApp(app).mount("#App")