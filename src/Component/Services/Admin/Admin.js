import React, { useState } from 'react';
import ServiceHeader from '../ServiceHeader/ServiceHeader';
import './Admin.css'

const Admin = () => {

    const [info, setInfo] = useState({})
    const [file, setFile] = useState(null)

    const handleBlur = e => {
        const newInfo = { ...info }
        newInfo[e.target.name] = e.target.value
        setInfo(newInfo);
    }

    const handleFileChange = e => {
        const newFile = e.target.files[0]
        setFile(newFile)

    }

    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('email', info.email);

        fetch('https://blooming-sea-02282.herokuapp.com/addAdmin', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }


    return (
        <div className="AdminContainer">
            <ServiceHeader />
            <div className="AdminContent">
                <h3 style={{ color: "#00ffd5" }}>Make Admin</h3>

                <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" onBlur={handleBlur} class="form-control" name="email" placeholder="Enter email" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Name</label>
                        <input type="name" onBlur={handleBlur} class="form-control" name="name" placeholder="Enter name" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">UpLoad file</label>
                        <input type="file" onChange={handleFileChange} class="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <br />
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>

            </div>
        </div>
    );
};

export default Admin;