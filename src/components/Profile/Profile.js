import React from 'react'
import Paper from '@mui/material/Paper'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'

function Profile({name, gender, contact, specialisation, hospital}) {
    return (
        <div>
            <center>
                <Paper elevation={20}>
                    <h2><pre>Name: {name}      Gender:{gender}</pre></h2>
                    <Card>
                    <p>Contact No: {contact}</p><br />
                    <p>Specialisation: {specialisation}</p><br /> 
                    </Card>
                    <Button size={'large'} color={'success'} height={20}>Book Appointment</Button>
                </Paper>
            </center>
        </div>
    )
}

export default Profile
