/**
 * Created by ��ľ�ƶ� on 12/16/2015.
 */


module.exports = {
    entry: "",
    output: {
        filename: 'bundle.js'
    },
    // ����ӵ�module����
    module: {
        loaders: [
            {test: /\.js$/, loader: "babel"},
            {test: /\.css$/, loader: "style!css"},
            {test: /\.(jpg|png)$/, loader: "url?limit=8192"},
            {test: /\.scss$/, loader: "style!css!sass"}
        ]
    }
};