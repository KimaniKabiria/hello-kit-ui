module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      ["Feature", "Fix", "Build", "Docs", "Revert", "Test"], // Adjust commit types as needed
    ],
    "type-case": [2, "always", "pascal-case"], // Enforce pascal case for type
    "scope-enum": [2, "always", ["UI", "Components", "Core"]],
    "scope-case": [2, "always", "pascal-case"], // Enforce pascal case for scope
    "subject-full-stop": [2, "never"], // Remove full stop at the end of subject
    // "subject-case": [2, "pascal-case"], // Enforce sentence case for subject
  },
};
