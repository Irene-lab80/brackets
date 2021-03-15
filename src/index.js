module.exports = function check(str, bracketsConfig) {
        var s;
        str = str.replace( /[^{}[\]()]/g, '' );
        while ( s != str ) { 
            s = str;
            str = str.replace( /{}|\[]|\(\)/g, '' )
        }
        return !str;
};
