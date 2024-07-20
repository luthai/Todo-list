
/******************************************
**  Inbox page
*******************************************/ 
const inboxPage= () => {
    const fp_main = document.getElementById("FP-mainbar");


    // Inbox title
    const inbox_title = document.createElement("h1");
    inbox_title.classList.add("inbox-title");
    inbox_title.textContent = "Inbox";

    /**  Add task button **/
    const btn_add_task = document.createElement("button");
    btn_add_task.classList.add("btn-add-task");

    const icon = document.createElement("span");
    icon.classList.add("icon", "material-symbols-outlined");
    icon.textContent = "add";
    const icon_text = document.createElement("span");
    icon_text.textContent = "Add task";

    const a_link = document.createElement("a");
    a_link.appendChild(icon);
    a_link.appendChild(icon_text);

    btn_add_task.appendChild(a_link);

    // A dividing line
    const hr = document.createElement('hr');

    /**  Append element to front page main bar **/
    fp_main.appendChild(inbox_title);
    fp_main.appendChild(btn_add_task);
    fp_main.appendChild(hr);
}

export default inboxPage;
