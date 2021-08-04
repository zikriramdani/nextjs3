import React, { Component } from "react";
import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TableUser from '../components/TableUser';

import store from '../store/store';
import { getListUser } from '../action/action.user';

import { User } from '../types';
import AddUser from '../components/AddUser'; // Component Add User

class IndexPage extends Component {
    // static getInitialProps({store}) {}
    // const [userList, setUserList] = React.useState(posts)

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        getListUser()(store.dispatch);
    }

    // Add User
    addUser = async (e: React.FormEvent, formData: User) => {
        e.preventDefault()
        // const user: User = {
        //     id: Math.random(),
        //     first_name: formData.first_name,
        //     last_name: formData.last_name,
        // }
        // setPostList([post, ...postList])
    }

    // Delete ByID
    deleteUser = async (id: number) => {
        // console.log('deleteUser', id)
        const users: User[] = this.props.userList.filter((user: User) => user.id !== id)
        console.log(users)
        getListUser()(store.dispatch);
        // setUserList(posts)
    }

    render() {
        const userList = this.props.userList || []
        return (
            <main className='container'>
                <Navbar />
                    <div className="mb-3">
                        <AddUser saveUser={this.addUser} />
                    </div>

                    <TableUser>
                        <thead>
                            <tr>
                                <th scope="col" style={{width: '5%'}}>No</th>
                                <th scope="col" style={{width: '15%'}}>First Name</th>
                                <th scope="col" style={{width: '15%'}}>Last Name</th>
                                <th scope="col" style={{width: '15%'}}>Email</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {userList.length > 0 ? userList.map((user, no) => (
                                <tr className="align-baseline" key={user.id}>
                                    <td>
                                        {no+1}
                                    </td>
                                    <td>{user.first_name}</td>
                                    <td>{user.last_name}</td>
                                    <td>{user.email}</td>
                                    <td className="text-end">
                                        <button className='Card__button' onClick={() => this.deleteUser(user.id)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )) :
                                <tr>
                                    <td colSpan={5} className="text-center">
                                        No data
                                    </td>
                                </tr>
                            }
                        </tbody>
                    </TableUser>
                    
                <Footer />
            </main>
        )
    }
}

//untuk baca state dari reducer
const mapStateToProps = (state) => {
    // console.log('mapStateToProps', state)
    return {
        userList: state.user.userList
    }
}

//untuk manggil method di action
const mapDispatchToProps = (dispatch) => {
    // console.log('mapDispatchToProps', dispatch)
    return {
        getListUser: () => dispatch(getListUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage)