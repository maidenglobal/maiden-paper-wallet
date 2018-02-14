const getStdin = require('get-stdin')

getStdin().then(input => {
  console.log(`export default [
${input.split('\n{ address').join(',\n  { address')}]`)
})