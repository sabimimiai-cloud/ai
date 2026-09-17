import React, { ErrorInfo, ReactNode } from 'react';
import { AlertCircle, RotateCcw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // In production, we log a generic message without exposing sensitive trace details to user UI
    if (process.env.NODE_ENV !== 'production') {
      console.error('[BuubuBloom ErrorBoundary]', error, errorInfo);
    }
  }

  private handleReset = () => {
    this.setState({ hasError: false });
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div 
          id="error-boundary-fallback"
          className="min-h-screen bg-[#FFFDF8] flex items-center justify-center p-6 text-center"
        >
          <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 border border-[#F4F1EA] shadow-xl">
            <div className="w-16 h-16 rounded-2xl bg-[#F58220]/10 text-[#F58220] flex items-center justify-center mx-auto mb-6">
              <AlertCircle className="w-8 h-8" />
            </div>
            
            <h1 className="text-2xl font-black text-[#173F70] font-display mb-3">
              Something went wrong
            </h1>
            
            <p className="text-sm text-[#172033]/75 leading-relaxed mb-8">
              We encountered an unexpected issue while displaying this page. Don't worry, your bag and saved items are safe.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => this.setState({ hasError: false })}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#173F70] hover:bg-[#2563C7] text-white py-3.5 px-5 rounded-xl font-bold text-xs tracking-wider transition-all shadow-md cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Try Again</span>
              </button>

              <button
                type="button"
                onClick={this.handleReset}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#F4F1EA] hover:bg-[#E5E0D3] text-[#173F70] py-3.5 px-5 rounded-xl font-bold text-xs tracking-wider transition-all cursor-pointer"
              >
                <Home className="w-4 h-4" />
                <span>Return Home</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
