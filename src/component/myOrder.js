import React,{Component} from 'react';
import Hearder from './header.js';
import FileUpload from 'react-fileupload';
import {tool} from './tool.js';

class Myorder extends Component{
		constructor(props){
			super(props)
		}

		/*Litmit how much files could be uploaded*/
		render(){
			var options={
				baseUrl:'http://localhost:3000/imgUpload',
				param:{
					fid:0
				},
				dataType:"json",
				multiple:"true",
				requestHeaders:{'Content-Type': 'json'},
				uploadSuccess:function(res){
					if(res.id){
						tool.alert("图片上传成功")
					}
				}
			}
			/*调用FileUpload,传入options。然后在children中*/
			/*传入两个dom(不一定是button)并设置其ref值。*/
			return (
				<FileUpload options={options}>
					<input type="button" value=" choose" ref="chooseBtn" />
					<input type="button" value="upload" ref="uploadBtn" />
				</FileUpload>
			)
		}
		// render(){
		// 	return (
		// 			<div>
		// 				<Hearder HeaderL={"<a href='javascript:history.go(-1);'><</a>"}
		// 				Headertitle={'我的订单'} />
		// 				<div>这是我的订单页面</div>
		// 			</div>
		// 		)
		// }
}
export default Myorder;