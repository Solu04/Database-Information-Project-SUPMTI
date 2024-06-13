<?php

// Database credentials
$servername = "localhost";
$username = "root";
$password = "";
$database = "questionnairedb";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Now you can use $conn to execute SQL queries
// Assuming you've already established a connection to your MySQL database

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Check if user knows the destination
    if (isset($_POST['knowDestination'])) {
        $knowDestination = $_POST['knowDestination'];
        
        // If user knows the destination
        if ($knowDestination == 'yes') {
            if (isset($_POST['destination'])) {
                // Process the selected destinations
                $selectedDestinations = $_POST['destination'];
                foreach ($selectedDestinations as $destination) {
                    // Insert each selected destination into the database
                    $sql = "INSERT INTO user_destinations (destination) VALUES ('$destination')";
                    // Execute SQL query
                    mysqli_query($conn, $sql);
                }
            }
        } else {
            // If user doesn't know the destination, you can handle it accordingly
        }
    }
    // Check if travel type and experiences are set
    if (isset($_POST['travelType']) && isset($_POST['experience'])) {
        $travelType = $_POST['travelType'];
        $selectedExperiences = $_POST['experience'];
    
        // Loop through selected experiences and insert into the database
        foreach ($selectedExperiences as $experience) {
            // Escape special characters to prevent SQL injection
            $travelType = mysqli_real_escape_string($conn, $travelType);
            $experience = mysqli_real_escape_string($conn, $experience);
    
            // Insert data into the user_experience table
            $sql = "INSERT INTO user_experience (travel_type, experience) VALUES ('$travelType', '$experience')";
    
            // Execute SQL query
            mysqli_query($conn, $sql);
        }
    }

    // Check if user knows the budget
    if (isset($_POST['knowBudget'])) {
        $budgetPerPerson = $_POST['knowBudget'];

        // Escape special characters to prevent SQL injection
        $budgetPerPerson = mysqli_real_escape_string($conn, $budgetPerPerson);

        // Insert data into the user_budget table
        $sql = "INSERT INTO user_budget (budget_per_person) VALUES ('$budgetPerPerson')";

        // Execute SQL query
        if (mysqli_query($conn, $sql)) {
            echo "Records inserted successfully.";
        } else {
            echo "Error: " . $sql . "<br>" . mysqli_error($conn);
        }
    }
}

?>
