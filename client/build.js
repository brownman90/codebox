var path = require("path");

exports.config = {
    // Base directory for the application
    "base": __dirname,

    // Application name
    "name": "Codebox",

    // Mode debug
    "debug": true,

    // Main entry point for application
    "main": "main",

    // Build output directory
    "build": path.resolve(__dirname, "..", "public"),

    // Static files mappage
    "static": {
        "templates": path.resolve(__dirname, "resources", "templates"),
        "images": path.resolve(__dirname, "resources", "images"),
        "fonts": path.resolve(__dirname, "resources", "fonts")
    },

    // Stylesheet entry point
    "style": path.resolve(__dirname, "stylesheets/main.less"),

    // Modules paths
    'paths': {},
    "shim": {
        'vendors/socket.io': {
            exports: 'io'
        },
        'vendors/socket.io-stream': {
            exports: 'ss'
        },
        'vendors/crypto': {
            exports: 'CryptoJS'
        },
        'vendors/diff_match_patch': {
            exports: 'diff_match_patch'
        },
        'vendors/mousetrap': {
            exports: 'Mousetrap'
        },
        'vendors/term': {
            exports: 'Terminal'
        },
        'views/views': {
            deps: [
                'vendors/bootstrap/dropdown',
                'vendors/bootstrap/modal'
            ]
        }
    }
};