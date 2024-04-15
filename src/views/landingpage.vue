<template>

<!-- Navbar Section -->
<nav class="navbar">
  <div class="logo-section">
    <a class="navbar-brand" href="#">
     <img src="~@/assets/jerry.png" alt="logo" style="width: 40px; margin-left: 20px;">
    </a>
  </div>
  <div class="end">
    <ul>
      <li>
        
        <RouterLink to="/">Sign up<img src="~@/assets/sign-up.svg" alt="sign-up" style="width: 14px;"></RouterLink>
        <RouterLink to="/login">Sign in<img src="~@/assets/sign-in.svg" alt="sign-in" style="width: 14px;"></RouterLink>
      </li>
    </ul>
  </div>
 </nav>

<!-- Hero Section -->
<div class="main">
  <div class="left-col">
    <h1 style="margin-bottom: 2rem;">Welcome to Muse</h1>
    <p style="margin-bottom: 2rem;">
      Explore our outstanding  finance management system. Browse our event catalogue to
      find exciting plans that <br>suits your interests. sign up now to enjoy seamless finance <br>
      management on this platform.
    </p>
    <button  class="cta" style="margin-bottom: 2rem;">
      <RouterLink to="/" style="color: white;">Get started<img src="~@/assets/arrow.svg" alt="arrrow" class="arrow"></RouterLink>
      
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
    <img src="~@/assets/event-access.png" alt="" >
    <p style="font-size: 12px; text-align: center;">
      Access a 100+ budget plans <br>on this platform.
    </p>
  </div>
  <div class="section1">
    <img src="~@/assets/people.png" alt="">
    <p style="font-size: 12px; text-align: center;">
      Reach a million<br>viewers.
    </p>
  </div>
  <div class="section1">
    <img src="~@/assets/track.png" alt="" >
    <p style="font-size: 12px; text-align: center;">
      Track your expenditure <br>with ease
    </p>
  </div>
  <div class="section1">
    <img src="~@/assets/receipt.png" alt="" >
    <p style="font-size: 12px; text-align: center;">
      Quick transactions with ease<br>
    </p>
  </div>
</div>
<!-- Events section -->
<!-- <h1 style="font-size: 35px; text-align: center; margin-top: 2rem;">Events </h1>
<div class="card-container">
  <div class="cards">
    <img src="~@/assets/cardimage1.jpg" alt="">
    <div class="card-content">
      <h3>Party</h3>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus quos illo,</p>
      <a href="#" class="cta">Get ticket</a>
    </div>
  </div>
  <div class="cards">
    <img src="~@/assets/cardimage1.jpg" alt="">
    <div class="card-content">
      <h3>Party</h3>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus quos illo,</p>
      <a href="#" class="cta">Get ticket</a>
    </div>
  </div>
  <div class="cards">
    <img src="~@/assets/cardimage1.jpg" alt="">
    <div class="card-content">
      <h3>Party</h3>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus quos illo,</p>
      <a href="#" class="cta">Get ticket</a>
    </div>
  </div>
  <div class="cards">
    <img src="~@/assets/cardimage1.jpg" alt="">
    <div class="card-content">
      <h3>Party</h3>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus quos illo,</p>
      <a href="#" class="cta">Get ticket</a>
    </div>
  </div>
</div>
<hr>
<!-- Partners Section -->
<!-- <div class="partners">
  <h1 style="font-size: 35px; text-align: center; margin-top: 2rem;">Partners </h1>
  <div class="part">
    <div class="p1">
      <img src="~@/assets/logos1.png" alt="">
    </div>
    <div class="p1">
      <img src="~@/assets/logos2.jpg" alt="">
    </div>
    <div class="p1">
      <img src="~@/assets/logos3.png" alt="">
    </div>
    <div class="p1">
      <img src="~@/assets/logos4.png" alt="">
    </div>

  </div>
</div>  -->

<!-- Footer -->
<footer>
  <div class="row-1">
    <img src="~@/assets/jerry.png" alt="logo" style="width: 40px; margin: 20px;">
    <div class="search">
      <img src="~@/assets/search.png" alt="" class="search-img">
      <input type="text" placeholder="Search">
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
  font-size: 13px;
  font-weight: 100;
  border: none;
  padding: 3px 10px 3px 10px;
  border-radius: 18px;
 }
 .arrow{
  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);
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
  background-image: url("../assets/pic3.jpg");
 }
 .card2{
  background-image: url("../assets/pic1.jpg");
 }
 .card3{
  background-image: url('../assets/pic2.jpg');
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

/* Events Section */
.card-container{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 100px;
}
.cards{
  width: 200px;
  background-color:rgb(235, 247, 235);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  margin: 20px;
}
.cards img{
  width: 100%;
  height: 170px;
}
.card-content{
  padding: 16px;
}
.card-content h3{
  font-size: 28px;
  margin-bottom: 8px;
}
.card-content p{
  color: #666;
  font-size: 15px;
  line-height: 1.3;
  margin-bottom: 10px;
}

/* Partners */
.part{
  margin: 30px;
  display: flex;
  justify-content: space-evenly;
}
.p1 img{
  height: 50px;
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