function validateEmail(email) {

    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

function validateuname(uname) {

    return uname.match(
        /^[A-Za-z\s]+$/);
}

function validatefname(fname) {

    return fname.match(
        /^[A-Za-z\s]+$/);
}

function validatemname(mname) {

    return mname.match(
        /^[A-Za-z\s]+$/);
}

function validatephone(phone) {

    return phone.match(
        /^\d{10}$/);
}

function validatenationality(nationality) {

    return nationality.match(
        /^[A-Za-z\s]+$/);
}

function validatereligion(religion) {

    return religion.match(
        /^[A-Za-z\s]+$/);
}


function formsubmittion() {
    if (email.value != '' && uname.value != '' && fname.value != '' && mname.value != '' && phone.value != '' && nationality.value != '' && religion.value != '') {
        alert("Your data insert successfully.")

    } else {
        let uname = document.getElementById('uname');
        let fname = document.getElementById('fname');
        let mname = document.getElementById('mname');

        let email = document.getElementById('email');
        let phone = document.getElementById('phone');

        let nationality = document.getElementById('nationality');
        let religion = document.getElementById('religion');



        if (uname.value == '') {
            document.getElementById('error-username').innerHTML = 'Enter Username name.';
            return false;
        } else {
            if (validateuname(uname.value)) {
                document.getElementById('error-username').innerHTML = '';
            } else {
                document.getElementById('error-username').innerHTML = 'Username is not valid,Please enter username';
            }
        }

        if (fname.value == '') {
            document.getElementById('error-fname').innerHTML = 'Enter Father name.';
            return false;
        } else {
            if (validatefname(fname.value)) {
                document.getElementById('error-fname').innerHTML = '';
            } else {
                document.getElementById('error-fname').innerHTML = 'Father name is not valid,Please enter Father name';
            }
        }
        if (mname.value == '') {
            document.getElementById('error-mname').innerHTML = 'Enter Mother name.';
            return false;
        } else {
            if (validatemname(mname.value)) {
                document.getElementById('error-mname').innerHTML = '';
            } else {
                document.getElementById('error-mname').innerHTML = 'Mother name is not valid,Please enter Mother name';
            }
        }


        if (email.value == '') {
            document.getElementById('error-email').innerHTML = 'Please enter Email.';
            return false;
        } else {
            if (validateEmail(email.value)) {
                document.getElementById('error-email').innerHTML = '';
            } else {
                document.getElementById('error-email').innerHTML = 'Email is not valid,Please enter valid email address';
            }
        }



        if (phone.value == '') {
            document.getElementById('error-phone').innerHTML = 'Enter Phone Number.';
            return false;
        } else {
            if (validatephone(phone.value)) {
                document.getElementById('error-phone').innerHTML = '';
            } else {
                document.getElementById('error-phone').innerHTML = 'Phone Number is not valid,Please enter Correct Phone no';
            }

        }
        if (nationality.value == '') {
            document.getElementById('error-nationality').innerHTML = 'Enter nationality .';
            return false;
        } else {
            if (validatenationality(nationality.value)) {
                document.getElementById('error-nationality').innerHTML = '';
            } else {
                document.getElementById('error-nationality').innerHTML = 'nationality is not valid,Please enter nationality';
            }
        }

        if (religion.value == '') {
            document.getElementById('error-religion').innerHTML = 'Enter religion .';
            return false;
        } else {
            if (validatereligion(religion.value)) {
                document.getElementById('error-religion').innerHTML = '';
            } else {
                document.getElementById('error-religion').innerHTML = 'religion is not valid,Please enter nationality';
            }
        }

    }
}


function formValidate() {
    window.location.href = professional_details.html
}
