(()=>{const e=document.querySelector("[data-menu-open]"),t=document.querySelector("[data-menu-close]"),o=document.querySelector("[data-menu]");function n(){o.classList.toggle("is-open")}e.addEventListener("click",n),t.addEventListener("click",n)})(),new Swiper(".swiper",{navigation:{nextEl:".swiper__btn-next",prevEl:".swiper__btn-prev"}}),(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),body:document.querySelector("[data-page]")};function t(){e.modal.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)})();
//# sourceMappingURL=index.15d48d66.js.map
