// React-propsEquivalent-Javascript_Class_Inheritence-Class_Based_Components
import { Component } from 'react';
import classes from './User.module.css';

// React-propsEquivalent-Javascript_Class_Inheritence-Class_Based_Components
// Component is imported
class User extends Component {

  // React-useEffect_Equivalent-Class_Based_Components
  componentWillUnmount() {
    // This will run 3 times because we have 3 entries and
    // it removes all instances.
    console.log('User will unmount!');
  }

    // React-returnEquivalent-Class_Based_Components
    // render method is the equivalent of return
    // in Class Based Components
    render() {
      // React-propsEquivalent-Javascript_Class_Inheritence-Class_Based_Components
      // "this" keyword points to "Component" of "react" library
      return <li className={classes.user}>{this.props.name}</li>;
    }
}

// Modern method - Functional Components
// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
