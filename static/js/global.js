
const palette = [ "#c136b3", "#f22a92", "#ff416d", "#ff6a46",
                  "#ff951b", "#f0bc00", "#c9e01c", "#90ff61" ];

const SERVER = 'http://localhost:10000';

function buildApiUrl(apiName, option, apiv) {
    let rv = null;
    const api_path = apiv ? `/api/v${apiv}/` : "/api/v1/";
    if (window.location.origin.match(/localhost/)) {
        rv = option ? `${SERVER}${api_path}${apiName}/${option}` : `${SERVER}${api_path}${apiName}`;
        console.log(`Builing URL by hardcoded domains (development) URL composed ${rv}`);
    } else {
        rv = option ? `${api_path}${apiName}/${option}` : `${api_path}/${apiName}`;
        console.log(`Building URL by window...href (production) URL composed ${rv}`);
    }
    return rv;
}
