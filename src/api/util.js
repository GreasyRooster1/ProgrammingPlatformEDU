export function handle(e, fn, ...args) {
    e.preventDefault();
    fn.apply(this, args);
}
