import scrap from "service-scraper"


interface IAttachOptions {
    style?: string;
    input?: string;
    params?: {};
    prefix?: string;
    url: string;
}


function domscrap(o: IAttachOptions, cb: any) {


    function attachall(url: string, prefix: string) {
        try {
            const tobescraped = new scrap(url)

            cb(false, tobescraped, false)
        } catch (err) {
            cb("can't scrape this url", false, err)
        }
    }




    if (o.url && o.prefix) {
        attachall(o.url, o.prefix)
    } else if (o.prefix) {

        const input: any = document.getElementById(o.prefix + '_input');
        input.addEventListener('input', function () {
            if (input.value && input.value.length && input.value.length > 3) {
                console.log('input changed to: ', input.value);
                attachall(input.value, o.prefix)
            }
        });

    } else {
        throw Error("domscrap conf error")
    }





}



(<any>window).domscrap = domscrap