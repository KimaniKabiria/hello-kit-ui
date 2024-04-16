Thanks for showing interest to contribute to HelloKit UI 💖, you rock!

When it comes to open source, there are different ways you can contribute, all
of which are valuable. Here's a few guidelines that should help you as you
prepare your contribution.

## Setup the Project

The following steps will get you up and running to contribute to HelloKit UI:

1. Fork the repo (click the <kbd>Fork</kbd> button at the top right of
   [this page](https://github.com/kimani-kabiria/hello-kit-ui)

2. Clone your fork locally

```sh
git clone https://github.com/<your_github_username>/hello-kit-ui.git
cd hello-kit-ui
```

3. Setup all the dependencies and packages by running `npm install`. This
   command will install dependencies.

> If you run into any issues during this step, kindly reach out to the HelloKit UI
<!-- > React team here: https://discord.gg/chakra-ui -->

## Development

To improve our development process, we've set up tooling and systems. HelloKit UI
uses a react, tailwind & radix-ui. In the library, we have components and UI Layouts each on their respective folders and can be consumed in isolation.

### Tooling

- [NPM](https://www.npmjs.com/) to manage packages and dependencies.
- [Storybook](https://storybook.js.org/) for rapid UI component development and
  testing.
- [Radix UI Primitives](https://www.radix-ui.com/primitives) core components building block.
- [Husky](https://typicode.github.io/husky/) for commit management.

### Commands

**`npm install`**: bootstraps the entire project, symlinks all dependencies for
cross-component development and builds all components.

**`npm run storybook`**: starts storybook server and loads stories in files that
end with `.stories.tsx`.

**`npm run build`**: run build for all component packages.

**`npm run test`**: run test for all component packages.

**`npm run release`**: publish changed packages.

**`npm run prepare`**: prepare installation for development.

## Think you found a bug?

Please conform to the issue template and provide a clear path to reproduction
with a code example. The best way to show a bug is by sending a CodeSandbox
link.

## Proposing new or changed Components / UI?

Please provide thoughtful comments and some sample code. Proposals that
don't line up with our roadmap or don't have a thoughtful explanation will be
closed.

## Making a Pull Request?

Pull requests need only the :+1: of two or more collaborators to be merged; when
the PR author is a collaborator, that counts as one.

### Commit Convention

Before you create a Pull Request, please check whether your commits comply with
the commit conventions used in this repository.

When you create a commit we kindly ask you to follow the convention
`category(scope): message` in your commit message while using one of
the following categories:

#### Our Categories
- `feat / feature`: all changes that introduce completely new code or new
  features
- `fix`: changes that fix a bug (ideally you will additionally reference an
  issue if present)
- `refactor`: any code related change that is not a fix nor a feature
- `docs`: changing existing or creating new documentation (i.e. README, docs for
  usage of a lib or cli usage)
- `build`: all changes regarding the build of the software, changes to
  dependencies or the addition of new dependencies
- `test`: all changes regarding tests (adding new tests or changing existing
  ones)
- `ci`: all changes regarding the configuration of continuous integration (i.e.
  github actions, ci system)
- `chore`: all changes to the repository that do not fit into any of the above
  categories

#### Our Scopes
- `UI`: Any changes made to UI layouts or elements. Hosted in the src/ui directory.
- `Components`: Any changes made to components. Hosted in the src/components directory.
- `Core`: Any changes made within the src/ directory.
- `Docs`: Any changes made to any documentation within the library.
- `Test`: Any changes made any test file within the library.
- `Config`: Any changes made any config file within the library.
- `Website`: Any changes made to files and component involved with the library's website.
- `Story`: Any changes made any storybook file within the library.

If you are interested in the detailed specification you can visit
https://www.conventionalcommits.org/ or check out the
[Angular Commit Message Guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines).

### Steps to PR

1. Fork of the hello-kit-ui repository and clone your fork

2. Create a new branch out of the `main` branch. We follow the convention
   `[type/scope]`. For example `fix/accordion-hook` or `docs/menu-typo`. `type`
   can be either `docs`, `fix`, `feat`, `build`, or any other conventional
   commit type. `scope` is just a short id that describes the scope of work.

3. Make and commit your changes following the
   [commit convention](https://github.com/kimani-kabiria/hello-kit-ui/CONTRIBUTING.md#commit-convention).
   As you develop, you can run `npm run build` and
   `npm run test` to make sure everything works as expected.

4. Run `npm run release` ( Other release script commands are on the package.json file ) to create a detailed description of your changes. This
   will be used to generate a changelog when we publish an update.
   Please note that you might have to run `git fetch origin main:master` (where
   origin will be your fork on GitHub) before `pnpm changeset` works.

### Tests

All commits that fix bugs or add features need a test.

> **Dear HelloKit UI team:** Please do not merge code without tests

## Want to write a blog post or tutorial

That would be amazing! Reach out to the core team. Details coming soon!

## Want to help improve the docs?

Details coming soon!

## License

By contributing your code to the hello-kit-ui GitHub repository, you agree to
license your contribution under the MIT license.