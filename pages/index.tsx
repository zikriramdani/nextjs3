import React, { Component } from "react";
import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TableUser from '../components/TableUser';

import { getListUser } from '../action/action.user'

class IndexPage extends Component {
    static getInitialProps({store}) {}

    constructor(props) {
        super(props);

        // this.state = {
        //     dataUserList: [],
        // }
    }

    componentDidMount() {
        getListUser();
    }

    render() {
        const userList = this.props.userList || []
        return (
            <main className='container'>
                <Navbar />
                    <div className="d-flex">
                        <div className="w-100 align-self-center"><h1>List User</h1></div>
                        <div className="flex-shrink-1">
                            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                                Add User
                            </button>
                        </div>
                    </div>

                    <TableUser>
                        <thead>
                            <tr>
                                <th scope="col" style={{width: '5%'}}>No</th>
                                <th scope="col" style={{width: '15%'}}>Avatar</th>
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
                                    <td>
                                        <img src={user.avatar} width="50" />
                                    </td>
                                    <td>{user.first_name}</td>
                                    <td>{user.last_name}</td>
                                    <td>{user.email}</td>
                                    <td className="text-end">
                                        {/* <button className='Card__button' onClick={() => deleteUser(user.id)}>
                                            Delete
                                        </button> */}
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
                    </TableUser>
                    
                <Footer />
            </main>
        )
    }
}

//untuk baca state dari reducer
const mapStateToProps = (state) => {
    console.log('mapStateToProps', state.user.userList)
    return {
        userList: state.user.userList
    }
}

//untuk manggil method di action
const mapDispatchToProps = (dispatch) => ({
    getListUser: () => dispatch(getListUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage)