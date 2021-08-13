import React, { Component } from "react";
import { connect } from 'react-redux';
import { Button, Form } from "react-bootstrap";

import Heads from '../../components/Heads';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Tables from '../../components/Tables';
import Modals from '../../components/Modals';

import store from '../../store/store';
import { addUser, getListUser, updateUser, deleteUser } from '../../action/action.user';

import { User } from '../../types';
import AddUser from './components/AddUser'; // Component Add User

interface IUserProps {
    addUser: any;
    userList: any [];
    updateUser: any;
    deleteUser: any;
}

interface MyState {
    editUser: any;
    userId: string;
    first_name: string;
    last_name: string;
    email: string;

    // Search
    nameSearch: string;
}

class IndexPage extends React.Component<IUserProps, MyState> {

    constructor(props) {
        super(props);

        this.state = {
            // messages: null,
            editUser: false, // Modal Edit

            // Data Modal Edit
            userId: '',
            first_name: '',
            last_name: '',
            email: '',

            // Search
            nameSearch: ''
        }

        // Modal Edit
        this.editUser = this.editUser.bind(this);
        this.editUserClose = this.editUserClose.bind(this);
    }

    componentDidMount() {
        getListUser(this.state.nameSearch)(store.dispatch);
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
    handleChange = event => {
        // This triggers everytime the input is changed
        if (event.target.files) {
            this.setState({ ...this.state, [event.target.name]: event.target.files[0] });
        } else {
            this.setState({ ...this.state, [event.target.name]: event.target.value });
        }
    };

    // Update
    updateUser = event => {
        const payload = {
            id : this.state.userId,
            first_name : this.state.first_name,
            last_name : this.state.last_name,
            email : this.state.email
        }

        this.props.updateUser(payload)
        this.setState({
            editUser: false
        });
    }

    // Delete ByID
    deleteUser = async (userId: number) => {
        this.props.deleteUser(userId);
    }

    // Handle Search
    handleChangeSearch = event => {
        // This triggers everytime the input is changed
        this.setState({
            nameSearch: event.target.value
        });
        // console.log('handleChangeSearch', event.target.value)
        getListUser(this.state.nameSearch)(store.dispatch);
    };

    resetSearch = event => {
        if(event.target.value == '' || event.target.value == ' ') {
            // console.log('resetsearch', event.target.value)
            getListUser(this.state.nameSearch)(store.dispatch);
        }
    }

    render() {
        const userList = this.props.userList || []
        return (
            <main className='container'>
                <Heads title="Home - Create Next App" />

                <Navbar />
                    <h1>List User</h1>

                    <div className="mb-5">
                        <AddUser saveUser={this.addUser} />
                    </div>

                    <div className="mb-3">
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Search..." value={this.state.nameSearch} onKeyUp={this.resetSearch} onChange={this.handleChangeSearch} />
                        </Form.Group>
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
                                        <div className='d-flex justify-content-end'>
                                            <Button className='btn btn-warning me-3' onClick={() => this.editUser(user)}>
                                                Edit
                                            </Button>

                                            <Button className="btn btn-danger" onClick={() => this.deleteUser(user.id)}>
                                                Delete
                                            </Button>
                                        </div>
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
                        <Form onSubmit={this.updateUser}>
                            <Form.Group className="Form--field w-100 mb-3">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control required type="text" id='first_name' name='first_name' value={this.state.first_name} onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group className="Form--field w-100 mb-3">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control required type="text" id='last_name' name='last_name' value={this.state.last_name} onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group className="Form--field w-100 mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control required type="email" id='email' name='email' value={this.state.email} onChange={this.handleChange} />
                            </Form.Group>
                            <Button type="submit" className='Form__button'>
                                Update
                            </Button> 
                        </Form>
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
        getListUser: (nameSearch) => dispatch(getListUser(nameSearch)), // Read
        updateUser: (payload) => dispatch(updateUser(payload)), // Update
        deleteUser: (userId) => dispatch(deleteUser(userId)) // Delete
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage)