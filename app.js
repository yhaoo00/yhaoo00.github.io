//select all element with specific class
const sections = document.querySelectorAll('.section');
const section_buttons = document.querySelectorAll('.controls');
const section_btn = document.querySelectorAll('.control');
const section_all = document.querySelector('.main-content');
const btn_cont = document.querySelector('.btn-con');

//transition
function pg_trans() {
    //active on click
    for (let i = 0; i < section_btn.length; ++i) {
        section_btn[i].addEventListener('click', function() {
            let curr_btn = document.querySelectorAll('.active-btn');
            //replace active-btn to null
            curr_btn[0].className = curr_btn[0].className.replace('active-btn', '');
            //add active-btn to curr_btn on click
            this.className += ' active-btn';
        })
    }

    //active curr section 
    section_all.addEventListener('click', (e) => {
        const id = e.target.dataset.id; //get data id for the btn
        if (id) {
            //remove selected on other btns
            section_btn.forEach((btn) => {
                btn.classList.remove('active');
            })
            e.target.classList.add('active'); //add active to curr sect

            //hide other sect
            sections.forEach((section) => {
                section.classList.remove('active');
                section.classList.remove('act-anim');
            })

            //get curr page id and add active
            const element_id = document.getElementById(id);
            element_id.classList.add('active');
            element_id.classList.add('act-anim');
        }
    })

    //know more btn
    btn_cont.addEventListener('click', (e) => {
        const id = "about";
        if (id) {
            //remove selected on other btns
            section_btn.forEach((btn) => {
                btn.classList.remove('active');
            })

            let curr_btn = document.querySelectorAll('.active-btn');
            //replace active-btn to null
            curr_btn[0].className = curr_btn[0].className.replace('active-btn', '');
            const abt = document.getElementById('aboutbtn');
            abt.className += ' active-btn';

            //hide other sect
            sections.forEach((section) => {
                section.classList.remove('active');
                section.classList.remove('act-anim');
            })

            //get curr page id and add active
            const element_id = document.getElementById(id);
            element_id.classList.add('active');
            element_id.classList.add('act-anim');
        }
    })
}

pg_trans();