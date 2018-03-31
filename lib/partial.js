/**
 * implement for Partial Application
 * Partial Application: https://en.wikipedia.org/wiki/Partial_application
 * 局部施用则是固定一个函数的一个或者多个参数
 * 也就是将一个 n 元函数转换成一个 n - x 元函数
 *
 * @params {function}   fn      需要被部分施用的函数
 * @params {any}        arg     需要被固定的函数参数
 * @return {function}   fn      已经被部分施用的函数
 * /
export function partial(fn) {
    let slice = Array.prototype.slice;
    let args = slice.call(arguments, 1);

    return function() {
        return fn.apply(this, args.concat(slice.call(arguments)))
    }
}
