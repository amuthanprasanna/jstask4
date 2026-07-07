
function login(callback) {
    console.log("Login Success");
    alert("Login Success");

    callback();
}

function dashboard() {
    console.log("Dashboard Opened");
    alert("Dashboard Opened");
}

login(dashboard);