<?php
$input = array(1, 2, 3, 4, 5, 6);

// Создает новую анонимную функцию и присваевает её к переменной
$filter_even = function ($item) {
    return ($item % 2) == 0;
};

// Встроенная функция принимает, как массив, так и функцию
$output = array_filter($input, $filter_even);

// Функции не обязательно нужно быть присвоенной к переменной. Это так-же работает:
$output = array_filter($input, function ($item) {
    return ($item % 2) == 0;
});

print_r($output);

$rate = 12;

$findInterest = function ($value) use ($rate) {
    return $value * $rate;
};
$interest = $findInterest(100);

/*массив в строку*/

$array = array('имя', 'почта', 'телефон');
$comma_separated = implode(",", $array);


// найти все php и txt файлы
$files = glob('*.{php,txt}', GLOB_BRACE);

print_r($files);
/* на выходе:
Array
(
    [0] => phptest.php
    [1] => pi.php
    [2] => post_output.php
    [3] => test.php
    [4] => log.txt
    [5] => test.txt
)
*/
$files = glob('../images/a*.jpg');

// Применить функцию 'realpath' к каждому элементу массива
$files = array_map('realpath',$files);

print_r($files);
/* выведет:
Array
(
    [0] => C:\wamp\www\images\apple.jpg
    [1] => C:\wamp\www\images\art.jpg
)
*/
// генерируем случайную строку
echo uniqid();
/* выведет
4bd67c947233e
*/

// ещё разок
echo uniqid();
/* выведет
4bd67c9472340
*/
$string =
"Lorem ipsum dolor sit amet, consectetur
adipiscing elit. Nunc ut elit id mi ultricies
adipiscing. Nulla facilisi. Praesent pulvinar,
sapien vel feugiat vestibulum, nulla dui pretium orci,
non ultricies elit lacus quis ante. Lorem ipsum dolor
sit amet, consectetur adipiscing elit. Aliquam
pretium ullamcorper urna quis iaculis. Etiam ac massa
sed turpis tempor luctus. Curabitur sed nibh eu elit
mollis congue. Praesent ipsum diam, consectetur vitae
ornare a, aliquam a nunc. In id magna pellentesque
tellus posuere adipiscing. Sed non mi metus, at lacinia
augue. Sed magna nisi, ornare in mollis in, mollis
sed nunc. Etiam at justo in leo congue mollis.
Nullam in neque eget metus hendrerit scelerisque
eu non enim. Ut malesuada lacus eu nulla bibendum
id euismod urna sodales. ";

$compressed = gzcompress($string);

echo "Original size: ". strlen($string)."\n";
/* выведет
Original size: 800
*/

echo "Compressed size: ". strlen($compressed)."\n";
/* выведет
Compressed size: 418
*/

// возвращаем
$original = gzuncompress($compressed);

