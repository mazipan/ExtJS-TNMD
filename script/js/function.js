$(document).ready(function() {
      $('#progress-bar').css('width', '100%');
      $('#progress-bar').css('height', '100%');
});

$(window).load(function() {
      setTimeout(function() {
            $('#loading-text').html('DONE');
            $('#progress-bar').fadeOut();
          }, 2000);

 });

function getSwfPath(name){
	var swf = '../EXTJS5/Charts/' + name + '.swf';	
	return swf;
}

function createFusionChart(idOfChart, idCompRender, width, height, jsonURL, swfPath){
	var chart = null;
	
	try {
		if (FusionCharts(idOfChart)) FusionCharts(idOfChart).dispose();
	    	
	    chart = new FusionCharts(swfPath, idOfChart, width, height, "0", "1");
	    chart.setJSONUrl(jsonURL);
	    chart.render(idCompRender);  
	} catch (e) {
		// TODO: handle exception
	}
	
    return chart;
}

function randomBetween(min, max) {	
	  if (min < 0) {
	    return min + Math.random() * (Math.abs(min) + max);
	  } else {
	    return min + Math.random() * max;
	  }
}

function randomLineChart(){	
	var random = randomBetween(1, 5);
	var url = "./data/MSLine"+parseInt(random)+".json";
	
	var thisCmp = Ext.ComponentQuery.query("#contentChartLine")[0];
	
	var chart = createFusionChart("lineChart", 
			thisCmp.getId(), thisCmp.getWidth(), thisCmp.getHeight(), 
			url, getSwfPath("MSLine"));

	TNMD.config.GlobalVariable.setLineChart(chart);
}

function randomBarChart(){	
	var random = randomBetween(1, 5);
	var url = "./data/MSColumn2D"+parseInt(random)+".json";
	
	var thisCmp = Ext.ComponentQuery.query("#contentChartBarContainer")[0];
	
	var chart = createFusionChart("barChart", 
			thisCmp.getId(), thisCmp.getWidth(), thisCmp.getHeight(), 
			url, getSwfPath("MSColumn2D"));

	TNMD.config.GlobalVariable.setBarChart(chart);
}

function randomPieChart(){	
	var random = randomBetween(1, 5);
	var url = "./data/Pie3D"+parseInt(random)+".json";
	
	var thisCmp = Ext.ComponentQuery.query("#contentChartPie")[0];
	
	var chart = createFusionChart("pieChart", 
			thisCmp.getId(), thisCmp.getWidth(), thisCmp.getHeight(), 
			url, getSwfPath("Pie3D"));

	TNMD.config.GlobalVariable.setPieChart(chart);
}

function randomGaugeChart(){
	var random1 = randomBetween(1, 100);	
	chartStore1.loadData([[parseInt(random1)]]);
	Ext.ComponentQuery.query("#labelUtil")[0].setText(parseInt(random1)+"%");
	
	var random2 = randomBetween(1, 100);	
	var random2_1 = randomBetween(1, 10000000);	
	chartStore2.loadData([[parseInt(random2_1)]]);
	Ext.ComponentQuery.query("#labelPacket")[0].setText(parseInt(random2)+"%");

	var random3 = randomBetween(1, 100);
	var random3_1 = randomBetween(1, 10000);	
	chartStore3.loadData([[parseInt(random3_1)]]);
	Ext.ComponentQuery.query("#labelError")[0].setText(parseInt(random3)+"%");
}

function randomAllChart(){
	randomPieChart();
	randomBarChart();
	randomLineChart();
	randomGaugeChart();
}

function filterAll(){
	var randomDown = randomBetween(1, 5);	
	Ext.ComponentQuery.query("#labelDowntime")[0].setText(parseInt(randomDown));
	
	var randomSLA1 = randomBetween(90, 10);	
	var randomSLA2 = randomBetween(0, 100);	
	Ext.ComponentQuery.query("#labelSLA")[0].setText(parseInt(randomSLA1)+','+parseInt(randomSLA2)+'%');
	
	var randomPerf1 = randomBetween(8, 20);	
	var randomPerf2 = randomBetween(0, 10);	
	var randomPerf3 = randomBetween(0, 10);	
	var textPerf = '<font style="color:white; font-size:50px; font-weight:bold;">'+ parseInt(randomPerf3) +','+ parseInt(randomPerf2) +'%</font> <font style="color:white; font-size:20px; font-weight:bold;">of '+ parseInt(randomPerf1) +'</font>';
	Ext.ComponentQuery.query("#labelPerf")[0].setText(textPerf, false);
	
	randomAllChart();
	
	var mapEast = TNMD.config.GlobalVariable.getGmapsEast();
	if(mapEast != null) randomMarkerAndLine(mapEast, "east");	
	var mapWest = TNMD.config.GlobalVariable.getGmapsWest();
	if(mapWest != null) randomMarkerAndLine(mapWest, "west");
}

