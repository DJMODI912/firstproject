import React, { useEffect, useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css';

const Form = () => {

    const [selectedHobbies,setSelectedHobbies] = useState([])
    const hobbyOrder = ["Cricket", "Music", "Reading"]
    const [selectedCountry, setselectedCountry] = useState('');
 
    const [selectedDate, setSelectedDate] = useState('');

    const [formNewData,setFormNewData] = useState({})

    const handleChangeDate = event => {
        setSelectedDate(event.target.value);
        // console.log('Selected Date:', event.target.value);
    }

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

    const [formData,setFormData] = useState({
        uname:'',
        upass:'',
        urepass:'',
        gender:'',
        description:'',

    })
    const handleChangeCountry = (event) => {
      setselectedCountry(event.target.value)
      // console.log('Selected value:', event.target.value);
    }

    const handleInputChange = (e) =>{
        const{name,value} = e.target
        setFormData({
            ...formData,
            [name]: value,
        }
        )   
    }


    useEffect(()=>{
      console.log(formNewData)
      // console.log(selectedHobbies.join("-"))
     
    },[selectedHobbies,selectedDate,selectedCountry,formData,formNewData])

  const handleSubmit = (e) => {
    setFormNewData({
      ...formNewData,
      'uname':formData.uname,
      'upass':formData.upass,
      'urepass':formData.urepass,
      'gender':formData.gender,
      'description':formData.description,
      'hobby':selectedHobbies.join("-"),
      'country':selectedCountry,
      'dateofbirth':selectedDate,
    })
  }

  return (
    <div className='container'>
        <div className="row">
            <div className="col-ms-6 col-md-6">
                <center> <label class="form-label"><h1>Form</h1></label> </center> 
                
                <div class="mb-3">
                    <label for="uname" class="form-label">UserName</label>
                    <input type="text" name='uname' class="form-control" id="uname" placeholder="Enter User name" onChange={handleInputChange}/>
                </div>
                <div class="mb-3">
                    <label for="upass" class="form-label">Password</label>
                    <input type="password" name='upass' class="form-control" id="upass" placeholder="Enter User Password" onChange={handleInputChange}/>
                </div>

                <div class="mb-3">
                    <label for="urepass" class="form-label">New Password</label>
                    <input type="password" name='urepass' class="form-control" id="urepass" placeholder="Enter User Re-Password" onChange={handleInputChange}/>
                </div>

                <div class="form-group">
                    <label for="gender">Select your gender:</label>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="gender" id="male" value="male" onChange={handleInputChange}/>
                        <label class="form-check-label" for="male">
                        Male
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="gender" id="female" value="female" onChange={handleInputChange}/>
                        <label class="form-check-label" for="female">
                        Female
                        </label>
                    </div>
                   
                </div>

                <div class="mb-3">
                <br/>
                    <label for="description" class="form-label">Description</label>
                    <textarea name='description' class="form-control" id="description" placeholder="Enter Description" onChange={handleInputChange}/>
                </div>

                <div>
                {selectedHobbies.length <= 0?<h5>Please select atlist One Hobby</h5>:""}
                  {
                    hobbyOrder
                    .map(hobby=>(
                      <div>
                        <label>
                          <input type="checkbox" name="hobby" id="" value={hobby} checked={selectedHobbies.includes(hobby)} onChange={handleCheckBoxChange} />{hobby}
                        </label>
                        <br/>
                      </div>
                    ))
                  }
                </div>

                <div>
                  <br/>
                    <label htmlFor="mySelect"><h5>Select an Country:</h5></label>
                    <select id="mySelect" onChange={handleChangeCountry}>
                    <option value="Please Select Option">Please Select Country</option>                            
                      <option value="INDIA">INDIA</option>
                      <option value="NORTH AMERICA">NORTH AMERICA</option>
                      <option value="AISA">AISA</option>
                    </select>
                  </div>
                <br/>
                 <div>
                    <h5>Select a Date Of Birth</h5>
                  <input type="date" name="" value={selectedDate} id="" onChange={handleChangeDate}  />
                {/* <div className='row'>
                    <div className='col-md-4 mb-3'>
                        <p>Date: {selectedDate}</p>
                    </div>
                </div> */}
                   
                </div> 

            </div>

            <div>
              <br/>
                    <input type="button" value="Submit" onClick={handleSubmit} id='Submit' name='Submit'/>
              <br/><br/><br/>
            </div>
        </div>
    </div>
  )
}

export default Form