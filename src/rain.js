
var rain_prj_nm = "rain";
var rain_ball_num = 50;
var rain_ball_sbt_num =1;
var rain_subball_num = 9;
var rain_subball_sbt_num = 3;

var rain_i, rain_n;
var rain_obj;
var rain_img;
var rain_obj_sub;
var rain_img_sub;

var rain_preimg = new Array();
rain_preimg[0] = new Image();
rain_preimg[0].src = "img/ball1.gif";
rain_preimg[1] = new Image();
rain_preimg[1].src = "img/ball2.gif";

var rain_preimg_sub = new Array();
rain_preimg_sub[0] = new Image();
rain_preimg_sub[0].src = "img/subball1.gif";
rain_preimg_sub[1] = new Image();
rain_preimg_sub[1].src = "img/subball1.gif";
rain_preimg_sub[2] = new Image();
rain_preimg_sub[2].src = "img/subball1.gif";

var rain_objBody = document.getElementsByTagName('rain').item(0);
var rain_elem;
for(rain_i = 1; rain_i <= rain_ball_num; rain_i++) {
	rain_elem = document.createElement('div'); 
	rain_elem.id = rain_prj_nm + '_ball' + rain_i; 
	rain_elem.innerHTML = '<img id="' + rain_prj_nm + '_ball_img' + rain_i + '" style="border:0;">'; 
	rain_elem.style.position = 'absolute'; 
	rain_elem.style.visibility = 'hidden';
	rain_elem.style.margin = '0px';
	rain_elem.style.padding = '0px';
	rain_objBody.appendChild(rain_elem); 
	for(rain_n = 1; rain_n <= rain_subball_num; rain_n++) {
		rain_elem = document.createElement('div'); 
		rain_elem.id = rain_prj_nm + '_subball' + rain_i + rain_n; 
		rain_elem.innerHTML = '<img id="' + rain_prj_nm + '_subball_img' + rain_i + rain_n + '" style="border:0;">'; 
		rain_elem.style.position = 'absolute'; 
		rain_elem.style.visibility = 'hidden';
		rain_elem.style.margin = '0px';
		rain_elem.style.padding = '0px';
		rain_objBody.appendChild(rain_elem); 
	}
}

function rain_getViewTop() {
	if( window.scrollY ) return window.scrollY;
	if( window.pageYOffset ) return window.pageYOffset;
	if( document.documentElement && document.documentElement.scrollTop ) {
		return document.documentElement.scrollTop;
	}
	else if( document.body && document.body.scrollTop ) {
		return document.body.scrollTop;
	}
	return 0;
}

function rain_getViewLeft() {
	if( window.scrollX ) return window.scrollX;
	if( window.pageXOffset ) return window.pageXOffset;
	if( document.documentElement && document.documentElement.scrollLeft ) {
		return document.documentElement.scrollLeft;
	}
	else if( document.body && document.body.scrollLeft ) {
		return document.body.scrollLeft;
	}
	return 0;
}

function rain_getViewHeight() {
	if( window.innerHeight ) return window.innerHeight; 
	if( document.documentElement && document.documentElement.clientHeight ) {
		return document.documentElement.clientHeight;
	}
	else if( document.body && document.body.clientHeight ) {
		return document.body.clientHeight;
	}
	return 0;
}

function rain_getViewWidth() {
	if( window.innerWidth ) return window.innerWidth; 
	if( document.documentElement && document.documentElement.clientWidth ) {
		return document.documentElement.clientWidth;
	}
	else if( document.body && document.body.clientWidth ) {
		return document.body.clientWidth;
	}
	return 0;
}

function rain_getViewBottom() {
	return rain_getViewTop() + rain_getViewHeight();
}

function rain_getViewRight() {
	return rain_getViewLeft() + rain_getViewWidth();
}

function rain_getRandomNum(num) {
	return Math.floor( Math.random() * num );
}

function rain_setOpacity(elem, op){   
	elem.style.filter = 'alpha(opacity=' + (op * 100) + ')';   
	elem.style.MozOpacity = op;   
	elem.style.opacity = op;   
}
var rain_action = new Array();
var rain_actioncnt = new Array();
var rain_balltop = new Array();
var rain_balltop_to = new Array();
var rain_ballleft = new Array();
var rain_ballspeed = new Array();
var rain_ballopacity = new Array();
var rain_balltype = new Array();
var rain_subballtop = new Array();
var rain_subballleft = new Array();
var rain_subballmovelr = new Array();
var rain_subballspeedv = new Array();
var rain_subballspeedh = new Array();

