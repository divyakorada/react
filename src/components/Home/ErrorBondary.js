import CounterComponent from "../ErrorBoundary/counterComponent";
import { ErrorBoundary } from "../ErrorBoundary/ErrorBoundary";

const ErrorBoundaryTab = () => {
    return(
        <div>
            <ErrorBoundary>
                <CounterComponent/>
            </ErrorBoundary>
            </div>
    )
}

export default ErrorBoundaryTab;