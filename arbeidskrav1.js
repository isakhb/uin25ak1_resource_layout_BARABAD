document.addEventListener("DOMContentLoaded", () => {
    let printResources = ""
    resources.map((resource, index) => printResources +=
        `<h1>${resource.category}</h1>
        <p>${resource.text}</p>
        <ul>
            <li><a href="${resource.url}">${resource.title}</a></li>
            <li>jkl</li>
        </ul>`
    )
    document.getElementById("IDresources").innerHTML = printResources
});