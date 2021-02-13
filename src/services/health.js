function getHealth(){
    return {
        status: 'OK',
        timeStamp: new Date(),
    };
}

module.exports = {
    getHealth,
}
