const url = "http://localhost:4377/";
// const reQ = new Promise(rej);
const fetchData = async () => {
  const req = new XMLHttpRequest();
  req.open("GET", url); // open channel
  
  try {
    req.send(); // send request
    req.responseType = 'json'
    req.onreadystatechange  = ()=>{

      if(req.readyState== 4){
        let data = req.response

        Object.values(data.lessons).map(
          (e)=>{
            getData.appendChild(
              Object.assign(document.createElement("p"),{
                  innerText: e.id + " " + e.topic + " " + e.description
              }))
        })

        return data
      }

    }
    
  } catch (error) {
    console.log(error);
    return error;
  }
};

fetchData()