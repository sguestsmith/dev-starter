import ContentstackLivePreview from "@contentstack/live-preview-utils";
import Contentstack from "contentstack";
Contentstack.Utils.addEditableTags();

const Stack = Contentstack.Stack({
    "api_key": process.env.API_KEY,
    "delivery_token": process.env.DELIVERY_TOKEN,
    "environment": process.env.ENVIRONMENT,
    live_preview: {
        preview_token: process.env.PREVIEW_TOKEN,
        enable: true,
        //host: 'api.contentstack.io',
        host: 'rest-preview.contentstack.com'
    }
});

ContentstackLivePreview.init({
    stackSdk: Stack,
    clientUrlParams: {
        protocol: "https",
        host: "app.contentstack.com",
        port: 443,
    },
});

export default {
    getElement(id, type) {
        return new Promise((resolve, reject) => {
            const Query = Stack.ContentType(type)
                .Entry(id)
                .toJSON()
                .fetch()
                .then(
                    function success(entry) {
                        //console.log('entry', entry);
                        Contentstack.Utils.addEditableTags(entry, type, true);
                        resolve(entry);
                    },
                    function error(err) {
                        console.log('error id', id);
                        reject(err);
                    }
                );
        });
    },

    getElementByUrl(type, url) {
        return new Promise((resolve, reject) => {
            const Query = Stack.ContentType(type)
                .Query()
                .where('url', { '$eq': url })
                .toJSON()
                .find()
                .then(
                    function success(data) {
                        const entry = data[0][0];
                        //console.log('entry', entry);
                        Contentstack.Utils.addEditableTags(entry, type, true);
                        resolve(entry);
                    },
                    function error(err) {
                        reject(err);
                    }
                );
        })
    },

    getElementByUrlWithRefs(type, url, references) {
        return new Promise((resolve, reject) => {
            const Query = Stack.ContentType(type)
                .Query()
                .where('url', { '$eq': url })
                .includeReference(...references)
                .toJSON()
                .find()
                .then(
                    function success(data) {
                        const entry = data[0][0];
                        //console.log('entry', entry);
                        Contentstack.Utils.addEditableTags(entry, type, true);
                        resolve(entry);
                    },
                    function error(err) {
                        reject(err);
                    }
                );
        })
    },

    getElementWithRefs(id, type, references) {
        return new Promise((resolve, reject) => {
            const Query = Stack.ContentType(type)
                .Entry(id)
                .includeReference(...references)
                .toJSON()
                .fetch()
                .then(
                    function success(entry) {
                        //console.log('entry', entry);
                        Contentstack.Utils.addEditableTags(entry, type, true);
                        resolve(entry);
                    },
                    function error(err) {
                        console.log('error id', id);
                        reject(err);
                    }
                );
        });
    },

    getElementByTag(type, tags) {
        return new Promise((resolve, reject) => {
            const Query = Stack.ContentType(type)
                .Query()
                .tags(tags)
                .descending('date')
                .toJSON()
                .find()
                .then(
                    function success(entry) {
                        //console.log('entry', entry);
                        Contentstack.Utils.addEditableTags(entry, type, true);
                        resolve(entry);
                    },
                    function error(err) {
                        console.log('error id', id);
                        reject(err);
                    }
                );
        });
    },

    getAllElementsByDate(type) {
        return new Promise((resolve, reject) => {
            const Query = Stack.ContentType(type)
                .Query()
                .descending('date')
                .toJSON()
                .find()
                .then(
                    function success(entry) {
                        //console.log('entry', entry);
                        Contentstack.Utils.addEditableTags(entry, type, true);
                        resolve(entry);
                    },
                    function error(err) {
                        console.log('error id', id);
                        reject(err);
                    }
                );
        });
    },

    getTaxonomies(type, tag) {
        return new Promise((resolve, reject) => {
            const Query = Stack.ContentType(type)
                .Query()
                .where('taxonomies.alerts', {"$in" : tag})
                .toJSON()
                .find()
                .then(
                    function success(entry) {
                        //console.log('entry', entry);
                        Contentstack.Utils.addEditableTags(entry, type, true);
                        resolve(entry);
                    },
                    function error(err) {
                        console.log('error ', err);
                        reject(err);
                    }
                );
        });
    },

    getAssets(tags) {
        return new Promise((resolve, reject) => {
            const Query = Stack.Assets()
                .Query()
                .tags(tags)
                .toJSON()
                .find()
                .then(
                    function success(entry) {
                        resolve(entry);
                    },
                    function error(err) {
                        console.log('error ', err);
                        reject(err);
                    }
                );
        });
    },

    // get nav call
    getStack() {
        return Stack;
    }
};

export const onEntryChange = ContentstackLivePreview.onEntryChange;