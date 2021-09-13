let btn = document.getElementsByClassName('upload')[0];


// !-------SHOW THE UPLOAD ICON----------//
let uploaderCp = document.getElementsByClassName('m_label')[0];
    let uploaderDp = document.getElementsByClassName('m_label')[1];
btn.addEventListener("click", function () {
    uploaderCp.style.display = "block";
    uploaderDp.style.display = "block";
    c_btn.style.display = "inline-block";
})

//! -------  CP  UPLOADER PROCESS-------//
let coverphoto = document.getElementsByClassName('cp-img')[0];
let coverUp = function (event) {
coverphoto.src = URL.createObjectURL(event.target.files[0]);

}


//! -------  DP  UPLOADER PROCESS-------//
let profilephoto = document.getElementsByClassName('dp-img')[0];
let profileUp = function (event) {
profilephoto.src = URL.createObjectURL(event.target.files[0]);

}
// !--- MODAL PART------------//
let c_btn = document.getElementsByClassName('confirm')[0];
let modal = document.getElementsByClassName('modal')[0];
c_btn.addEventListener("click", function () {
    modal.style.display = "flex";
})
let yes = document.getElementsByClassName('yes')[0];
let no = document.getElementsByClassName('no')[0];
no.addEventListener('click', function () {
    modal.style.display = "none";
})
yes.addEventListener('click', function () {
    modal.style.display = "none";
    c_btn.style.display = "none";
    uploaderCp.style.display = "none";
    uploaderDp.style.display = "none";
    animItem.goToAndPlay(0, true);

})
