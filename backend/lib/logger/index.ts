const { createLogger, format, transports } = require('winston');
const { combine, simple, label, printf, timestamp } = format;

const bitlyLogFormat = printf(({ message, timestamp }: { message:any, timestamp:any }) => {
  return `${timestamp} - ${message}`;
});

const logger = createLogger({
  level: 'info',
  format: combine(timestamp(), bitlyLogFormat),
  transports: [
    new transports.File({ filename: '/tmp/bitlify.log' })
  ]
});

export default logger;
