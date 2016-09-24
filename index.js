"use strict";
var service_scraper_1 = require("service-scraper");
function domscrap(o, cb) {
    function attachall(url) {
        try {
            var tobescraped = new service_scraper_1.default(url);
            cb(false, tobescraped, false);
        }
        catch (err) {
            cb("can't scrape this url", false, err);
        }
    }
    if (o.url) {
        attachall(o.url);
    }
    else if (o.prefix) {
        var input_1 = document.getElementById(o.prefix);
        input_1.addEventListener('input', function () {
            if (input_1.value && input_1.value.length && input_1.value.length > 3) {
                console.log('input changed to: ', input_1.value);
                attachall(input_1.value);
            }
        });
    }
    else {
        throw Error("domscrap conf error");
    }
}
window.domscrap = domscrap;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxnQ0FBa0IsaUJBR2xCLENBQUMsQ0FIa0M7QUFZbkMsa0JBQWtCLENBQWlCLEVBQUUsRUFBTztJQUd4QyxtQkFBbUIsR0FBVztRQUMxQixJQUFJLENBQUM7WUFDRCxJQUFNLFdBQVcsR0FBRyxJQUFJLHlCQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7WUFFbEMsRUFBRSxDQUFDLEtBQUssRUFBRSxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFDakMsQ0FBRTtRQUFBLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDWCxFQUFFLENBQUMsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQzNDLENBQUM7SUFDTCxDQUFDO0lBS0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDUixTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ3BCLENBQUM7SUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFFbEIsSUFBTSxPQUFLLEdBQVEsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckQsT0FBSyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtZQUM1QixFQUFFLENBQUMsQ0FBQyxPQUFLLENBQUMsS0FBSyxJQUFJLE9BQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLE9BQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzlELE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUUsT0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMvQyxTQUFTLENBQUMsT0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO1lBQzFCLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNKLE1BQU0sS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUE7SUFDdEMsQ0FBQztBQU1MLENBQUM7QUFJSyxNQUFPLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzY3JhcCBmcm9tIFwic2VydmljZS1zY3JhcGVyXCJcblxuXG5pbnRlcmZhY2UgSUF0dGFjaE9wdGlvbnMge1xuICAgIHN0eWxlPzogc3RyaW5nO1xuICAgIGlucHV0Pzogc3RyaW5nO1xuICAgIHBhcmFtcz86IHt9O1xuICAgIHByZWZpeD86IHN0cmluZztcbiAgICB1cmw6IHN0cmluZztcbn1cblxuXG5mdW5jdGlvbiBkb21zY3JhcChvOiBJQXR0YWNoT3B0aW9ucywgY2I6IGFueSkge1xuXG5cbiAgICBmdW5jdGlvbiBhdHRhY2hhbGwodXJsOiBzdHJpbmcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHRvYmVzY3JhcGVkID0gbmV3IHNjcmFwKHVybClcblxuICAgICAgICAgICAgY2IoZmFsc2UsIHRvYmVzY3JhcGVkLCBmYWxzZSlcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjYihcImNhbid0IHNjcmFwZSB0aGlzIHVybFwiLCBmYWxzZSwgZXJyKVxuICAgICAgICB9XG4gICAgfVxuXG5cblxuXG4gICAgaWYgKG8udXJsKSB7XG4gICAgICAgIGF0dGFjaGFsbChvLnVybClcbiAgICB9IGVsc2UgaWYgKG8ucHJlZml4KSB7XG5cbiAgICAgICAgY29uc3QgaW5wdXQ6IGFueSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG8ucHJlZml4KTtcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoaW5wdXQudmFsdWUgJiYgaW5wdXQudmFsdWUubGVuZ3RoICYmIGlucHV0LnZhbHVlLmxlbmd0aCA+IDMpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaW5wdXQgY2hhbmdlZCB0bzogJywgaW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgICAgIGF0dGFjaGFsbChpbnB1dC52YWx1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBFcnJvcihcImRvbXNjcmFwIGNvbmYgZXJyb3JcIilcbiAgICB9XG5cblxuXG5cblxufVxuXG5cblxuKDxhbnk+d2luZG93KS5kb21zY3JhcCA9IGRvbXNjcmFwIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
