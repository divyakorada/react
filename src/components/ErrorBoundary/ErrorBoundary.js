import React from 'react';

 export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state to show fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error caught by ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return(
      <div className="error-boundary-wrapper">
        <h3>Error Boundary</h3>
         {/* fallback UI */}
        <h5>Something went wrong & See console log</h5>
      </div>
      )
    }

    return this.props.children; // render normally
  }
}

