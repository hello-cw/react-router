var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');
var CompressionPlugin = require('compression-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports={
	devtool:"false",
	entry:{bunld:__dirname+'/render/app.js',commons:['react','react-router']},
	output:{
		path:__dirname+'/dist/',
		filename:'bunld.js'
	},
	module:{
		loaders:[
			{
				test:/\.(scss|less)$/,
				// loader:ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader!postcss-loader' })
				loader:'style-loader!css-loader!sass-loader!less-loader?modules!postcss-loader'
			},
			{
				test:/\.json$/,
				// loader:ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader!postcss-loader' })
				loader:'json-loader'
			},
			{
				test:/\.css$/,
				// loader:ExtractTextPlugin.extract("style-loader","css-loader")
				loader:'style-loader!css-loader'
			},
			{
				test:/\.js$/,
				loader:'babel-loader',

			},
			{
				test:/\.(woff|svg|eot|ttf)\??.*$/,
				loader:'url-loader?name=fonts/[name].[md5:hash:hex:7].[ext]'
			},
			{
	　　　　　　test: /\.(png|jpg|gif)$/,
	　　　　　　loader: 'url-loader?limit=8192&name=./imgage/[hash].[ext]'
	　　　　}
		
		]
	},
	plugins:[
		new HtmlWebpackPlugin({
			template:__dirname+'/src/index.temp.html'
		}),
     	new webpack.DefinePlugin({
     		'process.env':{
     			'NODE_ENV':JSON.stringify('production')
     		}
     	}),
     	new webpack.optimize.CommonsChunkPlugin({
     		name:"commons",
			filename:"common.js"
     	}),
     	
     	new webpack.optimize.UglifyJsPlugin({
	      compress: {
	        warnings: false
	      }
	    }),
     // 	new webpack.optimize.DedupePlugin(),
     // 	new webpack.optimize.UglifyJsPlugin(),
     // 	new webpack.optimize.AggressiveMergingPlugin(),
     // 	new CompressionPlugin({ 
	    //   asset: "[path].gz[query]",
	    //   algorithm: "gzip",
	    //   test: /\.js$|\.css$|\.html$/,
	    //   threshold: 10240,
	    //   minRatio: 0.8
	    // }),
		new webpack.LoaderOptionsPlugin({
		    options: {
		      postcss: function () {
		        return [autoprefixer];
		      },
		      devServer: {
		        colors: true, //终端中输出结果为彩色
		        historyApiFallback: true, //不跳转
		        inline: true, //实时刷新
		       
		      }
		    }
		  }),
	]
}