const fs = require('fs')


export default function() {
        return !(fs.stat('/').ino === 2)
}
