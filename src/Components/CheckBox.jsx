import React, { useEffect, useState } from 'react'

const CheckBox = () => {
    const [selectedHobbies,setSelectedHobbies] = useState([])
    const hobbyOrder = ["Cricket", "Music", "Reading"]
    

    const handleCheckBoxChange = (e) =>{
        const {value,checked} = e.target

        setSelectedHobbies((prevSelectedHobbies)=>{
            let updatedHobbies
            if (checked) {
                updatedHobbies = [...prevSelectedHobbies,value].sort((a,b)=>{
                    return hobbyOrder.indexOf(a)-hobbyOrder.indexOf(b)
                })
            }else{
                updatedHobbies = prevSelectedHobbies.filter(hobby=>hobby!==value)
            }

            return updatedHobbies
        })
    }

    useEffect(()=>{
        console.log(selectedHobbies.join("-"))
        console.log(selectedHobbies.length)
        console.log(selectedHobbies.includes("Cricket"))
    },[selectedHobbies])
    return (
        <div>
            {selectedHobbies.length===0?<h1>Please select atlist On Hobby</h1>:""}
            {
                hobbyOrder
                    .map(hobby=>(
                        <div> 
                        <label>
                            <input type="checkbox" name="hobby" id="" value={hobby} checked={selectedHobbies.includes(hobby)} onChange={handleCheckBoxChange} />{hobby}
                        </label>
                        <br />
                        </div>
                    ))
            }

        </div>
    )
}

export default CheckBox