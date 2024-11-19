
; /* Start:"a:4:{s:4:"full";s:75:"/local/components/project/crm.form/templates/cases/script.js?17201840711897";s:6:"source";s:60:"/local/components/project/crm.form/templates/cases/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(document).ready(function () {

    $(document).on('submit', '.case-form' ,function (e) {
        ym(74820076,'reachGoal','form_send_main');
        document.querySelector('.case-form__submit').setAttribute('disabled', true);
        var str = window.location.href
        e.preventDefault();
        var form = $(this);
        var formData = new FormData(this);
        $.ajax({
            url: '',
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            success: function (result) {
                console.log(result);
                if (result.success !== true) {
                    $('.b-form__row-error.error_submit').text(result.message).show();
                } else {
                    $('.case-form').addClass('case-form--success');
                    form[0].reset();
                    $('.case-form__inner').hide();
                    $('.case-form__success').show();
                    document.querySelector('.case-form__submit').setAttribute('disabled', false);
                }
            }
        });
        return false;
    });

    $(document).on('click', '.case-form__success-close', function () {
        $('.case-form__inner').show();
        $('.case-form__success').hide();
        $('.b-form__row-error.error_submit').hide();
        grecaptcha.execute('6Lf4mIooAAAAAKeyNDAqnrqYB827gvwu-WiPeFMX', {action: 'homepage'}).then(function(token) {
            console.log(token);
            document.getElementById('case-g-recaptcha-response').value=token;
        });
        return false;
    })

    grecaptcha.ready(function() {
        grecaptcha.execute('6Lf4mIooAAAAAKeyNDAqnrqYB827gvwu-WiPeFMX', {action: 'homepage'}).then(function(token) {
            //console.log(token);
            document.getElementById('case-g-recaptcha-response').value=token;
        });
    });
});

/* End */
;; /* /local/components/project/crm.form/templates/cases/script.js?17201840711897*/