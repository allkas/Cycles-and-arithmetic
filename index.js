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
