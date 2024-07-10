

const frontPage = () => {
    const body = document.querySelector("body");


    /******************************************
    **  Front page side bar
    *******************************************/ 
    const side_bar = document.createElement("div");
    side_bar.classList.add("FP-sidebar");

    // Front page title
    const h2 = document.createElement("h2");
    h2.textContent = "Todo List";
    h2.classList.add("FP-title");


    /**  Side bar main content **/
    const SB_main = document.createElement("ul");
    SB_main.classList.add("SB-main");
    SB_main.innerHTML += sideBarMainContent;
    

    /******************************************
    **  Front page main bar
    *******************************************/
    const main_bar = document.createElement("div");
    main_bar.classList.add("FP-mainbar");

    
    /******************************************
    **  appending div to main body
    *******************************************/
    side_bar.appendChild(h2);
    side_bar.appendChild(SB_main);
    body.appendChild(side_bar);
    body.appendChild(main_bar);
    
}

export default frontPage;

const sideBarMainContent= 
`
    <li>
        <button>
         
                <img src="./add_25dp.png" />
                <span>Add Task</span>
           
        </button>
    </li>
`;