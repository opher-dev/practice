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


## WEB WORKERS ASSIGNMENT

using population data found on this repository [population data](https://github.com/samayo/country-json/blob/master/src/country-by-population.json)

create an application that uses web workers to pocess the data and give a report based on the following criteria.
1. find populus (most populated) country.  

2. find the least populated country the data should conform to the object data given in the hint below.

3. find the median populated country - the country whose population stands between most populated and least populated.

4. create or display the data in bars (some sort of barchart - it does not have to be a perfect barchart) using your svg skills.

5. make sure that the data is processed once and saved to a storage location and retrieve thet data at later stages.

6. send the data to the api (the rest api found in this project at `./server` folder.). only sending the data nothing else.

>**HINT**: Your data recieved from the web worker should look and be grouped  like this:
```bash
{
mostPopulates: {countryname: '', population: '', percentage: 0},
leastPopulated: {countryname: '', population: '', percentage: 0},
medianPopulates: {countryname: '', population: '', percentage: 0}
}
```
