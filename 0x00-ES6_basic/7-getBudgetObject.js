export default function getBudgetObject(...args) {
  const budget = {
    income: args[0],
    gdp: args[1],
    capita: args[2],
  };

  return budget;
}
