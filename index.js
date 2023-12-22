let inp = document.querySelector("input")

inp.oninput = () => {
    let col = inp.value
    document.body.style.backgroundColor = col
}