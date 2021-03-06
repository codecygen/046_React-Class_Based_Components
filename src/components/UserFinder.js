// React-propsEquivalent-Javascript_Class_Inheritence-Class_Based_Components
import { Fragment, Component } from 'react';

// React-Error_Boundaries-Class_Based_Components
import ErrorBoundary from './ErrorBoundary';

import Users from './Users';
import classes from './UserFinder.module.css';
// React-ContextAPI_Equivalent-Class_Based_Components
import UsersContext from '../store/users-context';

// React-propsEquivalent-Javascript_Class_Inheritence-Class_Based_Components
// Component is imported
class UserFinder extends Component {
    // React-ContextAPI_Equivalent-Class_Based_Components
    static contextType = UsersContext;


    // React-stateEquivalent-Class_Based_Components
    // The constructor method section manages initializing the state.
    constructor() {
        // "super" method has to be called when you extend another class.
        super();
        // React-stateEquivalent-Class_Based_Components
        // In Class Based Components, state always has to be an object.
        // In Class Based Components, the property name always has to be "state".
        this.state = {
            filteredUsers: [],
            searchTerm: '',
            // You can put more states like this. 
        };
    }

    // React-useEffect_Equivalent-Class_Based_Components
    componentDidMount() {
        // Send http request...
        // React-ContextAPI_Equivalent-Class_Based_Components
        this.setState({ filteredUsers: this.context.users });
    }

    // React-useEffect_Equivalent-Class_Based_Components
    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchTerm !== this.state.searchTerm) {
            this.setState({
                // React-ContextAPI_Equivalent-Class_Based_Components
                filteredUsers: this.context.users.filter((user) =>
                    user.name.includes(this.state.searchTerm)
                ),
            });
        }
    }

    // React-stateEquivalent-Class_Based_Components
    // The searchChangeHandler is the method that is called by "onChange" method in
    // the <input/> tag.
    searchChangeHandler(event) {
        this.setState({ searchTerm: event.target.value });
    }

    // React-returnEquivalent-Class_Based_Components
    // render method is the equivalent of return
    // in Class Based Components
    render() {
        return (
            <Fragment>
                <div className={classes.finder}>
                    {/* React-stateEquivalent-Class_Based_Components  */}
                    {/* Check out bind method to know more about this section */}
                    <input type='search' onChange={this.searchChangeHandler.bind(this)} />
                </div>
                {/* React-Error_Boundaries-Class_Based_Components */}
                <ErrorBoundary>
                    {/* React-stateEquivalent-Class_Based_Components  */}
                    <Users users={this.state.filteredUsers} />
                </ErrorBoundary>
            </Fragment>
        );
    }
}

// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <Fragment>
//       <div className={classes.finder}>
//         <input type='search' onChange={searchChangeHandler} />
//       </div>
//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// };

export default UserFinder;