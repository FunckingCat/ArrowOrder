//================================================================
//                    REMOVABLE INSTRUCTIONS
//================================================================
$('.login').css('display','none');
$('.mainPage').css('display','none');
//parallaxMainPage();
//================================================================
//                    LOG IN LISTENERS
//================================================================

setChacheInfo();
//Добавляет входные данные из хранилища
$('.login form input[type="button"]').on('click', loginValidationLabel);
//Обработчик правильности ввода; Выводит надписи
$('.login form input[type="button"]').on('click', loginIfValidInput);
//Перекидывает на главную страницу если данные корректны

//================================================================
//                    MAIN PAGE LISTENERS
//================================================================