var interval = null;

function clearIntervalLoop(){	
	try {
		clearInterval(interval);
	} catch (e) {
		// TODO: handle exception
	}
}

function doFilter(isLoop) {	
	var customer = Ext.ComponentQuery.query("#filterCustomer")[0].getValue();
	var slideControl = Ext.ComponentQuery.query("#slideControl")[0];

	clearIntervalLoop();
	
	totalSlide = customer.length;
	if(customer.length == 1){
		$("#customerTitle").html(customer); 
		slideControl.hide();
		filterAll();
	}else if(customer.length != 0){
		slideControl.show();

		var currentSlide = Ext.ComponentQuery.query("#currentSlide")[0];
		currentSlide.setText('Slide Position : '+slide+' of '+totalSlide);
		
		if(isLoop){
			interval = setInterval(function(){
				if(slide < totalSlide){
					doSliding(true);					
				} 
				else clearIntervalLoop();
			}, 5000);
		}else{
			filterAll();	
			$("#customerTitle").html(customer[slide-1]); 
		} 			
	} 
}

var slide = 1;
var totalSlide = 5;
var infinite = true;

function doSliding(isNext){
	console.log("before: "+slide);
	Ext.ComponentQuery.query("#contentPanel")[0].mask("Slide Changing");	
	
	var currentSlide = Ext.ComponentQuery.query("#currentSlide")[0];
	var prevSlide = Ext.ComponentQuery.query("#prevSlide")[0];
	var nextSlide = Ext.ComponentQuery.query("#nextSlide")[0];
		
	filterAll();
	
	if(isNext){
		if(slide == totalSlide){
			slide = totalSlide;
		}else{
			slide = slide+1;			
		}		
	}else{
		if(slide == 0){
			slide = 1;
		}else{
			slide = slide-1; 			
		}
	} 
	currentSlide.setText('Slide Position : '+slide+' of '+totalSlide);
	
	if(slide <= 1) prevSlide.setDisabled(true);
	else prevSlide.setDisabled(false);
	
	if(slide >= totalSlide) nextSlide.setDisabled(true);
	else nextSlide.setDisabled(false);
	
	var customer = Ext.ComponentQuery.query("#filterCustomer")[0].getValue();
	$("#customerTitle").html(customer[slide-1]); 
	
	if(infinite){
		if(slide == totalSlide){
			slide = 0;
		}
	}
	
	setTimeout(function(){
		Ext.ComponentQuery.query("#contentPanel")[0].unmask();	
	}, 2000);
}

//to Make fix two decimal 
function roundToTwo(value) {
    return(Math.round(value * 100) / 100);
}

//to Make fix one decimal 
function roundToOne(value) {
    return(Math.round(value * 10) / 10);
}

// to make 1K, 1M, 1G with one comma decimal
function getCustomNumber(rep) {	
			
	var repString = 0;
	//rep = Math.abs(rep);
	if (rep >= 1000000000) {
		repString = (Math.round((rep / 1000000000) * 10) / 10) + "G";
	}else if(rep >= 1000000 && rep < 1000000000){
		repString = (Math.round((rep / 1000000) * 10) / 10) + "M";
	}else if(rep >= 1000 && rep < 1000000){
		repString = (Math.round((rep / 1000) * 10) / 10) + "K";		
	}else if (rep < 1000 && rep >= 0) {
		repString = Math.abs(roundToOne(rep));
	}else if(rep < 0 && rep > -1000){
		rep = Math.abs(rep);
		repString = "-"+Math.abs(roundToOne(rep));
	}else if(rep <= -1000 && rep > -1000000){
		rep = Math.abs(rep);
		repString = "-"+(Math.round((rep / 1000) * 10) / 10) + "K";	
	}else if(rep <= -1000000 && rep > -1000000000){
		rep = Math.abs(rep);
		repString = "-"+(Math.round((rep / 1000000) * 10) / 10) + "M";
	}else if(rep <= 1000000000){
		rep = Math.abs(rep);
		repString = "-"+(Math.round((rep / 1000000000) * 10) / 10) + "G";
	}  
	
	if(typeof repString === 'undefined'){
		repString = 0;
	}
	
	
	return repString;
};


