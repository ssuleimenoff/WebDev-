function isEmpty(o) {
    for (let key in o) {
        return false;
    }
    return true;
}