<?php
if(isset($message)){
   foreach($message as $message){
      echo '
      <div class="message">
         <span>'.$message.'</span>
         <i class="fas fa-times" onclick="this.parentElement.remove();"></i>
      </div>
      ';
   }
}
?>

<header class="header">

   <div class="flex">

      <a href="admin_page.php" class="logo"> <span>Sanjeev_Buddy_Shopi</span> <sup style="color:red" >AdminPanel</sup></a>

      <nav class="navbar">
         <a class="abc" href="admin_page.php">home</a>
         <a class="abc" href="admin_products.php">products</a>
         <a class="abc" href="admin_orders.php">orders</a>
         <a class="abc" href="admin_users.php">users</a>
         <a class="abc" href="admin_contacts.php">messages</a>
      </nav>

      <div class="icons abc">
         <div id="menu-btn" class="fas fa-bars"></div>
         <div id="user-btn" class="fas fa-user"></div>
      </div>

      <div class="account-box">
         <p>username : <span><?php echo $_SESSION['admin_name']; ?></span></p>
         <p>email : <span><?php echo $_SESSION['admin_email']; ?></span></p>
         <a href="logout.php" class="delete-btn">logout</a>
         <div>new <a href="login.php">login</a> | <a href="register.php">register</a></div>
      </div>

   </div>

</header>