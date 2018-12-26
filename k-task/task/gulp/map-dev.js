'use strict';

import path from 'path';
import fs from 'fs';

module.exports = function(gulp, setgulp, plugins, config, target, browserSync) {
    let url = config;
    let dest = path.join(target);

    // Run task
	gulp.task('map-dev', ['pug-rename-dev'], function () {

		var directoryPath = path.join( 'tmp');

		fs.writeFileSync(directoryPath + '/index.html', '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge"><title>Documents</title><link rel="stylesheet" href="/css/bootstrap.min.css"></head><body><div class="container-fluid"><div class="row">');

		setTimeout(() => {
			fs.readdir(directoryPath, function (err, files) {
				if (err) {
					return console.log('Unable to scan directory: ' + err);
				}
				files
					.filter(function (file) { return file.substr(-5) === '.html'; })
					.forEach(function (file) {
						fs.appendFile(directoryPath + '/index.html', '<div class="col-2 pt-1"><a href="./' + file + '">' + file+'</a></div>', function (err) {
							if (err)
								console.error(err);
						});
				});
			});
		}, 3500);

		setTimeout(() => {
			fs.appendFile(directoryPath + '/index.html', '</div></div><script src="/js/jquery-3.2.1.slim.min.js" ></script><script src="/js/1.12.9/umd/popper.min.js"></script><script src="/js/bootstrap.min.js"></script></body></html>', function (err) {
				if (err)
					console.error(err);
			});
		}, 7000);


    })
}
