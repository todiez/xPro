export default function greet(name) {
    if (name === null) return "Hello there!";
    else if (typeof name === typeof []) {
        if (name.length > 0) {
        var names = "";
        name.forEach((elm) => {
            names += ', ' + elm;
        });
        return 'Hello' + names;
        }
        return 'Hello there!';
    }
    if (name === name.toUpperCase()) {
        return 'HELLO ' + name + '!';
    }
    return 'Hello, ' + name;
}