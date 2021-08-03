import * as React from 'react';
import { User } from '../types'

type Props = {
    user: User,
    deleteUser: (id: number) => void
}

const TableUser: React.FC<Props> = ({user, deleteUser}) => {
    return (
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col" style={{width: '15%'}}>Avatar</th>
                    <th scope="col" style={{width: '15%'}}>First Name</th>
                    <th scope="col" style={{width: '15%'}}>Last Name</th>
                    <th scope="col" style={{width: '15%'}}>Email</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr className="align-baseline">
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
            </tbody>
        </table>
    )
}

export default TableUser