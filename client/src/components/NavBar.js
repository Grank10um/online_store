//rafc

import React, { useContext } from 'react'
import { Context } from '..'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts'
import {Button, Container} from 'react-bootstrap'
import { observable } from 'mobx'
import { observer } from 'mobx-react-lite'
import { useHistory } from 'react-router-dom'

export const NavBar = observer(()=> {
    const { user } = useContext(Context)
    const history = useHistory()

    return (
      <Navbar bg="dark" variant="dark">
        <Container>
        <NavLink style={{ color: 'white' }} to={SHOP_ROUTE}>BUY DeviCe</NavLink>
        {user._isAuth ?
          <Nav className="justify-content-end" style={{ color: "white" }}>
            <Button variant={"outline-light"} onClick= {()=> history.push(ADMIN_ROUTE)} >Админ панель</Button>
            <Button variant={"outline-light"} onClick= {()=> history.push(LOGIN_ROUTE)} className="mx-md-2" >Выйти</Button>
          </Nav>
          :
          <Nav className="justify-content-end" style={{ color: "white" }}>
            <Button variant="outline-light" onClick={()=>user.setIsAuth(true)} >Авторизация</Button>

          </Nav>}
          </Container>
      </Navbar>
    )
  });
export default NavBar;
