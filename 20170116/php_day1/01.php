<style>
    div{ width: 200px; height: <?php echo 2 * 100; ?>px;
        background-color: orange; }
</style>
<div></div> <h1> <?php echo 12 % 7; ?> </h1>
<?php
$name = "maxwell";//php的变量, 相当于js里面的var name = ""
echo $name; ?>
<script>
    var name = "<?php echo $name ?>"; //    var name = "maxwell";
    console.log(name);
</script>
