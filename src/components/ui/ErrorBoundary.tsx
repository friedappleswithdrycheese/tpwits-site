"use client";

import { Component, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("ErrorBoundary caught:", error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="text-center max-w-md px-6">
              <h1 className="text-2xl font-bold text-foreground mb-4">
                Something went wrong
              </h1>
              <p className="text-foreground-muted mb-6">
                We encountered an unexpected error. Please refresh the page or
                try again later.
              </p>
              <button
                onClick={() => {
                  this.setState({ hasError: false });
                  window.location.reload();
                }}
                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-hover transition-colors"
              >
                Refresh Page
              </button>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
