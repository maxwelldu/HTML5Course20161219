<link rel="stylesheet" href="http://cdn.bootcss.com/bootstrap/3.3.0/css/bootstrap.min.css">
<meta charset="utf-8">

<form action="04_get.php" method="get">
    <label>
        用户名：
        <input type="text" name="username">
    </label><br/>
    <label>
        密码：
        <input type="password" name="password">
    </label><br>
    <label>
        爱好：
        <input type="checkbox" name="fav[]" value="0"> LOL
        <input type="checkbox" name="fav[]" value="1"> 阴阳师
        <input type="checkbox" name="fav[]" value="2"> CF
        <input type="checkbox" name="fav[]" value="3"> DOTA
    </label><br/>
    <input type="submit" value="注册" class="btn btn-primary">
</form>


