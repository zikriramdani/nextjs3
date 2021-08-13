import * as React from 'react';
import { Button, Form } from "react-bootstrap";
import { User } from '../../../types';

type Props = {
    handleForm(): void;
    saveUser: (e: React.FormEvent, formData: User) => void
}

const AddUser: React.FC<Props> = ({ saveUser }) => {
    const [formData, setFormData] = React.useState<User>()

    const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
        setFormData({
            ...formData,
            [e.currentTarget.id]: e.currentTarget.value,
        })
    }

    return (
        <Form onSubmit={(e) => saveUser(e, formData)}>
            <Form.Group className="Form--field mb-3">
                <Form.Label>First Name</Form.Label>
                <input required type="text" id='first_name' name='first_name' onChange={handleForm} />
            </Form.Group>
            <Form.Group className="Form--field mb-3">
                <Form.Label>Last Name</Form.Label>
                <input required type="text" id='last_name' name='last_name' onChange={handleForm} />
            </Form.Group>
            <Form.Group className="Form--field mb-3">
                <Form.Label>Email</Form.Label>
                <input required type="email" id='email' name='email' onChange={handleForm} />
            </Form.Group>
            <Button type="submit" className='Form__button' disabled={formData === undefined ? true : false}>
                Add User
            </Button> 
        </Form>
    )
}

export default AddUser
