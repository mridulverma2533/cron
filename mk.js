var cron = require('node-cron');

cron.schedule('* * * * *', () => {
  console.log('Running a job at 01:00 at America/Sao_Paulo timezone');
}, {
  scheduled: true,
  timezone: "Asia/Kolkata"
});
