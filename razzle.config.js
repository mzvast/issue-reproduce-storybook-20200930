'use strict';

module.exports = {
    plugins: [
        {
            name: 'typescript',
            options: {
                useBabel: true,
                tsLoader: {
                    transpileOnly: true,
                    experimentalWatchApi: true
                },
                forkTsChecker: {
                    tsconfig: './tsconfig.json',
                    tslint: false,
                    watch: './src',
                    typeCheck: true
                }
            }
        }
    ]
};