//WestMalaysia = 3.469557, 102.304688
//EastMalaysia = 3.973861, 114.191895

function initializeGoogleMap(idContainer, region){
	var map = null;
	if(typeof google !== 'undefined'){
		var latLong = null;
		if(region == "west") latLong = new google.maps.LatLng(3.973861, 114.191895);
		if(region == "east") latLong = new google.maps.LatLng(3.469557, 102.304688);
		var myOptions = {
			    zoom : 6,
			    minZoom : 1,
			    center : latLong,
			    mapTypeId : google.maps.MapTypeId.HYBRID,
			    streetViewControl : true,
			    scrollwheel : true,
			    disableDoubleClickZoom : false,
			    draggable : true,
			    panControl : false,
			    zoomControl : true,
			    zoomControlOptions : {
			      style : google.maps.ZoomControlStyle.SMALL,
			      position : google.maps.ControlPosition.LEFT_TOP
			    }
			};

			map = new google.maps.Map(document.getElementById(idContainer), myOptions);
			randomMarkerAndLine(map, region);			
		
	}
	  	
	return map;
}

var array_Marker_west = [];
var array_Marker_east = [];
var array_CurveLine_west = [];
var array_CurveLine_east = [];
var array_Line_west = [];
var array_Line_east = [];

function randomMarkerAndLine(map, region){	
	var random1 = parseInt(randomBetween(1, 10));	
		
	var latStart = null;
	var lngStart = null;	
	var latEnd = null;
	var lngEnd = null;
	
	if(region == "west"){		
		for (var i = 0; i < array_Line_west.length; i++) {
			var line = array_Line_west[i];
			line.setMap(null);	
		}
		array_Line_west = [];
		
		for (var i = 0; i < array_CurveLine_west.length; i++) {
			var arrline = array_CurveLine_west[i];
			for (var j = 0; j < arrline.length; j++) {
				var line = arrline[j];
				line.setMap(null);	
			}				
		}
		array_CurveLine_west = [];
		
		for (var i = 0; i < array_Marker_west.length; i++) {
			var marker = array_Marker_west[i];
			marker.setMap(null);		
		}
		array_Marker_west = [];
		
		latStart = westMarker["relation"+random1][1];
		lngStart = westMarker["relation"+random1][0];
		
		latEnd = westMarker["relation"+random1][3];
		lngEnd = westMarker["relation"+random1][2];
		
		array_CurveLine_west.push(createCurveLine(latStart, lngStart, latEnd, lngEnd, "yellow", map));
		var marker1 = createMarker(latStart, lngStart, "Provider", "./images/marker-yellow-16.png", map);
		marker1.data = westMarker["relation"+random1];
		var marker2 = createMarker(latEnd, lngEnd, "User", "./images/users.png", map);
		marker2.data = westMarker["relation"+random1];
		google.maps.event.addListener(marker1, 'click', function() {
			if(this.data[5] && this.data[7]){
				array_Line_west.push(createPolyline(this.data[5], this.data[4], this.data[7], this.data[6], "red", map));
				array_Line_west.push(createPolyline(this.data[5], this.data[4], latStart, lngStart, "red", map));
				array_Line_west.push(createPolyline(this.data[7], this.data[6], latEnd, lngEnd, "red", map));

				array_Marker_west.push(createMarker(this.data[5], this.data[4], "Route", "./images/ledred.png", map));
				array_Marker_west.push(createMarker(this.data[7], this.data[6], "Route", "./images/ledred.png", map));
			}
			if(this.data[5] && !this.data[7]){
				array_Line_west.push(createPolyline(this.data[5], this.data[4], latEnd, lngEnd, "red", map));
				array_Line_west.push(createPolyline(this.data[5], this.data[4], latStart, lngStart, "red", map));		

				array_Marker_west.push(createMarker(this.data[5], this.data[4], "Route", "./images/ledred.png", map));
			}
		});
		google.maps.event.addListener(marker2, 'click', function() {
			if(this.data[5] && this.data[7]){
				array_Line_west.push(createPolyline(this.data[5], this.data[4], this.data[7], this.data[6], "red", map));
				array_Line_west.push(createPolyline(this.data[5], this.data[4], latStart, lngStart, "red", map));
				array_Line_west.push(createPolyline(this.data[7], this.data[6], latEnd, lngEnd, "red", map));

				array_Marker_west.push(createMarker(this.data[5], this.data[4], "Route", "./images/ledred.png", map));
				array_Marker_west.push(createMarker(this.data[7], this.data[6], "Route", "./images/ledred.png", map));
			}
			if(this.data[5] && !this.data[7]){
				array_Line_west.push(createPolyline(this.data[5], this.data[4], latEnd, lngEnd, "red", map));
				array_Line_west.push(createPolyline(this.data[5], this.data[4], latStart, lngStart, "red", map));		

				array_Marker_west.push(createMarker(this.data[5], this.data[4], "Route", "./images/ledred.png", map));
			}
		});
		array_Marker_west.push(marker1);
		array_Marker_west.push(marker2);
	}
	if(region == "east"){		
		for (var i = 0; i < array_Line_east.length; i++) {
			var line = array_Line_east[i];
			line.setMap(null);	
		}
		array_Line_east = [];
		
		for (var i = 0; i < array_CurveLine_east.length; i++) {
			var arrline = array_CurveLine_east[i];
			for (var j = 0; j < arrline.length; j++) {
				var line = arrline[j];
				line.setMap(null);	
			}				
		}
		array_CurveLine_east = [];
		
		for (var i = 0; i < array_Marker_east.length; i++) {
			var marker = array_Marker_east[i];
			marker.setMap(null);		
		}
		array_Marker_east = [];
		
		
		latStart = eastMarker["relation"+random1][1];
		lngStart = eastMarker["relation"+random1][0];
		
		latEnd = eastMarker["relation"+random1][3];
		lngEnd = eastMarker["relation"+random1][2];

		array_CurveLine_east.push(createCurveLine(latStart, lngStart, latEnd, lngEnd, "yellow", map));
		var marker1 = createMarker(latStart, lngStart, "Provider", "./images/marker-yellow-16.png", map);
		marker1.data = eastMarker["relation"+random1];
		var marker2 = createMarker(latEnd, lngEnd, "User", "./images/users.png", map);
		marker2.data = eastMarker["relation"+random1];
		
		google.maps.event.addListener(marker1, 'click', function() {
			if(this.data[5] && this.data[7]){
				array_Line_east.push(createPolyline(this.data[5], this.data[4], this.data[7], this.data[6], "red", map));
				array_Line_east.push(createPolyline(this.data[5], this.data[4], latEnd, lngEnd, "red", map));
				array_Line_east.push(createPolyline(this.data[7], this.data[6], latStart, lngStart, "red", map));

				array_Marker_east.push(createMarker(this.data[5], this.data[4], "Route", "./images/ledred.png", map));
				array_Marker_east.push(createMarker(this.data[7], this.data[6], "Route", "./images/ledred.png", map));
			}
			if(this.data[5] && !this.data[7]){
				array_Line_east.push(createPolyline(this.data[5], this.data[4], latEnd, lngEnd, "red", map));
				array_Line_east.push(createPolyline(this.data[5], this.data[4], latStart, lngStart, "red", map));		

				array_Marker_east.push(createMarker(this.data[5], this.data[4], "Route", "./images/ledred.png", map));
			}
		});
		google.maps.event.addListener(marker2, 'click', function() {
			if(this.data[5] && this.data[7]){
				array_Line_east.push(createPolyline(this.data[5], this.data[4], this.data[7], this.data[6], "red", map));
				array_Line_east.push(createPolyline(this.data[5], this.data[4], latEnd, lngEnd, "red", map));
				array_Line_east.push(createPolyline(this.data[7], this.data[6], latStart, lngStart, "red", map));

				array_Marker_east.push(createMarker(this.data[5], this.data[4], "Route", "./images/ledred.png", map));
				array_Marker_east.push(createMarker(this.data[7], this.data[6], "Route", "./images/ledred.png", map));
			}
			if(this.data[5] && !this.data[7]){
				array_Line_east.push(createPolyline(this.data[5], this.data[4], latEnd, lngEnd, "red", map));
				array_Line_east.push(createPolyline(this.data[5], this.data[4], latStart, lngStart, "red", map));		

				array_Marker_east.push(createMarker(this.data[5], this.data[4], "Route", "./images/ledred.png", map));
			}
		});
		array_Marker_east.push(marker1);
		array_Marker_east.push(marker2);
	}
}

