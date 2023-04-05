# Practice Exercise
>
>please make sure you have nodejs installed on your system before continuing with this exercise

To run the server do the following:

- cd into server directory - `cd server`
- install dependencies - `npm install`
- run the server - `npm dev'

you can run the front end with `live serve` extension found in vscode

## REQUIREMENTS

1. convert the response data to json format
2. The backend has this line that returns the data
  
```bash

  resp.status(200).send({ message: "Voilor!", lessons: [4, 5, 5] });

```
  
change the lessons array to the following

```bash
  lessons: [
       {
          topic:'Module 1',
          id:1,
          description:'',
          outcomes:['','','']
        },
        ...,
        ...
      ] 
```

3. displaying the lessons on the  `index.html` page using your DOM manipulation skills.


## FINAL PROJECT ASSIGNMENT ( combines knowlwdge from module 1-14)

using population data found on this repository - : [population data in json](https://github.com/samayo/country-json/blob/master/src/country-by-population.json). Copy the data and create a `data.json` file in the root folder.

create an application that uses web workers to pocess the data and give a report based on the following criteria.
1. Load the data from `data.json` file using form file upload - allow only `json` file format  or extension.
2. find populus (most populated) country.  

3. find the least populated country the data should conform to the object data given in the hint below.

4. find the median populated country - the country whose population stands between most populated and least populated.

5. create or display the data in bars (some sort of barchart - it does not have to be a perfect barchart) using your svg skills.

6. make sure that the data is processed once and saved to a storage location and retrieve thet data at later stages.

7. retrieve  the data stored in the browser and send it to the api (the rest api found in this project at `./server` folder.). only sending the data nothing else.

>**HINT**: Your data recieved from the web worker should look and be grouped  like this:
```bash
{
mostPopulates: {countryname: '', population: '', percentage: 0},
leastPopulated: {countryname: '', population: '', percentage: 0},
medianPopulates: {countryname: '', population: '', percentage: 0}
}
```
