// importing Common JavaScript
const { CJSExports: exportFunction, PORT: MYPORT } = require('./CJSExport');
// const { CJSExports, PORT } = require('./CJSExport'); // This will work with JS not with TS. 

// Executing the imported function
exportFunction();

// Note- common js is not for TS