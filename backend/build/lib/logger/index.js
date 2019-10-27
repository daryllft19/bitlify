"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _a = require('winston'), createLogger = _a.createLogger, format = _a.format, transports = _a.transports;
var combine = format.combine, simple = format.simple, label = format.label, printf = format.printf, timestamp = format.timestamp;
var bitlyLogFormat = printf(function (_a) {
    var message = _a.message, timestamp = _a.timestamp;
    return timestamp + " - " + message;
});
var logger = createLogger({
    level: 'info',
    format: combine(timestamp(), bitlyLogFormat),
    transports: [
        new transports.File({ filename: '/tmp/bitlify.log' })
    ]
});
exports.default = logger;
