// node에서 작동하는 방식
// CommonJS

// import autoprefixer from 'autoprefixer'
const autoprefixer = require('autoprefixer')

// export {
//  plugins: [
//     autoprefixer
//  ]
// }
module.exports = {
  plugins: [
      autoprefixer
  ]
}