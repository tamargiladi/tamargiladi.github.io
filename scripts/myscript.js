function hideAll_Marks()
{
    document.getElementById("p_about_me").style.backgroundColor="var(--background)";
    document.getElementById("p_contact").style.backgroundColor="var(--background)";
    document.getElementById("p_skills").style.backgroundColor="var(--background)";
    document.getElementById("p_projects").style.backgroundColor="var(--background)";



}
function hideAll_onload()
{
    document.getElementById("about_me_box").style.display="none";
    document.getElementById("contact_box").style.display="none";
    document.getElementById("projects_box").style.display="none";

}

function hideAll() {
    document.getElementById("main_skills_box").style.display="none";
    document.getElementById("about_me_box").style.display="none";
    document.getElementById("contact_box").style.display="none";
    document.getElementById("projects_box").style.display="none";


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
    else if(div==3)
    {
        document.getElementById("contact_box").style.display="flex";
        document.getElementById("p_contact").style.backgroundColor="var(--third)";
    }
    else if(div==4)
    {
        document.getElementById("projects_box").style.display="flex";
        document.getElementById("p_projects").style.backgroundColor="var(--third)";
    }

}

var width = document.body.style.width;

if(width>150)
{
    document.getElementById("device_type").innerHTML="iphone";
}
else
    document.getElementById("device_type").innerHTML="Not an iPhone";


function changeImg(x) {
   x.style.marginRight="300px";
}

function changeImgBack(x)
{
    x.style.marginRight="150px";
}