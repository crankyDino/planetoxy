import { logging } from "./_util.js";
import { getCommand } from "./components/terminal/terminal.js";
try {
    window.onload = () => {
        logging();
        getCommand();
        const toggleDialog = () => {
            const btnContactDialogClose = document.getElementById("btnContactDialogClose");
            const btnContactDialog = document.getElementById("btnContactDialog");
            const contactDialog = document.getElementById("contactDialog");
            btnContactDialogClose.onclick = () => {
                contactDialog.close();
            };
            btnContactDialog.onclick = () => {
                contactDialog.showModal();
            };
        };
        toggleDialog();
    };
}
catch (error) {
    throw new Error("No window bro. Where's your window bro???");
}
//# sourceMappingURL=index.js.map