<html>
	<head></head>
	<body>
		发工资了，我可以买一个
		iphone <?php echo 3+4; ?>!

		请选择出生年份：
		<select>
			<?php
				for($i = 1930; $i < 2017; $i++) {
			?>
				<option><?php echo $i; ?></option>
			<?php
				}
			?>
		</select>
	</body>
</html>