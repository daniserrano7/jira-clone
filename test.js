function test(date) {
  const xmasDate = new Date("Dec 25, 2021");
  const diffMs = xmasDate - date;
  return Math.floor(diffMs / 1000 / 60 / 60 / 24);
}

const date = new Date("Dec 25, 2021 00:00:01")
console.log(test(date));