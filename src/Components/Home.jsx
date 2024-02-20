import React from 'react'
import styled from 'styled-components';
import styles from './MyComponent.module.css'

const divStyle = {
    color: 'Black',
    backgroundColor: '#fff'
}



const Home = (props) => {

    const add = () => parseInt(props.a) + parseInt(props.b)
    const sub = () => parseInt(props.a) - parseInt(props.b)
    
    return (
        <div className='container'>
        <div style={divStyle}>
            Add : 
            {add()}
        </div>

         <div className={styles.myComponentdiv}>
            Sub : 
         {sub()}
        </div>



     </div>
    )
}

export default Home
