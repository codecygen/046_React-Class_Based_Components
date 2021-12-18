# Searchable Content
A Class Based Component can also render a Functional Component. So you can mix and match them. You probably would like to use functional components for modern projects. For older projects, if you would like to slowly migrate to Functinal Components, this is a great approach to embrace.

- React-returnEquivalent-Class_Based_Components
- React-propsEquivalent-Javascript_Class_Inheritence-Class_Based_Components
This one uses Javascript Class inheritance.
- React-stateEquivalent-Class_Based_Components

In Class Based Components, state always has to be an object.

In Class Based Components, the property name always has to be "state".

None of the React Hooks can be used in Class Based Components.

- React-useEffect_Equivalent-Class_Based_Components

componentDidMount() =======> Called once the component is mounted. (evaluated & rendered) =======> Equivalent to =======> useEffect(..., [])

componentDidUpdate() =======> Called once the component is updated. (evaluated & rendered) =======> Equivalent to =======> useEffect(..., [someValue])

componentWillUnmount() =======> Called right before the component is unmounted. (removed from DOM) =======> Equivalent to CLEANUP function =======> useEffect(() => { return() => {...}}, [])

- React-ContextAPI_Equivalent-Class_Based_Components

This works with only one context per component for in class based compoenents

- React-Error_Boundaries-Class_Based_Components

Error Boundary is used to prevent app to crash when it throws an error. So you handle the error in a more elegant way.

componentDidCatch method can be added to any class based component and when it is added, it turns the class into Error Boundary.

You can wrap around more than 1 component for Error Boundaries.

Here in this example, we create ErrorBoundary.js, inside "UserFinder" component, we wrap "Users" component with "ErrorBoundary", then inside "Users" component we put the "componentDidUpdate" method to catch the error. In this scenario, we throw an error when the filter result cannot find anything. The result will be show on console as "Uncaught Error: No users provided!" but app will not crash and show a paragraph writing "Something went wrong!".