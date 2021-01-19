(_ => document.querySelector('.registration-form').addEventListener('submit', onSubmit))();

function onSubmit(ev){
    ev.preventDefault();
    const msgThanks = document.querySelector('.msg-thanks');

    const { inpName, inpSurname, inpGender, inpAge, inpTown, inpClub} = ev.target.elements;

    const rName = /[a-zа-я]+/i;
    const rSurname = /[a-zа-я]+/i;
    const rGender = /[a-zа-я]+/i;
    const rAge = /[0-9]/;
    const rTown = /[a-zа-я]+/i;
    const rClub = /[a-zа-я]+/i;
   

    if( rName.test(inpName.value) && rSurname.test(inpSurname.value) && rGender.test(inpGender.value) && rAge.test(inpAge.value) && rTown.test(inpTown.value) && rClub.test(inpClub.value)){

        sendSiteOrder(inpName.value, inpSurname.value, inpGender.value, inpAge.value, inpTown.value, inpClub.value);

        inpName.value = inpSurname.value = inpGender.value = inpAge.value = inpTown.value = inpClub.value  = '';

        msgThanks.classList.remove('d-none');
    }
}

function sendSiteOrder(name, surname, gender, age, town, club ){
    fetch(`https://script.google.com/macros/s/AKfycby4trlDmsgcFRX5mb1FFpg_5t0xR6bu-M4sl7yRAEf8sBEfHq06JJgj/exec?name=${name}&surname=${surname}&gender=${gender}&age=${age}&town=${town}&club=${club}`, {
        mode : 'no-cors',
        method : 'GET'
    });
}