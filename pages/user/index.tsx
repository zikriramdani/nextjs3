import React, { Component } from "react";
import { connect } from 'react-redux';
import { Row, Col, Button } from "react-bootstrap";

import Heads from '../../components/Heads';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Tables from '../../components/Tables';
import Modals from '../../components/Modals';

import store from '../../store/store';
import { addUser, getListUser, updateUser, deleteUser } from '../../action/action.user';

import { User } from '../../types';
import AddUser from './components/AddUser'; // Component Add User
import EditUser from './components/AddUser'; // Component Edit User

interface IUserProps {
    addUser: any;
    userList: any [];
    updateUser: any;
    deleteUser: any;
}

class IndexPage extends Component<IUserProps> {
    constructor(props) {
        super(props);

        this.state = {
            // messages: null,
            editUser: false, // Modal Edit

            // Data Modal Edit
            userId: null,
            first_name: null,
            last_name: null,
            email: null,
        }

        // Modal Edit
        this.editUser = this.editUser.bind(this);
        this.editUserClose = this.editUserClose.bind(this);
    }

    componentDidMount() {
        getListUser()(store.dispatch);
    }

    // Add User
    addUser = async (e: React.FormEvent, formData: User) => {
        e.preventDefault()
        const payload: User = {
            id: Math.random(),
            first_name: formData.first_name,
            last_name: formData.last_name,
            email: formData.email,
        }
        // console.log('AddUser', payload)
        this.props.addUser(payload);
    }

    // Modal Edit
    editUser = async (user) => {
        // console.log('editUser', user)
        this.setState({
            editUser: true,

            userId: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email
        });
    }
    editUserClose = event =>  {
        this.setState({
            editUser: false
        });
    }

    // Handle Form Edit
    handleChange(key, val){
		this.setState({
			[key]: val
		})
	}

    // Update
    updateUser() {
        const reqPayload = new FormData();
        reqPayload.append('id', this.state.userId)
		reqPayload.append('first_name', this.state.first_name)
        reqPayload.append('last_name', this.state.last_name)
        reqPayload.append('email', this.state.email)

        console.log('update', reqPayload);
        this.props.updateUser(reqPayload)
    }

    // Delete ByID
    deleteUser = async (userId: number) => {
        this.props.deleteUser(userId);
    }

    render() {
        const userList = this.props.userList || []
        return (
            <main className='container'>
                <Heads title="Home - Create Next App" />

                <Navbar />
                    <h1>List User</h1>

                    <div className="mb-3">
                        <AddUser saveUser={this.addUser} />
                    </div>
                    
                    <Tables>
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
                                        <Button className='btn btn-warning me-3' onClick={() => this.editUser(user)}>
                                            Edit
                                        </Button>

                                        <Button className="btn btn-danger" onClick={() => this.deleteUser(user.id)}>
                                            Delete
                                        </Button>
                                    </td>
                                </tr>
                            )) :
                                <tr>
                                    <td colSpan={6} className="text-center">
                                        No data
                                    </td>
                                </tr>
                            }
                        </tbody>
                    </Tables>

                    {/* Modal Edit */}
                    <Modals show={this.state.editUser} 
                    onHide={this.editUserClose} 
                    title="Edit User"
                    content={
                        <form>
                            <div>
                                <div className='Form--field w-100'>
                                    <label htmlFor='first_name'>First Name</label>
                                    <input onChange={e => this.handleChange('first_name', e.target.value)} value={this.state.first_name} id='first_name' />
                                </div>
                                <div className='Form--field w-100'>
                                    <label htmlFor='last_name'>Last Name</label>
                                    <input onChange={e => this.handleChange('last_name', e.target.value)} value={this.state.last_name} id='last_name' />
                                </div>
                                <div className='Form--field w-100'>
                                    <label htmlFor='email'>Email</label>
                                    <input onChange={e => this.handleChange('email', e.target.value)} value={this.state.email} id='email' />
                                </div>
                            </div>
                        </form>
                    }
                    button={
                        <Button variant="secondary" onClick={() => this.updateUser()}>
                            Update
                        </Button>
                    }
                    />
                    
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
        addUser: (payload) => dispatch(addUser(payload)), // Update
        getListUser: () => dispatch(getListUser()), // Read
        updateUser: (payload) => dispatch(updateUser(payload)), // Update
        deleteUser: (userId) => dispatch(deleteUser(userId)) // Delete
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage)