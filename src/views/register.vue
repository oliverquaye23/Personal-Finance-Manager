<template>
   <div class="section">
    <div class="left">
        <form >
            <h1>Sign up to medallion</h1>
            <p>Already have an account? <span><a href="/login">Login</a></span></p>
            <div class="form-inner">
                <label for="email">Email</label>
                <input type="text" placeholder="Enter your email">
                <label for="password">Password</label>
                <input type="text" placeholder="Enter your password">
                <label for="confirm-password">Confirm password</label>
                <input type="text" placeholder="confirm your password">
            </div>
            

            <div class="btn">
                <button>create a free account</button>
            </div>
        </form>
    </div>
    <div class="right">
        <img :src="require('@/assets/card.jpg')" alt="Card Image">
    </div>
   </div>
  
</template>

<script>
export default {

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
  background-color: #f0f0f0; 
}

img {
  width: 100%; 
  height: 100%; 
  object-fit: cover; 
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
</style>
