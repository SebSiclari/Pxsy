import React from 'react'
import styled from 'styled-components'

const Root = styled.div`
height:100vh;
width:100%;
background-image: url(Pixsy.webp);
background-size:cover;
background-position:center;
display:flex;
justify-content:center;
`
const Card = styled.form`
margin-top:2rem;
border:2px solid black;
height:15rem;
width:12rem;
display:flex;
justify-content:center;
align-items:center;
`

export const RegistrationPage = () => {
  return (
<Root>
  <Card>
<label>Email:</label>
<input type='text' />
<label>Password:</label>
<input type='password' />
  </Card>
</Root>
  )
}
