import { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  handleRetry = () => {
    this.setState({ hasError: false })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="page-centered" role="alert">
          <div className="container-app container-narrow">
            <div className="card text-center">
              <h1>Something went wrong</h1>
              <p className="text-text-muted">
                An unexpected error occurred. Please try again or refresh the page.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <button type="button" className="btn btn-primary" onClick={this.handleRetry}>
                  Try again
                </button>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() => window.location.reload()}
                >
                  Refresh page
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
