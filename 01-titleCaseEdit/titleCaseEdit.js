function titleCaseEdit(title) {
    var startPosition = 0,
        lastSpace = title.lastIndexOf(' ') + 1;
    title = title.charAt(0).toUpperCase() + title.slice(1);

    while (startPosition !== lastSpace) {
        startPosition = title.indexOf(' ', startPosition) + 1;
        title = title.slice(0, startPosition) + title.charAt(startPosition).toUpperCase() + title.slice(startPosition + 1);
    }
    return title;
}

// Do not edit this line;
module.exports = titleCaseEdit;

