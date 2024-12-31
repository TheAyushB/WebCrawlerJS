const { JSDOM } = require('jsdom');

async function crawlPage(currentURL) {
    console.log(`actively crawling: ${currentURL}`);

    try {
        const response = await fetch(currentURL);

        if (response.status > 399) {
            console.log(`error in fetch with status code: ${response.status} on page ${currentURL}`);
            return;
        }

        const contentType = response.headers.get("content-type");
        if (!contentType.includes("text/html")) {
            console.log(`non html response, content type: ${contentType}, on page: ${currentURL}`);
            return;

        }

        console.log(await response.text());
    } catch (err) {
        console.log(`error in fetch: ${err.message}, on page: ${currentURL}`);

    }

}

// extract all URLs from the given HTML body
function getURLsFromHTML(htmlBody, baseURL) {
    const urls = [];
    const dom = new JSDOM(htmlBody);
    const linkElements = dom.window.document.querySelectorAll('a');

    // process each <a> tag and extract its href
    for (const linkElement of linkElements) {
        if (linkElement.href.slice(0, 1) === '/') {
            // relative URL
            try {
                const urlObj = new URL(`${baseURL}${linkElement.href}`);    // resolve relative URL
                urls.push(urlObj.href);
            } catch (err) {
                console.log(`Error with the relative url: ${err.message}`);
            }

        } else {
            // absolute URL
            try {
                const urlObj = new URL(`${linkElement.href}`)   // parse absolute URL
                urls.push(urlObj.href);
            } catch (err) {
                console.log(`Error with the absolute url: ${err.message}`);
            }
        }

    }
    return urls;
}

// normalize a URL by removing trailing slashes and query parameters
function normalizeURL(urlString) {
    const urlObj = new URL(urlString);
    const hostPath = `${urlObj.hostname}${urlObj.pathname}`;

    // removing the trailing slash if present 
    if (hostPath.length > 0 && hostPath.slice(-1) === '/') {
        return hostPath.slice(0, -1);
    }
    return hostPath;

}

module.exports = {
    normalizeURL,
    getURLsFromHTML,
    crawlPage
}