function hideAll_Marks()
{
    document.getElementById("p_about_me").style.backgroundColor="var(--background)";
    document.getElementById("p_contact").style.backgroundColor="var(--background)";
    document.getElementById("p_skills").style.backgroundColor="var(--background)";


}
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
    hideAll_Marks();

    if(div==1)//about me
    {
        document.getElementById("about_me_box").style.display = "flex";
        document.getElementById("p_about_me").style.backgroundColor="var(--third)";
    }
    else if(div==2)//skills
    {        document.getElementById("main_skills_box").style.display="block";
            document.getElementById("p_skills").style.backgroundColor="var(--third)";

    }
    else
    {
        document.getElementById("contact_box").style.display="flex";
        document.getElementById("p_contact").style.backgroundColor="var(--third)";
    }

}