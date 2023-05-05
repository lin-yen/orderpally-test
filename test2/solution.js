const recipes1 = [
  ["Salad", "Tomato", "Cucumber", "Salad", "Sauce"],
  ["Pizza", "Tomato", "Sausage", "Sauce", "Dough"],
  ["Quesadilla", "Chicken", "Cheese", "Sauce"],
  ["Sandwich", "Salad", "Bread", "Tomato", "Cheese"]
]

solution(recipes1)

const recipes2 = [
  ["Pasta", "Tomato Sauce", "Onions", "Garlic"],
  ["Chicken Curry", "Chicken", "Curry Sauce"],
  ["Fried Rice", "Rice", "Onions", "Nuts"],
  ["Salad", "Spinach", "Nuts"],
  ["Sandwich", "Cheese", "Bread"],
  ["Quesadilla", "Chicken", "Cheese"]
]

solution(recipes2)

function solution(recipes) {
  console.log('input:', recipes)

  const list = []


  for(let i = 0; i < recipes.length; i++) {
    for(let j = 1; j < recipes[i].length; j++) {
      if (!list[recipes[i][j]]) {
        list[recipes[i][j]] = [];
      }

      list[recipes[i][j]].push(recipes[i][0])
    }
  }

  const outputList = Object.keys(list)
    .filter((item) => list[item].length > 1)
    .sort((a, b) => a.localeCompare(b))
    .map((item) => [item].concat(list[item].sort((a, b) => a.localeCompare(b))))

  console.log('output:', outputList)
}