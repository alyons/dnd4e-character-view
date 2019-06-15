const capitalize = s => {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
}
const isLocalDev = location.host === 'localhost:8081';

module.exports = {
    capitalize,
    isLocalDev
};
