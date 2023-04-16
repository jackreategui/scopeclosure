const global = 0;

function myfuntion() {
    const mynumber = 1;
    console.log(global);

    function parent() {
        const inner = 2;
        console.log(mynumber, global);

        function child() {
            console.log(inner, mynumber, global);
        }

        return child()
    }

    return parent();
}

myfuntion();


