console.log('Start script...');

function task(message) {
    // emulate time consuming task
    console.log(message);
}


setTimeout(() => {
    task('Download a file.');
}, 1000);

console.log('Done!');