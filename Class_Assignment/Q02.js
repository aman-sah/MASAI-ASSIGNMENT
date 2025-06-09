function generateHashtags(words) {
  return words
    .filter(word => word.length >= 3)
    .map(word => '#' + word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .sort((a, b) => b.length - a.length)
    .slice(0, 5);
}

const input = ["javascript", "programming", "web", "development", "code", "learning", "tutorial", "technology", "computer", "a"];
const result = generateHashtags(input);

console.log(result);
