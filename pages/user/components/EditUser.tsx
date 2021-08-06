import * as React from 'react'
import { User } from '../../../types'

type Props = {
    updateUser: (e: React.FormEvent, formData: User) => void;

    first_name: null;
    last_name: null;
    email: null;
}

const EditUser: React.FC<Props> = ({ updateUser, first_name, last_name, email }) => {
    const [formData, setFormData] = React.useState<User>()

    const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
        setFormData({
            ...formData,
            [e.currentTarget.id]: e.currentTarget.value,
        })
    }

    return (
        <form className='Form' onSubmit={(e) => updateUser(e, formData)}>
            <div>
                <div className='Form--field w-100'>
                    <label htmlFor='first_name'>First Name</label>
                    <input onChange={handleForm} value={first_name} type='text' id='first_name' />
                </div>
                <div className='Form--field w-100'>
                    <label htmlFor='last_name'>Last Name</label>
                    <input onChange={handleForm} value={last_name} type='text' id='last_name' />
                </div>
                <div className='Form--field w-100'>
                    <label htmlFor='email'>Email</label>
                    <input onChange={handleForm} value={email} type='text' id='email' />
                </div>
            </div>
            <button className='Form__button' disabled={formData === undefined ? true : false}>
                Update
            </button>
        </form>
    )
}

export default EditUser
