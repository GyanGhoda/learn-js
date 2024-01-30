function logMsg(object) {
    console.log(`Error Message: " + ${object.errMsg}`);
}

const obj1 = {
    errMsg: `Error in Obj1`
}

const obj2 = {
    errMsg: `Error in Obj2`
}

logger.logMsg.call(obj1);
logger.logMsg.call(obj2);