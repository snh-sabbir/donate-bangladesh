// Blog
document.getElementById('blog-btn').addEventListener('click', function (event) {
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

    // Button One
document.getElementById('btn-one')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const inputOne = document.getElementById('input-one').value;
        const inputNumber = Number(inputOne);
        const firstCardBalance = document.getElementById('first-card-balance').innerHTML;
        const firstCardBalanceNumber = Number(firstCardBalance);
        const mainBal = document.getElementById('main-balance').innerHTML;
        const mainBalNumber = Number(mainBal);


        if (inputNumber <= 5500 && inputNumber > 0) {
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
            document.getElementById('no-history-msg').classList.add('hidden');
        } else {
            wrongMsg('btn-one');
        }

    });

    // Button Two
document.getElementById('btn-two')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const inputTwo = document.getElementById('input-two').value;
        const inputNumber = Number(inputTwo);
        const secondCardBalance = document.getElementById('second-card-balance').innerHTML;
        const secondCardBalanceNumber = Number(secondCardBalance);
        const mainBal = document.getElementById('main-balance').innerHTML;
        const mainBalNumber = Number(mainBal);


        if (inputNumber <= 5500 && inputNumber > 0) {
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
            document.getElementById('no-history-msg').classList.add('hidden');
        } else {
            wrongMsg('btn-two');
        }

    });

    // Button Three
document.getElementById('btn-three')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const inputThree = document.getElementById('input-three').value;
        const inputNumber = Number(inputThree);
        const thirdCardBalance = document.getElementById('third-card-balance').innerHTML;
        const thirdCardBalanceNumber = Number(thirdCardBalance);
        const mainBal = document.getElementById('main-balance').innerHTML;
        const mainBalNumber = Number(mainBal);


        if (inputNumber <= 5500 && inputNumber > 0) {
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
            document.getElementById('no-history-msg').classList.add('hidden');
        } else {
            wrongMsg('btn-three');
        }

    });
