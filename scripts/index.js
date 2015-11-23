window.onload=function(){
	var $=function(e){
		return document.getElementById(e);
	};
	var database=[
		{name:'着魔',singer:'包威尔',duration:'03:01',src:'./musics/1.mp3'},
		{name:'背叛',singer:'曹格',duration:'05:21',src:'./musics/2.mp3'},
		{name:'M.O.M',singer:'黄子韬',duration:'03:29',src:'./musics/3.mp3'},
		{name:'之子于归',singer:'霍尊、林源',duration:'04:34',src:'./musics/4.mp3'},
		{name:' 江南水乡',singer:'雷丽莎',duration:'04:19',src:'./musics/5.mp3'},
		{name:' 日落之前',singer:'李健 ',duration:'03:22',src:'./musics/6.mp3'},
		{name:' 深海之寻',singer:'李健   ',duration:'04:30',src:'./musics/7.mp3'},
		{name:' 消失的月光',singer:'李健 ',duration:'03:58',src:'./musics/8.mp3'},
		{name:' 蜀绣',singer:'李宇春 ',duration:'04:43',src:'./musics/9.mp3'},
		{name:' 星光下的梦想',singer:'宁艺卓 ',duration:'03:03',src:'./musics/10.mp3'},
		{name:' 传奇',singer:'王菲 ',duration:'03:56',src:'./musics/11.mp3'},
		{name:' 匆匆那年',singer:'王菲 ',duration:'04:03',src:'./musics/12.mp3'}
	];


	

	document.onmousedown=function(e){
		e.preventDefault();
	};
	
	var mai=$('mai'),
		code=$('code'),
		play=$('play'),
		xunhuan=$('xunhuan'),
		fangshi=$('fangshi'),
		jingyin=$('jingyin'),
		voice_jindu=$('voice_jindu'),
		voice_bai=$('voice_bai'),
		dian=$('dian'),
		gequjindu=$('gequjindu'),
		player_current_bar=$('player_current_bar'),
		progress_op=$('progress_op'),
		singlist=$('singlist'),
		ming=$('ming'),
		singername=$('singername'),
		play_date=$('play_date'),
		music_op=$('music_op'),
		shang=$('shang'),
		xia=$('xia'),
		time_show=$('time_show'),
		but=$('but'),
		play_list=$('play_list'),
		music_list=$('music_list'),
		geci=$('geci'),
		geci_content=$('geci_content'),
		close=$('close'),
		button=$('button'),
		divplayer=$('divplayer'),
		qing=$('qing'),
		geshu=$('geshu'),
		shun=$('shun'),
		sui=$('sui'),
		danqu=$('danqu'),
		liebiao=$('liebiao');

	shun.onclick=function(){
		xunhuan.setAttribute('class','xunhuan shun1');
		fangshi.style.display='none';
	};
	sui.onclick=function(){
		xunhuan.setAttribute('class','xunhuan sui1');
		fangshi.style.display='none';
	};
		danqu.onclick=function(){
		xunhuan.setAttribute('class','xunhuan danqu1');
		fangshi.style.display='none';
	};
		liebiao.onclick=function(){
		xunhuan.setAttribute('class','xunhuan ');
		fangshi.style.display='none';
	};

	var li;

	for(var i=0;i<database.length;i++){
		li=document.createElement('li');
		li.setAttribute('index',i);
		li.setAttribute('class','gedan');
		li.innerHTML='<span class="sname">'+database[i].name+'</span> <span class="gsname">'+database[i].singer+'</span> <span class="play_time">'+database[i].duration+'</span> <div class="cang" > <span class="c_yi"></span> <span class="c_er"></span> <span class="c_san"></span> <span class="c_si"></span> </div>';
		singlist.appendChild(li);
	}
	var c_si=document.getElementsByClassName('c_si');
	var cang=document.getElementsByClassName('cang');
	var gedan=document.getElementsByClassName('gedan');

	var currentGr=null;
	for(var i=0;i<12;i++){
		c_si[i].index=i;
		c_si[i].onclick=function(e){
			e.preventDefault();
			singlist.removeChild(gedan[this.index]);
		}
	};
	var onmusicchange=function(index){
		if(currentGr){
			currentGr.setAttribute('class','gedan');
		}
		gedan[index].setAttribute('class','gedan green');
		currentGr=gedan[index];
		audio.src=database[index].src;
		audio.play();
		ming.innerHTML=database[index].name;
		play_date.innerHTML=database[index].duration;
		singername.innerHTML=database[index].singer;
		music_op.style.display='block';



	}
	var currentIndex;
	for(var i=0;i<gedan.length;i++){
		gedan[i].index=i;
		gedan[i].onmouseover=function(){
			cang[this.index].style.display='block';
		};
		gedan[i].onmouseout=function(){
			cang[this.index].style.display='none';
		};
		gedan[i].onclick=function(){
			var index=Number(this.getAttribute('index'));
			currentIndex=index;
			onmusicchange(currentIndex);

		};
	}



	xia.onclick=function(){
		if(currentGr==null){
			return;
		}
		currentIndex+=1;
		currentIndex=(currentIndex==database.length)?0 :currentIndex;
		onmusicchange(currentIndex);	
	};
		

	shang.onclick=function(){
		if(currentGr==null){
			return;
		}
		currentIndex-=1;
		currentIndex=(currentIndex==-1)?database.length-1 :currentIndex;
		onmusicchange(currentIndex);
	};
	var audio=$('audio');

	audio.onplay=function(){
		
		play.setAttribute('class','play');
		
	};
	audio.onpause=function(){
		play.setAttribute('class','play1');
	};
	audio.onvolumechange=function(){
		dian.style.left=this.volume*100-dian.offsetWidth+'%';
		voice_bai.style.width=this.volume*100+'%';
	};
	audio.onseeked=function(){
		progress_op.style.left=this.currentTime/this.duration*100+'%';
		player_current_bar.style.width=this.currentTime/this.duration*100+'%';
	};
	audio.ontimeupdate=function(){
		progress_op.style.left=this.currentTime/this.duration*100-1+'%';
		player_current_bar.style.width=this.currentTime/this.duration*100+'%';
	};
	audio.onended=function(){
		currentIndex+=1;
		currentIndex=currentIndex==database.length?0:currentIndex;
		onmusicchange(currentIndex);
	};
	play.onclick=function(){
		if(gedan.length==0){return;}
		if(audio.paused){
				audio.play();
				// alert(1);
		}else{
				audio.pause();
		}
		if(!currentGr){
			currentIndex=0;
			onmusicchange(currentIndex);
		}
		
	};

	
	jingyin.onclick=(function(){
		var previous;
		return function(e){

			if(this.getAttribute('class').indexOf('icon1')!=-1){//you,1
				jingyin.setAttribute('class','icon');
				audio.volume=previous;
				// previous=audio.volume;
			}
			else{
				jingyin.setAttribute('class','icon icon1');
				previous=audio.volume;
				audio.volume=0;
			}
		};
	})();

	voice_jindu.onclick=function(e){
		audio.volume=e.layerX/voice_jindu.offsetWidth;
	};
	dian.onclick=function(e){
		e.stopPropagation();
	};
	dian.onmousedown=function(){
		dian.onmousemove=function(e){
			audio.volume=(e.clientX-voice_jindu.getBoundingClientRect().left)/voice_jindu.offsetWidth;
		}
	};
	gequjindu.onclick=function(e){
		// audio.currentTime=(e.layerX-progress_op.offsetWidth)/gequjindu.offsetWidth*audio.duration;
		audio.currentTime=(e.layerX)/gequjindu.offsetWidth*audio.duration;

	};
	var formatetime=function(s){
		if(isNaN(s)){
			return '--:--';

		}
		s=Math.round(s);
		var mi=Math.floor(s/60);
		var se=s%60;
		mi=mi<10?'0'+mi:mi;
		se=se<10?'0'+se:se;
		return mi+':'+se;
	};
	gequjindu.onmousemove=function(e){
		time_show.style.display='block';
		if(e.target.getAttribute('class')=='progress_op'){return;}
		// audio.currentTime=(e.layerX)/gequjindu.offsetWidth*audio.duration;
		// time_show.innerHTML=;
		var aa=(e.layerX)/gequjindu.offsetWidth*audio.duration;
	// var bb=	(aa/60-Math.floor(aa/60))/0.6>=1?Math.floor(aa/60)+Math.floor((aa/60-Math.floor(aa/60))/0.6)+((aa/60-Math.floor(aa/60))/0.6-Math.floor((aa/60-Math.floor(aa/60))/0.6)).toFixed(2):(aa/60).toFixed(2);
		time_show.style.left=(e.layerX-22.5)+'px';
		time_show.innerHTML=formatetime(aa)+'<div class="xiaosanjiaow" id="xiaosanjiaow"></div> <div class="xiaosanjiao"></div>'; // console.log(bb);
	};
	// 	gequjindu.onmouseover=function(e){
	// 	time_show.style.display='block';
		
	// 	// audio.currentTime=(e.layerX)/gequjindu.offsetWidth*audio.duration;
	// 	// time_show.innerHTML=;
	// 	var aa=(e.layerX)/gequjindu.offsetWidth*audio.duration;
	// // var bb=	(aa/60-Math.floor(aa/60))/0.6>=1?Math.floor(aa/60)+Math.floor((aa/60-Math.floor(aa/60))/0.6)+((aa/60-Math.floor(aa/60))/0.6-Math.floor((aa/60-Math.floor(aa/60))/0.6)).toFixed(2):(aa/60).toFixed(2);
	// 	time_show.style.left=(e.layerX-22.5)+'px';
	// 	time_show.innerHTML=formatetime(aa);
	// 	// console.log(bb);
	// };
	gequjindu.onmouseout=function(e){
		time_show.style.display='none';
	};
	progress_op.onclick=function(e){
		e.stopPropagation();
		console.log(currentGr);
		
	};
	// progress_op.onmouseover=function(e){
	// 	// time_show.style.display='block';
		
	// 	// audio.currentTime=(e.layerX)/gequjindu.offsetWidth*audio.duration;
	// 	// time_show.innerHTML=;
	// 	var aa=(e.clientX)/gequjindu.offsetWidth*audio.duration;
	// 	console.log(e.clientX);
	// // var bb=	(aa/60-Math.floor(aa/60))/0.6>=1?Math.floor(aa/60)+Math.floor((aa/60-Math.floor(aa/60))/0.6)+((aa/60-Math.floor(aa/60))/0.6-Math.floor((aa/60-Math.floor(aa/60))/0.6)).toFixed(2):(aa/60).toFixed(2);
	// 	time_show.style.left=e.clientX-time_show.offsetWidth/2+'px';
	// 	time_show.innerHTML=formatetime(aa);
	// 	e.stopPropagation();
	// };
	progress_op.onmousedown=function(){
		document.onmousemove=function(e){
			e.stopPropagation();
			// audio.pause();
			var aa=e.clientX/gequjindu.offsetWidth*audio.duration;
			time_show.style.left=e.clientX-time_show.offsetWidth/2+'px';
			time_show.innerHTML=formatetime(aa);
			time_show.style.display='block';
			audio.currentTime=aa;
		};
	};

	document.onmouseup=function(){
		// audio.play();
		document.onmousemove=null;
		// audio.currentTime=aa;
			// audio.currentTime=(e.ClientX)/gequjindu.offsetWidth*audio.duration;
	
	};

	but.onclick=function(){
		play_list.style.display='none';
	};
	// document.onclick=function(){
	// 	play_list.style.display='none';
	// };
	// var mu_kai=true;
	music_list.onclick=function(e){
		// e.preventDefault();
		if(play_list.style.display=='none'){
			play_list.style.display='block';
			// mu_kai=false;
		}else{
			play_list.style.display='none';
			// mu_kai=true;
		}
		
	};
	// var kaiguan=true;
	geci.onclick=function(){
		if(geci_content.style.display=='none'){
			this.setAttribute('class','geci geci1');
			geci_content.style.display='block';
		
		}else{
			this.setAttribute('class','geci');
			geci_content.style.display='none';
			
		}
	};
	close.onclick=function(){
		geci_content.style.display='none';
	};
	var bu_kai=true;
	button.onclick=function(){
		if(bu_kai){
			divplayer.style.left=-541+'px';
			this.setAttribute('class','button b_gr');
			bu_kai=false;
		}else{
			divplayer.style.left=0+'px';
			this.setAttribute('class','button');
			bu_kai=true;
		}
		
	};
	mai.onmouseover=function(){
		code.style.display='block';
	};
	mai.onmouseout=function(){
		code.style.display='none';
	};
	
	geshu.innerHTML=gedan.length;
	qing.onclick=function(){
		ming.innerHTML='听我想听的歌！';
		singername.innerHTML='QQ音乐';
		play_date.innerHTML='';
		music_op.style.display='none';
		geshu.innerHTML=0;
		currentGr=null;
		// database.length=0;
		audio.pause();
		while(singlist.firstElementChild){
			singlist.removeChild(singlist.firstElementChild);
		}
		
	};		
	xunhuan.onclick=function(){
		// fn(this);
		// fangshi.setAttribute('class','fangshi f_chu');
		fangshi.style.display='block';
	};
	document.onkeydown=function(e){
		console.log(e.keyCode);
		if(e.keyCode==80){
			if(audio.paused){
				audio.play();
			}else{
				audio.pause();
			}
		}
		else if(e.keyCode==221){
			// nextge();
			if(currentGr==null){
				return;
			}
			currentIndex+=1;
			currentIndex=(currentIndex==database.length)?0 :currentIndex;
			onmusicchange(currentIndex);
		}
		else if(e.keyCode==219){
			// nextge();
			if(currentGr==null){
			return;
			}
			currentIndex-=1;
			currentIndex=(currentIndex==-1)?database.length-1 :currentIndex;
			onmusicchange(currentIndex);
		}
	};



	
	
		// voice_jindu
	
	// // var geTime=audio.duration;
	// var z_bai=audio.currentTime/audio.duration;
	// console.log(audio.duration);
	// console.log(audio.currentTime);
	// z_bai=audio.currentTime/audio.duration;
	// audio.ontimeupdate=function(){
		
		
	// 	player_current_bar.style.width=z_bai*(gequjindu.offsetWidth-7)+'px';
	// 	progress_op.style.left=z_bai*(gequjindu.offsetWidth-7)+'px';
	// 	// console.log(audio.currentTime);

	// };
	
	// gequjindu.onclick=function(e){
	// 	if(e.target.getAttribute('id')=='progress_op'){return;}
	// 	player_current_bar.style.width=e.layerX+'px';
	// 	progress_op.style.left=e.layerX+'px';
	// };
	// progress_op.onmousedown=function(){
	// 	document.onmousemove=function(e){
	// 		player_current_bar.style.width=e.clientX-20+'px';
	// 		progress_op.style.left=e.clientX-20+'px';
	// 		z_bai=player_current_bar/gequjindu.offsetWidth;
	// 		audio.currentTime=z_bai*audio.duration;
	// 	};
	// };



	// var v_cur=voice_bai.offsetWidth;
	
	// var kaishi=voice_bai.offsetWidth/voice_jindu.offsetWidth;
	// jingyin.onclick=function(){
		
	// 	if(audio.volume!==0){
	// 		audio.volume=0;	
	// 		voice_bai.style.width=0+'px';
	// 		dian.style.left=0+'px';
	// 		jingyin.setAttribute('class','icon icon1');
	// 	}
	// 	else{
	// 		// console.log(voice_bai.offsetWidth);
	// 		voice_bai.style.width=v_cur+'px';
	// 		dian.style.left=v_cur+'px';
	// 		audio.volume=kaishi;
	// 		jingyin.setAttribute('class','icon');	
	// 	}
		
	// };
	// voice_jindu.onclick=function(e){
	// 	// console.log(e);

	// 	if(e.target.getAttribute('id')=='dian'){return;}
	// 	if(e.layerX!=0){
	// 		jingyin.setAttribute('class','icon');
	// 		voice_bai.style.width=e.layerX+'px';
	// 		dian.style.left=e.layerX+'px';
	// 		v_cur=voice_bai.offsetWidth;
	// 		kaishi=voice_bai.offsetWidth/voice_jindu.offsetWidth;
	// 		audio.volume=kaishi;
	// 	}else{
	// 		audio.volume=0;	
	// 		voice_bai.style.width=0+'px';
	// 		dian.style.left=0+'px';
	// 		jingyin.setAttribute('class','icon icon1');
	// 	}

		
	// };
	// dian.onmousedown=function(e){
	// 	e.stopPropagation();
	// 	var m=e.clientX-475;
	// 	console.log(e.clientX-475);
	// 	document.onmousemove=function(e){
	// 		e.preventDefault();
	// 		if(e.target.getAttribute('id')=='voice_jindu'||'dian'){
			
	// 			var dianl=Math.max((e.clientX-474)>71?71:(e.clientX-474),0);
	// 			dian.style.left=dianl+'px';
	// 			voice_bai.style.width=dianl+'px';
	// 			v_cur=voice_bai.offsetWidth;
	// 			kaishi=voice_bai.offsetWidth/voice_jindu.offsetWidth;
	// 			audio.volume=kaishi;
	// 			// audio.volume=;
	// 			console.log(dianl);
	// 			if(dianl==0){
	// 				jingyin.setAttribute('class','icon icon1');
	// 			}else{
	// 				jingyin.setAttribute('class','icon');
	// 			}
	// 		}
			
	// 	};
	// 	// console.log(e.offsetX);


	// };
	// document.onmouseup=function(){
	// 	document.onmousemove=null;
	// };


	// var play_on=true;
	// mai.onmouseover=function(){
	// 	code.style.display='block';
	// };
	// mai.onmouseout=function(){
	// 	code.style.display='none';
	// };
	// play.onclick=function(){
	// 	// audio.play();
	// 	// fn(this);

	// 	// if(play_on){
	// 	// 	this.setAttribute('class','play1');
	// 	// 	play_on=false;
	// 	// 	// audio.play();
	// 	// }
	// 	// else{
	// 	// 	this.setAttribute('class','play');
	// 	// 	play_on=true;
	// 	// 	// audio.pause();
	// 	// }
	// 	if(audio.paused){
	// 		audio.play();
	// 		this.setAttribute('class','play');
	// 		play_on=true;
	// 	}else{
	// 		audio.pause();
	// 		audio.volume=kaishi;
	// 		this.setAttribute('class','play1');
	// 		play_on=false;
	// 	}
		
	// };
	// xunhuan.onclick=function(){
	// 	// fn(this);
	// 	fangshi.setAttribute('class','fangshi f_chu');
	// };
	// fangshi.onclick=function(){
	// 	// fn(this);
	// 	this.setAttribute('class','fangshi');
	// };
	// console.log(audio);
	// console.log(audio.src);//歌曲路径
	// // audio.src='./musics/2.mp3';
	// // audio.play();
	// console.log(audio.src);
	// console.log(audio.duration);
	// console.log(audio.currentTime);
	// // audio.duration//秒为单位的歌曲长度
	// // audio.currentTime  以秒为单位的 歌曲当前已播放的长度
	// audio.currentTime=45;
	// console.log(audio.volume);//1最大音量 0-1
	// // audio.volume=0;//静音
	// //src duration currentTime volume 都是可读可设置的
	// // paused ended   (true false)
	// console.log(audio.paused);
	// console.log(audio.ended);
	// audio.paused

	//方法   play() pause();

	// 事件
	
	// audio.play();
	// var kai=true;
	// var timerId;
	// audio.ontimeupdate=function(){
	// 	console.log(1);
	// 	if(audio.ended){alert(1);}
	// 	if(kai&&audio.currentTime>5){
	// 		audio.pause();
	// 		kai=false;
	// 		setTimeout(function(){audio.play();},2000);
	// 	}
		

	// 	// console.log(1);//时间改变了一直调用这个函数
	// };
	// audio.ontimeupdate=function(){}
	// 	setInterval(function(){

	// 	},2000);


};//最后