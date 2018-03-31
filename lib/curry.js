/**
 * implement for Currying
 * Currying: https://en.wikipedia.org/wiki/Curryin
 * 柯里化是将一个多参数函数转换成多个单参数函数
 * 也就是将一个 n 元函数转换成 n 个一元函数
 *
 * @params {function}   fn      需要被柯里化的函数
 * @return {function}   fn      已经被柯里化的函数
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
