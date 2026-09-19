import { Component } from 'react';
import Error from './Error.jsx';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error:", error, errorInfo);
    this.setState({ errorInfo });
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    // In a real scenario, you might want to reload or redirect here
    // window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <Error 
          status="error"
          title="An Unhandled Error Occurred"
          message={this.state.error?.message || "Something went wrong in the application."}
          errorCode="ERR_UNHANDLED_EXCEPTION"
          onRetry={this.handleRetry}
        />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
