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
               <li><a href="/expenses"><img :src="require('@/assets/credit-card.svg')" alt="logo"  style="width: 20px; margin-right: 10px;">Expenses</a></li>
               <li><a href=""><img :src="require('@/assets/wallet.svg')" alt="logo"  style="width: 20px; margin-right: 10px;">Budgets</a></li>
               <li><a href=""><img :src="require('@/assets/target.svg')" alt="logo"  style="width: 20px; margin-right: 10px;">Financial Goals</a></li>
               <li><a href=""><img :src="require('@/assets/settings.svg')" alt="logo"  style="width: 20px; margin-right: 10px;">Settings</a></li>
               <li> <router-link to="/"><a href=""><img :src="require('@/assets/log-out.svg')" alt="logo"  style="width: 20px; margin-right: 10px;">logout</a></router-link> </li>
           </ul>
       </div>
    </div>
   <div class="elements" style="width: 100%;">
    <div class="budgets" > 
     <h6 style="margin: 20px;">Budgets</h6>
     <div class="filter" style="display: flex">
        <button type="button" class="btn btn-primary" style="background-color: lightgreen; font-size: 14px;color: white; border: none;padding: 0 10px; margin: 20px;" @click="toggleModal">
            <i class="bi bi-plus" style="color: white"></i>
            Add budget
        </button>
        
        <div class="search-box">
            <input type="text" placeholder="search" >
        </div>
     </div>

     <table class="table table-striped table-hover">
     <thead>
       <th>#</th>
       <th>Amount</th>
       <th>Category</th>
       <th>Date</th>
       <th>Actions</th>
     </thead>
     <tbody>
       <tr style="border-left: 5px solid; border-color: lightgreen">
        <td>1</td>
         <td>$25.00</td>
         <td>Groceries</td>
         <td>June 12, 2024</td>
         <td>
           <button type="button" class="btn btn-danger" style="font-size: 14px; border-radius: 15px; color: white; margin-right: 5px; padding: 0 10px;">delete</button>
           <button type="button" class="btn btn-warning" style="font-size: 14px; border-radius: 15px; color: black; padding: 0 10px;">edit</button>
         </td>
       </tr>
       <tr style="border-left: 5px solid; border-color: lightgreen">
        <td>2</td>
         <td>$25.00</td>
         <td>Water</td>
         <td>June 12, 2024</td>
         <td>
           <button type="button" class="btn btn-danger" style="font-size: 14px; border-radius: 15px; color: white; margin-right: 5px; padding: 0 10px;">delete</button>
           <button type="button" class="btn btn-warning" style="font-size: 14px; border-radius: 15px; color: black; padding: 0 10px;">edit</button>
         </td>
       </tr>
       <tr style="border-left: 5px solid; border-color: lightgreen">
        <td>3</td>
         <td>$25.00</td>
         <td>Electricity</td>
         <td>June 12, 2024</td>
         <td>
           <button type="button" class="btn btn-danger" style="font-size: 14px; border-radius: 15px; color: white; margin-right: 5px; padding: 0 10px;">delete</button>
           <button type="button" class="btn btn-warning" style="font-size: 14px; border-radius: 15px; color: black; padding: 0 10px;">edit</button>
         </td>
       </tr>
       <tr style="border-left: 5px solid; border-color: lightgreen">
        <td>4</td>
         <td>$25.00</td>
         <td>Rent</td>
         <td>June 12, 2024</td>
         <td>
           <button type="button" class="btn btn-danger" style="font-size: 14px; border-radius: 15px; color: white; margin-right: 5px; padding: 0 10px;">delete</button>
           <button type="button" class="btn btn-warning" style="font-size: 14px; border-radius: 15px; color: black; padding: 0 10px;">edit</button>
         </td>
       </tr>
     </tbody>
   </table>
   
   </div></div>
    
   
   <div class="overlay" v-if="modalVisible">
      <div class="wrapper">
        <h2>Add your budget</h2>
        <a href="#" class="close" @click="toggleModal">&times;</a>
        <div class="content">
          <div class="container">
            <form>
              <label for="category">Category</label>
              <input type="text" placeholder="Enter budget category">
              <label for="amount">Amount</label>
              <input type="text" placeholder="Enter budgeted amount">
              <label for="date">Date</label>
              <input type="date">
              <button type="submit">Add</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>


    
    
   </template>
   
   <script>
export default {
  data() {
    return {
      modalVisible: false
    };
  },
  methods: {
    toggleModal() {
      this.modalVisible = !this.modalVisible;
    }
  }
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
   /* .dashboard{
     display: flex;
   } */
   
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

   input{
    margin: 20px;
    padding: 10px;
    border: 1px solid;
    border-color: rgb(228, 225, 222);
    border-radius: 25px;
   }
   
   .elements{
  margin: 20px;
  padding: 10px;
  margin-left: 200px;
  margin-top: 50px;
}
   .overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.wrapper {
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  width: 50%;
  text-align: center;
  position: relative; /* Establishes positioning context for absolute child */
}

.close {
  position: absolute;
  top: 10px;
  right: 15px;
  cursor: pointer;
  font-size: 24px;
  color: gray;
}

  form label{
    font-weight: 500;
    letter-spacing: 3px;
  }
  input[type=text]{
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
    margin: 6px 0 16px 0;
    resize: vertical;
  }
  input[type=submit]{
    background-color: #413b3b;
    color: #fff;
    padding: 15px 50px;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    font-size: 15px;
    letter-spacing: 3px;
  }
   </style>
