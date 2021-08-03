import * as React from 'react';
// import { User } from '../types';

// type Props = {
//     user: User,
//     deleteUser: (id: number) => void
// }

// const TableUser: React.FC<Props> = ({children }) => {
//     return (
//         <table className="table table-striped table-hover">
//             {children}
//         </table>
//     )
// }

// export default TableUser

export default function TableUser({ children }) {
    return <table className="table table-striped table-hover">{children}</table>
};