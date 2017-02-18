/**
 * Created by iKNSA.
 * Author: Khalid Sookia <khalidsookia@gmail.com>
 * Date: 18/02/17
 * Time: 15:50
 */

romenyAngularCookies.factory('RomenysAngularCookiesFactory', function () {
    var RomenysAngularCookiesFactory = {};

    /**
     * Set cookie
     * @param name
     * @param value
     * @param expiration In milliseconds
     *
     * @return RomenysAngularCookiesFactory
     */
    RomenysAngularCookiesFactory.set = function (name, value, expiration) {
        var date = new Date();
        date.setTime(date.getTime() + (expiration));
        var expires = "expires="+ date.toLocaleDateString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";

        return RomenysAngularCookiesFactory;
    };

    /**
     * Get cookie by name
     * @param name
     * @returns {string} cookie
     */
    RomenysAngularCookiesFactory.get = function (name) {
        var decodedCookie = decodeURIComponent(document.cookie);
        var cookies = decodedCookie.split(';');
        name = name + "=";
        angular.forEach(cookies, function (cookie) {
            while (cookie.charAt(0) == ' ') {
                cookie = cookie.substring(1);
            }

            if (cookie.indexOf(name) == 0) {
                return cookie.substring(name.length, cookie.length);
            }
        });

        return "";
    };

    return RomenysAngularCookiesFactory;
});