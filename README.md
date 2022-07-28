# React Application using Maximo Visual Inspection APIs
Create your own dashboard, and file uploading form for Maximo Visual Inspection using React. This will show how you can maximize your Maximo Visual Inspection Platform APIs. (est. 30 - 45 mins)

## What's being used
   - React
     - React Router
     - Hooks
     - Axios
     - React Forms
     - JSX
   - CSS
     - Responsive Design

## Prerequisites

1. You will need access to a Maximo Visual Inspection server. 
2. 1 model trained and deployed with advanced settings on the training server. 
3. Maximo Visual Inspection iOS Application set up.

In order to use this application, it is recommended to have experience in code editors and basics in Maximo Visual Inspection.

## Components

### App.js

- This component creates the routes in the navigation bar.

### Home.js

- This component creates 2 "GET" request to the dataset and loads the last image that was taken from the inspection. A button is created as well to load the latest image from the inspection. 

### Dashboard.js

- This component creates a "GET" request to the dataset and then uses the response to count the number of failed and passed inspections. Then, you will create a dashboard from those numbers. 

### UploadForm.js

- This component creates a file uploader form that allows you to pick an image from your local machine, then uses a "POST" request to the deployed model on the Maximo Visual Inspection training server. 

### UploadSuccess.js

- This component creates a display message when your file was uploaded successfully to the Maximo Visual Inspection training server. 

### style.css

- This is the stylesheet for the UI. Please free free to change the UI as you like and get creative. 


## Getting Started

​
1. Clone this repository to your workstation
​
- `gh repo clone ceciliajs/visual-inspection-react-app`
​
1. Navigate to the root directory of this project on your workstation, and then into the `my-app` sub-directory of the project
​
- `cd $PATH_WHERE_THIS_PROJECT_LIVES_ON_YOURWORKSTATION;`
- `cd main-folder/my-app`
​
1. Install the required dependencies, listed in package.json 
​
- `npm install -y`
​
1. Finally, start the app!
​
- `npm start`

​
Note: Navigate to [http://localhost:3000/](http://localhost:3000/) on your browser to view the application running on your local workstation!

## Variables

There are some `variables` throughout the application that you will have to get from your Maximo Visual Inspection environment. 


### Instructions to get your API Key

1. Login to your Maximo Visual Inspection environment.
2. Go to the navigation menu on the left hand side and select "Services" dropdown and then "API key"
3. Select the blue button "Generate API key" and copy your key. This will be `API_KEY` throughout your application.

### Instructions to get your dataset id and MAS URL

1. Login to your Maximo Visual Inspection environment.
2. Go to the navigation menu on the left hand side and select "Data sets" then select the data set you will be working with. 
3. Go to the url at the top of your page and copy it. The beginning will be your `MAS_URL` and the `DATASET_ID` will be the series of letters and numbers at the end. ex. https://wwdemo.visualinspection.wwdemomas8.gtm-pat.com/#/datasets/97ee68fa-3bfa-447a-9702-218e9dddf999 (note: `#` will be replaced with `api`)

### Instructions to get your Deployed Model API Endpoint

1. Login to your Maximo Visual Inspection environment.
2. Go to the navigation menu on the left hand side and select "Models" then select the checkbox of the model you will be working with. This will turn the "Deploy Model" button blue, select that button.
3. In the pop up box, at the top right corner switch on "Advanced deployment". 
4. When "Inference Results" pops up, select the "Save" radio button. 
5. When "Data set" dropdown is no longer grayed out, select the dataset you want the images from your inspection to be saved too. Then "Deploy" blue button.
6. Once the model is finished deploying, go to the navigation menu on the left hand side and select "Deployed models"
7. Select the hyperlink of your model, and copy the Deployed model API endpoint in the middle of the page. This will be your `DEPLOYED_MODEL_API_ENDPOINT` variable.

## Documentation

- [Maximo Visual Inspection Documentation](https://www.ibm.com/docs/en/mas-cd/maximo-vi/8.6.0)
- [Maximo Visual Inspection APIs](https://public.dhe.ibm.com/systems/power/docs/powerai/api860.html#)
- [Axios](https://axios-http.com/docs/intro)
- [React Router](https://reactrouter.com/)
- [Contact an IBMer](https://www.ibm.com/products/maximo-visual-inspection-mobile)

## Contribute

- Feel free to create a pull request for any updates or feedback. 
