import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useParams } from 'react-router'

//* IMPORTING STYLES...
import styles from './style.module.css'

export const SignupPage = ({ history, ...props }) => {
    var { em } = useParams()

    const [email, setEmail] = React.useState(em || '')

    const [name, setName] = React.useState('')

    return (
        <>
            <Container className={styles.Container}>
                <Form className={styles.Form}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicName">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                        <Form.Text className="text-muted">

                        </Form.Text>
                    </Form.Group>
                    <Button
                        variant="danger"
                        type="submit"
                        className={styles.Button}
                    >
                        SIGNUP
                    </Button>
                </Form>
            </Container>
        </>
    )
}

export default SignupPage