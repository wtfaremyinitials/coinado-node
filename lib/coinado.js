var got    = require('got');
var stream = require('readable-stream');

module.exports = function(key) {
    return {
        getBalance: function(cb) {
            got('https://coinado.io/balance?u=' + key, function(err, data) {
                if(err)
                    return cb(err);

                cb(undefined, {
                    balance: parseFloat(data.match(/Balance: (.*) GiB/)[1]),
                    address: data.match(/Bitcoin address: (\w{25,34})/)[1]
                });
            });
        },
        // TODO: getTorrent: function(hash) {},
    };
};
