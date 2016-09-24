"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var service_scraper_1 = require("service-scraper");
var domscrap = (function (_super) {
    __extends(domscrap, _super);
    function domscrap(url, prefix, input) {
        if (prefix) {
            _super.call(this, url);
            this.prefix = prefix;
        }
        else {
            throw Error('no prefix specified!');
        }
    }
    domscrap.prototype.attachAll = function (o) {
        document.getElementById(this.prefix + '_title');
    };
    domscrap.prototype.attachProp = function (prop, o) {
        document.getElementById(o.prop_prefix).innerHTML = this.base_params[prop];
    };
    return domscrap;
}(service_scraper_1.default));
window.domscrap = domscrap;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGdDQUFrQixpQkFJbEIsQ0FBQyxDQUprQztBQVVuQztJQUF1Qiw0QkFBSztJQUV4QixrQkFBWSxHQUFXLEVBQUUsTUFBYyxFQUFFLEtBQWM7UUFDbkQsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNULGtCQUFNLEdBQUcsQ0FBQyxDQUFBO1lBQ1YsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFFekIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osTUFBTSxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQTtRQUN2QyxDQUFDO0lBQ0wsQ0FBQztJQUVELDRCQUFTLEdBQVQsVUFBVSxDQUdMO1FBRUQsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFDRCw2QkFBVSxHQUFWLFVBQVcsSUFBSSxFQUFFLENBSVo7UUFFRCxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBRUwsZUFBQztBQUFELENBNUJBLEFBNEJDLENBNUJzQix5QkFBSyxHQTRCM0I7QUFFSyxNQUFPLENBQUMsUUFBUSxHQUFDLFFBQVEsQ0FBQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzY3JhcCBmcm9tIFwic2VydmljZS1zY3JhcGVyXCJcblxuXG5cbmludGVyZmFjZSBJQXR0YWNoT3B0aW9ucyB7XG5cbiAgICBwYXJhbXM/OiB7XG5cbiAgICB9XG59XG5jbGFzcyBkb21zY3JhcCBleHRlbmRzIHNjcmFwIHtcbiAgICBwcmVmaXg6IHN0cmluZztcbiAgICBjb25zdHJ1Y3Rvcih1cmw6IHN0cmluZywgcHJlZml4OiBzdHJpbmcsIGlucHV0Pzogc3RyaW5nKSB7XG4gICAgICAgIGlmIChwcmVmaXgpIHtcbiAgICAgICAgICAgIHN1cGVyKHVybClcbiAgICAgICAgICAgIHRoaXMucHJlZml4ID0gcHJlZml4O1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignbm8gcHJlZml4IHNwZWNpZmllZCEnKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXR0YWNoQWxsKG8/OlxuICAgICAgICB7XG4gICAgICAgICAgICBzdHlsZTogc3RyaW5nO1xuICAgICAgICB9XG4gICAgKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMucHJlZml4ICsgJ190aXRsZScpO1xuICAgIH1cbiAgICBhdHRhY2hQcm9wKHByb3AsIG8/OlxuICAgICAgICB7XG4gICAgICAgICAgICBwcm9wX3ByZWZpeDogc3RyaW5nLFxuICAgICAgICAgICAgc3R5bGU6IHN0cmluZztcbiAgICAgICAgfVxuICAgICkge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvLnByb3BfcHJlZml4KS5pbm5lckhUTUwgPSB0aGlzLmJhc2VfcGFyYW1zW3Byb3BdO1xuICAgIH1cblxufSBcblxuKDxhbnk+d2luZG93KS5kb21zY3JhcD1kb21zY3JhcCJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
