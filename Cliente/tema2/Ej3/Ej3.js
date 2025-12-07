$(function () {
    console.log($("p[class]"));
    console.log($("p:parent"));
    console.log($("p.paragraph1"));
    console.log($("p:contains('luigi')"));
    console.log($("p[class^='para']"));
    console.log($("p[class^='para'][align*='center']"));
    console.log($("ul:visible"));
    console.log($("*:only-child"));
    console.log($("ul li:nth-child(2)"));
    console.log($("ul:has(li[class*='a'])"));
    console.log($("ul li:last-child"));
})