import * as React from 'react';
import { InferGetStaticPropsType } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TableUser from '../components/TableUser';

import { connect } from 'react-redux'

interface IProps {
  announcementMessage: string
  updateAnnouncement: any
}

interface IState {}

class IndexPage extends React.Component<IProps, IState> {
    render() {
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

                {/* {userList.data.map((user: User) => (
                    <TableUser key={user.id} user={user} deleteUser={deleteUser}  />
                ))} */}

                {/* <TableUser>
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
                        {userList.data.map((user: User, no) => (
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
                                    <button className='Card__button' onClick={() => deleteUser(user.id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </TableUser> */}
                
            <Footer />
        </main>
        )
    }
}

const mapStateToProps = (state) => ({
  announcementMessage: state.message,
})

const mapDispatchToProps = (dispatch) => ({
//   updateAnnouncement: bindActionCreators(updateAnnouncement, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage)