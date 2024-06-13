# Vacation Planner Web Application for Tourists Visiting Morocco

## Project Overview

This project is a vacation planner web application designed for tourists visiting Morocco for the first time. The project was developed as part of our college database and information system course by:

- **Ataboh Omachonu Hamza**
- **Attah Emmanuel**

## Technologies Used

- **HTML**
- **CSS**
- **Tailwind.css**
- **PHP**
- **JavaScript** (for DOM manipulation only)
- **MySQL**
- **XAMPP**

## Project Structure

### HTML Files

- **index.html**: The homepage of our web application where users are introduced to our services.
- **trip-planner.html**: The core page of our application where users fill out a form that interacts with our PHP logic to parse user inputs into our database.

### CSS Files

- **styles.css**: Handles general styling for the homepage and common elements.
- **questionnaire.css**: Specific styles for the elements on the trip-planner.html page.

### PHP File

- **process.php**: Manages the main logic of the application, including form handling and parsing user responses into the MySQL database.

### JavaScript File

- **script.js**: Manages DOM manipulation, such as hiding elements on click and other interactive features.

## Database

We used MySQL for our database management, hosted on XAMPP. Our database is named `questionnairedb` and contains the following three tables:

1. **user_budget**
2. **user_destinations**
3. **user_experience**

### Table Queries

- `SELECT * FROM user_budget`
- `SELECT * FROM user_destinations ORDER BY destination ASC`
- `SELECT * FROM user_experience`

## Application Workflow

1. **Homepage**: Users are greeted with the homepage where they can learn about our web application.
2. **Trip Planning**: Users can click on a button to plan their trip, which redirects them to the trip-planner.html page.
3. **Multi-Step Form**: On the trip-planner.html page, users are presented with a multi-step form to gather information about their trip preferences.
4. **Form Submission**: Upon submitting the form, user answers are saved in our MySQL database using PHP and XAMPP.

## Installation and Setup

1. Clone the repository to your local machine.
2. Ensure you have XAMPP installed and running.
3. Import the provided SQL script to set up the `questionnairedb` database and its tables.
4. Place the project files in the `htdocs` directory of your XAMPP installation.
5. Open your web browser and navigate to `http://localhost/{your_project_directory}/index.html` to view the homepage.

## Conclusion

This vacation planner web application aims to assist tourists in planning their trips to Morocco by providing a user-friendly interface to gather and process their preferences. We hope this project serves as a helpful tool for first-time visitors to Morocco.

---

Feel free to contact us for any further information or assistance. Thank you for exploring our project!
"# Database-Information-Project-SUPMTI" 
