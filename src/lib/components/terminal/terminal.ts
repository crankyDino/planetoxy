import './terminal.css';
import { commands } from '$lib/models/commands';
import * as m from './matrix';

// export let command: string = ""
// export let terminalWindow: HTMLDivElement | null = null;



// import { rain, freeze } from "../../pkgs/matrix.js";
// import { commands } from "./commands.js";

export function getCommand(command: string | null | undefined) {
    if (!command) {
        console.log("not it");
        return
    }
}


function newLine(terminal_input_area_container: HTMLDivElement, terminal_input_area: HTMLDivElement, terminal_input: HTMLSpanElement): void {

    const rowIdNo: number = terminal_input_area_container.childElementCount;
    const rowId: string = "command_row_" + rowIdNo.toString();

    // document.getElementById("terminal_input_area").dataset.rowId = rowIdNo.toString();

    // document.getElementById("terminal_input_area").id = rowId;

    terminal_input_area.id = rowId;
    // terminal_input_area.id = rowId;

    const newInputArea = document.createElement("div");
    newInputArea.innerHTML = terminal_input_area.innerHTML; //clone old input into new area
    newInputArea.classList.add(...terminal_input_area.classList.values());
    newInputArea.id = "terminal_input_area";
    (newInputArea.querySelector("#terminal_input") as HTMLElement).innerText = "";

    terminal_input.id = "row_input_" + rowIdNo.toString();

    terminal_input_area_container.appendChild(newInputArea);
    console.log(terminal_input_area_container);
    // terminal_input.removeAttribute("contenteditable");
    newInputArea.scrollIntoView();
    window.scrollTo(0, window.scrollX);
    terminal_input_area_container.scroll(0, findPosition(newInputArea)[0])
}



let history: Array<string> = []
function findPosition(elem: HTMLElement): number[] {
    let currTop = 0;
    if (elem.offsetParent) {
        do {
            currTop += elem.offsetTop;
        } while (elem === elem.offsetParent);
    }
    return [currTop];
}

export function runCommand(command: string | null, parent: HTMLDivElement | null) {
    console.log("response");
    // debugger
    if (!command
        || !parent
        || !parent.querySelector("#terminal_input")
        || !parent.querySelector("#terminal_input_area")
    ) {
        return;
    }
    // console.log(parent.children);
    // console.log(parent.querySelector("#terminal_input"));
    const terminal_input: HTMLDivElement = parent.querySelector("#terminal_input")!
    const terminal_input_area: HTMLDivElement = parent.querySelector("#terminal_input_area")!

    newLine(parent, terminal_input_area, terminal_input);

    const availableCommands = Object.values(commands)
    const prompt = availableCommands.some((x) => x.includes(command)) ? command.trim() : null
    if (!prompt) { return; }

    //   switch (prompt) {
    switch (command) {
        case "freeze":
            m.freeze()
            break;
        case "help":
            console.log("uhmmmmmmmmmmm");
            // const cmd = document.getElementById("terminal_input");
            let response: string = ""
            response = "List of Commands \n"
            response += "------------------\n"
            availableCommands.forEach((x) => {
                response += ";\n"
                response += x
            })
            console.log(response);
            parent.innerText = response
            // cmd.innerText = `${response}`
            break;
        case "hello alice":
            // case "rain":
            // m.rain()
            break;
        default:
            console.log("??????????");
            break;
    }
}

