import {bar} from 'lib1'

import type {Bar} from 'lib1/foo/bar'

const baz: Bar = {
    foo: 5
}

// do something...
console.log(bar);
console.log(baz);