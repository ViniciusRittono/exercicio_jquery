$(document).ready(function() {
    $('#tarefa-form').submit(function(event) {
        event.preventDefault(); 
        let taskName = $('#tarefa-input').val().trim();

        if (taskName) {
            $('#tarefa-lista').append('<li>' + taskName + '</li>');

            $('#tarefa-input').val('');
        }
    });

    $('#tarefa-lista').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});