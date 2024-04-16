module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "scope-enum": [2, "always", ["UI", "Components", "Core", "Docs", "Tests", "Config", "Website", "Story"]],
    "scope-case": [2, "always", "pascal-case"], // Enforce pascal case for scope
    "subject-full-stop": [2, "never"], // Remove full stop at the end of subject
    // "subject-case": [2, "pascal-case"], // Enforce sentence case for subject
  },
};
