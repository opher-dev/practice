## REQUIREMENTS

1. convert the response data to json format
2.The backend has this line that returns data
  
   ```bash 
  resp.status(200).send({ message: "Voilor!", lessons: [4, 5, 5] });
  ```
  
change the lessons array to the following
 
```bash
  lessons: [{topic:'Module 1',id:1,description:'',outcomes:['','','']}] 
```


2. displaying the lessons on the  `index.html` page using your DOM manipulation skills.
