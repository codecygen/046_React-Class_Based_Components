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