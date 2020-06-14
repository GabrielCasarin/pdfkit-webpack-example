const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');


module.exports = {
  entry: ['./src/index.js'],
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  resolve: {
		alias: {
			fs: 'pdfkit/js/virtual-fs.js',
      'vue$': 'vue/dist/vue.esm.js'
		}
  },
  module: {    
    rules: [            
      { test: /\.vue$/, loader: 'vue-loader'},
      {
        test: /\.m?(js)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      { enforce: 'post', test: /fontkit[/\\]index.js$/, loader: "transform-loader?brfs" },
      { enforce: 'post', test: /unicode-properties[/\\]index.js$/, loader: "transform-loader?brfs" },
      { enforce: 'post', test: /linebreak[/\\]src[/\\]linebreaker.js/, loader: "transform-loader?brfs" },
      { test: /src[/\\]assets/, loader: 'arraybuffer-loader'},
      { test: /\.afm$/, loader: 'raw-loader'}
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  devtool: 'sourcemap'
}