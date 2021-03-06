issue_1321_no_debug: {
    mangle = {
        properties: {
            keep_quoted: true,
        },
    }
    input: {
        var x = {};
        x.foo = 1;
        x["a"] = 2 * x.foo;
        console.log(x.foo, x["a"]);
    }
    expect: {
        var x={};x.o=1;x["a"]=2*x.o;console.log(x.o,x["a"]);
    }
    expect_stdout: true
}

issue_1321_debug: {
    mangle = {
        properties: {
            debug: "",
            keep_quoted: true,
        },
    }
    input: {
        var x = {};
        x.foo = 1;
        x["_$foo$_"] = 2 * x.foo;
        console.log(x.foo, x["_$foo$_"]);
    }
    expect: {
        var x={};x.o=1;x["_$foo$_"]=2*x.o;console.log(x.o,x["_$foo$_"]);
    }
    expect_stdout: true
}

issue_1321_with_quoted: {
    mangle = {
        properties: {
            keep_quoted: false,
        },
    }
    input: {
        var x = {};
        x.foo = 1;
        x["a"] = 2 * x.foo;
        console.log(x.foo, x["a"]);
    }
    expect: {
        var x = {};
        x.o = 1;
        x["a"] = 2 * x.o;
        console.log(x.o, x["a"]);
    }
    expect_stdout: true
}
