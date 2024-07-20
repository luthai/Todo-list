
/******************************************
**  Today page
*******************************************/ 
const todayPage= () => {
    const fp_main = document.getElementById("FP-mainbar");


    // Inbox title
    const today_title = document.createElement("h1");
    today_title.classList.add("today_title");
    today_title.textContent = "Today";

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
    fp_main.appendChild(today_title);
    fp_main.appendChild(btn_add_task);
    fp_main.appendChild(hr);
}

export default todayPage;
