function shout(string){
    //todo
    return string.toUpperCase()
}

function whisper(string){
    //todo
    return string.toLowerCase()
}

function logShout(string){
    //todo
    console.log(string.toUpperCase())
}

function logWhisper(string){
    //todo
    console.log(string.toLowerCase())
}

function sayHiToHeadphonedRoommate(string){
    //is string all lowercase?
    if(string == whisper(string)){
        return "I can't hear you!";
    }
    else if(string == shout(string)){
        return 'YES INDEED!';
    }
    else if (string == 'Let\'s have dinner together!'){
        return "I would love to!";
    }
}