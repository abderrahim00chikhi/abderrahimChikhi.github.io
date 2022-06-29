<!doctype html>
<html lang="en">
  <head>
  	<title>Login 01</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

	<link href="https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap" rel="stylesheet">

	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
	
	<link rel="stylesheet" href="css/style.css">

	</head>
	<body>



<div class="lines">
  <div class="line"></div>
  <div class="line"></div>
  <div class="line"></div>
</div>




	<section class="ftco-section">
		<div class="container">
			<div class="row justify-content-center">
			</div>
			<div class="row justify-content-center">
				<div class="col-md-7 col-lg-5">
					<div class="login-wrap p-4 p-md-5">
		      	<!-- <div class="icon d-flex align-items-center justify-content-center">
		      		<span class="fa fa-user-o"></span>
		      	</div> -->
		      	<h3 class="text-center mb-4">Creat an account</h3>
						<div class="messageArea"></div>


						<form action="../manager.php" method="post" class="login-form" >
							
								<!-- <input name="req" value="register" style="display:none"></input> -->
								<div class="form-group">
			      			<input type="email" class="form-control rounded-left" placeholder="Your email" id="email" name="email" required>
			      		</div>
			      		<div class="form-group">
			      			<input type="text" class="form-control rounded-left" placeholder="Username" id="userName" name="user_name" required>
			      		</div>
		            <div class="form-group d-flex">
		              <input type="password" class="form-control rounded-left" placeholder="Password" id="password" name="password" required>
		            </div>
		            <div class="form-group d-flex">
		              <input type="password" class="form-control rounded-left" placeholder="Confirm password" id="confirmPassword" name="confirm_password" required>
		            </div>
		            <div class="form-group">
		            	<button type="submit" class="form-control btn btn-primary rounded submit px-3" disabled id="submit">Register</button>
		            </div>
		            	<label>do you have an account? </label>
										<a href="../login/" id="login" name="login">Login</a>

	          </form>
	          <div id="lineOfSucess"></div>
	        </div>
				</div>
			</div>
		</div>
	</section>

	<script src="js/jquery.min.js"></script>
  <script src="js/popper.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <script src="js/main.js"></script>
  <script src="script.js"></script>

	</body>
</html>

