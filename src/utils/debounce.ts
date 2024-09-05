// export function debounce(func: any, timeout = 100) {
//   let timer: number;
//   return (...args: any) => {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       func.apply(this, args);
//     }, timeout);
//   };
// }

// const debounce = (func, delay) => {
//   let debounceTimer
//   return function () {
//       const context = this
//       const args = arguments
//       clearTimeout(debounceTimer)
//       debounceTimer
//           = setTimeout(() => func.apply(context, args), delay)
//   }
// }
