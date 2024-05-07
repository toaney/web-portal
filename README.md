# Web Portal Demo - Thomas Toan
## Project Setup
1. Install dependencies:
```
npm install
```

2. Start the project:
```
npm start (may need to run as dev mode with `npm run dev` to get the project running locally)
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Other useful commands: 
`npm run dev`, `npm run test`, `npm run build`

## About the Project

#### Technologies in the project: 
 - React
 - Next.js
 - Tailwind CSS

### Getting to the Donec Lorem Magna UI
- Navigate to [http://localhost:3000/lorem-ipsum/donec-lorem-magna](http://localhost:3000/lorem-ipsum/donec-lorem-magna)
- Note that the navbar navigation works and some urls are dynamically generated using Next.js

#### Features
- working navbar
  - dynamically generated urls for "Lorem Ipsum", "Sit Amet", and "Morbi Rutrum" tabs; this can be tested by typing anything after the ".../lorem-ipsum/", ".../sit-amet/", and ".../morbi-rutrum/" paths.
  - the /lorem-ipsum/donec-lorem-magna is the only page that is built out
  - working dropdowns for sub-navigation links
  - working dropdown for user information
- working dynamic breadcrumbs (see lorem ipsum page and test by adding paths after ".../lorem-ipsum)
- mocked API post requests for labelSubmit and formSubmit

- form fields populated with mock data (this data would typically come from the server)
  - fields displaying previously saved values have a gray background
  - fields with no saved data, or displaying data that has been modified have a white background

- "Reset Changes" button works and clears non saved data when clicked

#### Additional Notes
- Given more time, I would do the following: 
  - finish wiring up all form fields (datepickers, dropdowns, and checkboxes) are not fully wired up to display saved data and clear user input
  - add input validation 
  - add more typescript types and unit tests
  - make the app more accessible; the React Aria Components package was chosen for the datepicker because Adobe builds these components with accessibility in mind. 
  - break apart the code into separate files; add more utils for reused code
  - make page more responsive for different viewports
  - further build out dynamically generated urls for all navigation tabs
  - better fine tune the page styling. They styling is close to the spec, but isn't pixel perfect

### Screenshot of the Donec Lorem Magna page
![alt text](<Screen Shot 2024-05-07 at 1.09.23 PM.png>)