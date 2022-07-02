const bcryptjs = require('bcryptjs');

//let hash = bcryptjs.hashSync('abc123', 10);
//console.log(hash);

console.log(bcryptjs.compareSync('hola', "$2a$10$8Mfr2OHyFgVWBm23X6c4Mu6LzBxh9i8XwlIMtGpCr3h2Odu3l1J2."))

console.log(bcryptjs.compareSync('hola', "$2a$10$9zjZuIaskYc.CyQOhx6XGuVeTaXcQCt/hkmuCNPkBadTKU5yCLRO6"))