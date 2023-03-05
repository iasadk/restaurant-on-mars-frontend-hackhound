const config = {
    env: 'prod',
    get apiIpWithPort() {
        return this.env === 'prod' ? 'https://cosmic-cuisine.onrender.com/' : 'localhost:1010'
    },
    get apiBaseurl() {
        return 'http://' + this.apiIpWithPort
    },
    get apiUrl() {
        return this.apiBaseurl + '/';
    }
}

export default config;
