module.exports = {
    filenameHashing: false,
    productionSourceMap: false,
    outputDir: '../vuejs/',
    configureWebpack: {
        devtool: 'source-map',
        output: {
            filename: '[name].js'
        }
    },
    pages: {
        feature1: {
            entry: 'src/f1.js',
            template: 'public/featureTest1.html',
            filename: 'index.html',
            title: 'Feature 1',
            chunks: ['chunk-vendors', 'chunk-common', 'feature1']
        },
        feature2: {
            entry: 'src/f2.js',
            template: 'public/featureTest2.html',
            filename: 'index2.html',
            title: 'Feature 2',
            chunks: ['chunk-vendors', 'chunk-common', 'feature2']
        }
    }
}