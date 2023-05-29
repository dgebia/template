import "./styles/style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<div class="main-container" >
    <div class="container">
        <div class="navbar ">
            <div class="burger-container">
                <div class="burger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div> 
            </div>     
            Navbar
        </div>
        <div class="header">
            Header 
        </div>
        <div class="main">
            Main
        </div>
        <div class="footer">
            Footer
        </div>
    </div>
</div>
`;

const container = document.querySelector('.container');
const burger = document.querySelector('.burger');

burger?.addEventListener('click', () => {
    if (burger.classList.contains('active')) {
        burger.classList.remove('active')
        container?.classList.remove('active')
    } else {
        burger.classList.add('active')
        container?.classList.add('active')
    }
})

interface Aabout {
    title: string,
    descripion: string,
    startDate: string | number
    finishDate: string | number
    sourse?: string | number
};

export interface Data {
    topic: string,
    about: Aabout[],
};