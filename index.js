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
for (let i = 1.2; i <= 2.9; i += 0.2) {
  console.log(i.toFixed(1));
};

// Пользователь вводит курс доллара в рублях. Показать таблицу цен 1$, 2$, ..., 100$ в рублях, третьим столбцом добавить количество кг конфет, которые можно купить на данные суммы, если цена 1 кг конфет равна 20 руб. Пример: 1$ - 70 р - 3.5 кг и так далее (всего 100 строк).
const table = (num) => {
  for (let i = 1; i <= 100; i += 1) {
    console.log(i, i * num, i * num / 20)
  }
};
// table(65);

// Для данного n найти сумму 1+2+3+...+n. Например, для n=10 ответ равен 55.
const sum = (num) => {
  let s = 0;
  for (let i = 1; i <= num; i += 1) {
    s += i
    console.log(s);
  }
};
sum(10);

// Найти сумму 10+11+12+13+...+88. Материал сайта www.itmathrepetitor.ru Ответ: 3871
let m = 0;
for (let i = 10; i <= 88; i += 1) {
  m += i;
}
console.log(m);

// Найти произведение 5⋅6⋅7⋅...⋅13.
let num = 1;
for (let i = 5; i <= 13; i += 1) {
  num *= i;
};
console.log(num);

// Найти сумму  1+4+7+11+...+112.
let number = 0;
for (let i = 1; i <= 112; i += 3) {
  number += i;
};
console.log(number);
