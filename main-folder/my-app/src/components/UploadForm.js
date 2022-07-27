import React, { useState } from "react"
import axios from 'axios';
import UploadSuccess from "./UploadSuccess";

const UploadForm = () => {
  // a local state to store the currently selected file.
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploadSuccessful, setUploadSuccess] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    var FormData = require('form-data');

    var data = new FormData();
    data.append('filename', selectedFile.name);
    data.append('files', selectedFile);

    var config = {
      method: 'post',
      url: 'DEPLOYED_MODEL_API_ENDPOINT',
      headers: {
        'X-Auth-Token': 'API_KEY',
        'Content-Type': 'multipart/form-data'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        if(response.status === 200){
          setUploadSuccess(true)
        }
        console.log(response)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0])
  }

  return (
    <form onSubmit={handleSubmit}>
      <input className="inputFile" type="file" onChange={handleFileSelect} />
      <input className="inputUpload" type="submit" value="Upload" />
      {isUploadSuccessful ?
        <UploadSuccess />
        :
        <>
        <div className="uploadFile">Upload File Here</div>
        </>

      }
    </form>
  )
};

export default UploadForm;

