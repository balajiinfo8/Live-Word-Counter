function countCharacter() 
{
    const words = document.getElementById("inputText").value;
    // count the characters by removing white spacw 
    const count = words.replace(/\s/g, "").length;
    // display the input text inside when typing 
    document.getElementById("output").innerText = "Character Count (excluding spaces): " + count;
}