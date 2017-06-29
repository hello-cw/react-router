export const tool={}


tool.alert=(msg)=>{
	let timer=null;
	clearTimeout(timer)
	let alertDiv=document.createElement('div');
	alertDiv.style.cssText='width:100%;height:100%;position:fixed;top:0;left:0;right:0;display:none'
	let alertContent=document.createElement('div');
	alertContent.style.cssText="position:absolute;width:90%;height:70px;background:rgba(0,0,0,0.8);color:#fff;font-size:16px;line-height:70px;text-align:center;left:0;top:0;bottom:0;right:0;border-radius:5px;margin:auto;"
	alertDiv.appendChild(alertContent);
	document.getElementsByTagName('body')[0].appendChild(alertDiv);
	alertContent.innerHTML=msg;
	alertDiv.style.display='block';
	alertDiv.onclick=()=>{
		clearTimeout(timer)
		alertDiv.style.display='none';
	}
	timer=setTimeout(()=>{
		alertDiv.style.display='none';
		clearTimeout(timer)
	},800)
}
tool.getStyle =  (obj,attr) => { 
    if(obj.currentStyle){ 
        return obj.currentStyle[attr]; 
    } 
    else{ 
        return document.defaultView.getComputedStyle(obj,null)[attr]; 
    } 
} 