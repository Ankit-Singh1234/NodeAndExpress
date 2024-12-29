const path=require(`path`)
//It returns the platform-specific path segment separator.
console.log(path.sep)

const joinedPath=path.join(`content`,`subcontent`,`test.txt`)
console.log(joinedPath)

const absolutePath=path.resolve(__dirname,`content`,`subcontent`,`test.txt`)
console.log(absolutePath)


//base path -> last file 
console.log(path.basename(absolutePath))