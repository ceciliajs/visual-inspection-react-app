import React, { useState } from "react"
import axios from 'axios';
import UploadSuccess from "./UploadSuccess.js";
import { default as FormData } from "form-data";


const UploadForm = () => {
  // a local state to store the currently selected file.
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploadSuccessful, setUploadSuccess] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    var data = new FormData();
    data.append('filename', selectedFile.name);
    data.append('files', selectedFile);

    var config = {
      method: 'post',
      url: 'https://mvi87.visualinspection.pub8987.apps.visualinspection.wdc04roks1.maximovisualinspection.com/api/dlapis/40c401bf-b374-440e-ab5e-69365d4cf7a6',
      headers: {
        'X-Auth-Token': 'nVD6-bIG6-bi5Q-UP6X',
        'Content-Type': 'multipart/form-data'
      },
      data: data
    };

    let filteredRegions = [];
    axios(config)
      .then(function (response) {
        // const responseString = JSON.stringify(response)
        // console.log(responseString)
        const regions = response.data.classified[0].anomaly.regions
        console.log(regions)
        filteredRegions = regions.filter(region => region.score > 0.6)
        console.log(filteredRegions)
        if(response.status === 200){
          setUploadSuccess(true)
          if (response.classified[0].anomaly.regions[0] <= 0.4){
            console.log("yes this works")
          }
        }
        console.log(response)
        //console.log(responseString)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0])
  }

  // return (
  //   <form onSubmit={handleSubmit}>
  //     <input className="inputFile" type="file" onChange={handleFileSelect} />
  //     <input className="inputUpload" type="submit" value="Upload" />
  //     {isUploadSuccessful ?
  //       <UploadSuccess />
  //       :
  //       <>
  //       <div className="uploadFile">Upload File Here</div>
  //       </>

  //     }
  //   </form>
  // )
  return (
    <form onSubmit={handleSubmit}>
      <input className="inputFile" type="file" onChange={handleFileSelect} />
      <input className="inputUpload" type="submit" value="Upload" />
      {isUploadSuccessful ? (
        <>
          <UploadSuccess />
          <h1>Anomalies with Score Above 0.6</h1>
        {  filteredRegions.map((region, index) => (
            <div key={index}>
              <p>Score: {region.score}</p>
            </div>
          ))}
        </>
      ) : (
        <>
          <div className="uploadFile">Upload File Here</div>
        </>
      )}
    </form>
  );
  
};

export default UploadForm;

