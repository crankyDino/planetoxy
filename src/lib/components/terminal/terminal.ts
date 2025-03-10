import './terminal.css';
import { commands } from '$lib/models/commands';

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


function newLine({ terminal_input, terminal_input_area, parent, response = "" }: { parent: HTMLDivElement, terminal_input_area: HTMLDivElement, terminal_input: HTMLSpanElement, response?: string | null }): void {

    const rowIdNo: number = parent.childElementCount;
    const rowId: string = "command_row_" + rowIdNo.toString();

    const newInputArea = terminal_input_area.cloneNode(true) as HTMLDivElement;
    //process rev command
    terminal_input_area.id = rowId;
    parent.querySelector("#terminal_input_carte")?.remove()
    terminal_input.removeAttribute("contenteditable");
    terminal_input.id = "row_input_" + rowIdNo.toString();

    //setup new input
    if (response) {
        const responseBlock = terminal_input_area.cloneNode() as HTMLDivElement
        responseBlock.innerText = response;
        responseBlock.classList.replace("terminal__cli", "terminal__text");
        responseBlock.style.paddingBottom = '.28em'
        responseBlock.style.lineHeight = '1.2em'
        parent.appendChild(responseBlock);
    }

    newInputArea.id = "terminal_input_area";
    (newInputArea.querySelector("#terminal_input") as HTMLElement).innerText = "";
    parent.appendChild(newInputArea);


    newInputArea.focus();
    newInputArea.scrollIntoView();
    window.scrollTo(0, window.scrollX);
    (newInputArea.querySelector("#terminal_input") as HTMLSpanElement).focus()
    parent.scroll(0, findPosition(newInputArea)[0])
}


let history: Array<string> = []
/**
 * Helps scroll into view i guess...?
 * 
 * @param elem 
 * @returns 
 */
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
    if (!command
        || !parent
        || !parent.querySelector("#terminal_input")
        || !parent.querySelector("#terminal_input_area")
    ) {
        return;
    }

    const terminal_input: HTMLDivElement = parent.querySelector("#terminal_input")!
    const terminal_input_area: HTMLDivElement = parent.querySelector("#terminal_input_area")!
    let response: string = `'${command}' is not a command`;

    console.log(commands.has(command));

    if (commands.has(command)) {
        const cmd = commands.get(command)
        response = cmd?.fn ? cmd.fn() : " "
    }

    newLine({ parent, terminal_input_area, terminal_input, response });
}

