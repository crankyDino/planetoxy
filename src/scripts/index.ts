import { logging } from "./_util.js";
import { getCommand } from "./components/terminal/terminal.js";

try {
  window.onload = () => {
    logging();
    getCommand();
    const toggleDialog = () => {
      const btnContactDialogClose = document.getElementById(
        "btnContactDialogClose"
      ) as HTMLButtonElement;
      const btnContactDialog = document.getElementById(
        "btnContactDialog"
      ) as HTMLButtonElement;
      const contactDialog = document.getElementById(
        "contactDialog"
      ) as HTMLDialogElement;

      btnContactDialogClose.onclick = () => {
        contactDialog.close();
      };
      btnContactDialog.onclick = () => {
        contactDialog.showModal();
      };
    };
    toggleDialog();
  };
} catch (error) {
  throw new Error("No window bro. Where's your window bro???");
}
