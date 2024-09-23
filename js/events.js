// Blog
document.getElementById('blog-btn').addEventListener('click', function(event){
    event.preventDefault();
    window.location.href = 'blog.html';
})

// button events
document.getElementById('btn-donation')
    .addEventListener('click', function (events) {
        event.preventDefault();
        // console.log("Clicked....");
        document.getElementById('history-section').classList.add('hidden');
        document.getElementById('donation-cards').classList.remove('hidden');
        document.getElementById('btn-donation').classList.add('btn-color');
        document.getElementById('btn-history').classList.remove('btn-color');
    });

document.getElementById('btn-history')
    .addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById('donation-cards').classList.add('hidden');
        document.getElementById('history-section').classList.remove('hidden');
        document.getElementById('btn-history').classList.add('btn-color');
        document.getElementById('btn-donation').classList.remove('btn-color');
    });

document.getElementById('btn-one')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const inputOne = document.getElementById('input-one').value;
        const inputNumber = parseFloat(inputOne);
        const firstCardBalance = document.getElementById('first-card-balance').innerHTML;
        const firstCardBalanceNumber = parseFloat(firstCardBalance);
        const mainBal = document.getElementById('main-balance').innerHTML;
        const mainBalNumber = parseFloat(mainBal);


        if (inputNumber <= 5500 && inputNumber >= 0) {
            const newBalance = firstCardBalanceNumber + inputNumber;
            document.getElementById('first-card-balance').innerText = newBalance;
            const newMainBal = mainBalNumber - inputNumber;
            document.getElementById('main-balance').innerText = newMainBal;
            alertMessege('btn-one');
            const div = document.createElement('div');
            div.innerHTML = `
            <p>${inputNumber} Taka is donated for Flood in Noakhali, Bangladesh.</p>
            <p class = "text-gray-500 text-lg">${Date()}</p>
            `;
            document.getElementById('histories').appendChild(div);
        } else {
            alert("Wrong amount");
        }

    });

document.getElementById('btn-two')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const inputTwo = document.getElementById('input-two').value;
        const inputNumber = parseFloat(inputTwo);
        const secondCardBalance = document.getElementById('second-card-balance').innerHTML;
        const secondCardBalanceNumber = parseFloat(secondCardBalance);
        const mainBal = document.getElementById('main-balance').innerHTML;
        const mainBalNumber = parseFloat(mainBal);


        if (inputNumber <= 5500 && inputNumber >= 0) {
            const newBalance = secondCardBalanceNumber + inputNumber;
            document.getElementById('second-card-balance').innerText = newBalance;
            const newMainBal = mainBalNumber - inputNumber;
            document.getElementById('main-balance').innerText = newMainBal;
            alertMessege('btn-two');
            const div = document.createElement('div');
            div.innerHTML = `
            <p>${inputNumber} Taka is donated for Flood in Noakhali, Bangladesh.</p>
            <p class = "text-gray-500 text-lg">${Date()}</p>
            `;
            document.getElementById('histories').appendChild(div);
        } else {
            alert("Wrong amount");
        }

    });

document.getElementById('btn-three')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const inputThree = document.getElementById('input-three').value;
        const inputNumber = parseFloat(inputThree);
        const thirdCardBalance = document.getElementById('third-card-balance').innerHTML;
        const thirdCardBalanceNumber = parseFloat(thirdCardBalance);
        const mainBal = document.getElementById('main-balance').innerHTML;
        const mainBalNumber = parseFloat(mainBal);


        if (inputNumber <= 5500 && inputNumber >= 0) {
            const newBalance = thirdCardBalanceNumber + inputNumber;
            document.getElementById('third-card-balance').innerText = newBalance;
            const newMainBal = mainBalNumber - inputNumber;
            document.getElementById('main-balance').innerText = newMainBal;
            alertMessege('btn-three');
            const div = document.createElement('div');
            div.innerHTML = `
            <p>${inputNumber} Taka is donated for Flood in Noakhali, Bangladesh.</p>
            <p class = "text-gray-500 text-lg">${Date()}</p>
            `;
            document.getElementById('histories').appendChild(div);
        } else {
            alert("Wrong amount");
        }

    });
