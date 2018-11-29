getJsOn();
Vue.config.devtools = true;

function buildSlider(data) {
    var vuy = new Vue({
        el: '#carousel',
        data: {
            datas: data
        }
    })
}

// load JSON
function getJsOn() {

    var file = "resources/json/jobs.json";
    // var myObj;
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            // myObj = JSON.parse(this.responseText);
            // return JSON.parse(this.responseText);
            buildSlider(JSON.parse(this.responseText));
        }
    };
    xmlhttp.open("GET", file, true);
    xmlhttp.send();
}
