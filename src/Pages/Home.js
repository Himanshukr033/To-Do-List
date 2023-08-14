import React from 'react'
import Header from '../Components/Header'
import Form from '../Components/Form'
import '../Components/Component.css';

function Home() {
  return (
    <div className='homePage'>
      <Header heading="To Do List"/>
      <Form/>
    </div>
  )
}

export default Home
