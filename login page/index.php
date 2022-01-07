
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    <script src="ashu.js"></script>
</head>
<body>
    
    <div class="login">
        <h2>Login</h2>
        <p id= "msg"></p>
        <form action="hero.php" method="post">
            <div class="email">
                <input type="text" name="email" id="abc" required>
                <label for="email">Email</label>
            </div>
            <div class="email">
                <input type="text" name="password" id="password" required>
                <label for="mobileno">Mobile No</label>
            </div>
            <a href="" onclick="func(event)" name ="submit">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Submit </a>
        </form>
        <p id ="para"></p>
    </div>

<?php
if(isset($_POST['submit'])){
 
    










}







?>
</body>
</html>

