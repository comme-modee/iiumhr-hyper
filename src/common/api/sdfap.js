import HttpClient from '../helpers/httpClient';


function Sdfap() {

    return {
        // addPortfolio: (portfolioData) => {
        //     // console.log('portfolio api in', portfolioData)

        //     return new Promise(function (resolve, reject) { 
        //         try {
        //             HttpClient.post('/adminapi/portfolio', portfolioData, {
        //                 headers: {
        //                     'Content-Type': 'multipart/form-data'
        //                 }
        //             })
        //             .then(response => {
        //             resolve(response);
        //             })
        //             .catch(error => {
        //             console.error(error, "1");
        //             reject(error);
        //             });
        //         } catch (error) {
        //             console.error('오류 발생:', error);
        //         }
        //     });
        // },

        getSdfap: () => {
            return new Promise(function (resolve, reject) {
                try {
                    HttpClient.get('/adminapi/sdfap')
                        .then(response => {
                            resolve(response);
                        })
                        .catch(error => {
                            console.error(error, "1");
                            reject(error);
                        });
                } catch (error) {
                    console.error('오류 발생:', error);
                }
            });
        },

        editSdfap: (data) => {
            console.log('edit sdfap api in', data)

            return new Promise(function (resolve, reject) {
                try {
                    HttpClient.put('/adminapi/sdfap', data)
                        .then(response => {
                            resolve(response);
                        })
                        .catch(error => {
                            console.error(error, "1");
                            reject(error);
                        });
                } catch (error) {
                    console.error('오류 발생:', error);
                }
            });
        },

    };
}

export default Sdfap();
