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
background:linear-gradient(to bottom, #ffb347, #ffc33)
`
const Card = styled.form`
margin:2rem;
padding:1rem;
height:15rem;
width:12rem;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
font-family:'Open Sans', sans-serif;
font-size: 1rem;
color: #333
`

const Label = styled.label`
margin: 0.5rem 0;
`
const Input = styled.input`
margin:0.5rem 0;
padding: 0.5rem;
border: 1px solid #ccc;
border-radius: 4px`

const Button = styled.button`
cursor: pointer;
border: none;
background-color: rgb(0, 138, 171);
display: flex;
justify-content: center;
align-items: center;
padding: 8px 45px;
text-transform: uppercase;
letter-spacing: 0.25em;
font-weight: 600;
color: rgb(255, 255, 255);
`

export const RegistrationPage = () => {
  return (
<Root>
  <Card>
<Label>Email:</Label>
<Input type='text' /> <br/>
<Label>Password:</Label>
<Input type='password' />
<Button type='submit'>Sign Up </Button>
  </Card>
</Root>
  )
}
