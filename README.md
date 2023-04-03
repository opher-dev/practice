## REQUIREMENTS

convert the response data to json format
  the backend has this line that returns data `resp.status(200).send({ message: "Voilor!", lessons: [4, 5, 5] });`. change the lessons array to the following
 
```bash

  lessons: [{topic:'',id:1,description:'',outcomes:['','','']}] 
```
displaying the lessons on the  `index.html` page.
