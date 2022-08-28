const tarih = new Date();
const vakit = tarih;


console.log(new Intl.DateTimeFormat("tr-TR").format(vakit));
console.log(vakit);

module.exports = {vakit};

