import React, { useEffect, useState } from "react"
import axios from "axios"

function Home() {
  const [lasttImageinDatasetURL, setLastImageTakenURL] = useState()

  useEffect(() => {
    grabArrayImageDataSet()
    console.log("1st useEffect called")
  }, []);

  function grabArrayImageDataSet() {
    console.log("grabimagedata called");
    axios.get(`https://mvi87.visualinspection.pub8987.apps.visualinspection.wdc04roks1.maximovisualinspection.com/api/datasets/141b7a4f-afca-4b20-bee9-b3b60fc22fad/files`, {
      headers: {
        'x-auth-token': 'nVD6-bIG6-bi5Q-UP6X',
      }
    })
      .then(response => {
        console.log(response.data)
        const resData = response.data
        const imageId = resData.map((currentImageId) => currentImageId._id)
        const lastPicture = imageId[0]
        axios.get(`https://mvi87.visualinspection.pub8987.apps.visualinspection.wdc04roks1.maximovisualinspection.com/api/datasets/141b7a4f-afca-4b20-bee9-b3b60fc22fad/files/${lastPicture}/download`, {
          headers: {
            'x-auth-token': 'nVD6-bIG6-bi5Q-UP6X',
          },
          responseType: 'blob'
        }) //https://thewebdev.info/2021/09/26/how-to-display-binary-data-as-image-in-react/ https://solveforum.com/forums/threads/solved-how-to-receive-blob-response-type-from-axios-request-with-node-and-gcp-function.408393/
          .then(function (response) {
            const imageBlob = response.data;
            const reader = new FileReader();
            reader.readAsDataURL(imageBlob);
            reader.onloadend = () => {
              const base64data = reader.result;
              setLastImageTakenURL(base64data)
            }
          })
      })
  };

  return (
    <div className="grid-container">
      <h4 className="title">Welcome to your Inspection Data Customized Platform!</h4>
      <h4 className="title2">Made by you, for you.</h4>
      <h5>Last Image Taken</h5>
      <img className="img1" src={lasttImageinDatasetURL} alt="can"></img>
      <button className="loadButton" onClick={grabArrayImageDataSet}>Load</button>
    </div>
  );
}

export default Home;