import React from 'react'
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'
import {Link} from 'react-router-dom'

function Header() {
    return ( 
        <div >
            <h1>Location  - </h1>
            <center>
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Link to='/'>
                        <Button variant={'contained'}>Home</Button>
                    </Link>
                    <Link to='/appointments'>
                        <Button variant={'contained'}>Appointments for Hospital</Button>
                    </Link>
                    <Link to='/medicines'>
                        <Button variant={'contained'}>Medicines for delivery</Button>
                    </Link>
                    <Link to='/onlineconsultancy'>
                        <Button variant={'contained'}>Online Consultancy</Button>
                    </Link>
                    <Link to='/appointments'>
                        <Button variant={'contained'}>Appointments for Test</Button>
                    </Link>
                </ButtonGroup>
            </center>
        </div>
    )
}

export default Header