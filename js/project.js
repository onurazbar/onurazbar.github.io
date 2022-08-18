function onProjectIntroButtonClick()
{
    if (document.getElementById("project_iframe").getAttribute("src") != "project_intro.html") {
        document.getElementById("project_iframe").setAttribute("src", "project_intro.html");
    }
}

function onSpaceCraftButtonClick()
{
    if (document.getElementById("project_iframe").getAttribute("src") != "spacecraft.html") {
        document.getElementById("project_iframe").setAttribute("src", "spacecraft.html");
    }
}

function onSnakeButtonClick()
{
    if (document.getElementById("project_iframe").getAttribute("src") != "snake.html") {
        document.getElementById("project_iframe").setAttribute("src", "snake.html");
    }
}

function onBackGammonButtonClick()
{
    if (document.getElementById("project_iframe").getAttribute("src") != "backgammon.html") {
        document.getElementById("project_iframe").setAttribute("src", "backgammon.html");
    }
}

function onRayTracerButtonClick()
{
    if (document.getElementById("project_iframe").getAttribute("src") != "raytracer.html") {
        document.getElementById("project_iframe").setAttribute("src", "raytracer.html");
    }
}

function onBackToHomepageButtonClick()
{
    window.location.href = "../index.html";
}