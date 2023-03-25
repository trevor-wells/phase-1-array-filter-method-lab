function findMatching(names, str){
    return names.filter(element => element.toLowerCase() === str.toLowerCase())
}

function fuzzyMatch(names, str){
    return names.filter(element => element.startsWith(str))
}

function matchName(names, str){
    return names.filter(element => element.name === str)
}