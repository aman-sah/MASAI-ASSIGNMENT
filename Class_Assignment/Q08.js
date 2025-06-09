function generateEventTags(events) {
  const toCamelCase = (str) => {
    const words = str.trim().toLowerCase().split(" ");
    return words[0] + words.slice(1).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join("");
  };

  const tags = events
    .map(event => "#" + toCamelCase(event))
    .filter(tag => tag.length >= 8)
    .sort((a, b) => b.length - a.length)
    .slice(0, 3);

  return tags;
}


const events = [
  "summer fest",
  "code camp",
  "js",
  "new year party",
  "tech talk",
  "AI"
];

const output = generateEventTags(events);
console.log(output);
