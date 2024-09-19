<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sample JS Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
            background-color: #f4f4f4;
        }
        button {
            padding: 10px 20px;
            background-color: #4CAF50;
            color: white;
            border: none;
            cursor: pointer;
        }
        button:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>
    <h1>JavaScript Example</h1>
    <p id="message">This is a paragraph. Click the button to change this text.</p>
    
    <button id="changeTextButton">Change Text</button>
    <button onclick="showAlert()">Show Alert</button>

    <script>
        // Function to show an alert message
        function showAlert() {
            alert("Hello! This is an alert message.");
        }

        // Function to change the text of a paragraph
        document.getElementById("changeTextButton").addEventListener("click", function() {
            document.getElementById("message").innerHTML = "The text has been changed!";
        });
    </script>
</body>
</html>
