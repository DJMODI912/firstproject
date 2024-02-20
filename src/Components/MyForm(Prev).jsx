import React, { useEffect, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';

const MyForm = () => {
  const [selectedHobbies, setSelectedHobbies] = useState([]);
  const hobbyOrder = ["Cricket", "Music", "Reading"];
  const [selectedCountry, setselectedCountry] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [formNewData, setFormNewData] = useState({});

  const handleChangeDate = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleCheckBoxChange = (e) => {
    const { value, checked } = e.target;

    setSelectedHobbies((prevSelectedHobbies) => {
      let updatedHobbies;
      if (checked) {
        updatedHobbies = [...prevSelectedHobbies, value].sort((a, b) => {
          return hobbyOrder.indexOf(a) - hobbyOrder.indexOf(b);
        });
      } else {
        updatedHobbies = prevSelectedHobbies.filter((hobby) => hobby !== value);
      }

      return updatedHobbies;
    });
  };

  const [formData, setFormData] = useState({
    uname: '',
    upass: '',
    urepass: '',
    gender: '',
    description: '',
  });

  const handleChangeCountry = (event) => {
    setselectedCountry(event.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log(formNewData);
  }, [formNewData]);

  const handleSubmit = (e) => {
    setFormNewData((prevValues) => ({
      ...prevValues,
      uname: formData.uname,
      upass: formData.upass,
      urepass: formData.urepass,
      gender: formData.gender,
      description: formData.description,
      hobby: selectedHobbies.join("-"),
      country: selectedCountry,
      dateofbirth: selectedDate,
    }));
  };

  return (
    <div className='container'>
      <div className="row">
        <div className="col-ms-6 col-md-6">
          <center><label className="form-label"><h1>Form</h1></label></center>
          <div className="mb-3">
            <label htmlFor="uname" className="form-label">UserName</label>
            <input type="text" name='uname' className="form-control" id="uname" placeholder="Enter User name" onChange={handleInputChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="upass" className="form-label">Password</label>
            <input type="password" name='upass' className="form-control" id="upass" placeholder="Enter User Password" onChange={handleInputChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="urepass" className="form-label">New Password</label>
            <input type="password" name='urepass' className="form-control" id="urepass" placeholder="Enter User Re-Password" onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Select your gender:</label>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="gender" id="male" value="male" onChange={handleInputChange} />
              <label className="form-check-label" htmlFor="male">
                Male
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="gender" id="female" value="female" onChange={handleInputChange} />
              <label className="form-check-label" htmlFor="female">
                Female
              </label>
            </div>
          </div>
          <div className="mb-3">
            <br />
            <label htmlFor="description" className="form-label">Description</label>
            <textarea name='description' className="form-control" id="description" placeholder="Enter Description" onChange={handleInputChange} />
          </div>
          <div>
            {selectedHobbies.length <= 0 ? <h4>Please select at least One Hobby</h4> : ""}
            {
              hobbyOrder.map(hobby => (
                <div key={hobby}>
                  <label>
                    <input type="checkbox" name="hobby" value={hobby} checked={selectedHobbies.includes(hobby)} onChange={handleCheckBoxChange} />{hobby}
                  </label>
                  <br />
                </div>
              ))
            }
          </div>
          <div>
            <br />
            <label htmlFor="mySelect"><h4>Select a Country:</h4></label>
            <select id="mySelect" onChange={handleChangeCountry}>
              <option value="Please Select Option">Please Select Country</option>
              <option value="INDIA">INDIA</option>
              <option value="NORTH AMERICA">NORTH AMERICA</option>
              <option value="ASIA">ASIA</option>
            </select>
          </div>
          <div>
            <h4>Select a Date Of Birth</h4>
            <input type="date" value={selectedDate} onChange={handleChangeDate} />
          </div>
        </div>
        <div>
          <br />
          <input type="button" value="Submit" onClick={handleSubmit} id='Submit' name='Submit' />
        </div>
      </div>
    </div>
  );
};

export default MyForm;
