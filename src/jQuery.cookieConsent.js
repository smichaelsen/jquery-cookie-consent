;(function ($) {

    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length,c.length);
            }
        }
        return "";
    }

    $.fn.cookieConsent = function () {
        return this.each(function () {
            var consentBox = $(this);
            if (getCookie('cookieConsent')) {
                consentBox.hide();
            }
            consentBox.find('[data-cookie-consent-trigger]').on('click', function () {
                document.cookie = "cookieConsent=1";
                consentBox.slideUp();
            });
        });
    };

    $(function () {
        $('[data-cookie-consent]').cookieConsent();
    });
}(jQuery));
