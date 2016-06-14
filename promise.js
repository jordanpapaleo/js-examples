var d = new Promise((resolve, reject) => {
  setTimeout(() => {
    if(true) {
      resolve('RESOLVED');
    } else {
      reject('REJECTED');
    }
  }, 1000)
})

d.then((response) => {
  console.log('Success 1', response)
  return response + ' MOFO';
})
.then((response) => {
  console.log(response)
})
.catch((error) => {
  console.error(error)
})
