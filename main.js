// slider
let cardContainers = [...document.querySelectorAll('.slide-container')];
let preBtns = [...document.querySelectorAll('.back-btn')];
let nextBtns = [...document.querySelectorAll('.next-btn')];

cardContainers.forEach((item, i) => {
    let containerDimentions = item.getBoundingClientRect();
    let containerWidth = containerDimentions.width

    nextBtns[i].addEventListener('click', ()=>{
        item.scrollLeft += containerWidth - 200;
    })

    preBtns[i].addEventListener('click', ()=>{
        item.scrollLeft -= containerWidth + 200;
    })
}
)


function register(event) {
    event.preventDefault();
    var name = document.getElementById("userName").value
    var email = document.getElementById("userEmail").value
    var password = document.getElementById("userPassword").value
    var confirmPassword = document.getElementById("userConfirmPassword").value

    if (name && email && password && confirmPassword) {
        if (password.length >= 8 && confirmPassword.length >= 8) {
            if (password == confirmPassword) {

                var LS = JSON.parse(localStorage.getItem("hotstarUsers")) || []

                var flagForEmail = false;
                for (var i = 0; i < LS.length; i++) {
                    if (LS[i].useremail == email) {
                        flagForEmail = true;
                    }
                }
                if (!flagForEmail) {
                    var data = {
                        namee: name,
                        useremail: email,
                        password: password,
                        confirmPassword: confirmPassword
                    }
                    LS.push(data);
                    localStorage.setItem("hotstarUsers", JSON.stringify(LS));
                    alert("registration successful")
                    window.location.href="./login.html";
                    document.getElementById("userName").value= "";
                    document.getElementById("userEmail").value= "";
                    document.getElementById("userPassword").value= "";
                    document.getElementById("userConfirmPassword").value= "";

                } else {
                    alert("email already exist");
                }

            } else {
                alert("password not matched");
            }
        } else {
            alert("password should be 8 or more digit");
        }
    } else {
        alert("fill all the fields");
    }

}


function login(event){
    event.preventDefault();
    var email = document.getElementById("userEmail").value
    var password = document.getElementById("userPassword").value
    var currentUser;
    if(email && password){
        var flag = false;
        var  LS = JSON.parse(localStorage.getItem("hotstarUsers"));
        for(var i =0; i<LS.length; i++){
            if(LS[i].useremail == email && LS[i].password == password ){
                flag= true;
                currentUser = LS[i];

            }
        }
        if(flag == true){
            localStorage.setItem("hotstarCurrentUser", JSON.stringify(currentUser))
            alert("login successful")
            window.location.href="./index.html";
        }else{
            alert("credentials not matched")
        }
    }else{
        alert("fill all the fields");
    }
   
}


function addProduct(event) {
    event.preventDefault();
    // alert("Product adding....")
    // var proName = document.getElementById("pname").value;
    // var proPrice = document.getElementById("pprice").value;
    var proImage = document.getElementById("pimage").value;
    var proName = document.getElementById("pname").value;
    var proPrice = document.getElementById("pprice").value;
    var proDesc = document.getElementById("pdesc").value;
    var proGenre = document.getElementById("pgenre").value;
    var product = {  proImage, proName, proPrice, proDesc, proGenre };

    var LS = JSON.parse(localStorage.getItem("hotstarProducts")) || [];
    LS.push(product);
    localStorage.setItem("hotstarProducts", JSON.stringify(LS));

    alert("Product Added Successfully.")
  
    document.getElementById("pimage").value = "";
    document.getElementById("pname").value = "";
    document.getElementById("pprice").value = "";
    document.getElementById("pdesc").value = "";
    document.getElementById("pgenre").value = "";
}









