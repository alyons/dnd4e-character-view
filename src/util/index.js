const capitalize = s => {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
};

const isLocalDev = location.host.includes('localhost');

module.exports = {
    capitalize,
    isLocalDev
};
