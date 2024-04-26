function displayFunc() {
    let x = document.getElementById('insure-two');
    let y = document.getElementById('four-rect');
    let z = document.getElementById('viewbutt');
    if(x.style.display === "none") {
        x.style.display = "flex";
        y.style.left = "55px";
        z.innerHTML = "View Less";
    } else {
        x.style.display = "none";
        y.style.left = "-55px";
        z.innerHTML = "View All Products"
    }
}

function changeFootFormButColor() {
    let x = document.getElementById('foot-form-but');
        x.style.backgroundColor = '#ff4500';
        setInterval(()=>{if(x.style.backgroundColor = '#ff4500')
    {
        x.style.backgroundColor = '#6ba1f8';
    }},500);
}