for(rain_i = 1; rain_i <= rain_ball_num; rain_i++) {
	rain_action[rain_i] = 0;
	rain_subballtop[rain_i] = new Array();
	rain_subballleft[rain_i] = new Array();
	rain_subballmovelr[rain_i] = new Array();
	rain_subballspeedv[rain_i] = new Array();
	rain_subballspeedh[rain_i] = new Array();
	rain_ballopacity[rain_i] = new Array();
}


function rain_fire() {

	var rain_viewbottom = rain_getViewBottom();
	var rain_viewright = rain_getViewRight();
	var rain_viewtop = rain_getViewTop();
	var rain_viewleft = rain_getViewLeft();

	for(rain_i = 1; rain_i <= rain_ball_num; rain_i++) {
		rain_obj = document.getElementById(rain_prj_nm + '_ball'+rain_i);
		rain_img = document.getElementById(rain_prj_nm + '_ball_img'+rain_i);

		switch(rain_action[rain_i]) {
			case 0:
				if( rain_getRandomNum( 100 ) == 0 ) {
					rain_balltype[rain_i] = rain_getRandomNum( rain_ball_sbt_num ) + 1;
					rain_img.src = rain_preimg[ 0 ].src;
					rain_balltop[rain_i] = rain_viewtop - rain_img.height;
					rain_ballleft[rain_i] = ( rain_viewleft + rain_getRandomNum( rain_viewright - rain_viewleft - 20 ) );
					rain_ballspeed[rain_i] = 30;
					rain_balltop_to[rain_i] = ( rain_viewtop + rain_getRandomNum( rain_viewbottom - rain_viewtop - 250 ) ) + 150;
					rain_obj.style.top = rain_balltop[rain_i] + 'px';
					rain_obj.style.left = rain_ballleft[rain_i] + 'px';
					rain_obj.style.visibility = 'visible';
					rain_action[rain_i] = 1;
					rain_actioncnt[rain_i] = 0;
					rain_ballopacity[rain_i] = 0.5;
					rain_setOpacity(rain_obj,rain_ballopacity[rain_i]);
				}

				break;

			case 1:
				rain_balltop[rain_i] += rain_ballspeed[rain_i];
				if( rain_balltop[rain_i] < rain_balltop_to[rain_i] - 50 ) {
					rain_obj.style.top = rain_balltop[rain_i] + 'px';
					rain_actioncnt[rain_i]++;
				}
				else {
					rain_balltop[rain_i] = rain_balltop_to[rain_i];
					rain_obj.style.top = rain_balltop[rain_i] + 'px';
					rain_img.src = rain_preimg[ rain_balltype[rain_i] ].src;
					rain_ballopacity[rain_i] = 0.3;
					rain_setOpacity(rain_obj,rain_ballopacity[rain_i]);
					rain_obj.style.left = (rain_ballleft[rain_i]-15) + 'px';
					for(rain_n = 1; rain_n <= rain_subball_num; rain_n++) {
						rain_obj_sub = document.getElementById(rain_prj_nm + '_subball'+rain_i+rain_n);
						rain_img_sub = document.getElementById(rain_prj_nm + '_subball_img'+rain_i+rain_n);

						rain_img_sub.src = rain_preimg_sub[ rain_getRandomNum( rain_subball_sbt_num ) ].src;

						rain_subballtop[rain_i][rain_n] = rain_balltop_to[rain_i] + 15;
						rain_subballleft[rain_i][rain_n] = rain_ballleft[rain_i];
						rain_subballmovelr[rain_i][rain_n] = rain_getRandomNum( 2 );
						rain_subballspeedv[rain_i][rain_n] = rain_getRandomNum( 3 ) + 1;
						rain_subballspeedh[rain_i][rain_n] = rain_getRandomNum( 3 ) + 1;

						rain_obj_sub.style.top = rain_subballtop[rain_i][rain_n] + 'px';
						rain_obj_sub.style.left = rain_subballleft[rain_i][rain_n] + 'px';
						rain_obj_sub.style.visibility = 'visible';
					}
					rain_action[rain_i] = 2;
					rain_actioncnt[rain_i] = 0;
				}

				break;

			case 2:

				for(rain_n = 1; rain_n <= rain_subball_num; rain_n++) {
					rain_obj_sub = document.getElementById(rain_prj_nm + '_subball'+rain_i+rain_n);
					rain_img_sub = document.getElementById(rain_prj_nm + '_subball_img'+rain_i+rain_n);

					rain_subballtop[rain_i][rain_n] -= ( 20 - rain_actioncnt[rain_i] ) * rain_subballspeedv[rain_i][rain_n] / 8;
					rain_subballleft[rain_i][rain_n] -= ( rain_subballmovelr[rain_i][rain_n] == 0 ? 1 : -1 ) * rain_subballspeedh[rain_i][rain_n] / 2;

					if( rain_subballleft[rain_i][rain_n] < rain_viewright ) {
						rain_obj_sub.style.top = rain_subballtop[rain_i][rain_n] + 'px';
						rain_obj_sub.style.left = rain_subballleft[rain_i][rain_n] + 'px';
					}
					else {
						rain_obj_sub.style.top = '0px';
						rain_obj_sub.style.left = '0px';
						rain_obj_sub.style.visibility = 'hidden';
					}
				}

				if( rain_actioncnt[rain_i] < 20 ) {
					rain_actioncnt[rain_i]++;
				}
				else {
					rain_action[rain_i] = 3;
					rain_actioncnt[rain_i] = 0;
				}

				break;

			case 3:

				for(rain_n = 1; rain_n <= rain_subball_num; rain_n++) {
					rain_obj_sub = document.getElementById(rain_prj_nm + '_subball'+rain_i+rain_n);
					rain_img_sub = document.getElementById(rain_prj_nm + '_subball_img'+rain_i+rain_n);

					rain_subballtop[rain_i][rain_n] += rain_actioncnt[rain_i] * rain_subballspeedv[rain_i][rain_n] / 8;
					rain_subballleft[rain_i][rain_n] -= ( rain_subballmovelr[rain_i][rain_n] == 0 ? 1 : -1 ) * rain_subballspeedh[rain_i][rain_n] / 2;
					if( rain_subballleft[rain_i][rain_n] < rain_viewright ) {
						rain_obj_sub.style.top = rain_subballtop[rain_i][rain_n] + 'px';
						rain_obj_sub.style.left = rain_subballleft[rain_i][rain_n] + 'px';
					}
					else {
						rain_obj_sub.style.top = '0px';
						rain_obj_sub.style.left = '0px';
						rain_obj_sub.style.visibility = 'hidden';
					}
				}

				if( rain_actioncnt[rain_i] < 10 ) {
					rain_actioncnt[rain_i]++;
				}
				else {
					rain_action[rain_i] = 4;
					rain_actioncnt[rain_i] = 0;
					for(rain_n = 1; rain_n <= rain_subball_num; rain_n++) {
						rain_obj_sub = document.getElementById(rain_prj_nm + '_subball'+rain_i+rain_n);
						rain_img_sub = document.getElementById(rain_prj_nm + '_subball_img'+rain_i+rain_n);

						rain_obj_sub.style.top = '0px';
						rain_obj_sub.style.left = '0px';
						rain_obj_sub.style.visibility = 'hidden';
					}
				}

				break;
				
			case 4:
				
				if( rain_actioncnt[rain_i] < 10 ) {
					rain_actioncnt[rain_i]++;
				}
				else if( rain_actioncnt[rain_i] < 16 ) {
					rain_ballopacity[rain_i] -= 0.05;
					rain_setOpacity(rain_obj,rain_ballopacity[rain_i]);
					rain_actioncnt[rain_i]++;
				}
				else {
					rain_obj.style.top = '0px';
					rain_obj.style.left = '0px';
					rain_obj.style.visibility = 'hidden';
					rain_action[rain_i] = 0;
					rain_actioncnt[rain_i] = 0;
				}

				break;

		}

	}

	setTimeout("rain_fire()",30);

}
// This Starts the rain!!!
rain_fire();