function onDownloadMyCvButtonClick()
{
    var a = document.createElement("a");
    a.href = "Onur_Azbar_Resume.pdf";
    a.setAttribute("download", "Onur_Azbar_Resume");
    a.click();
}

function onBackToHomepageButtonClick()
{
    window.location.href = "https://onurazbar.github.io/";
}