/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  }
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let result = [];
  let categoryMap = {};

  for (let i = 0; i < transactions.length; i++) {
    const currentCategory = transactions[i].category;
    const currentPrice = transactions[i].price;

    if (categoryMap[currentCategory]) {
      categoryMap[currentCategory] += currentPrice;
    }
    else {
      categoryMap[currentCategory] = currentPrice;
    }
  }
  for (const cat in categoryMap) {
    result.push({ category: cat, totalSpent: categoryMap[cat] });
  }
  return result;
}

module.exports = calculateTotalSpentByCategory;
