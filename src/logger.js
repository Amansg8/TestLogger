// Simple logger utility to write errors to a log file using the browser's File System Access API (supported in Chromium-based browsers).
// If not supported, logs will be stored in localStorage as fallback.

export async function logError(message) {
  const logEntry = `[${new Date().toISOString()}] ERROR: ${message}\n`;
  // Try File System Access API
  if ('showSaveFilePicker' in window) {
    try {
      let fileHandle = window.logFileHandle;
      if (!fileHandle) {
        fileHandle = await window.showSaveFilePicker({
          suggestedName: 'log/error.log', // Suggest log/error.log in the project
          types: [{ description: 'Text Files', accept: { 'text/plain': ['.log', '.txt'] } }],
        });
        window.logFileHandle = fileHandle;
      }
      const writable = await fileHandle.createWritable({ keepExistingData: true });
      await writable.write(logEntry);
      await writable.close();
      return;
    } catch (e) {
      // fallback to localStorage
    }
  }
  // Fallback: store in localStorage
  let logs = localStorage.getItem('errorLogs') || '';
  logs += logEntry;
  localStorage.setItem('errorLogs', logs);
}
