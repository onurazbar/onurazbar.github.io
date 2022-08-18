function onProjectIntroButtonClick()
{
    document.getElementById("project_iframe").setAttribute("src", "project_intro.html");
}

function onSpaceCraftButtonClick()
{
    document.getElementById("project_iframe").setAttribute("src", "spacecraft.html");
}

function onSnakeButtonClick()
{
    document.getElementById("project_iframe").setAttribute("src", "snake.html");
}

function onBackGammonButtonClick()
{
    document.getElementById("project_iframe").setAttribute("src", "backgammon.html");
}

function onRayTracerButtonClick()
{
    document.getElementById("project_iframe").setAttribute("src", "raytracer.html");
}

function onBackToHomepageButtonClick()
{
    window.location.href = "../index.html";
}