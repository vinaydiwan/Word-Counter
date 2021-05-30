const txtarea = document.getElementById("txtarea")
const rst = document.getElementById("reset")
const check = document.getElementById("check")

const char = document.getElementById("char")
const sent = document.getElementById("sent")
const word = document.getElementById("word")
const para = document.getElementById("para")
// const time = document.getElementById("time")

rst.addEventListener("click", () => {
    txtarea.value = "";
    char.innerText = 0;
    sent.innerText = 0;
    word.innerText = 0;
    para.innerText = 0;
    time.innerText = 0.0
})
check.addEventListener("click", () => {
    let string = new String();
    string = txtarea.value.trim();

    if (string.length !== 0) {
        // let t1 = new Date()
        checkpara(string)
        char.innerText = string.length
        checkword(string)
        // let t2 = new Date()
        // let d = (t2.getTime()-t1.getTime())
        // time.innerText = d
    }
})
function checkword(string) {
    let count = 1
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) === "?" || string.charAt(i) === "." || string.charAt(i) === " " || string.charAt(i) === "," || string.charAt(i) === "!") {
            count++;
            if (string.charAt(i + 1) === " ") {
                i++
            }
            for (let j = i + 1; "?" === string.charAt(j) || "!" === string.charAt(j) || "." === string.charAt(j) || " " === string.charAt(j); j++) {
                i++
            }
            if (i === string.length - 1) {
                count--
            }
        }


    }
    word.innerText = count;
}
function checkpara(string) {
    let pcount = 1;
    let scount = 1;
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) === "\n") {
            pcount++
            for (let j = i + 1; string.charAt(j) === "\n"; j++) {
                i++
            }
        }
        if (string.charAt(i) === "." || string.charAt(i) === "?") {
            scount++
            for (let j = i + 1; "." === string.charAt(j) || "?" === string.charAt(j) || " " === string.charAt(j); j++) {
                i++
            }
            if (i === string.length - 1) {
                scount--
            }
        }
    }
    para.innerText = pcount
    sent.innerText = scount;
}