const fs_Botoesmodalredplay = document.querySelectorAll(".fs-abrir-modalredplay");
if(fs_Botoesmodalredplay){
for (var i=0; i < fs_Botoesmodalredplay.length; i++) {
fs_Botoesmodalredplay[i].onclick = function(fs_VideoAtual){
const fs_Videomodalredplay = fs_VideoAtual.currentTarget.getAttribute('data-video');
const fs_UrlVideo = "" + fs_Videomodalredplay;    
const fs_ContentVideo = document.querySelector("#modalredplay-content")
fs_ContentVideo.innerHTML += '<iframe id="video-adicionado" width="100%" height="100%" sandbox="allow-same-origin allow-scripts" scrolling="no" style="  border-radius:5px;" src="'+ fs_UrlVideo +'" frameborder="0" allowfullscreen></iframe>';
document.querySelector("#modalredplay").className = "abrir";}}}
document.querySelector("#modalredplay").addEventListener("click", function(e) {
if (e.target.id == "xsclose") {
document.querySelector("#modalredplay").className = "";
document.querySelector("#video-adicionado").remove();}});
document.querySelector("#modalredplay").addEventListener("click", function(e) {
if (e.target.id == "modalredplay") {
document.querySelector("#modalredplay").className = "";
document.querySelector("#video-adicionado").remove();}});
