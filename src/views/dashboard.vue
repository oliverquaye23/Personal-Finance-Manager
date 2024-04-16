<template>
 <nav class="navbar">
  <div class="logo-section">
    <a class="navbar-brand" href="#">
      <img :src="require('@/assets/jerry.png')" alt="logo" style="width: 40px; margin-left: 20px;">
    </a>
  </div>
  <div class="end">
    <a class="navbar-brand" href="#">
      <img :src="require('@/assets/notification.svg')" alt="logo" style="width: 30px; ">
    </a>
    <a class="navbar-brand" href="#">
      <img :src="require('@/assets/mail.svg')" alt="logo" style="width: 30px; ">
    </a>
    <div class="avatar">
        <img :src="require('@/assets/Person1.jpg')" alt="">
    </div>
  </div>
 </nav>

 <div class="sidebar">
    <button type="button" class="btn btn-primary btn-lg" style="color: white; font-size: 14px; padding: 5px; background-color: lightgreen; border: none;"><i class="bi bi-plus"></i>create new account</button>
    <div class="sidebar-items">
        <ul>
            <li><a href=""><img :src="require('@/assets/overview.svg')" alt="logo" style="width: 20px; margin-right: 10px;" >Overview</a></li>
            <li><a href=""><img :src="require('@/assets/credit-card.svg')" alt="logo"  style="width: 20px; margin-right: 10px;">Expenses</a></li>
            <li><a href=""><img :src="require('@/assets/wallet.svg')" alt="logo"  style="width: 20px; margin-right: 10px;">Budgets</a></li>
            <li><a href="">Financial Goals</a></li>
        </ul>
    </div>
 </div>
 
</template>

<script>
export default {

}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.navbar{
  border-bottom: 1px solid;
  border-color: rgb(228, 225, 222);
  padding: 0 10px 0 10px;
  align-items: center;
  justify-content: space-between; 
  display: flex;
}
.end{
    margin-right: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
a{
  margin-right: 10px;
}
.avatar{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    overflow: hidden;
}

img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.sidebar{
    width: 200px;
    height: 100vh;
    border-right: 1px solid;
    border-color: rgb(228, 225, 222);
    padding: 10px;
}
ul li {
    list-style-type: none;
    font-weight: 500;
    margin: 20px 0;

}
ul li a{
    text-decoration: none;
    color: black;
    

}
</style>