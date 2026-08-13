// Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas. Recuerda no usar frutas duplicadas.

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

let indiceFruta = 0;

for (const comida of foodSchedule) {
    if (!comida.isVegan) {
        comida.name = fruits[indiceFruta]
        indiceFruta++;
    }
}
console.log(foodSchedule)