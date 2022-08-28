function onDownloadMyCvButtonClick()
{
    var cv = document.createElement("cv");
    cv.href = "./Onur_Azbar_Resume.pdf";
    cv.setAttribute("download", "Onur_Azbar_Resume");
    cv.click();
}

function onBackToHomepageButtonClick()
{
    window.location.href = "https://onurazbar.github.io/";
}