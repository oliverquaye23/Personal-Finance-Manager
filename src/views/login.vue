<template>
   <div class="section">
    <div class="left">
        <form @submit.prevent="login">
            <h1>Login to medallion</h1>
            <p>Don't have an account? <span><a href="/signup">Sign up</a></span></p>
            <div class="form-inner">
                <label for="email">Email</label>
                <input type="email" placeholder="Enter your email" required v-model="loginData.email">
                <label for="password">Password</label>
                <input type="text" placeholder="Enter your password" required v-model="loginData.password">
               
            </div>
            

            <div class="btn">
                <button type="submit">Login</button>
            </div>
        </form>
    </div>
    <div class="right">
        <img :src="require('@/assets/login.svg')" alt="Card Image">
    </div>
   </div>

   
  
</template>

<script>
import{ref} from 'vue'
import axios from 'axios';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default {


data() {
   return {
      loginData:ref( {
         email: '', 
         password: ''
        })
   }
},

methods: {

    async login(){
        try{
            const Data = await axios.get('http://localhost:3000/users',
        { params:{
            email:this.loginData.email,
            password:this.loginData.password}
        });
        // console.log("axios response -> ",Data)
        // console.log("actual response -> ", Data?.data)
        
        if (Data?.data.length > 0) {
          // User found, login successful
          this.showToast('login successful!', 'success');
        this.$router.push('/dashboard')
          console.log('Login successful');
          // Redirect to dashboard or perform other actions
        } else {
          // User not found, login failed
          this.showToast('login failed!', 'error');
        }

    }catch(error){
         console.log(error)
    }
    },

    showToast(message, type) {
      toast[type](message, { autoClose: 5000 });
    }
}
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
}

.input-fields{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.section{
    width: 100%;
    height: 100vh;
    display: flex;
}

form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.form-inner{
    display: flex;
    flex-direction: column;
    margin: 10px;
}
.left{
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.right {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%; 
  height: 100vh; 
}

img {
  width: 80%; 
  height: 80%; 
  
}
span a{
    text-decoration: none;
}

input{
    margin: 20px;
    padding: 10px;
    border: 1px solid;
    border-radius: 50px;
    font-size: 15px;
}
button{
    margin: 20px;
    padding: 10px 20px;
    border: none;
    border-radius: 50px;
    background-color: black;
    color: white;
    font-weight: 300;
}
</style>
