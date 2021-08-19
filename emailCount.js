const fs = require("fs");

const filePath = "./test.txt";
const softwire = /[^\s]+@softwire\.com/g;
const emailReg = /[^\s]+@\w+\.[^\s]+/g;
const emailReg2 = /[^\s]+(@\w+\.)[^\s]+/g;
const domainReg = /.*@[^\s]+\.[^\s]+/g;

const readFileToString = (filePath) => fs.readFileSync(filePath, "utf-8");

const countDomainManually = (text, domain) => {
  let counter = 0;
  for (let i = 0; i < text.length; i++) {
    if (text.substring(i, domain.length + i) === domain) {
      counter++;
    }
  }
  return counter;
};

const pickHighest = (dict) => {
  const sortedDict = Object.keys(dict).sort((a, b) => dict[b] - dict[a]);

  const topKeyList = [];
  sortedDict.forEach((key, value) => {
    if (value < num) {
      topKeyList.push(key);
    }
  });

  return topKeyList;
};

const pickGreaterThan = (dict, num) => {
  return Object.keys(dict).filter(key => dict[key] >= num)

};

const createDictOfStringMatches = (text, regex) => {
  const matches = text.match(regex);
  const dict = {};
  matches.forEach((match) => {
    dict[match] = (dict[match] ?? 0) + 1});
  return dict;
};

const createDictOfGroupedStringMatches = (text, regex) => {
  const matches = [...text.matchAll(regex)].map(e => e[1]);
  const dict = {};
  matches.forEach((match) => {
    if (dict[match]) {
      dict[match]++;
    } else {
      dict[match] = 1;
    }
  });
  return dict;
};

const testString = readFileToString(filePath);
const dictOfDomains = createDictOfStringMatches(testString, domainReg);
// const dictOfDomains = createDictOfGroupedStringMatches(testString, emailReg2);

console.log(dictOfDomains)
// console.log(dictOfDomains)
// console.log(dictOfDomains)
// console.log(pickHighest(dictOfDomains, 10));
// console.log(pickGreaterThan(dictOfDomains, 63));

