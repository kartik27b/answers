const data = [
  {
    date: "2020-06-18",
    amount: 200,
  },
  {
    date: "2019-05-21",
    amount: 100,
  },
  {
    date: "2020-04-20",
    amount: 250,
  },
  {
    date: "2020-05-01",
    amount: 500,
  },
  {
    date: "2019-03-05",
    amount: 600,
  },
];

const result = {};

for (let payment of data) {
  const date = payment.date.split("-");
  const year = date[0];
  const amount = payment.amount;
  const month = date[1];

  if (result[year]) {
    result[year].total += payment.amount;
  } else {
    result[year] = {};
    result[year].total = payment.amount;
  }

  if (result[year].months) {
    result[year].months[month] = amount;
  } else {
    result[year].months = {};
    result[year].months[month] = amount;
  }
}

console.log(result);
console.log(JSON.stringify(result));
