function checkName() {
    const name = document.getElementById("name").value;
    const nameRegex = /^[а-яА-Я\s]{2,15}$/; 
    if (nameRegex.test(name)) {
        document.getElementById("name").style.borderColor  = "green";
        document.getElementById("name").style.backgroundColor = "green";
        return true
    } else {
        document.getElementById("name").style.borderColor  = "red";
        document.getElementById("name").style.backgroundColor = "red";
        return false

    }
}




function checkPhone() {
    const phone = document.getElementById("telephone").value;
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/; 
    if (phoneRegex.test(phone)) {
        document.getElementById("telephone").style.borderColor  = "green";
        document.getElementById("telephone").style.backgroundColor = "green";
        return true
    } else {
        document.getElementById("telephone").style.borderColor  = "red";
        document.getElementById("telephone").style.backgroundColor = "red";
        return false

    }
}

function checkEmail() {
    const email = document.getElementById("email").value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailRegex.test(email)) {
        document.getElementById("email").style.borderColor  = "green";
        document.getElementById("email").style.backgroundColor = "green";
        return true
    } else {
        document.getElementById("email").style.borderColor  = "red";
        document.getElementById("email").style.backgroundColor = "red";
        return false

    }
}

function checkAll() {
    const name = document.getElementById("name").value;
    const phone = document.getElementById("telephone").value;
    const email = document.getElementById("email").value;
    const count = document.getElementById("num").value;
    if (!(checkEmail() && checkPhone()  && checkName())) {
        alert('Заполните все поля правильно.');
        return false;
    }

    alert(`Имя получателя: ${name} Почта: ${email} Телефон: ${phone} Товаров: ${count}`);
    return true; 
}

document.addEventListener("DOMContentLoaded", function() {
    const block = document.getElementById("blk");
    block.addEventListener('mouseover', 

        function toggleBackground() {
            block.style.backgroundColor = "red"; 
        }
    )
    const img = document.getElementById("img1");
    img.addEventListener('click', 

        function toggleBackground() {
            img.style.width = "500px"; 
        }
    )
})





