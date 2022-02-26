function validateboard(board) {

    return board.match(
        /^[A-Za-z\s]+$/);
}

function validatemarks(marks) {

    return marks.match(
        /^[0-9]+$/);
}

function validatetm(totalmarks) {

    return totalmarks.match(
        /^[0-9]+$/);
}

function validatepo(Percentage) {

    return Percentage.match(
        /^(?<!\.)(?!0+(?:\.0+)?%)(?:\d|[1-9]\d|100)(?:(?<!100)\.\d+)?%/)
}


function formsubmittion() {
    if (board.value != '' && marks.value != '' && totalmarks.value != '' && Percentage.value != '') {
        alert("Your data insert successfully.")

    } else {

        let board = document.getElementById('board');
        let marks = document.getElementById('marks');
        let totalmarks = document.getElementById('totalmarks');
        let Percentage = document.getElementById('Percentage');



        if (board.value == '') {
            document.getElementById('error-board').innerHTML = 'Enter University/Boardname.';
            return false;
        } else {
            if (validateboard(board.value)) {
                document.getElementById('error-board').innerHTML = '';
            } else {
                document.getElementById('error-board').innerHTML = 'University/Board is not valid,Please enter University/Board';
            }
        }

        if (marks.value == '') {
            document.getElementById('error-marks').innerHTML = 'Enter Marks Obtained Number.';
            return false;
        } else {
            if (validatemarks(marks.value)) {
                document.getElementById('error-marks').innerHTML = '';
            } else {
                document.getElementById('error-marks').innerHTML = 'Marks ObtainedNumber is not valid,Please enter Correct Marks Obtained';
            }

        }

        if (totalmarks.value == '') {
            document.getElementById('error-totalmarks').innerHTML = 'Enter total marks Number.';
            return false;
        } else {
            if (validatetm(totalmarks.value)) {
                document.getElementById('error-totalmarks').innerHTML = '';
            } else {
                document.getElementById('error-totalmarks').innerHTML = 'total marksNumber is not valid,Please enter Correct total marks';
            }

        }

        if (Percentage.value == '') {
            document.getElementById('error-Percentage').innerHTML = 'Enter Percentage Obtained Number.';
            return false;
        } else {
            if (validatePercentage(Percentage.value)) {
                document.getElementById('error-Percentage').innerHTML = '';
            } else {
                document.getElementById('error-Percentage').innerHTML = 'Percentage ObtainedNumber is not valid,Please enter Correct Marks Obtained';
            }

        }


    }
}

function formValidate() {
    window.open("http://127.0.0.1:5500/address.html", parent)
}