function createCurveLine(latStart, lngStart, latEnd, lngEnd, color, map){
	  var array = curved_line_generate({
	        latStart : parseFloat(latStart),
	        lngStart : parseFloat(lngStart),
	        latEnd : parseFloat(latEnd),
	        lngEnd : parseFloat(lngEnd),
	        strokeColor : color,
	        multiplier : 3,
	        resolution : 0.02,
	        Map : map
	      });
	  
	  return array;
}

function createPolyline(latStart, lngStart, latEnd, lngEnd, color, map){
	var LineCordinates = new Array();
	
	LineCordinates[0] = new google.maps.LatLng(latStart, lngStart);
	LineCordinates[1] = new google.maps.LatLng(latEnd, lngEnd);

	var Line = new google.maps.Polyline({
		path: LineCordinates,
		strokeColor: color,
		strokeOpacity: 1,
		strokeWeight: 2,
	}); 
	Line.setMap(map);	
	
	return Line;
}

function createMarker(lat, long, title, iconPath, map){
    var myLatLng = new google.maps.LatLng(lat, long);

    var marker = new google.maps.Marker({
          position : myLatLng,
          title : title
        });

    marker.setIcon(iconPath);
    marker.setMap(map);
    
    return marker;
}

var westMarker = {
		relation1: [110.302734, 1.373160, 116.081543, 5.626919, 114.016113, 2.372369, 115.675049, 4.357366],
		relation2: [111.796875, 1.263325, 116.960449, 6.457234, 114.433594, 2.196727, 115.488281, 3.951941],
		relation3: [111.478271, 2.273573, 117.663574, 4.696879, 113.994141, 3.995781, 115.708008, 5.484768],
		relation4: [112.324219, 1.658704, 115.400391, 3.732708, 114.587402, 2.811371],
		relation5: [114.367676, 1.889306, 114.049072, 3.940981, 114.345703, 3.732708],
		relation6: [114.049072, 3.940981, 116.081543, 5.626919, 115.587158, 4.762573],
		relation7: [115.400391, 3.732708, 110.302734, 1.373160, 114.477539, 2.043024, 113.115234, 1.406109],
		relation8: [117.663574, 4.696879, 116.960449, 6.457234, 117.114258, 5.834616],
		relation9: [116.960449, 6.457234, 111.478271, 2.273573, 115.576172, 4.127285],
		relation10: [116.081543, 5.626919, 115.400391, 3.732708, 116.510010, 4.959615],
};

