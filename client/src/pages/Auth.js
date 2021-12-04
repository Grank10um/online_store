//import Button from '@restart/ui/esm/Button'
import React from 'react'
import { Card, Container, Form, Button, Row } from 'react-bootstrap'
import { NavLink, useLocation } from 'react-router-dom'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts'

const Auth = ()=> {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    return (
        <Container
            className=" d-flex justify-content-center  align-items-center"
            style={{height: window.innerHeight - 54}}
            >
            <Card style={{width: 600}} className=" p-5">
                <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className=" mt-3 "
                        placeholder="Email..."
                    />
                    <Form.Control
                        className=" mt-3 "
                        placeholder="password..."
                    />
                    <Row className=" mt-3 justify-content-between d-flex pl-3 pr-3 ">
                    <div>
                        {isLogin ?
                         <div>
                            Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}> Регистрируйся!</NavLink>
                            </div>
                            :
                            <div>
                            Есть аккаунт? <NavLink to={LOGIN_ROUTE}> Входи!</NavLink>
                            </div>
                        }
                        <Button variant={"outline-success"} > {isLogin ? 'Войти' : 'Регистрация'}</Button>
                    </div>
                  </Row>
                </Form>
            </Card>         
        </Container>
    )
}

export default Auth


//d-flex justify-content-center algin-items-center
