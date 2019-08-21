const Item = (function () {
   validateName = function(name) {
        if (name.length === 0) {
            throw new TypeError('name does not exist');
        }
    },
    create = function(name) {
        return {
            id: cuid(),
            name,
            check: false,
        }
    }

    return {
        validateName,
        create,
    };
} ());