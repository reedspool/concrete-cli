var ConcreteParser = require('concrete-runtime').ConcreteParser;
var Immutable = require('immutable')

// peanutz.parse("0#A 1#B + _#C @C . \",\" . _ . @B @A move @C @B move 0#I 1 + _#J 20 > _ 5 0 ? _ slide @J @I move 0 jump END")
//
var parsed = ConcreteParser.parse(process.argv[2])

console.log.bind(console)(JSON.stringify(parsed, null, 2))
