function onDroneIntroButtonClick()
{
    if (document.getElementById("drone_iframe").getAttribute("src") != "drone_intro.html") {
        document.getElementById("drone_iframe").setAttribute("src", "drone_intro.html");
    }
}

function onFpvDronesButtonClick()
{
    if (document.getElementById("drone_iframe").getAttribute("src") != "fpvdrones.html") {
        document.getElementById("drone_iframe").setAttribute("src", "fpvdrones.html");
    }
}

function onFlightsButtonClick()
{
    if (document.getElementById("drone_iframe").getAttribute("src") != "flights.html") {
        document.getElementById("drone_iframe").setAttribute("src", "flights.html");
    }
}

function onBackToHomepageButtonClick()
{
    window.location.href = "https://onurazbar.github.io/";
}