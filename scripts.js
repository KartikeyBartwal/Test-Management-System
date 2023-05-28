function redirectToSubject() {
    event.preventDefault(); // Prevent form submission

    var selectedOption = document.querySelector('select').value;

    if (selectedOption === 'C-Programming') {
        window.location.href = 'c_programming.html'; // Redirect to C-Programming page
    } else if (selectedOption === 'HTML') {
        window.location.href = 'html.html'; // Redirect to HTML page
    } else if (selectedOption === 'Python') {
        window.location.href = 'python.html'; // Redirect to Python page
    }

    return false; // Prevent form submission
}

document.getElementById('Done').addEventListener('click', function() {
    document.getElementById('container').classList.add("right-panel-active");
});

document.getElementById('Next').addEventListener('click', function() {
    document.getElementById('container').classList.remove("right-panel-active");
});