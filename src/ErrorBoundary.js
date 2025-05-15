import React from 'react';
import { logError } from './logger';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  async componentDidCatch(error, errorInfo) {
    await logError(`${error.toString()}\n${errorInfo.componentStack}`);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong. Check the log file for details.</h2>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
