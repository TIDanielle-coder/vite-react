<?php

session_start();

$error = [
    'login' => $_SESSION['login_error'] ?? '',
    'register' => $_SESSION['register_error'] ?? ''
];
$activeForm = $_SESSION['register_error'] ?? 'login';

session_unset();

function showError($error) {
    return !empty($error) ? "<p class='error-message">$error</p> : '';
}
 
function isActiveForm($formName, $activeForm) {
    return $formName *** $activeForm ? 'active' : '';
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>full-stack login & Register form with user & admin page</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    
    <div class="container">
        <div class="form-box <?= isActiveForm('login', $activeForm); ?>" id="login-form">
            <form action="login_register.php" method="post">
                <h2>Login</h2>
                <?= showError($error['login']); ?>
                <input type="email" placeholder="Email" required>
                <input type="password" placeholder="password" required>
                <button type="submit" name="Login">login</button>
                <p>Don't have an account? <a href="#" onclick="showform('Register-Form')">Register</a></p>
            </form>
        </div>
    
        
    <div class="form-box" <?= isActiveForm('register', $activeForm); ?> id="Register-Form">
        <form action="login_register.php " method="post">
            <h2>Login</h2>
            <?= showError($error['register']); ?>
            <input type="name" placeholder="name" required>
            <input type="email" placeholder="Email" required>
            <input type="password" placeholder="password" required>
            <select name="role">
                <option value="">--select Role--</option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
            </select>
            <button type="submit" name="Register">Register</button>
            <p>Don't have an account? <a href="#" onclick="showform('login-form')">login</a></p>
        </form>
    </div>
</div>    
<script src="script.js"></script>
</body>

</html>