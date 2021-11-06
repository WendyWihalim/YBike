function autoslide(active) {
    var lastIndex = $(".image-slide").length - 1;
    return setInterval(function() {
        if (active < lastIndex) {
            active += 1;
        } else {
            active = 0;
        }
        $(".image-slide").css("transform","translateX("+(active*-100)+"%)");

    }, 5000);
}

function slider() {
    // console.log('hello');
    var active = 0;
    var auto = autoslide(active);

    $("#slide-control > button").click(function(e){
        clearInterval(auto);
        active = e.currentTarget.dataset.slidePage
        $(".image-slide").css("transform","translateX("+(active*-100)+"%)");
        auto = autoslide(active);
    });
}

$(document).ready(function(){
    slider();
});

// purchase
const form = document.getElementById('form');
let error = document.getElementById('error');

function displayError(msg) {
    error.style.visibility = 'visible';
    error.innerHTML = msg;
}

function hideError() {
    error.style.visibility = 'hidden';
}

form.addEventListener('submit', function(e) {
    let quantity = document.getElementById('quantity').value;
    
    let red = document.getElementById('red').checked;
    let blue = document.getElementById('blue').checked;
    let black = document.getElementById('black').checked;

    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let address = document.getElementById('address').value;

    let agreemet = document.getElementById('agreement').checked;

    if (quantity == '' || name == '' || phone == '' || address == '' || !red && !blue && !black) {
        displayError('Please fill all of the field');
    }
    else if (quantity < 1) {
        displayError('The minimum quantity of this product is 1');
    }
    else if (!phone.startsWith('62')) {
        displayError('Phone number must start with "62"')
    }
    else if (!address.startsWith('Jl.')) {
        displayError('Address must start with "Jl."');
    } 
    else if (!agreemet){
        displayError('Please agree to term and service');
    }
    else {
        if (confirm('Are you sure want to reserver this motorcycle?')) {
            window.location.replace('home.html');
            alert('Success on reserving the product')
        } else {
            window.location.replace('reserve.html');
        }
    }

    setTimeout('hideError', 3000)
    e.preventDefault();
})