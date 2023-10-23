const allergens = {
    eggs: 1,
    peanuts: 2,
    shellfish: 4,
    strawberries: 8,
    tomatoes: 16,
    chocolate: 32,
    pollen: 64,
    cats: 128,
  };
  
  function allergi(score, allergen) {
    return (score & allergens[allergen]) !== 0;
  }
  
  function listaAvAllergiP(score) {
    const allergies = [];
  
    for (const allergen in allergens) {
      if (allergi(score, allergen)) {
        allergies.push(allergen);
      }
    }
  
    return allergies;
  }
  
  const score = 34;
  console.log("Are u allergic to peanuts?", allergi(score, "peanuts"));
  console.log("You allergies:", listaAvAllergiP(score));