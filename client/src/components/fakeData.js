const fakeProducts = [
  {
    name: "Snake Oil",
    price: "79",
    description: "cures everything from boredom to Flippy Foot",
    images:
      "https://i.etsystatic.com/5153295/r/il/55039e/1134500552/il_794xN.1134500552_ajkf.jpg",
  },
  {
    name: "Cocaine-a-Cola",
    price: "50",
    description: "smells great",
    images:
      "https://www.emra.org/contentassets/b1dc416e71b74516a086213e8ca066de/coffee2-600x336.jpg?w=600",
  },
  {
    name: "The Left Eyeball of a Dytraxian Salamander",
    price: "30",
    description: "recover additional MP when made into an elixir",
    images: "https://i.redd.it/c30szsrjd4l21.jpg",
  },
  {
    name: "100 mL of Toothpaste",
    price: "20",
    description: "lol it's actually 101 mL but the TSA don't know that",
    images:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F31AY%252BGLoyKL.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.com%2FCrest-Travel-Size-Regular-Toothpaste%2Fdp%2FB004MTC8UA&tbnid=oMN_2HHQOYSWTM&vet=12ahUKEwjWyJiL0_TvAhXsAzQIHWq3DFsQMygBegUIARDZAg..i&docid=AbX1dJYVjmbtsM&w=500&h=500&q=travel%20toothpaste&ved=2ahUKEwjWyJiL0_TvAhXsAzQIHWq3DFsQMygBegUIARDZAg",
  },
];

const drinks = [
  {
    id: 1,
    name: "gin",
    price: 0.6,
    description: "really great stuff my brother Al makes. Super strong too.",
    images:
      "https://res.cloudinary.com/dli6sknqy/image/upload/v1618130747/gin_o9ydvm.svg",
  },
  {
    id: 2,
    name: "whiskey",
    price: 0.75,
    description: "tastes good",
    images:
      "https://res.cloudinary.com/dli6sknqy/image/upload/v1618130747/whiskey_mkrcjw.svg",
  },
  {
    id: 3,
    name: "moonshine",
    price: 0.5,
    description: "also tastes good",
    images:
      "https://res.cloudinary.com/dli6sknqy/image/upload/v1618130747/moonshine_qeop49.svg",
  },
];

const dumbAnswers = [
  "Hmmm, sounds like measles",
  "Take two of these and you'll feel like the bees knees!",
  "Well that doesn't sound too good.",
  "As I see it, yes.",
  "Ask again later.",
  "Better not tell you now.",
];

module.exports = { fakeProducts, drinks, dumbAnswers };
