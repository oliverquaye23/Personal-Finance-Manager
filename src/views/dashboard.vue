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

<div class="dashboard">
 <div class="sidebar">
    <button type="button" class="btn btn-primary btn-lg" style="color: white; font-size: 14px; padding: 5px; background-color: lightgreen; border: none;">
      <router-link to="/signup" style="color: white; text-decoration: none"><i class="bi bi-plus" style="color: white"></i>create new account</router-link> 
    </button>
    <div class="sidebar-items">
        <ul>
            <li><a href="/dashboard"><img :src="require('@/assets/overview.svg')" alt="logo" style="width: 20px; margin-right: 10px;" >Overview</a></li>
            <li><a href="/expenses"><img :src="require('@/assets/credit-card.svg')" alt="logo"  style="width: 20px; margin-right: 10px;">Expenses</a></li>
            <li><a href="/budgets"><img :src="require('@/assets/wallet.svg')" alt="logo"  style="width: 20px; margin-right: 10px;">Budgets</a></li>
            <li><a href=""><img :src="require('@/assets/target.svg')" alt="logo"  style="width: 20px; margin-right: 10px;">Financial Goals</a></li>
            <li><a href=""><img :src="require('@/assets/settings.svg')" alt="logo"  style="width: 20px; margin-right: 10px;">Settings</a></li>
            <li> <router-link to="/"><a href=""><img :src="require('@/assets/log-out.svg')" alt="logo"  style="width: 20px; margin-right: 10px;">logout</a></router-link> </li>
        </ul>
    </div>
 </div>

 <div class="elements">
  <div class="message">
    <h4>Welcome, <span style="color:gray;">Max Brandit</span></h4>
  </div>
  <div class="boxes">
    <div class="box1">
      <h3 style="font-size: 13px; font-weight: 300; color:gray; margin-bottom: 5px;" >TOTAL AMOUNT</h3>
      <h2 style="font-size: 25px;">$500.00</h2>
    </div>
    <div class="box1">
      <h3 style="font-size: 13px; font-weight: 300; color:gray; margin-bottom: 5px;" >RECEIVED</h3>
      <h2 style="font-size: 25px;">$25,00.00</h2>
    </div>
    <div class="box1">
      <h3 style="font-size: 13px; font-weight: 300; color:gray; margin-bottom: 5px;" >SENT</h3>
      <h2 style="font-size: 25px;">$30.00</h2>
    </div>
    <div class="box1">
      <h3 style="font-size: 13px; font-weight: 300; color:gray; margin-bottom: 5px;" >BUDGET</h3>
      <h2 style="font-size: 25px;">$200.00</h2>
    </div>
  </div>

  <div class="chart" style="width: 600px;">
    <h4>Expenditure report</h4>
    <canvas id="acquisitions"></canvas>
  </div>

  <div class="sub-section">
    <div class="transactions">
      <h6 style="margin: 20px;">Transactions</h6>

      <div class="transaction1">
        <div class="state">completed</div>
        <div class="mode">
          <h6 style="font-size: 14px;">visa card *********4387</h6>
          <p style="font-size: 13px; color: gray;">card payment</p>
        </div>
        <div class="amount">
          <h6 style="font-size: 14px;">$15.00</h6>
          <p style="font-size: 13px; color: gray;">Jan 1,2024</p>
        </div>
      </div>
      <div class="transaction1">
        <div class="state">completed</div>
        <div class="mode">
          <h6 style="font-size: 14px;">visa card *********4387</h6>
          <p style="font-size: 13px; color: gray;">card payment</p>
        </div>
        <div class="amount">
          <h6 style="font-size: 14px;">$15.00</h6>
          <p style="font-size: 13px; color: gray;">Jan 1,2024</p>
        </div>
      </div>
      <div class="transaction1">
        <div class="state2">pending</div>
        <div class="mode">
          <h6 style="font-size: 14px;">visa card *********4387</h6>
          <p style="font-size: 13px; color: gray;">card payment</p>
        </div>
        <div class="amount">
          <h6 style="font-size: 14px;">$15.00</h6>
          <p style="font-size: 13px; color: gray;">Jan 1,2024</p>
        </div>
      </div>
      <div class="transaction1">
        <div class="state">completed</div>
        <div class="mode">
          <h6 style="font-size: 14px;">visa card *********4387</h6>
          <p style="font-size: 13px; color: gray;">card payment</p>
        </div>
        <div class="amount">
          <h6 style="font-size: 14px;">$15.00</h6>
          <p style="font-size: 13px; color: gray;">Jan 1,2024</p>
        </div>
      </div>
      <div class="transaction1" style="border: none;">
        <div class="state3">cancelled</div>
        <div class="mode">
          <h6 style="font-size: 14px;">visa card *********4387</h6>
          <p style="font-size: 13px; color: gray;">card payment</p>
        </div>
        <div class="amount">
          <h6 style="font-size: 14px;">$15.00</h6>
          <p style="font-size: 13px; color: gray;">Jan 1,2024</p>
        </div>
      </div>
    </div>
 </div>

 


 </div>
 
 
 
</div>
 
 
</template>

<script>
import Chart from 'chart.js/auto';

export default {
  mounted() {
    this.renderChart();
  },
  methods: {
    renderChart() {
      const data = [
        { year: 2010, count: 10 },
        { year: 2011, count: 20 },
        { year: 2012, count: 15 },
        { year: 2013, count: 25 },
        { year: 2014, count: 22 },
        { year: 2015, count: 30 },
        { year: 2016, count: 28 },
      ];

      new Chart(
        document.getElementById('acquisitions'),
        {
          type: 'line',
          data: {
            labels: data.map(row => row.year),
            datasets: [
              {
                label: 'Acquisitions by year',
                data: data.map(row => row.count)
              }
            ]
          }
        }
      );
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
.dashboard{
  display: flex;
}

.sidebar{
    width: 200px;
    height: 100vh;
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

.elements{
  margin: 20px;
  padding: 10px;
}
.boxes{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.box1{
  padding: 20px;
  border: 1px solid;
  border-color: rgb(228, 225, 222);
  border-radius: 15px;
  margin: 20px;
  width: 12em;
}

.chart{
  border: 1px solid;
  border-color: rgb(228, 225, 222);
  border-radius: 15px;
  margin: 10px;
  padding: 10px;

}
.sub-section{
  border: 1px solid;
  border-color: rgb(228, 225, 222);
  border-radius: 15px;
  margin:20px;
  width: 600px;
}
.transaction1{
  display: flex;
  width: 599px;
  padding: 20px;
  align-items: center;
  justify-content: space-evenly;
  border-bottom: 1px solid;
  border-color: rgb(228, 225, 222);

}
.state{
  background-color: rgb(177, 238, 177);
  padding: 0 10px;
  border-radius: 13px;
  font-size: 13px;
  color: rgb(52, 136, 52);
}
.state::before {
  content: '';
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: rgb(52, 136, 52); 
  margin-right: 8px; 
}
.state2{
  background-color: rgb(238, 238, 124);
  padding: 0 10px;
  border-radius: 13px;
  font-size: 13px;
  color: rgb(173, 173, 28); 
}

.state2::before {
  content: '';
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: rgb(173, 173, 28); 
  margin-right: 8px; 
}
.state3{
  background-color: rgb(243, 172, 139);
  padding: 0 10px;
  border-radius: 13px;
  font-size: 13px;
  color: rgb(211, 59, 59);  
}
.state3::before {
  content: '';
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: rgb(211, 59, 59); 
  margin-right: 8px; 
}
</style>