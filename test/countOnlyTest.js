const countOnly   = require('../countOnly');

countOnly(["a", "b", "a"], { a: true, b: false }); //should only return a values