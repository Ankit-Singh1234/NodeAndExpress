module.exports.items=['item1','item2']
module.exports.person={
    Pname:"ankit",
}

const course={
    sub1:"english",
    sub2: "cs"

}
//When you assign something to module.exports, it overwrites any previous exports. Here’s how it
//This line replaces the entire module.exports object with course. As a result, the earlier exports (items and person) are lost.
//module.exports=course;


// If you want to export all the items together (without overwriting), you can do it in one of the following ways:


module.exports.course=course;     //correct

// module.exports.course={   //correct
//     sub1:"english",
//     sub2: "cs"

// };