import scrap from "service-scraper"



interface IAttachOptions {

    params?: {

    }
}
class domscrap extends scrap {
    prefix: string;
    constructor(url: string, prefix: string, input?: string) {
        if (prefix) {
            super(url)
            this.prefix = prefix;

        } else {
            throw Error('no prefix specified!')
        }
    }

    attachAll(o?:
        {
            style: string;
        }
    ) {
        document.getElementById(this.prefix + '_title');
    }
    attachProp(prop, o?:
        {
            prop_prefix: string,
            style: string;
        }
    ) {
        document.getElementById(o.prop_prefix).innerHTML = this.base_params[prop];
    }

} 

(<any>window).domscrap=domscrap