const PRICE = 800;
const DISCOUNTS = [0, 0, 5, 10, 20, 25];
const cost = (books) => {
  const allBooks = [...Array(6).keys()].splice(1, 5);
  let totalPrice = 0;
  let sets = [];
  while (books.length) {
    const uniqueBooks = new Set(books);
    for (const book of uniqueBooks.values()) {
      const targetBook = books.findIndex(b => b === book);
      books.splice(targetBook, 1);
    }
    sets.push(uniqueBooks);
  }
  sets = sets.map(x => x.size);
  while (sets.includes(5) && sets.includes(3)) {
    totalPrice += (PRICE - PRICE / 100 * 20) * 8;
    sets.splice(sets.indexOf(5), 1);
    sets.splice(sets.indexOf(3), 1);
  }
  for (const set of sets) {
    totalPrice += (PRICE - PRICE / 100 * DISCOUNTS[set]) * set;
  }
  return totalPrice;
};