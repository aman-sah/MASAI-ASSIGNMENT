function cleanTags(tags) {
  const cleaned = tags
    .map(tag =>
      tag.trim().toLowerCase().replace(/[^a-z0-9]/g, "")
    );

  const unique = [...new Set(cleaned)];

  return unique.join(", ");
}

const inputTags = [
  " JavaScript ",
  "python",
  "JAVASCRIPT",
  " machine-learning",
  "Python  ",
  " Data Science!",
  "machine_learning"
];

const result = cleanTags(inputTags);
console.log(result);
