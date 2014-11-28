module.exports = function(grunt) {

	// 1. All configuration goes here 
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		clean: {
            dist: [
                'build/**'
            ]
        },

		concat: {   
			dist: {
				src: [
				'js/lib/*.js', // All JS in the libs folder
				'js/app.js'  // This specific file
				],
				dest: 'build/js/app.js',
			}
		},

		uglify: {
			build: {
				src: 'build/js/app.js',
				dest: 'build/js/app.min.js'
			}
		},

		cssmin: {
            minify: {
                expand: true,
                cwd: 'css/',
                src: ['*.css', '!*.min.css'],
                dest: 'build/css/',
                ext: '.min.css'
            }
        },

		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'img/',
					src: ['**/*.{png,PNG,jpg,JPG,jpeg,JPEG,gif,GIF}'],
					dest: 'build/img/'
				}]
			}
		},

		 copy: {
            main: {
                files: [
                    // includes files within path
                    {
                        expand: true,
                        src: ['*.php', '*.css', '*.png'],
                        dest: 'build/',
                        filter: 'isFile'
                    },
                    // includes files within path and its sub-directories
                    {
                        expand: true,
                        src: ['fonts/**', 'partials/**'],
                        dest: 'build'
                    },
                ]
            }
        },

		processhtml: {
			options: {
				// Task-specific options go here.
			},
			dist: {
				files: {
					'build/index.php': ['index.php']
				}
			}
		},

		'ftp-deploy': {
			build: {
				auth: {
					host: 'ftpcluster.loopia.se',
					//port: 21,
					authKey: 'test_env'
				},
				src: 'build',
				dest: '/',
				//exclusions: ['path/to/source/folder/**/.DS_Store', 'path/to/source/folder/**/Thumbs.db', 'path/to/dist/tmp']
			}
		}

	});

	// 3. Where we tell Grunt we plan to use this plug-in.
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-processhtml');
	grunt.loadNpmTasks('grunt-ftp-deploy');

	// 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
	grunt.registerTask('build', ['clean', 'concat', 'uglify', 'cssmin', 'imagemin', 'copy', 'processhtml']);
	grunt.registerTask('reset', ['clean']);
	grunt.registerTask('deploy', ['ftp-deploy']);
	grunt.registerTask('default', ['build']);

};