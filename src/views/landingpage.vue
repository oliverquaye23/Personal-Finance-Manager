<template>

<!-- Navbar Section -->
<nav class="navbar">
  <div class="logo-section">
    <a class="navbar-brand" href="#">
      <img :src="require('@/assets/jerry.png')" alt="logo" style="width: 40px; margin-left: 20px;">
    </a>
  </div>
  <div class="end">
    <ul>
      <li>
        <RouterLink to="/signup">Sign up<img :src="require('@/assets/sign-up.svg')" alt="" style="width: 14px;"></RouterLink>
        <RouterLink to="/login">Sign in<img :src="require('@/assets/sign-in.svg')" alt="" style="width: 14px;"></RouterLink>
      </li>
    </ul>
  </div>
 </nav>

<!-- Hero Section -->
<div class="main">
  <div class="left-col">
    <h1 style="margin-bottom: 2rem;">Welcome to Medallion</h1>
    <p style="margin-bottom: 2rem;">
      Explore our outstanding  finance management system. Browse our catalogue to
      find exciting plans that <br>suits your interests. sign up now to enjoy seamless finance <br>
      management on this platform.
    </p>
    <button  class="cta" style="margin-bottom: 2rem;">
      <RouterLink to="/dashboard" style="color: white;">Get started<i class="bi bi-arrow-right" style="color: white;"></i></RouterLink>
      
    </button>
    
    <p class="bottom-note" style="font-size: 12px;">
      Over 500+ users around the world. Join the team now and enjoy seamless event management.
    </p>
  </div>
  <div class="right-col">
    <div class="card card1">
      
    </div>
    <div class="card card2">

    </div>
    <div class="card card3">

    </div>
  </div>
</div>

<!-- Credibility section -->
<h1 style="font-size: 35px; text-align: center; margin-top: 2rem;">Platform Benefits</h1>
<div class="main-container">
  <div class="section1">
    <img :src="require('@/assets/event-access.png')" alt="" >
    <p style="font-size: 12px; text-align: center;">
      Access a 100+ budget plans <br>on this platform.
    </p>
  </div>
  <div class="section1">
    <img :src="require('@/assets/people.png')" alt="">
    <p style="font-size: 12px; text-align: center;">
      connecting you with your<br>business people.
    </p>
  </div>
  <div class="section1">
    <img :src="require('@/assets/track.png')" alt="" >
    <p style="font-size: 12px; text-align: center;">
      Track your expenditure <br>with ease
    </p>
  </div>
  <div class="section1">
    <img :src="require('@/assets/receipt.png')" alt="" >
    <p style="font-size: 12px; text-align: center;">
      Quick transactions with ease<br>
    </p>
  </div>
</div>
<!-- Features -->
<div class="features">
  <h1 style="font-size: 35px; text-align: center; margin-top: 2rem; margin-bottom: 2rem;">Features</h1>

  <div class="feature1">
    <div class="illustration">
      <img :src="require('@/assets/analytics.svg')" alt="" style="width: 400px;">
    </div>
    <div class="illustration-text">
        <h1 style="font-size: 30px;">Informed planning</h1>
        <p>This system helps you to make necessary plans about your finances <br>
            to help you avoid the situation of over spending and impulse buying. <br>
            The system makes you more aware of your personal expenditure and budgets and <br>
            helps make you financially disciplined.
        </p>
    </div>
  </div>
  <div class="feature1">
    <div class="illustration-text">
        <h1 style="font-size: 30px;">Easy Payments</h1>
        <p>This system helps you to make secure transactions and<br>
          implements robust security measures to safeguard users' financial <br>
           information during transactions. By offering secure payment gateways <br>
            and encryption technologies, users can feel confident about the safety <br>
            of their transactions.
        </p>
    </div>
    <div class="illustration">
      <img :src="require('@/assets/payments.svg')" alt="" style="width: 400px;">
    </div>
    
  </div>
  <div class="feature1">
    <div class="illustration">
      <img :src="require('@/assets/expenditure.svg')" alt="" style="width: 400px;">
    </div>
    <div class="illustration-text">
        <h1 style="font-size: 30px;">Expenditure tracking</h1>
        <p>This system empowers users to monitor their spending habits <br>
           and achieve financial goals with greater ease. By offering intuitive <br>
            tools for tracking expenditures, users gain visibility into where <br>
             their money goes, allowing them to make informed decisions. 
        </p>
    </div>
  </div>
</div>
<!-- Testimonials -->
<div class="testimonials">
  <div class="inner">
    <h1 style="font-size: 35px; text-align: center; margin-top: 2rem;">Testimonials</h1>
    <div class="border"></div>

    <div class="row">
      <div class="col">
        <div class="testimonial">
          <img :src="require('@/assets/Person1.jpg')" alt="">
          <div class="name">Max Brandit</div>
          <p>
            Using this financial web app has completely changed the 
             way I manage my money. It's so easy to track my expenses 
              and set budgets. I now have a clear picture of where my 
               money is going and can plan ahead with confidence. Highly 
                recommended for anyone looking to take control of their finances!
          </p>
        </div>
      </div>
      <div class="col">
        <div class="testimonial">
          <img :src="require('@/assets/person2.jpg')" alt="">
          <div class="name">alice wright</div>
          <p>
            I've tried several financial apps, but this one stands 
             out for its simplicity and effectiveness. It helped me 
             identify unnecessary expenses and save more each month. 
             The ability to categorize transactions and receive insightful 
              reports has been invaluable.
          </p>
        </div>
      </div>
      <div class="col">
        <div class="testimonial">
          <img :src="require('@/assets/person3.jpg')" alt="">
          <div class="name">sam winfrey</div>
          <p>
            As a busy professional, managing finances can be overwhelming. 
             This app has made it  easy to stay on top of my 
             spending and savings goals. I can quickly track my expenses and 
              visualize my financial health. It's a game-changer for anyone who 
               wants to achieve financial stability without the hassle.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- Footer -->
