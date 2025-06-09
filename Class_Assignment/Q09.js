function generateUniqueEmails(names, existingEmails) {
  const domain = "@company.com";
  const existingSet = new Set(existingEmails);
  const result = [];

  const emailCount = {};

  for (const fullName of names) {
    const [first, last] = fullName.toLowerCase().split(" ");
    const base = first + last[0];
    let email = base + domain;

    let count = 0;
    while (existingSet.has(email)) {
      count += 1;
      email = base + count + domain;
    }

    existingSet.add(email);
    result.push(email);
  }

  return result;
}

const names = [
  "John Smith",
  "Jane Doe",
  "John Simpson",
  "Jane Davis"
];

const existingEmails = [
  "johns@company.com",
  "janed1@company.com"
];

const output = generateUniqueEmails(names, existingEmails);
console.log(output);
