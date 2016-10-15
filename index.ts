import scrap from "service-scraper"


interface IAttachOptions {
    style?: string;
    input?: string;
    params?: {};
    prefix?: string;
    url: string;
}


function domscrap(o: IAttachOptions, cb: any) {


    function attachall(url: string) {
        try {
            const tobescraped = new scrap(url)

            cb(false, tobescraped, false)
        } catch (err) {
            cb("can't scrape this url", false, err)
        }
    }




    if (o.url) {
        attachall(o.url)

        if (o.prefix) {

            const input: any = document.getElementById(o.prefix);
            input.addEventListener('input', function () {
                if (input.value && input.value.length && input.value.length > 3) {
                    console.log('input changed to: ', input.value);
                    attachall(input.value)
                }
            });

        }


    } else if (o.prefix) {

        const input: any = document.getElementById(o.prefix);
        input.addEventListener('input', function () {
            if (input.value && input.value.length && input.value.length > 3) {
                console.log('input changed to: ', input.value);
                attachall(input.value)
            }
        });

    } else {
        throw Error("domscrap conf error")
    }





}



(<any>window).domscrap = domscrap