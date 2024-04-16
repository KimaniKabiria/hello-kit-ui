module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      ["feature", "bug", "issue", "update"], // Adjust commit types as needed
    ],
    "type-case": [2, "lower-case"], // Enforce lowercase commit types
    "subject-full-stop": [2, "never"], // Remove full stop at the end of subject
    "subject-case": [2, "sentence-case"], // Enforce sentence case for subject
  },
};
