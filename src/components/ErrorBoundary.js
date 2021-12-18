// React-Error_Boundaries-Class_Based_Components
import { Component } from 'react';

class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = {
            hasError: false
        };
    }

    // React-Error_Boundaries-Class_Based_Components

    // componentDidCatch method can be added to any class based component 
    // and when it is added, it turns the class into Error Boundary.
    componentDidCatch(error) {
        console.log(error);
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <p>Something went wrong!</p>;
        }

        // React-Error_Boundaries-Class_Based_Components
        return this.props.children;
    }
}

export default ErrorBoundary;