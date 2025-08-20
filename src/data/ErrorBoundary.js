import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
    }
    componentDidCatch(error, errorInfo) {
        console.log("Something happening")
        // logErrorToMyService(error, errorInfo);
        this.setState({
            error: error,
            errorInfo: errorInfo,
            hasError:true
        })
    }
    render() {
        console.error("error happended")
        if (this.state.hasError) {
            
            // return <h1>Something went wrong.</h1>
            return this.props.fallback;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;