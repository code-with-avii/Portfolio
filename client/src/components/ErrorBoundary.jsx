import React from "react";
import { AlertTriangle, RefreshCcw } from "lucide-react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
          <div className="glass-panel p-8 rounded-2xl border border-border-hover max-w-lg w-full text-center">
            <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center mx-auto mb-6 text-red-500">
              <AlertTriangle size={32} />
            </div>
            <h1 className="text-2xl font-bold font-heading text-text mb-2">
              Something went wrong
            </h1>
            <p className="text-mutedText text-sm mb-6">
              An unexpected error occurred while rendering this page. The issue has been logged.
            </p>
            
            {this.state.error && (
              <div className="bg-surface p-4 rounded-xl border border-red-500/20 text-left overflow-auto text-xs text-red-400 font-code mb-6 max-h-32">
                {this.state.error.toString()}
              </div>
            )}

            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-xl font-semibold hover:bg-zinc-200 transition-colors"
            >
              <RefreshCcw size={16} />
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
