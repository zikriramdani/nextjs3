import * as React from 'react';
import { User } from '../types'

type Props = {
    user: User
}

const TableUser: React.FC<Props> = ({user}) => {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Avatar</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                    <td>
                        {user.avatar}
                    </td>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.email}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default TableUser