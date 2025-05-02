export type TCommand = { id: string, def: string };

export const commands = new Map<string, { id: string, def: string, fn?: () => string }>([
    ["help", { id: "help", def: "You're looking at it.", fn: getHelp }],
    ["rain", { id: "hello alice", def: "Do you know how deep the rabbit hole goes?" }],
    ["reset", { id: "wake up", def: "Hello, Mr Anderson." }],
    ["freeze", { id: "freeze", def: "brrrrrrr." }],
    ["hello", { id: "hello", def: "quick quips.", fn: quote }],
]);

function getHelp(): string {
    let response = "List of Commands \n"
    response += "------------------------------------\n"
    commands.forEach((x) => {
        response += `${x.id}: ${x.def}\n`;
    })
    return response
}

function quote() {
    return "Cry 'Havoc, and let slip the dogs of war.";
    // fetch('https://animechan.io/api/v1/quotes/random',{
    //     method: "GET",
    //     headers: { "Content-Type": "application/json", }
    // })
    //     .then(response => response.json())
    //     .then(quote => console.log(quote))
}
