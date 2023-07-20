# ProdTask

ProdTask is a project management and productivity tool that combines the power of Kanban with time tracking. This tool was developed using Nest JS and Vue.

## Features

### Task Creation and Management

Users can create and manage tasks, moving them through different stages (To Do, In Progress, Done) on a Kanban board. Each task has a title, description, due date, and priority.

### Time Tracking

ProdTask has a built-in stopwatch for each task, allowing users to record the time they spend on each task. Manual time entry is also supported.

### Productivity Analysis

Time tracking data are used to generate reports and charts, providing users with a detailed view of how they are spending their time and where they can improve their productivity.

### Team Integration

Users can invite others to join their projects. Tasks can be assigned to team members and everyone can see each other's progress.

### Notifications and Reminders

The notification system alerts users about tasks nearing due or changes in task status. Real-time notifications are implemented using WebSockets.

### Calendar Integration

Tasks with due dates can be synced with a calendar, using the Google Calendar API or another calendar API.

### Points/Rewards System

To make the app more engaging, a rewards system has been implemented. Users earn points for completing tasks, which can be viewed on a leaderboard or exchanged for virtual rewards.

## Contact

gustavopinheiro_1999@hotmail.com


## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
