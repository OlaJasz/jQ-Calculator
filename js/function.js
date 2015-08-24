$(document).on('ready', function () {

    $('#przyciskDodaj').on('click', function () {
        var input1 = $('#wpiszLiczbe1').val();
        var input2 = $('#wpiszLiczbe2').val();
        var sum = sum(input1, input2);
        var wpis = $('<li>'+input1+' + '+input2+' = '+sum+'</li>');
        $('#wpiszLiczbe1').val(null);
        $('#wpiszLiczbe2').val(null);
        var zaznacz = $('<button>');

        wpis.appendTo('#dzialania');
        function sum (input1, input2) {
            return parseFloat( input1) + parseFloat(input2);
        }
        zaznacz.text('Zaznacz').appendTo(wpis).on('click', function () {
            wpis.addClass('done');
        });
    });
    $('#przyciskOdejmij').on('click', function () {
        var input1 = $('#wpiszLiczbe1').val();
        var input2 = $('#wpiszLiczbe2').val();
        var sub = sub(input1, input2);
        var wpis = $('<li>'+input1+' - '+input2+' = '+sub+'</li>');
        $('#wpiszLiczbe1').val(null);
        $('#wpiszLiczbe2').val(null);
        var zaznacz = $('<button>');

        wpis.appendTo('#dzialania');
        function sub (input1, input2) {
            return input1 - input2;
        }
        zaznacz.text('Zaznacz').appendTo(wpis).on('click', function () {
            wpis.addClass('done');
        });
    });
    $('#przyciskPomnoz').on('click', function () {
        var input1 = $('#wpiszLiczbe1').val();
        var input2 = $('#wpiszLiczbe2').val();
        var multi = multi(input1, input2);
        var wpis = $('<li>'+input1+' * '+input2+' = '+multi+'</li>');
        $('#wpiszLiczbe1').val(null);
        $('#wpiszLiczbe2').val(null);
        var zaznacz = $('<button>');

        wpis.appendTo('#dzialania');
        function multi (input1, input2) {
            return input1 * input2;
        }
        zaznacz.text('Zaznacz').appendTo(wpis).on('click', function () {
            wpis.addClass('done');
        });
    });
    $('#przyciskPodziel').on('click', function () {
        var input1 = $('#wpiszLiczbe1').val();
        var input2 = $('#wpiszLiczbe2').val();
        var share = share(input1, input2);
        var wpis = $('<li>'+input1+' / '+input2+' = '+share+'</li>');
        $('#wpiszLiczbe1').val(null);
        $('#wpiszLiczbe2').val(null);
        var zaznacz = $('<button>');

        wpis.appendTo('#dzialania');
        function share (input1, input2) {
            return input1 / input2;
        }
        zaznacz.text('Zaznacz').appendTo(wpis).on('click', function () {
            wpis.addClass('done');
        });
    });
});
