var b = console.log;
function a(a, c) {
    var d = c;
    if (a) return a;
    b(d);
}
a(false, 1);
a(true, 2);