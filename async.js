async function asynchronousFunction() {
    return await new Promise((resolve) =>
    setTimeout(function () {
          resolve("lente");
        console.log("La promesse lente est terminé");
    }, 2000));
    }

  

asynchronousFunction().then(
    (result) =>
        { console.log(result) }
)
