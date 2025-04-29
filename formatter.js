function formatJSON() {
    const input = document.getElementById("input").value;
    try {
        const obj = JSON.parse(input);
        const pretty = JSON.stringify(obj, null,1);
        document.getElementById("output").textContent = pretty;
        document.getElementById("output").style.color = "green";
        document.getElementById("output").style.fontSize = "16px";
        document.getElementById("output").style.lineHeight = "1.5";
        document.getElementById("output").style.fontWeight = "normal";
        document.getElementById("output").style.fontFamily = "Courier New, monospace";
        document.getElementById("output").style.whiteSpace = "pre-wrap";
        document.getElementById("output").style.wordWrap = "break-word";
        document.getElementById("output").style.backgroundColor = "#f0f0f0";
        document.getElementById("output").style.padding = "10px";
        document.getElementById("output").style.border = "1px solid #ccc";
        document.getElementById("output").style.borderRadius = "5px";
        document.getElementById("output").style.overflowX = "hidden";
        document.getElementById("output").style.maxHeight = "800px";
    } catch (e) {
        document.getElementById("output").textContent = "Invalid JSON: " + e.message;
    }
}
function copyFormattedJSON() {
    const output = document.getElementById("output").textContent;
    if (!output) {
        alert("Nothing to copy!\nPlease format JSON first.");
        return;
    }

    navigator.clipboard.writeText(output)
        .then(() => {
            alert("Formatted JSON copied to clipboard!");
        })
        .catch(err => {
            alert("Failed to copy: " + err);
        });
}