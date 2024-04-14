# Welcome aboard to the Senior Front-End Developer Interview Assignment with hafthastad! 🌍

## Table of Contents

  - [🎯 Getting Started](#-getting-started)
  - [🚀 Deployment](#-deployment)
  - [📃 Scripts Overview](#-scripts-overview)
  - [🔗 Coupling Graph](#-coupling-graph)
  - [🧪 Testing](#-testing)
    - [Running Tests](#running-tests)
    - [Acceptance Tests](#acceptance-tests)
    - [Smoke Testing](#smoke-testing)
  - [🎨 Styling and Design System](#-styling-and-design-system)
    - [CVA - A New Approach to Variants](#cva---a-new-approach-to-variants)
  - [💻 Environment Variables handling](#-environment-variables-handling)
  - [🎯 project Assignment](#-project-assignment)
  
## 🎯 Getting Started

# before installation First you should change your node version to  ">=18.17.0".



To get started with this app, follow these steps:


1. Fork & clone repository:

```bash
git clone https://github.com/<your_username)/hafthashtad-assignment.git
```


2. Install the dependencies:

```bash
yarn install --frozen-lockfile
```

3. Run the development server:

```bash
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

5. This project uses a git hook to enforce [conventional commits](https://github.com/qoomon/git-conventional-commits). To install the git hook, run the following command in the root directory of the project:

```sh
brew install pre-commit
pre-commit install -t commit-msg
```

## 🚀 Deployment
<!-- TODO: provide vercel link -->
 # onClick to deploy button to see the final version off the app on vercel   [![Vercel](https://vercel.com/button)](https://google.com)


## 📃 Scripts Overview

The following scripts are available in the `package.json`:

- `dev`: Starts the development server with colorized output
- `build`: Builds the app for production
- `start`: Starts the production server
- `lint`: Lints the code using ESLint
- `lint:fix`: Automatically fixes linting errors
- `prettier`: Checks the code for proper formatting
- `prettier:fix`: Automatically fixes formatting issues
- `analyze`: Analyzes the bundle sizes for Client, Server and Edge environments
- `storybook`: Starts the Storybook server
- `build-storybook`: Builds the Storybook for deployment
- `test`: Runs unit and integration tests
- `e2e:headless`: Runs end-to-end tests in headless mode
- `e2e:ui`: Runs end-to-end tests with UI
- `format`: Formats the code with Prettier
- `postinstall`: Applies patches to external dependencies
- `preinstall`: Ensures the project is installed with Yarn
- `coupling-graph`: **Generates a coupling and cohesion graph for the components**

## 🔗 Coupling Graph

The `coupling-graph` script is a useful tool that helps visualize the coupling and connections between your project's internal modules. It's built using the [Madge](https://github.com/pahen/madge) library. To generate the graph, simply run the following command:

```bash
yarn coupling-graph
```

This will create a `graph.svg` file, which contains a graphical representation of the connections between your components. You can open the file with any SVG-compatible viewer.

![graph](https://user-images.githubusercontent.com/28964599/233662744-3ba89713-8466-49cd-9be7-e6fb38191f58.png)

## 🧪 Testing

This app comes with various testing setups to ensure your application's reliability and robustness.

### Running Tests

- **Unit and integration tests**: Run Jest tests using `yarn test`
- **End-to-end tests (headless mode)**: Run Playwright tests in headless mode with `yarn e2e:headless`
- **End-to-end tests (UI mode)**: Run Playwright tests with UI using `yarn e2e:ui`

<img width="1392" alt="image" src="https://user-images.githubusercontent.com/28964599/233666655-93b7d08b-2fd8-406a-b43c-44d4d96cf387.png"/>

### Acceptance Tests

To write acceptance tests, we leverage Storybook's [`play` function](https://storybook.js.org/docs/react/writing-stories/play-function#writing-stories-with-the-play-function). This allows you to interact with your components and test various user flows within Storybook.

```ts
/*
 * See https://storybook.js.org/docs/react/writing-stories/play-function#working-with-the-canvas
 * to learn more about using the canvasElement to query the DOM
 */
export const FilledForm: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const emailInput = canvas.getByLabelText("email", {
      selector: "input",
    })

    await userEvent.type(emailInput, "example-email@email.com", {
      delay: 100,
    })

    const passwordInput = canvas.getByLabelText("password", {
      selector: "input",
    })

    await userEvent.type(passwordInput, "ExamplePassword", {
      delay: 100,
    })
    // See https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    const submitButton = canvas.getByRole("button")

    await userEvent.click(submitButton)
  },
}
```

### Smoke Testing

In this boilerplate, we use Storybook's out-of-the-box support for smoke testing to verify that components render correctly without any errors. Just run `yarn test-storybook` to perform smoke testing. Remember to write stories in JSX or TSX format only. Smoke testing and a lot of other functionalities dont work well with MDX stories.

## 🎨 Styling and Design System

This app uses Tailwind CSS for styling and CVA for creating a powerful, easy-to-use design system. 

### CVA - A New Approach to Variants

While CSS-in-TS libraries such as [Stitches](https://stitches.dev/) and [Vanilla Extract](https://vanilla-extract.style/) are great for building type-safe UI components, they might not be the perfect fit for everyone. You may prefer more control over your stylesheets, need to use a framework like Tailwind CSS, or simply enjoy writing your own CSS.

Creating variants using traditional CSS can be a tedious task, requiring you to manually match classes to props and add types. CVA is here to take that pain away, allowing you to focus on the enjoyable aspects of UI development. By providing an easy and type-safe way to create variants, CVA simplifies the process and helps you create powerful design systems without compromising on the flexibility and control of CSS.

## 💻 Environment Variables handling

[T3 Env](https://env.t3.gg/) is a library that provides environmental variables checking at build time, type validation and transforming. It ensures that your application is using the correct environment variables and their values are of the expected type. You’ll never again struggle with runtime errors caused by incorrect environment variable usage.

Config file is located at `env.mjs`. Simply set your client and server variables and import `env` from any file in your project.

```ts
export const env = createEnv({
  server: {
    // Server variables
    SECRET_KEY: z.string(),
  },
  client: {
    // Client variables
    API_URL: z.string().url(),
  },
  runtimeEnv: {
    // Assign runtime variables
    SECRET_KEY: process.env.SECRET_KEY,
    API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
})
```

If the required environment variables are not set, you'll get an error message:

```sh
  ❌ Invalid environment variables: { SECRET_KEY: [ 'Required' ] }
```




## 🎯 Project Assignment

# Senior Front-End Developer Interview Assignment

## Objective:
Creating a React project by NextJS 13 and creating a flight ticket list page according to the submitted design.

## Requirements:

- Create a new React application with Next.js 13 using create-next-app or any preferred setup.
- Use the front-end UI library of your choice (e.g. Sass, bootstrap) to style the tickets. Use TypeScript, Axios for data fetching.
- Use [mockbin.io](https://mockbin.io) website to add data JSON file in the body section for creating endpoint API and request them or add JSON-server package.
  - Create a ticket component and show data like UI.
  - Clickable detail (مشاھده اطلاعات پرواز) button and show details like UI.
  - Implement a search bar and can search on airline companies (airline.name)

## Deliverables:
1. A GitHub repository containing the source code of the React application.
2. A README file with clear instructions on how to set up and run the application locally.

## Evaluation Criteria:
- Code quality and organization.
- Proper use of React components and state management.
- Properly show 5 tickets in the viewport and don’t use any library like infinity scroll.
- Effective error handling and loading.
- Responsive and visually appealing UI design.
- **PLUS:** Use Next.js 13 app router benefits.
- **PLUS:** Create tests for components like Jest and test-react-library.
- **PLUS:** Create a Storybook for components.

## Figma Address:
[Link to Figma](https://www.figma.com/file/YgezRrUNzzWxnbbUVHHk4n/frontend-developer---interview-assignment?type=design&node-id=0%3A1&mode=design&t=gr1LkiNQ75KRDy1J-1)
