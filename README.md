# Personal Projects Tracker

Track progress within your projects. Add notes to remember key details so you can easily return to something later. Manage states to never forget about stale projects again. View everything in one place and work with your future self.

## Usage
The app uses React and is built with Vite:
```sh
cd frontend
npm install
npm run dev
```

## Stage 2: data logic
Plain Javascript which doesn't modify the DOM yet. `index.js` holds the projects array and functions to modify it. 

## Stage 3: Vite and React
The app has been moved to `frontend`, it uses React and is built with Vite. The data from Stage 2 has been moved into the main component, and it's printed raw as a placeholder.

## Stage 4: components
The projects list is now dynamically rendered based on the array of `projects` using `ProjectCard` which represents a single project and `ProjectsList` which renders the list of projects as `ProjectCard`s.

## Stage 5: editing entries and dark theme
Project entries can now be deleted and have their status updated. This is done using the React state and handler functions so the counters update automatically. The dark theme can be selected with a button in the header

## AI Usage
No AI used yet.