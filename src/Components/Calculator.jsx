import React, { useState } from 'react'
import './calcstyle.css'

const Calculator = () => {

    const history = localStorage.getItem('lastresult')
    const [result, setresult] = useState("")

    const handleClick = (e) => {   
        setresult((result.concat(e.target.name)))
    }

    const clear = () => {
        localStorage.setItem('lastresult',result)
        setresult("")
    }

    const backspace = () => {
        setresult(result.slice(0, result.length - 1))
    }

    const calculate = () => {
        try {
            setresult(eval(result).toString())   
            
        } catch (err) {
            setresult("Error")
        }
    }

    const historyRes = ()=>{    
        setresult(history)
    }

    return (
        <div className="container">
            <h2>Simple Calculator</h2>
            <table id="calcu">
                <tr>
                    <td colspan="3">
                        <input type="text" id="result" value={result} placeholder="0" />
                    </td>
                    <td><input type="button" value="Remove" id="backspace" onClick={backspace} /></td>
                </tr>
                <tr>
                    <td><input type="button" name="1" value="1" onClick={handleClick} /></td>
                    <td><input type="button" value="2" name="2" onClick={handleClick} /></td>
                    <td><input type="button" value="3" name="3" onClick={handleClick} /></td>
                    <td><input type="button" value="/" name="/" onClick={handleClick} /></td>
                </tr>
                <tr>
                    <td><input type="button" value="4" name="4" onClick={handleClick} /></td>
                    <td><input type="button" value="5" name="5" onClick={handleClick} /></td>
                    <td><input type="button" value="6" name="6" onClick={handleClick} /></td>
                    <td><input type="button" value="*" name="*" onClick={handleClick} /></td>
                </tr>
                <tr>
                    <td><input type="button" value="7" name="7" onClick={handleClick} /></td>
                    <td><input type="button" value="8" name="8" onClick={handleClick} /></td>
                    <td><input type="button" value="9" name="9" onClick={handleClick} /></td>
                    <td><input type="button" value="-" name="-" onClick={handleClick} /></td>
                </tr>
                <tr>
                    <td><input type="button" value="C" id="clear" onClick={clear} /></td>
                    <td><input type="button" value="0" name="0" onClick={handleClick} /></td>
                    <td><input type="button" value="=" name="=" id="result" onClick={calculate} /></td>
                    <td><input type="button" value="+" name="+" onClick={handleClick} /></td>
                </tr>
                <tr>
                    <td><input type="button" value="History" onClick={historyRes}/></td>
                </tr>
            </table>
        </div>
    )
}
export default Calculator