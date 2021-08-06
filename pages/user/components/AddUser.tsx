import * as React from 'react'
import { Article } from '../../../types'

type Props = {
    saveUser: (e: React.FormEvent, formData: Article) => void
}

const AddUser: React.FC<Props> = ({ saveUser }) => {
    const [formData, setFormData] = React.useState<Article>()

    const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
        setFormData({
            ...formData,
            [e.currentTarget.id]: e.currentTarget.value,
        })
    }

    return (
        <form className='Form' onSubmit={(e) => saveUser(e, formData)}>
            <div>
                <div className='Form--field'>
                    <label htmlFor='first_name'>First Name</label>
                    <input onChange={handleForm} type='text' id='first_name' />
                </div>
                <div className='Form--field'>
                    <label htmlFor='last_name'>Last Name</label>
                    <input onChange={handleForm} type='text' id='last_name' />
                </div>
                <div className='Form--field'>
                    <label htmlFor='email'>Email</label>
                    <input onChange={handleForm} type='email' id='email' />
                </div>
            </div>
            <button className='Form__button' disabled={formData === undefined ? true : false}>
                Add User
            </button>
        </form>
    )
}

export default AddUser
