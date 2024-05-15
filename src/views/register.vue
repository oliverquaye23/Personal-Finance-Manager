<template>
   <div class="section">
    <div class="left">
        <form @submit.prevent="signup">
            <h1>Sign up to medallion</h1>
            <p>Already have an account? <span><a href="/login">Login</a></span></p>
            <div class="form-inner">
                <label for="email">Email</label>
                <input type="email" placeholder="Enter your email" v-model="email" required>
                <label for="password">Password</label>
                <input type="text" placeholder="Enter your password" v-model="password" required>
                <label for="confirm-password">Confirm password</label>
                <input type="text" placeholder="confirm your password" v-model="confirmPassword">
            </div>
            

            <div class="btn">
                <button type="submit"> 
                Create a free account
                </button>
            </div>
        </form>
    </div>
    <div class="right">
        <img :src="require('@/assets/signup.svg')" alt="">
    </div>
   </div>

  
</template>

<script>
import{ref} from 'vue'
import axios from 'axios';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import dashboard from './dashboard.vue';
import { mapState, mapActions } from 'vuex';





export default {
  components: { dashboard },

  
  data() {
    return {
        
       users:[],
      email:'',
      password:'',
      confirmPassword:''
      
    };
    
  },
  


  methods: {

    ...mapActions(['updateEmail', 'updatePassword', 'updateConfirmPassword']),
    
    async signup() {
      await this.updateEmail(this.email);
      await this.updatePassword(this.password);
      await this.updateConfirmPassword(this.confirmPassword);
      try {
        const response = await axios.post('http://localhost:3000/users', {
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword
        });

      
        this.users.push(response.data) 
       
        this.showToast('login successful!', 'success');
        this.$router.push('/dashboard')
        
        

      } catch (error) {
        this.showToast('signup failed!', 'error');
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
    padding: 10px;
    border: none;
    border-radius: 50px;
    background-color: black;
    color: white;
    font-weight: 300;
}

#toast-box{
    position: absolute;
    bottom: 30px;
    right: 30px;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    overflow: hidden;
    padding: 20px;
    }

.toast{

    width: 400px;
    height: 80px;
    background: #fff;
    font-weight: 500;
    margin: 15px 0;
    color: black;
    display: flex;
    align-items: center;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
}
</style>
