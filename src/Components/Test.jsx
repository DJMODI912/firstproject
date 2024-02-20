import React from 'react'
import styled from 'styled-components';


import styles from './MyComponent.module.css'

//  const Test =() =>{
//     const Subtraction = (a,b) =>{
//         return a-b
//     }

//     return(
//         <div>
//             {Subtraction(10,3)}
//         </div>
//     )
// }

//  export default Test


// export const TestTwo = () => {
//   return (
//     <div>31</div>
//   )
// }




// const Test = (props) => {
//     const sub = () => parseInt(props.a) - parseInt(props.b)

//     return(
//         <div>
//             {sub()}
//         </div>
//     )
// }
// export default Test


const Test = (props) => {
    const add = () => parseInt(props.a) + parseInt(props.b)
    const sub = () => parseInt(add()) - parseInt(props.c)
    const mul = () => parseInt(sub()) * parseInt(props.d)
    const div = () => parseInt(mul()) / parseInt(props.e)


    const divStyle = {
        color: 'red',
        backgroundColor: '#cfcfcf'
    }

    const myDiv = styled.div`
        color: red;
        font-size: 22px;
        border: 2px solid orange;
        /* Add other styles as needed */
    `

    return (
        <div className='container'>
            <div>
                Addition :
                {add()}
            </div>
            <div style={divStyle}>
                Subtraction :
                {sub()}
            </div>
            <div className={styles.myComponent}>
                Multiplication :
                {mul()}
            </div>
            <div>
                Division :
                {div()}
            </div>

            <myDiv>
                hello
            </myDiv>
        </div>
    )
}
export default Test
