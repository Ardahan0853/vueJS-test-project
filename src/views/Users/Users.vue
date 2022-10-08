<template>
    
    <div v-for="user in arrayOfUsers" :key="user.id">
        <div class="d-flex-container">
           <div class="d-flex">
                <h6 class="d-flex-item"><span>Full Name:</span> {{user.name}}</h6>
                <h6 class="d-flex-item"><span>User Name:</span> {{user.username}}</h6>
                <h6 class="d-flex-item"><span>Email:</span> {{user.email}}</h6>
                <h6 class="d-flex-item" ><span>Phone:</span> {{user.phone}}</h6>
                <router-link :to="{name: 'UserDetails', params: {id: user.id } }"  >
                    <button id="myButton" class="Edit" >Edit</button>
                </router-link>
            </div> 
        </div>
        
    </div>
    
</template>

<script>

    import User from './UserDetails.vue'

   
    export default {
        props:['listdata'],
        components:{
            User
        },

        data() {
            return {
                arrayOfUsers: [],
                user:null,
                name:''
                
            }
        },
        methods:{
            getData(data){
                alert(data)
            },
            
        },
        mounted(){
            fetch("https://jsonplaceholder.typicode.com/users")
                .then(res =>{
                    if(!res.ok){
                        throw Error('Opps something went wrong')
                    }
                    return res.json()
                })
                .then(data =>{
                    this.arrayOfUsers = data
                    
                })
                .catch(err =>{
                    console.error(err)
                })
            
        }
        
    }
    
</script>

<style scoped>


.d-flex-container{
    display: flex;
    margin: 10px auto;
    max-width: 1000px;
    width: 80%;

}

.d-flex{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #256D85;
    width: 100%;
    padding: 2px 10px;
    
}
.d-flex-item{
    display: flex;
    justify-content: flex-start;
    align-content: space-between;
    color: white;
    font-size: 12px;
    
    border-radius: 2px;
    
}
a{
    text-decoration: none;
}
span{
    margin-right: 10px;
    color: black;
    
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
</style>