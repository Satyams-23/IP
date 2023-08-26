const request = fetch('https://courpi.com/react-store-products').then((response) =>{
        console.log(response);
        return response.json()
    }).then((data) =>{
        console.log(data);
    }).catch((err) =>{
        console.log(err);
    }).finally(() =>{
        console.log("Will always run");
    })
