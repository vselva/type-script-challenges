// Common JavaScript Modules
// Common JS (CJS) uses module.exports while exporting and require while importing 

const CJSExports = function () {
    console.log('I am in CjsExport');
}

const PORT = 1000;
module.exports = { CJSExports, PORT };
