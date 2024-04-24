<template>
    <nav class="navbar">
     <div class="logo-section">
       <a class="navbar-brand" href="#">
         <img :src="require('@/assets/jerry.png')" alt="logo" style="width: 40px; margin-left: 20px;">
       </a>
     </div>
   
     <div class="end">
       <a class="navbar-brand notification" href="#">
         <img :src="require('@/assets/notification.svg')" alt="logo" style="width: 30px;">
         <div class="badge"><h6 style="font-size: 10px; font-weight: 500;">2</h6></div>
       </a>
       <a class="navbar-brand" href="#">
          <img :src="require('@/assets/mail.svg')" alt="logo" style="width: 30px; ">
       </a>
       <div class="avatar">
           <img :src="require('@/assets/Person1.jpg')" alt="">
       </div>
     </div>
   
    </nav>
   
   <div class="dashboard" style="display: flex;">
    <div class="sidebar">
      <button type="button" class="btn btn-primary btn-lg" style="color: white; font-size: 14px; padding: 5px; background-color: lightgreen; border: none;">
        <router-link to="/" style="color: white; text-decoration: none"><i class="bi bi-house-door-fill" style="color: white;" ></i>Home</router-link> 
       </button>
       <div class="sidebar-items">
           <ul>
               <li><a href="/dashboard"><img :src="require('@/assets/overview.svg')" alt="logo" style="width: 20px; margin-right: 10px;" >Overview</a></li>
               <li><a href=""><img :src="require('@/assets/credit-card.svg')" alt="logo"  style="width: 20px; margin-right: 10px;">Expenses</a></li>
               <li><a href="/budgets"><img :src="require('@/assets/wallet.svg')" alt="logo"  style="width: 20px; margin-right: 10px;">Budgets</a></li>
               <li><a href=""><img :src="require('@/assets/target.svg')" alt="logo"  style="width: 20px; margin-right: 10px;">Financial Goals</a></li>
               <li><a href=""><img :src="require('@/assets/settings.svg')" alt="logo"  style="width: 20px; margin-right: 10px;">Settings</a></li>
               <li> <router-link to="/"><a href=""><img :src="require('@/assets/log-out.svg')" alt="logo"  style="width: 20px; margin-right: 10px;">logout</a></router-link> </li>
           </ul>
       </div>
    </div>
   <div class="elements"  style="width: 100%;">
    <div class="expenses"> 
     <h6 style="margin: 20px;">Expenses</h6>
     <table class="table table-striped table-hover">
     <thead>
       <th>Amount</th>
       <th>Category</th>
       <th>Date</th>
       <th>Actions</th>
     </thead>
     <tbody>
       <tr style="border-left: 5px solid; border-color: lightgreen">
         <td>$25.00</td>
         <td>Groceries</td>
         <td>June 12, 2024</td>
         <td>
           <button type="button" class="btn btn-danger" style="font-size: 14px; border-radius: 15px; color: white; margin-right: 5px; padding: 0 10px;">delete</button>
           <button type="button" class="btn btn-warning" style="font-size: 14px; border-radius: 15px; color: black; padding: 0 10px;">edit</button>
         </td>
       </tr>
       <tr style="border-left: 5px solid; border-color: lightgreen">
         <td>$25.00</td>
         <td>Groceries</td>
         <td>June 12, 2024</td>
         <td>
           <button type="button" class="btn btn-danger" style="font-size: 14px; border-radius: 15px; color: white; margin-right: 5px; padding: 0 10px;">delete</button>
           <button type="button" class="btn btn-warning" style="font-size: 14px; border-radius: 15px; color: black; padding: 0 10px;">edit</button>
         </td>
       </tr>
       <tr style="border-left: 5px solid; border-color: lightgreen">
         <td>$25.00</td>
         <td>Groceries</td>
         <td>June 12, 2024</td>
         <td>
           <button type="button" class="btn btn-danger" style="font-size: 14px; border-radius: 15px; color: white; margin-right: 5px; padding: 0 10px;">delete</button>
           <button type="button" class="btn btn-warning" style="font-size: 14px; border-radius: 15px; color: black; padding: 0 10px;">edit</button>
         </td>
       </tr>
       <tr style="border-left: 5px solid; border-color: lightgreen">
         <td>$25.00</td>
         <td>Groceries</td>
         <td>June 12, 2024</td>
         <td>
           <button type="button" class="btn btn-danger" style="font-size: 14px; border-radius: 15px; color: white; margin-right: 5px; padding: 0 10px;">delete</button>
           <button type="button" class="btn btn-warning" style="font-size: 14px; border-radius: 15px; color: black; padding: 0 10px;">edit</button>
         </td>
       </tr>
     </tbody>
   </table>
   
   </div>
   </div>
    
   
</div>

    
    
   </template>
   
   <script>
   
   
   export default {
    
   };
   </script>
   
   <style scoped>
   *{
       margin: 0;
       padding: 0;
       box-sizing: border-box;
   }
   .navbar{
  position: fixed;
  width: 100%;
  border-bottom: 1px solid;
  border-color: rgb(228, 225, 222);
  padding: 0 10px 0 10px;
  align-items: center;
  justify-content: space-between; 
  display: flex;
  background-color: white;
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
   .notification {
     display: flex;
     align-items: center;
     position: relative;
   }
   
   .notification img {
     width: 30px;
   }
   
   .badge {
     position: absolute;
     top: -2px; 
     right: -3px; 
     width: 17px;
     height: 17px;
     border-radius: 50%;
     background: red;
     display: flex;
     align-items: center;
     justify-content: center;
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
  position: fixed;
    width: 200px;
    height: 100vh;
    padding: 10px;
    margin-top: 50px;
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
   
   .elements{
  margin: 20px;
  padding: 10px;
  margin-left: 200px;
  margin-top: 50px;
}
   
   </style>