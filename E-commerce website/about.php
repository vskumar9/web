<?php

include 'config.php';

session_start();

$user_id = $_SESSION['user_id'];

if(!isset($user_id)){
   header('location:login.php');
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>about</title>

   <!-- font awesome cdn link  -->
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">

   <!-- custom css file link  -->
   <link rel="stylesheet" href="css/style.css">
   <link rel="icon" href="/images/download.png">

</head>
<body>
   
<?php include 'header.php'; ?>

<div class="heading">
   <h3>about us</h3>
   <p> <a href="home.php">home</a> / about </p>
</div>

<section class="about">

   <div class="flex">

      <div class="image">
         <img src="images/laptops/apple-2.jpg" alt="">
      </div>

      <div class="content">
         <h3>why choose us?</h3>
         <p>Believe online shopping has a better future for both buyers and retailers using the innovative latest technology. 
            The use of the internet in shopping has become necessary, especially during the epidemic we are facing right now. 
            The heath of others and ourselves is the primary reason why do people shop online. If you have anything else in your mind, 
            you can share it with us by making comments. We love further discussion about online shopping from your point of view.</p>
         <p>During festivals or important occasions like marriage, we require various products for household use and decorations. 
            Sometimes we need to buy different gifts according to our relatives, friends, and family’s preference. 
            Online shopping makes checkout procedure easy (as claimed by 30% of shoppers) and also saves us from the hassle of carrying bags around. 
            We can buy different products from a single store without worrying about the package delivery. Online retailers give their users discounts 
            and quick delivery options. If we talk about statics, around 28% of shoppers shop online because of the ease of next-day delivery while 53% 
            of customers claim free delivery charges to be the purpose of online shopping</p>
         <a href="contact.php" class="btn">contact us</a>
      </div>

   </div>

</section>

<section class="reviews">

   <h1 class="title">client's reviews My Shopi</h1>

   <div class="box-container">

      <div class="box">
         <img src="images/DSC_0002.JPG" alt="">
         <p>Sanjeev_Buddy_Shopi</p>
         <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
         </div>
         <h3>V Sanjeev kumar</h3>
      </div>
   </div>

</section>

<?php include 'footer.php'; ?>

<!-- custom js file link  -->
<script src="js/script.js"></script>

</body>
</html>