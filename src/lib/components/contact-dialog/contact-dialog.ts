import type { IContact } from "../../models/contact.model.js"
import type { IEmail } from "../../models/email-payload.model.js"
import type { IFullname } from "$lib/models/fullname.model.js"

import { writable } from "svelte/store"
import { resetForm, validateForm } from "$lib/handlers/form.handler/form.handler.js"
import { dialogState } from "$lib/handlers/dialog.handler/dialog.handler.js"
import { PUBLIC_EMAILTO } from "$env/static/public"

let reasons: Map<number, string> = new Map<number, string>()
function initChips() {
  const { subscribe, set, update } = writable(reasons)
  return {
    subscribe,
    createChip: (reason: string) => update((c) => { c.set(reasons.size + 1, reason); return c }),
    deleteChip: (id: number) => update((c) => { c.delete(id); return c }),
    popChip: () => update((c) => { c.delete(c.size); return c }),
    clear: () => set(new Map<number, string>())
  }
}
export const chips = initChips();

export function reset(form: HTMLFormElement): void {
  if (!form) {
    return;
  }
  resetForm(form);
  chips.clear();
}

export function submitHitMeUp(form: HTMLFormElement, dialog: HTMLDialogElement): void {
  validateForm(form, async (isValid) => {
    if (!isValid) { return; }

    const { err, payload } = buildEmail(form);
    if (err) {
      console.warn(err);
      return;
    }

    const res = await fetch('/api/email', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' }
    });

    const { status } = await res.json();
    console.log(status);

    if (status !== 200) { console.warn("Failed to send email"); return; }

    dialogState().close(dialog, form);
  })
}

/**
 * 
 * @param {HTMLFormElement}form 
 * @returns 
 */
function buildEmail(form: HTMLFormElement): { err: string | null, payload: IEmail | null } {
  const controls = Array.from(form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>("input,textarea"))
  let fullname: IFullname = { firstname: "", lastname: "" };
  let contacts: IContact = { email: `${PUBLIC_EMAILTO}`, fullname: { firstname: "you", lastname: "yourself" } };
  let payload: IEmail = { contacts: [], message: "", subject: "", template: "" };
  let email: string = "";
  if (!controls) { return { err: "No controls found", payload: null }; }

  controls.forEach(control => {
    if (!control.labels) {
      return;
    }

    switch (control.labels[0].title) {
      case "firstname":
        {
          fullname.firstname = control.value
          break;
        }
      case "lastname":
        {
          fullname.lastname = control.value
          break;
        }
      case "email":
        {
          email = control.value
          break;
        }
      case "reason":
        {
          payload.subject = `${Array.from(reasons.values()).join(", ")}`
          break
        };
      case "message":
        {
          payload.message += control.value
          break;
        }
    }
  })

  payload.contacts = [contacts];
  payload.template = buildTemplate(`${fullname.firstname} ${fullname.lastname}`, email, payload.message, payload.subject);
  return { err: null, payload };
}

function buildTemplate(name: string, email: string, message: string, reasons?: string): string {
  return `
    <h1 style="color: white; margin: auto">
      <strong>${name}</strong> wants to contact you.
    </h1>

    <div style="color: white; margin: auto" class="content">
      <h4 style="color: #f16a24; font-size: 22px; margin: auto">Details</h4>
      <ul style="list-style: none; margin: auto">
        <li style="color: white; font-size: 16px">> Name : ${name}</li>
        <li style="color: white; font-size: 16px; text-decoration: none">
          > E-mail :
          <span style="color: #f16a24; text-decoration: none">${email}</span>
        </li>
        <li style="color: white; font-size: 16px">> Date Sent : ${new Date().toUTCString()}</li>
      </ul>
    </div>

    <div style="color: white; margin: auto" class="content">
      <h4 style="color: #f16a24; font-size: 22px; margin: auto">Subject</h4>
      <p style="color: white; font-size: 16px; margin: auto">${reasons}</p>
    </div>

    <div style="color: white; margin: auto" class="content">
      <h4 style="color: #f16a24; font-size: 22px; margin: auto">Message</h4>
      <p style="color: white; font-size: 16px; margin: auto">${message}</p>
    </div>

    <button
      style="
        padding: 0.8%;
        background-color: #f16a24;
        border: none;
        border-radius: 2px;
        margin: auto;
      "
    >
      <a
        style="
          text-decoration: none;
          font-size: 14px;
          letter-spacing: 1.6px;
          font-weight: bold;
          color: white;
        "
        href="mailto:${email}?subject=Re: ${reasons}"
      >
        Reply
      </a>
    </button>`
}