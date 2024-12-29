const os=require(`os`)

console.log(os.userInfo())
console.log(`the laptop is running ${os.uptime()} seconds`)

const allOS_functions={
    name:os.type(),
    releaseData:os.release(),
    //more function
}
console.log(allOS_functions)


// The os module in Node.js provides utilities to interact with the operating system,
//  such as fetching system information (e.g., platform, memory, CPUs) and user details. 
//  It helps in building cross-platform applications by abstracting OS-specific functionality.