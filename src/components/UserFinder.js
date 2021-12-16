// React-propsEquivalent-Javascript_Class_Inheritence-Class_Based_Components
import { Fragment, Component } from 'react';

import Users from './Users';
import classes from './UserFinder.module.css';

const DUMMY_USERS = [
    { id: 'u1', name: 'Max' },
    { id: 'u2', name: 'Manuel' },
    { id: 'u3', name: 'Julie' },
];

// React-propsEquivalent-Javascript_Class_Inheritence-Class_Based_Components
// Component is imported
class UserFinder extends Component {
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

    componentDidMount() {
        // Send http request...
        this.setState({ filteredUsers: DUMMY_USERS });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchTerm !== this.state.searchTerm) {
            this.setState({
                filteredUsers: DUMMY_USERS.filter((user) =>
                    user.name.includes(this.state.searchTerm)
                ),
            });
        }
    }

    searchChangeHandler(event) {
        this.setState({ searchTerm: event.target.value });
    }

    render() {
        return (
            <Fragment>
                <div className={classes.finder}>
                    <input type='search' onChange={this.searchChangeHandler.bind(this)} />
                </div>
                <Users users={this.state.filteredUsers} />
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