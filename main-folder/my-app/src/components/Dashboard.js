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
    axios.get(`https://mvi87.visualinspection.pub8987.apps.visualinspection.wdc04roks1.maximovisualinspection.com/api/datasets/141b7a4f-afca-4b20-bee9-b3b60fc22fad/files`, {
      headers: {
        'x-auth-token': 'nVD6-bIG6-bi5Q-UP6X',
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
            if (failLabelsTotal === 'vertical_fill') {
              countDef++
            }
            // } else if (failLabelsTotal === 'good') {
            //   countPass++
            // }

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