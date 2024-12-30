import { apiKey } from "./util.js";

console.log(apiKey); // abc123

const hobbies = ["Sports", "Cooking", "Reading"];
const editHobbies = hobbies.map((hobby, idx) => ({text: hobby}));
console.log(editHobbies); // [{text: "Sports"}, {text: "Cooking"}, {text: "Reading"}]
