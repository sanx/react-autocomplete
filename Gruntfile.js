module.exports = function(grunt) {
    // Project configuration.  
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        shell: {
            'jsx': {
                command: "node ./node_modules/react-tools/bin/jsx lib build/lib"
            }
        },
        clean: [
            './build'
        ]
    });
    // Load Shell plugin.
    grunt.loadNpmTasks('grunt-shell');
    // Load Clean plugin.
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['clean', 'shell:jsx']);
};

/* vim: expandtab:tabstop=4:softtabstop=4:shiftwidth=4:set filetype=javascript: */
