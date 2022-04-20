function calculator() {
    const html = { first: "", second: "", output: "" }

    function calc(a, b, sign) {
        const signs = { "+": (a, b) => a + b, "-": (a, b) => a - b }

        return signs[sign](Number(a), Number(b));
    }

    return {
        init: (a, b, c) => {
            html.first = document.querySelector(a)
            html.second = document.querySelector(b)
            html.output = document.querySelector(c)
        },

        add: () =>
            (html.output.value = calc(html.first.value, html.second.value, "+")),
        subtract: () =>
            (html.output.value = calc(html.first.value, html.second.value, "-")),
    }
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');