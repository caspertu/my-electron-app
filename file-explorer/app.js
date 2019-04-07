const osenv = require('osenv');

function getUsersHomeFolder() {
    return osenv.home();
}