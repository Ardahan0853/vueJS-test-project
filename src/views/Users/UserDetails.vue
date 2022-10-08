<template>
  <div v-if="user">
    <div class="d-flex-container">
           <div class="d-flex">
                <input class="d-flex-item" type="text" :placeholder="user.name" v-model="name">
                <input class="d-flex-item" type="text" :placeholder="user.username" v-model="username">
                <input class="d-flex-item" type="text" :placeholder="user.email" v-model="email">
                <input class="d-flex-item" type="text" :placeholder="user.phone" v-model="phone">
                <router-link :to="{name: 'users', params: {person: this.person } }"  >
                    <input class="submit" type="submit" @click="onEdit()">
                </router-link>
                

            </div> 
        </div>
  </div>
  <Users :listdata="person" />
</template>

<script>
import Users from './Users.vue'
export default {
    props: ['id'],
    components:{
        Users
    },
    data(){
        return{
            user: null,
            name:null,
            email:null,
            username:null,
            phone:null,
            wholePerson:null,
            person:[]
        }
    },
    methods:{
        onEdit(){
            this.person = {
                name:this.name,
                email:this.email,
                username:this.username,
                phone:this.phone,
                id:this.id
            }
            console.log(this.person)
            
        }
    },
    mounted(){
            fetch("https://jsonplaceholder.typicode.com/users/" + this.id)
                .then(res =>{
                    if(!res.ok){
                        throw Error('Opps something went wrong')
                    }
                    return res.json()
                })
                .then(data =>{
                    this.user = data
                    
                })
                .catch(err =>{
                    console.error(err)
                })
    }
    // data(){
    //     return {
    //         id: this.$route.params.id
    //     }
    // }
}
</script>

<style>
.d-flex-container{
    display: flex;
    
    margin: 0 auto;
    max-width: 1000px;
    width: 80%;
    margin-top: 100px;
    
}

.d-flex{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: cornflowerblue;
    width: 100%;
    padding: 1em 3em;
    margin: 10px 0;
    border-radius: 10px;
    font-size: 20px;
    
}
.d-flex-item{
    display: flex;
    justify-content: flex-start;
    width: 200px;
    align-content: space-between;
    color: black;
    
    
}
a{
    text-decoration: none;
}
span{
    margin-right: 10px;
}
button{
    padding: 5px 20px;
    background-color: black;
    color: white;
    border-radius: 10px;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
}
input{
    padding: 0.5em 0.2em;
    border: none;
    border-radius: 5px;
    width: 50%;
    margin-right: 5px;
}
.submit{
    
    background-color: black;
    color:white;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    width: 10%;
    padding: 10px 20px;
    margin-left: 1em;
    width: 100%;
}
</style>