export function getCommand() {
    const terminal = document.getElementById("terminal_window");
    if (terminal) {
        terminal.onclick = () => {
            window.onkeydown = (ev) => {
                keydown_Handler(ev);
            };
        };
    }
    window.onclick = (ev) => {
        const target = ev.target;
        if (!target.className.includes("terminal")) {
            console.log(target);
            console.log("bye bitch biatch");
            window.onkeydown = null;
        }
    };
}
const keydown_Handler = (ev) => {
    const cmd = document.getElementById("terminal_input");
    switch (ev.code) {
        case "Space":
            cmd.innerText += `\u00a0`;
            console.log("click clack biatch");
            window.scrollTo(0, window.scrollX);
            break;
        case "Backspace":
            cmd.innerText = `${cmd?.innerText.slice(0, cmd.innerText.length - 1)}`;
            break;
        case "Enter":
            newLine();
            break;
        default:
            if (ev.code.includes("Key") || ev.code.includes("Digit")) {
                cmd.innerText += ev.key;
                console.log(cmd.innerText);
            }
            break;
    }
};
function newLine() {
    const terminal_input_area_container = document.getElementById("terminal_input_area_container");
    const rowIdNo = terminal_input_area_container.childElementCount;
    const rowId = "command_row_" + rowIdNo.toString();
    document.getElementById("terminal_input_area").id = rowId;
    const inputArea = document.createElement("div");
    inputArea.innerHTML = document.getElementById(rowId).innerHTML;
    inputArea.classList.add(...document.getElementById(rowId).classList.values());
    inputArea.id = "terminal_input_area";
    inputArea.lastChild.textContent = "";
    document.getElementById("terminal_input").id =
        "row_input_" + rowIdNo.toString();
    terminal_input_area_container.appendChild(inputArea);
    inputArea.scrollIntoView();
    window.scrollTo(0, window.scrollX);
}
function findPosition(elem) {
    let currTop = 0;
    if (elem.offsetParent) {
        do {
            currTop += elem.offsetTop;
        } while (elem === elem.offsetParent);
    }
    return [currTop];
}
//# sourceMappingURL=terminal.js.map