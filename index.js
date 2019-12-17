// Выведите на экран 10 раз фразу "You are welcome!"
const text = "You are welcome!";
const repetition = 10;
for (let i = 0; i < repetition; i += 1) {
  console.log(text);
};

// Выведите на экран n раз фразу "Silence is golden". Число n вводит пользователь.
const textDescription = (n) => {
  for (let j = 0; j < n; j += 1) {
    console.log("Silence is golden");
  }
};
textDescription(3);

// Выведите на экран прямоугольник из нулей. Количество строк вводит пользователь, количество столбцов равно 5.
const rectangle = (num) => {
  for (let i = 0; i < num; i += 1) {
    console.log(0, 0, 0, 0, 0);
  }
};
rectangle(2);

// Выведите на экран числа 1, 2, 3, 4, ..., 20.
for (let i = 1; i <= 20; i += 1) {
  console.log(i);
};

// Вывести на экран ряд чисел 1001,  1004,  1007,  ... 1025.
for (let j = 1001; j <= 1025; j += 3) {
  console.log(j);
};

// Вывести на экран числа 100, 96, 92, ... до последнего положительного включительно.
for (let i = 100; i > 0; i -= 4) {
  console.log(i);
};

// Выведите на экран числа 1.2, 1.4, 1.6, ..., 2.8.
for (let i = 1.2; i <= 2.8; i += 0.2) {
  console.log(i);
};
