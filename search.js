    /*jslint devel: true */
    let user_input = prompt("Podaj elementy ktore chcesz wyszukac ponizej. Wstaw . jezeli szukasz klas, wstaw # jezeli szukasz id...", "np. .div, #id...");
    const elements = document.querySelectorAll(user_input);
    console.log(elements);