var eastMarker = {
		relation1: [100.568848, 5.878332, 103.326416, 1.636740, 103.117676, 3.776559],
		relation2: [102.052002, 6.162401, 103.798828, 1.977147, 101.579590, 4.981505],
		relation3: [102.875977, 5.134715, 102.535400, 2.416276, 101.887207, 4.236856],
		relation4: [101.909180, 4.773521, 102.535400, 2.416276, 102.678223, 4.127285],
		relation5: [100.788574, 4.882994, 102.370605, 3.940981, 101.975098, 5.200365],
		relation6: [102.370605, 3.940981, 103.326416, 1.636740, 103.172607, 3.217302],
		relation7: [101.447754, 3.469557, 101.909180, 4.773521, 102.030029, 4.160158],
		relation8: [102.535400, 2.416276, 100.788574, 4.882994, 102.579346, 3.601142],
		relation9: [103.798828, 1.977147, 100.788574, 4.882994, 103.315430, 3.381824],
		relation10: [103.326416, 1.636740, 101.447754, 3.469557, 102.711182, 2.833317],
};

/**
 * Function to show WARNING message
 * 
 * @method showWarningMessage
 * @param {String} [message] message will shown.
 * */
function showWarningMessage(message){
	Ext.Msg.alert({
         title : 'Warning Message',
         msg : message,
         buttons : Ext.Msg.OK,
         icon : Ext.Msg.WARNING
       });	
}

/**
 * Function to show INFO message
 * 
 * @method showInfoMessage
 * @param {String} [message] message will shown.
 * */
function showInfoMessage(message){
	Ext.Msg.alert({
         title : 'Information Message',
         msg : message,
         buttons : Ext.Msg.OK,
         icon : Ext.Msg.INFO
       });	
}

/**
 * Function to show ERROR message
 * 
 * @method showErrorMessage
 * @param {String} [message] message will shown.
 * */
function showErrorMessage(message){
	 Ext.Msg.alert({
         title : 'Error Message',
         msg : message,
         buttons : Ext.Msg.OK,
         icon : Ext.Msg.ERROR
       });
}
