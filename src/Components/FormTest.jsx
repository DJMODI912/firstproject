import React, { useEffect, useState } from 'react'

const FormTest = () => {



    const [formData, setFormData] = useState({
        uname: '',
        upass: '',
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value,
        }
        )

        // setUname(e.target.value)
    }

    useEffect(() => {
        console.log(formData)
        console.log(formData.uname)
    }, [formData])

    return (
        <div className='container'>
            <div className="row">
                <div className="col-ms-6 col-md-6">
                    <div class="mb-3">
                        <label for="uname" class="form-label">UserName</label>
                        <input type="text" name='uname' class="form-control" id="uname" placeholder="Enter User name" onChange={handleInputChange} />
                    </div>
                    <div class="mb-3">
                        <label for="upass" class="form-label">Password</label>
                        <input type="password" name='upass' class="form-control" id="upass" placeholder="Enter User Password" onChange={handleInputChange} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormTest