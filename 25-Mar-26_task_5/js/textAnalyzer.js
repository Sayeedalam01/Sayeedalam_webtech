function analyzeText() {
    const text = document.getElementById("textInput").value;
    const resultsDiv = document.getElementById("results");
    
    if (text.trim() === "") {
        resultsDiv.innerHTML = `
            <p style="color: red; text-align: center;">
                <strong>Please enter some text to analyze!</strong>
            </p>
        `;
        return;
    }

    const charCount = text.length;

    const words = text.trim().split(/\s+/);
    const wordCount = text.trim() === "" ? 0 : words.length;
    
    const reversedText = text.split("").reverse().join("");
    
    resultsDiv.innerHTML = `
        <p><strong>Analysis Results:</strong></p>
        <p><strong>Total Characters:</strong> ${charCount}</p>
        <p><strong>Total Words:</strong> ${wordCount}</p>
        <p><strong>Reversed Text:</strong></p>
        <p style="background-color: white; padding: 10px; border-radius: 5px; word-wrap: break-word;">
            ${reversedText}
        </p>
    `;
}