module.exports = function(grunt) {

    grunt.initConfig({
        uglify: {
            options: {
                banner: '/*! cricket darts version one! probably terrible, but it works atm <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: { 
                    'scripts/screept.min.js': ['scripts/screept.js']
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['uglify']);

    // probably not going to be able to use this for now, I dont think uglify supports all es6 synatx atm....

}