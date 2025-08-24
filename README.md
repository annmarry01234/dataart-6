# Vite React Timeline App

This project is a timeline application built with React and TypeScript using Vite as the build tool. It showcases a timeline of events with a user-friendly interface, allowing users to view detailed information about each event.

## Features

- **Header Component**: Includes a logo and a theme switch to toggle between light and dark modes.
- **Timeline Component**: Displays a timeline of events, rendering an event marker for each event.
- **Event Marker**: Represents individual events on the timeline and opens a modal for detailed views.
- **Event Modal**: A modal that shows detailed information about a selected event, implemented using React Portal.
- **Filter Panel**: An optional component for future filtering or bookmarking functionality.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd vite-react-timeline-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## Project Structure

```
vite-react-timeline-app
├── src
│   ├── components
│   │   ├── Header.tsx
│   │   ├── Timeline.tsx
│   │   ├── EventMarker.tsx
│   │   ├── EventModal.tsx
│   │   └── FilterPanel.tsx
│   ├── hooks
│   │   └── useTimelineData.ts
│   ├── styles
│   │   ├── Header.module.css
│   │   ├── Timeline.module.css
│   │   ├── EventMarker.module.css
│   │   ├── EventModal.module.css
│   │   └── FilterPanel.module.css
│   ├── types
│   │   └── index.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── tsconfig.json
└── README.md
```

## Contributing

Contributions are welcome! If you have suggestions for improvements or features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.