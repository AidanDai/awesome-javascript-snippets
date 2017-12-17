/**
 * implement for Currying and Partial Application
 *
 * Currying: https://en.wikipedia.org/wiki/Curryin
 *  usage: process(x, y, z) => curry(process)(x)(y)(z)
 *
 * Partial Application: https://en.wikipedia.org/wiki/Partial_application
 *  usage: process(x, y, z) => curry(process)(x)(y)(z)
 *         process(x, y, z) => curry(process)(x, y)(z)
 *         process(x, y, z) => curry(process)(x)(y, z)
 *
 * @params {function}   fn      需要被柯里化或部分施用的函数
 * @return {function}   fn      已经被柯里化或部分施用的函数
 * /
export function curry(fn) {
    let slice = Array.prototype.slice;
    let args = slice.call(arguments);
    let argsLength  = args[1] || fn.length;
    let subCurry = function subCurry(fn) {
        let args = slice.call(arguments, 1);

        return function() {
            return fn.apply(this, args.concat(slice.call(arguments)))
        }
    }

    return function() {
        if (arguments.length < argsLength) {
            let nextArgs = [ fn ].concat(slice.call(arguments));

            return curry(subCurry.apply(this, nextArgs), argsLength - arguments.length);
        } else {
            return fn.apply(this, arguments)
        }
    }
}
