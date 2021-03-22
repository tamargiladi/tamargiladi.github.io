function hideAll_onload()
{
    document.getElementById("about_me_box").style.display="none";
    document.getElementById("contact_box").style.display="none";
}

function hideAll() {
    document.getElementById("main_skills_box").style.display="none";
    document.getElementById("about_me_box").style.display="none";
    document.getElementById("contact_box").style.display="none";

}

function openDiv(div)
{
    hideAll();

    if(div==1)//about me
        document.getElementById("about_me_box").style.display="flex";
    else if(div==2)//skills
        document.getElementById("main_skills_box").style.display="block";
    else
        document.getElementById("contact_box").style.display="flex";

}