<footer>
  <div class="row-1">
    <img :src="require('@/assets/jerry.png')" alt="logo" style="width: 50px; margin-left: 20px;">
    <div class="search">
      <img src="~@/assets/search.png" alt="" class="search-img">
      <input type="text" placeholder="Search">
    </div>
  </div>
  
  <div class="row-2">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/signin">Sign in</a></li>
      <li><a href="/signup">Sign up</a></li>
    </ul>
    <div class="copyright">
      All rights reserved &copy;
    </div>
  </div>
</footer>


</template>

<style scoped>
*{
  font-family: "Roboto", sans-serif;
  margin: 0;
  padding: 0;
}

/* Navbar section */
.navbar{
  background-color:rgb(235, 247, 235);
  padding: 0 10px 0 10px;
  align-items: center;
  justify-content: space-between; 
  display: flex;
}


a{
  text-decoration: none;
}
h2{
  color: rgb(131, 138, 141);
}
.end{
  display: flex;
}
nav ul{
  list-style-type: none;
}
nav ul li a{ 
  margin-right: 15px;
  font-size: 13px;
  color: black;
  font-weight: 600;
  padding: 2px 5px;
  position: relative;
}
nav ul li a::after {
  content: ''; 
  position: absolute; 
  bottom: -5px; 
  left: 0;
  width: 100%;
  height: 2px; 
  background-color: black; 
  transform: scaleX(0); 
  transition: transform 0.3s ease; 
}

nav ul li a:hover::after {
  transform: scaleX(1); 
}


/* Hero Section */
 .main{
  display: flex;
  gap: 2rem;
  background-color:rgb(235, 247, 235);
  margin: 2rem;
  padding: 20px;
  border-radius: 20px;
  justify-content: space-between; 
 }
 .cta{
  background-color: black;
  color: white;
  font-size: 14px;
  font-weight: 100;
  border: none;
  padding: 3px 10px 3px 10px;
  border-radius: 18px;
 }
 
.left-col{
  text-align: center;
  margin:  5em 0px 0px 10em;
}
h1{
  font-size: 5em;
  font-weight: 800;
}
p{
  font-size: 15px;
  font-weight:300;
  color: rgb(131, 138, 141);
}


 .right-col{
  display: grid;
  gap: .7em;
  grid-template-columns: repeat(2, auto);
  grid-template-areas: 
      "left right"
      "left bottom";
 }

 .card{
  border-radius: .8em;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  align-items: end;
  width: 10em;
 }

 .card1{
  grid-area: left;
  background-image: url("../assets/card.jpg");
 }
 .card2{
  background-image: url("../assets/finance.jpg");
 }
 .card3{
  background-image: url('../assets/money.jpg');
 }

 /* credibility section */
 strong{
  text-align: center;
 }
 .main-container{
  display: flex;
  margin: 0 2rem 2rem 2rem;
  padding: 2rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
 }
 .section1{
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 220px;
  background-color: rgb(225, 238, 238);
  border-radius: 50%; 
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 24px;
  margin: 10px;
 }

/* features*/
.features{
  margin: 20px;
  padding: 20px;

}
.feature1{
  display: flex;
  gap: 20px;
  margin: 40px;
}
.testimonials{
  padding: 40px 0;
  background: #f1f1f1;
  color: #434343;
  text-align: center;
}
.inner{
  max-width: 1200px;
  margin: auto;
  overflow: hidden;
  padding: 0 20px;
}
.border{
  width: 160px;
  height: 5px;
  background: #079979;
  margin: 26px auto;
  border: none;
}
.row{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.col{
  flex: 33.33%;
  max-width: 33.33%;
  box-sizing: border-box;
  padding: 15px;
 
}
.testimonial{
  background: #fff;
  padding: 30px;
  border-radius: 15px;
}
.testimonial img{
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.name{
  font-size: 20px;
  text-transform: uppercase;
  margin: 20px 0;
}
/* footer */
footer{
  background-color: rgb(11, 12, 12);
  justify-content: center;
  height: 200px;
}
.row-1{
  display:flex;
  justify-content: space-between;
}
.row-2{
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
.row-2 ul li a{
  text-decoration: none;
  color: #a79e9e;
  font-size: 13px;
}
.copyright{
  color: #fff;
  font-size: 14px;
  font-weight: 200;
}
.search{
  margin: 20px;
}
.search-img{
  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);
margin-right: 10px;
}
input{
  background-color: transparent;
  border: 1px solid;
  color: white;
  border-radius: 20px;
  padding: 5px 10px;
}
</style>