<?php
session_start();

unset($_SESSION['user']);

header('Location: 20181101_session.php');

