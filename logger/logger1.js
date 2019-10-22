const winston = require('winston');



class Logger{

constructor(testName)
{
    this.levels = { 
        error: 0, 
        warn: 1, 
        info: 2, 
        verbose: 3, 
        debug: 4, 
        silly: 5 
      }
      this.date =new Date()
             this.logger = winston.createLogger({
            transports: [
            new winston.transports.Console(),
            new winston.transports.File({ filename: '../allTheTests/'+this.date.getDay() +"."+ this.date.getMonth()+ "."+this.date.getFullYear()+'/'+testName+'.log' })
        ]
        
    });

}

}
module.exports = Logger
