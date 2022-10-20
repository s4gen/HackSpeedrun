const username = document.getElementById('username')
const password = document.getElementById('password')
const submit = document.getElementById('submit')
const error = document.getElementById('error')
const login = document.getElementById('login')
const admin = document.getElementById('admin')
let inputUsername = ''
let inputPassword = ''

let [milliseconds,seconds,minutes] = [0,0,0];
let timerRef = document.querySelector('.timerDisplay');
let int = null;
int = setInterval(displayTimer,10);

function displayTimer(){
    milliseconds+=10;
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
        }
    }

 let m = minutes < 10 ? "0" + minutes : minutes;
 let s = seconds < 10 ? "0" + seconds : seconds;
 let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

 timerRef.innerHTML = `${m} : ${s} : ${ms}`;
}

const payloads = [
    `admin' or '1'='1`,
    `admin' or '1' = '1`,
    `' or 1=1--`,
    `' or 1 = 1--`,
    `' or 1 = 1 --`,
    `' or 'x' = 'x`,
    `' or 'x'='x`,
    `' = '' --`,
    `'='' --`,
    `'=''--`,
    
    
    
]

username.addEventListener('input', () => {
    inputUsername = username.value
})

password.addEventListener('input', () => {
    inputPassword = password.value
})


function showError(x) {
    error.innerHTML = x
}

function hideError() {
    error.innerHTML = ''
}

submit.addEventListener('click', () => {
    if (password) {
        if (payloads.includes(inputUsername.toLowerCase())) {
            hideError()
            login.style = "display: none"
            admin.style = "display: inline"
            clearInterval(int);
        } else { // We're going to be pretending we're hacking the admin acount of this.

            if (inputUsername == 'admin') {
                if (inputPassword == 'fluffy1208') {
                    hideError()
                    login.style = "display: none"
                    admin.style = "display: inline"
                    clearInterval(int);
                } else {
                    showError('Invalid username or password.')
                }
            } else {
                showError('Invalid username or password.')
            }
            showError('Invalid username or password.')
        }
    } else {
        showError('Invalid username or password.')
    }
})

