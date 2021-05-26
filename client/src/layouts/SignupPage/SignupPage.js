import axios from 'axios'
import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useParams, withRouter } from 'react-router'
import { addNote } from '../../services/actions/note/note-action'
import { BASEURL } from '../../services/api/server'

//* IMPORTING STYLES...
import styles from './style.module.css'

export const SignupPage = ({ history, ...props }) => {

    var { em } = useParams()

    const [user, setUser] = React.useState({
        email: em || '',
        name: '',
        password: ''
    })

    const [err, setErr] = React.useState({
        email: ' ',
        name: ' ',
        password: ' '
    })

    const dispatch = useDispatch()

    const validate = (target, value) => {
        var newErr = ''
        if (target === 'email') {
            var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            if (value && !value.match(mailformat))
                newErr = 'Please enter valid email address!'
            else if (!value)
                newErr = 'Email required!'
        }
        if (target === 'name') {
            if (value && value.length < 2)
                newErr = 'Please enter valid name!'
            else if (!value)
                newErr = 'Name required!'
        }
        if (target === 'password') {
            if (value && value.length < 6)
                newErr = 'Password must be of length 6'
            else if (!value)
                newErr = 'Password required!'
        }
        setErr({ ...err, [target]: newErr })
    }

    React.useEffect(() => {
        validate('email', em)
    }, [])

    const handleChange = target => {
        const name = target.name
        const value = target.value
        setUser({ ...user, [name]: value })
        validate(name, value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        axios.post(BASEURL + 'user/signup', user)
            .then(res => {
                if (res.status === 201) {
                    console.log(res.data.msg)
                    dispatch(addNote(res.data.msg))
                    history.push('/login/' + user.email)
                }
            })
            .catch(e => {
                console.log(e.response)
                if (e.response.status === 400)
                    dispatch(addNote(e.response.data.msg))
                else dispatch(addNote(e.response.statusText))
            })
    }

    return (
        <>
            <Container className={styles.Container}>
                <Form className={styles.Form}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            placeholder="Enter email"
                            value={user.email}
                            onChange={(e) => handleChange(e.target)}
                        />
                        <Form.Text className="text-muted">
                            {err.email}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicName">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            placeholder="Enter name"
                            onChange={(e) => handleChange(e.target)}
                        />
                        <Form.Text className="text-muted">
                            {err.name}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={(e) => handleChange(e.target)}
                        />
                        <Form.Text className="text-muted">
                            {err.password}
                        </Form.Text>
                    </Form.Group>
                    <Button
                        variant="danger"
                        type="submit"
                        className={styles.Button}
                        disabled={!(err.email === '' && err.name === '' && err.password === '')}
                        onClick={(e) => handleSubmit(e)}
                    >
                        SIGNUP
                    </Button>
                </Form>
            </Container>
        </>
    )
}

export default withRouter(SignupPage)