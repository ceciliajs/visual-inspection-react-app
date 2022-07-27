import React, { useEffect, useState } from "react"
import axios from "axios"

function Dashboard() {

  const [lastNumOfDefects, setDefectNum] = useState()
  const [lastNumOfPasses, setPassNum] = useState()

  useEffect(() => {
    grabNumOfDefects()
    console.log("1st useEffect called")
  }, []);

  function grabNumOfDefects() {
    axios.get(`MAS_URL/api/datasets/DATASET_ID/files`, {
      headers: {
        'x-auth-token': 'API_KEY',
      }
    })
      .then(response => {
        console.log("this is api response ", response);
        const resData = response.data
        var countDef = 0
        var countPass = 0

        for (var i = 0; i < resData.length; i++) {
          if (resData[i].upload_type === "inference_result") {
            const failLabelsTotal = resData[i].tag_list[0].tag_name
            if (failLabelsTotal === 'bad_dented') {
              countDef++
            } else if (failLabelsTotal === 'good') {
              countPass++
            }

          }

        }
        setDefectNum(countDef)
        setPassNum(countPass)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    < >
      <h5 className="parts-dashboard1">Current # of Defective Parts</h5>
      <div className="parts-dashboard1-2">{lastNumOfDefects}</div>
      <h5 className="parts-dashboard2">Current # of Passed Parts</h5>
      <div className="parts-dashboard2-2">{lastNumOfPasses}</div>
      <button className="refreshButton" onClick={grabNumOfDefects}>Refresh</button>
    </>
  );
}

export default Dashboard;