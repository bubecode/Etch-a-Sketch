// Create a webpage with a 16x16 grid of square divs

const CONTAINER_WIDTH = 960
const CONTAINER_HEIGHT = 960

function makeGrid(size = 16) {
    let box_size = CONTAINER_WIDTH / size
    const container = document.querySelector(".container")
    container.innerHTML = ''; // clear old grid

    const fragment = document.createDocumentFragment();

    for (let i = 0; i < size ** 2; i++) {
        const divs = document.createElement('div')
        divs.classList.add("box")
        // divs.textContent = i + 1
        divs.style.cssText = `outline:1px solid #ccc;width:${box_size}px; height:${box_size}px`
        fragment.appendChild(divs)
    }
    container.appendChild(fragment);

    container.style.cssText = ` 
    width:960px;
    height:960px;
    border-style:solid;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
    `
    const box = document.querySelectorAll(".box")
    // box.style.opacity = "1"
    box.forEach(gird => {
        gird.style.opacity = "1"
        gird.addEventListener("mouseenter", (event) => {
            event.target.style.background = `rgb(${generateRandomColor(255)}, ${generateRandomColor(255)}, ${generateRandomColor(255)})`

        })
    })
}


const chanageGridSize = document.querySelector("#chanage-grid-size")

chanageGridSize.addEventListener("click", () => {
    let userChoice = prompt("Enter new grid size:")
    // console.log(userChoice)
    if (userChoice == null || userChoice == "" || userChoice > 100) {
        makeGrid()
    } else {
        //  console.log("else ")
        makeGrid(userChoice)

    }

})








function generateRandomColor(num) {
    // console.log(Math.floor(Math.random() * num))
    return Math.floor(Math.random() * num + 1)

}

// console.log(fragment)
makeGrid()
