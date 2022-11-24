function belongsToUser(_id, _post) {
    if (!_id || !_post) return false;
    return _id === _post?.userId
}

function requireTitleAndBody(_post) {
    if (!_post || !_post.title || !_post.body) return false;
    return true;
}

module.exports = {
    belongsToUser,
    requireTitleAndBody
}