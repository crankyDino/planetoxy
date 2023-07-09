var cmd = document.getElementById("terminal_input");
var terminal = document.getElementById("terminal_window");
export function getCommand() {
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
    if (cmd) {
        if (ev.code.includes("Space")) {
            cmd.innerText += `\u00a0`;
            console.log("click clack biatch");
            return;
        }
        if (ev.code !== ev.key &&
            !ev.code.includes("Left") &&
            !ev.code.includes("Right")) {
            cmd.innerText += ev.key;
            console.log("brosky");
            return;
        }
        if (ev.code.includes("Backspace")) {
            cmd.innerText = `${cmd?.innerText.slice(0, cmd.innerText.length - 1)}`;
            return;
        }
    }
};
//# sourceMappingURL=terminal.js.map