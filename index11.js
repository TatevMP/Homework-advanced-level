1. Promise.allSettled

function promiseAllSettled(promises) {
    return new Promise((resolve) => {
      if (!Array.isArray(promises)) {
        throw new TypeError('Input must be an array')
      }
  
      let settledCount = 0
      const results = []
      const totalPromises = promises.length
  
      if (totalPromises === 0) {
        return resolve(results)
      }
  
      promises.forEach((promise, index) => {
        Promise.resolve(promise)
          .then((value) => {
            results[index] = { status: 'fulfilled', value }
          })
          .catch((reason) => {
            results[index] = { status: 'rejected', reason }
          })
          .finally(() => {
            settledCount += 1
            if (settledCount === totalPromises) {
              resolve(results)
            }
          })
      })
    })
  }
  



  2. Promise.any


  function promiseAny(promises) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(promises)) {
        throw new TypeError('Input must be an array')
      }
  
      let rejectedCount = 0;
      const totalPromises = promises.length
      const errors = []
  
      if (totalPromises === 0) {
        return reject(new AggregateError([], 'All promises were rejected'))
      }
  
      promises.forEach((promise) => {
        Promise.resolve(promise)
          .then(resolve)
          .catch((error) => {
            errors.push(error)
            rejectedCount += 1
            if (rejectedCount === totalPromises) {
              reject(new AggregateError(errors, 'All promises were rejected'))
            }
          })
      })
    })
  }
  


  3. Promise.race

  function promiseRace(promises) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(promises)) {
        throw new TypeError('Input must be an array')
      }
  
      promises.forEach((promise) => {
        Promise.resolve(promise)
          .then(resolve)
          .catch(reject)
      })
    })
  }



  4. Promise.all

  function promiseAll(promises) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(promises)) {
        return reject(new TypeError('Input must be an array'))
      }
  
      let resolvedCount = 0
      const results = []
      const totalPromises = promises.length
  
      if (totalPromises === 0) {
        return resolve(results)
      }
  
      promises.forEach((promise, index) => {
        Promise.resolve(promise)
          .then((value) => {
            results[index] = value
            resolvedCount += 1
  
            if (resolvedCount === totalPromises) {
              resolve(results)
            }
          })
          .catch((error) => {
            reject(error)
          })
      })
    })
  }
  
  const promises = [
    new Promise((resolve) => setTimeout(() => resolve('First promise resolved!'), 1000)),
    new Promise((resolve) => setTimeout(() => resolve('Second promise resolved!'), 2000)),
    new Promise((resolve) => setTimeout(() => resolve('Third promise resolved!'), 3000)),
    new Promise((resolve, reject) => setTimeout(() => reject('Fourth promise rejected!'), 4000))
  ];
  
  promiseAll(promises)
    .then((results) => {
      console.log('All promises resolved with results:', results);
    })
    .catch((error) => {
      console.log('A promise rejected with error:', error);
    })
  
  