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