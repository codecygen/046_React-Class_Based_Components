// React-propsEquivalent-Javascript_Class_Inheritence-Class_Based_Components
import { Component } from 'react';
import User from './User';

import classes from './Users.module.css';

// const DUMMY_USERS = [
//   { id: 'u1', name: 'Max' },
//   { id: 'u2', name: 'Manuel' },
//   { id: 'u3', name: 'Julie' },
// ];

// React-propsEquivalent-Javascript_Class_Inheritence-Class_Based_Components
class Users extends Component {
  // React-stateEquivalent-Class_Based_Components
  // The constructor method section manages initializing the state.
  constructor() {
    // "super" method has to be called when you extend another class.
    super();
    // React-stateEquivalent-Class_Based_Components
    // In Class Based Components, state always has to be an object.
    // In Class Based Components, the property name always has to be "state".
    this.state = {
      showUsers: true,
      moreState: 'Test'
      // nestedState: {},
      // dataState: []
      // You can put more states like this.
    };
  }

  // React-stateEquivalent-Class_Based_Components
  // The toggleUsersHandler is the method that is called by "onClick" method in
  // the <button></button> tag. 
  toggleUsersHandler() {

    // React-stateEquivalent-Class_Based_Components
    // This section manages setting the state.
    // setState also always takes an object just like this.state up top.
    // Here setState method merges the things for you.
    // Unlike setShowUsers state method in functional components
    // when you change a state inside the object brackets, it does not overwrite the
    // entire state but keep all other states and only updates the provided state.
    // Remember that you update the setShowUsers method in functional components like this.

    // setShowUsers(prevState => {
    //   return {...prevState, enteredAmount: event.target.value};
    // });

    // We are merging here the old state with new one
    // The state of "moreState: 'Test'" will no be lost.
    this.setState((prevState) => {
      return { showUsers: !prevState.showUsers };
    });
  }

  // React-returnEquivalent-Class_Based_Components
  // render method is the equivalent of return
  // in Class Based Components
  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        {/* React-stateEquivalent-Class_Based_Components  */}
        {/* Check out bind method to know more about this section */}
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {/* React-stateEquivalent-Class_Based_Components */}
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

// Modern method - Functional Components
// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? 'Hide' : 'Show'} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
