const config = {
    env: 'local',
    get apiIpWithPort() {
        return this.env === 'prod' ? '' : 'localhost:1010'
    },
    get apiBaseurl() {
        return 'http://' + this.apiIpWithPort
    },
    get apiUrl() {
        return this.apiBaseurl + '/';
    }
}

export default config;
