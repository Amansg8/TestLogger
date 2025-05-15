# React Todo App with Error Logging

This is a simple React Todo app. If you try to add an empty todo, an error will be logged to a file (if your browser supports the File System Access API) or to localStorage as a fallback.

## Features
- Add todos
- Prevent adding empty todos (shows error and logs it)
- Error log is saved to a file (Chromium browsers) or localStorage

## How Logging Works
- On first error, you will be prompted to select/create a log file (e.g., `error-log.txt`).
- All subsequent errors are appended to this file.
- If your browser does not support the File System Access API, errors are stored in localStorage under the key `errorLogs`.

## Running the App
```sh
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

*This project was bootstrapped with Create React App.*
