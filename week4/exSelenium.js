

async function f() {

   
    async function promise(num){
        num++
        return num

    }

  
    let result = await promise(5); // wait till the promise resolves (*)
  
    console.log(result); // "done!"
  }
  f()
  
  
  