var sliderRef = {
	'comparePage' : {}
}


// Slider 效果註解
$(document).ready(function($){

	if ($(".Category")[0]) {
		$('.Category .sliderkit-nav').wipetouch({
				preventDefault: false, // if true, prevents default events (click for example),
				wipeLeft: function(result) { $('.Category .sliderkit-nav-next').click(); },
				wipeRight: function(result) { $('.Category .sliderkit-nav-prev').click();}
		});
	}
	if ($(".Products")[0]) {
		$('.Products .sliderkit-nav').wipetouch({
				preventDefault: false, // if true, prevents default events (click for example),
				wipeLeft: function(result) { $('.Products .sliderkit-nav-next').click(); },
				wipeRight: function(result) { $('.Products .sliderkit-nav-prev').click();}
		});
	}
	if ($(".Saleson")[0]) {
		$('.Saleson .sliderkit-nav').wipetouch({
				preventDefault: false, // if true, prevents default events (click for example),
				wipeLeft: function(result) { $('.Saleson .sliderkit-nav-next').click(); },
				wipeRight: function(result) { $('.Saleson .sliderkit-nav-prev').click();}
		});
	}
	if ($(".DummyText-3col")[0]) {
		$('.DummyText-3col .sliderkit-nav').wipetouch({
				preventDefault: false, // if true, prevents default events (click for example),
				wipeLeft: function(result) { $('.DummyText-3col .sliderkit-nav-next').click(); },
				wipeRight: function(result) { $('.DummyText-3col .sliderkit-nav-prev').click();}
		});
	}
	if ($(".DummyText-2col")[0]) {
		$('.DummyText-2col .sliderkit-nav').wipetouch({
				preventDefault: false, // if true, prevents default events (click for example),
				wipeLeft: function(result) { $('.DummyText-2col .sliderkit-nav-next').click(); },
				wipeRight: function(result) { $('.DummyText-2col .sliderkit-nav-prev').click();}
		});
	}
	if ($(".BottomBaner")[0]) {
		$('.BottomBaner .sliderkit-nav').wipetouch({
				preventDefault: false, // if true, prevents default events (click for example),
				wipeLeft: function(result) { $('.BottomBaner .sliderkit-nav-next').click(); },
				wipeRight: function(result) { $('.BottomBaner .sliderkit-nav-prev').click();}
		});
	}
	if ($(".Category-4col")[0]) {
		$('.Category-4col .sliderkit-nav').wipetouch({
				preventDefault: false, // if true, prevents default events (click for example),
				wipeLeft: function(result) { $('.Category-4col .sliderkit-nav-next').click(); },
				wipeRight: function(result) { $('.Category-4col .sliderkit-nav-prev').click();}
		});
	}
	if ($(".carousel-slide01")[0]) {
		$('.carousel-slide01 .sliderkit-nav').wipetouch({
				preventDefault: false, // if true, prevents default events (click for example),
				wipeLeft: function(result) { $('.carousel-slide01 .sliderkit-nav-next').click(); },
				wipeRight: function(result) { $('.carousel-slide01 .sliderkit-nav-prev').click();}
		});
	}
	if ($(".carousel-slide03")[0]) {
		$('.carousel-slide03 .sliderkit-nav').wipetouch({
				preventDefault: false, // if true, prevents default events (click for example),
				wipeLeft: function(result) { $('.carousel-slide03 .sliderkit-nav-next').click(); },
				wipeRight: function(result) { $('.carousel-slide03 .sliderkit-nav-prev').click();}
		});
	}
	if ($(".epKV1")[0]) {
		$('.epKV1 .sliderkit-nav').wipetouch({
				preventDefault: false, // if true, prevents default events (click for example),
				wipeLeft: function(result) { $('.epKV1 .sliderkit-nav-next').click(); },
				wipeRight: function(result) { $('.epKV1 .sliderkit-nav-prev').click();}
		});
	}

	$(".newslider-horizontal").sliderkit({
			auto:false,
			shownavitems:5,
			panelfx:"sliding",
			panelfxspeed:600,
			autospeed:2000,
			circular:true,
			panelfxeasing:"easeInOutExpo", //"easeOutExpo", "easeOutCirc", etc.
			keyboard:true,
			fastchange:false
		});

	$(".kvslider-horizontal").sliderkit({
			auto:true,
			panelfx:"sliding",
			panelfxspeed:600,
			autospeed:2000,
			circular:true,
			panelfxeasing:"easeInOutExpo", //"easeOutExpo", "easeOutCirc", etc.
			keyboard:true,
			fastchange:false
		});

	$(".carousel-Category").sliderkit({
		auto:false,
		shownavitems:5
	});

	sliderRef['comparePage'] = $(".compareSlideBlk").sliderkit({
		auto:false,
		shownavitems:3,
		start:0
	});

	$(".carousel-Category-4col").sliderkit({
		auto:false,
		shownavitems:4
	});

	$(".carousel-Products").sliderkit({
		auto:false,
		shownavitems:5,
		height:220
	});

	$(".carousel-Products-fourItem").sliderkit({
		auto:false,
		shownavitems:4,
		height:230
	});

	$(".carousel-Saleson").sliderkit({
		auto:false,
		shownavitems:5
	});

	$(".carousel-Saleson-fourItem").sliderkit({
		auto:false,
		shownavitems:4
	});

	$(".carousel-DummyText01").sliderkit({
		auto:false,
		shownavitems:3
	});

	$(".carousel-DummyText01-twoItem").sliderkit({
		auto:false,
		shownavitems:2
	});

	$(".carousel-DummyText02").sliderkit({
		auto:false,
		shownavitems:2
	});

	$(".carousel-BottomBaner").sliderkit({
		auto:false,
		shownavitems:5
	});

	$(".carousel-slide01").sliderkit({
		auto:false,
		shownavitems:5
	});

	$(".carousel-slide02").sliderkit({
		auto:false,
		shownavitems:7
	});

	$(".carousel-slide03").sliderkit({
		auto:false,
		shownavitems:6
	});

	$(".productDetailPic").sliderkit({
		shownavitems:5,
		circular:true,
		navitemshover:false,
		panelfx:"sliding",
		panelfxspeed:600,
		panelfxeasing:"easeInOutExpo", //"easeOutExpo", "easeOutCirc", etc.
		autostill:true,
		timer:true,
		auto:false
	});

	$(".epKV1").sliderkit({
		auto:true,
		circular:true,
		mousewheel:true,
		shownavitems:5,
		panelfx:"sliding",
		panelfxspeed:1000,
		panelfxeasing:"easeOutExpo"
	});

	$('.SlideKv02').carousel({
				hAlign:'center',
				vAlign:'center',
        		autoplay:true,
        		autoplayInterval:2500,
				hMargin:0.64,
				directionNav:true,
				buttonNav:'bullets'
	});
	$('.stPrd > ul').hide();
	$('.stPrd').click(function () {jQuery(this).find('ul').slideToggle('fast');	});
	$('.stPrd > ul').bind('mouseleave', function() {jQuery(this).slideUp('fast')});


	// 回到頂端效果
	$("#back-top").hide();

	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});

		$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 300);
			return false;
		});
	});

	// 關鍵字查詢提醒文字 Autocomplete //
	$(function() {

    var availableTags = [

      "monitor",

      "lcd monitor",

      "lcd monitors",

      "monitor lcd",

      "cctv monitors",

      "car monitor",

      "vehicle monitor",

      "cctv lcd monitors",

      "lcd cctv monitor",

    ];

    $( "#tags" ).autocomplete({
      source: availableTags
    });


	// SEARCH BAR STYLE
	$('.inputTxt.recentSearchInput').on('focus',function(e){
		var _target = $(e.currentTarget).next('.searchResultBlk');
		_target.fadeIn(150);
	});
	$('.inputTxt.recentSearchInput').on('blur',function(e){
		var _target = $(e.currentTarget).next('.searchResultBlk');
		_target.fadeOut(0);
	});


  });


});

//var tag = document.createElement('script');
//
//      tag.src = "https://www.youtube.com/iframe_api";
//      var firstScriptTag = document.getElementsByTagName('script')[0];
//      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
//
//
//      var player;
//      function onYouTubeIframeAPIReady() {
//        player = new YT.Player('player', {
//          height: '174',
//          width: '294',
//          videoId: 'Xu6OXLNwdZM',
//		  playerVars: {
//			  controls: 1,
//			  autohide  : 1,
//			  showinfo :0,
//			  enablejsapi :1,
//			  modestbranding :0
//			  },
//          events: {
//            'onReady': onPlayerReady,
//            'onStateChange': onPlayerStateChange
//          }
//        });
//      }
//
//
//      function onPlayerReady(event) {
//        event.target.playVideo();
//      }
//
//      var done = false;
//      function onPlayerStateChange(event) {
//        if (event.data == YT.PlayerState.PLAYING && !done) {
//          setTimeout(stopVideo, 6000);
//          done = true;
//        }
//      }
//      function stopVideo() {
//        player.stopVideo();
//      }



$(document).ready(function($){

	// Youtube Movie Player
	var swfPlayerHandler = function(v_id, w, h, t_id){
		var params = { allowScriptAccess: "always" };
		var atts = { id : "ytplayer_"+v_id};
		swfobject.embedSWF("http://www.youtube.com/v/"+v_id+"?enablejsapi=1&playerapiid=ytplayer&version=3", t_id, w, h, "8", null, null, params, atts);
	}
	if($('#yt_movie').length)
	{
		var _this = $('#yt_movie');
		var _id = _this.attr('id');
		var _vId = _this.attr("data-vId");
		var _vWidth = _this.attr("data-vWidth");
		var _vHeight = _this.attr("data-vHeight");

		swfPlayerHandler(_vId , _vWidth, _vHeight, _id);
	}

	// Placeholder
	if( 'placeholder' in document.createElement('input') == false)
	{
		$('input, textarea').placeholder();
	}

	// 左側區塊與右側區塊比對高度
	//$(".ContPage_LeftCol").css("height", Math.max($(".ContPage_LeftCol").height(), $(".ContPage_RightCol").height()));

	// HeaderToolBar li:last-child Set
	$(".TopNav li:last-child.Item").css( "paddingRight","0" );

	$('.Trading .tabBlk').tabs({ active:0, show : function(event, ui) {
        $(".scroll-pane").jScrollPane({
					verticalDragMaxHeight: 36
				}
			);
    	}
	});
	$('.Item.watchlistFill').on('mouseenter',function(e){
		$('.watchlistFill .tabContainerBlk').tabs({ active:0, show : function(event, ui) {	}});
	});

	// POPUP TARGET
	$('.popupTarget').on('mouseenter',function(e){
		var _this = $(e.currentTarget);
		var _target = _this.attr('href');
		var _this_pos = _this.offset();
		$(_target).show().offset({'top' : parseInt(_this_pos.top)+30, 'left' : parseInt(_this_pos.left)-18});
	});
	$('.popupTarget').on('mouseleave',function(e){
		var _this = $(e.currentTarget);
		var _target = _this.attr('href');
		$(_target).hide();
	});
	$('.popupTarget').on('click',function(e){
		e.preventDefault();
	});

	// POPUP TARGET ABOVE
	$('.popupTarget_Up').on('mouseenter',function(e){
		var _this = $(e.currentTarget);
		var _target = _this.attr('href');
		var _this_pos = _this.offset();
		var _target_height = $(_target).outerHeight(true);
		$(_target).show();
		$(_target).offset({'top' : parseInt(_this_pos.top)-_target_height-10, 'left' : parseInt(_this_pos.left)-20});
	});
	$('.popupTarget_Up').on('mouseleave',function(e){
		var _this = $(e.currentTarget);
		var _target = _this.attr('href');
		$(_target).hide();
	});
	$('.popupTarget_Up').on('click',function(e){
		e.preventDefault();
	});



	// SHOW/HOLD TARGET
	$('.displayPopup').on('click',function(e){
		var _this = $(e.currentTarget);
		var _target = _this.attr('href');
		var _this_pos = _this.offset();
		$(_target).show().offset({'top' : parseInt(_this_pos.top)+30, 'left' : parseInt(_this_pos.left)-18});

		$(_target).find('.hidePopup').on('click',function(e){
			var _this = $(e.currentTarget);
			$(_target).hide();
		});

		e.preventDefault();
	});


	if($('.datePickerWarp').length)
	{
		$('.btnDatepicker').on('click',function(e){
			var _this = $(e.currentTarget);
			var _target = _this.next();
			var _displayBlk = $('.monthChoiceBlk', _target);
			var _this_pos = _this.offset();
			_target.show(0,function(){
				_displayBlk.datepicker({
					numberOfMonths: 3,
					dateFormat: "yy-mm-dd",
					onSelect : function(){
						var currDate = _displayBlk.datepicker("getDate");
						var d = new Date();
						d.setTime(Date.parse(currDate));
						_this.prev().val(d.getFullYear()+"/"+(d.getMonth()+1)+"/"+d.getDate());
					}
				});
			}).offset({'top' : parseInt(_this_pos.top)-4, 'left' : parseInt(_this_pos.left)+35});
		});
		$('.datePickerWarp .btnClose').on('click',function(e){
			var _this = $(e.currentTarget);
			var _warp = _this.parent().parent();
			_warp.hide();
			e.preventDefault();
		});
	}

	$(".linksBlk .linksItem").css("height", Math.max(
		$(".linksItem:eq(0)").height(),
		$(".linksItem:eq(1)").height(),
		$(".linksItem:eq(2)").height(),
		$(".linksItem:eq(3)").height()
	));




	// ALIGN INDEX SUBMENU HEIGHT
	var realignIndexSubMenuBlkHeight = function(e)
	{
		var _this = $(e.currentTarget);
		var _this_blk = _this.find('.subMenuBlk');
		var _this_blk_maxH = 0;
		var _this_title_maxH = 0;

		_this_blk.each(function(idx, obj){
			var h = $(obj).outerHeight();
			var _title = $(obj).find('.MenuTitle');
			var th = 0;

			// RESET
			_title.css({'height':'auto'});
			th = _title.outerHeight();

			if(h > _this_blk_maxH || h == 0)
			{
				_this_blk_maxH = h;
			}
			if(th > _this_title_maxH || th == 0)
			{
				_this_title_maxH = th;
			}
		});
		_this_blk.each(function(idx, obj){
			var _title = $(obj).find('.MenuTitle');
			$(obj).css({'height':_this_blk_maxH});
			_title.css({'height':_this_title_maxH});
		});
	}


//	$(".subMenu.style04 .subMenuBlk").css("height", Math.max(
//		$(".subMenuBlk:eq(0)").height(),
//		$(".subMenuBlk:eq(1)").height(),
//		$(".subMenuBlk:eq(2)").height(),
//		$(".subMenuBlk:eq(3)").height()
//	));


    // CSS3 SIMULATION... for IE8/7
	if(navigator.userAgent.match(/msie/i) && navigator.userAgent.match(/(\s8\.0)|(\s7\.0)/))
	{
		//$('.searchBk').each(function() { PIE.attach(this); });
		//$('.linksBlk').each(function() { PIE.attach(this); });
		//$('.inputBox').each(function() { PIE.attach(this); });
		//$('.inputBox button').each(function() { PIE.attach(this); });
		//$('.arrowbtn .sliderkit-nav .sliderkit-nav-btn a').each(function() { PIE.attach(this); });
		//$('.popupFrame, .datePickerWarp').each(function() { PIE.attach(this); });
		//$('.btn_big_02').each(function() { PIE.attach(this); $(this)[0].fireEvent('onmove'); $(this).css({'visibility':'hidden'});  });
	}

	// SIMULATE IE7 BUTTON HOVER + AFTER/BEFORE
	if(navigator.userAgent.match(/msie/i) && navigator.userAgent.match(/(\s7\.0)/))
	{
		$('.btn_big_01, .btn_big_02, .btn_big_03, .btn_big_04, .btn_big_05').hover(function(e){
			$(e.currentTarget).find('.ie7_anon').addClass('hover');
		}, function(e){
			$(e.currentTarget).find('.ie7_anon').removeClass('hover');
		});
	}

	if($('ul.collapseAndShow').length)
	{
		$('ul.collapseAndShow').each(function()
		{
			var menuCollapseBlk = {
				_this : $(this),
				_num : $(" > li", this).length,
				_switch : $(this).next('.botButton'),
				_max : ($('.chkboxList').attr('maxNum')||5)
			}

			if(menuCollapseBlk._num > menuCollapseBlk._max)
			{
				menuCollapseBlk._this.find('li:gt('+String(menuCollapseBlk._max-1)+')').hide();
				menuCollapseBlk._switch.on('click',function(e){

					var _btn = menuCollapseBlk._switch.find('.view');

					if(menuCollapseBlk._this.hasClass('open') === false)
					{
						menuCollapseBlk._this.addClass('open');
						menuCollapseBlk._this.find('li').show(150);
						_btn.attr('alltxt', _btn.html());
						_btn.addClass('close').html('Less<span></span>');
						
						
					}
					else
					{
						menuCollapseBlk._this.removeClass('open');
						menuCollapseBlk._this.find('li:gt('+String(menuCollapseBlk._max-1)+')').hide();
						_btn.removeClass('close').html(_btn.attr('alltxt'));
					}
				});
			}
		});
	}

	if($('ul.RelatedList').length)
	{
		var relatedClapBlk = {
			_this : $('.RelatedList'),
			_num : $('.RelatedList li').length,
			_switch : $('.RelatedList').next('.botButton'),
			_max : ($('.chkboxList').attr('maxNum')||9)
		}
		if(relatedClapBlk._num > relatedClapBlk._max)
		{
			//relatedClapBlk._this.find('li:gt(8)').hide();
			relatedClapBlk._this.find('li:gt(8)').hide();
			relatedClapBlk._switch.on('click',function(e){
				if(relatedClapBlk._this.hasClass('open') === false)
				{
					relatedClapBlk._this.addClass('open');
					relatedClapBlk._this.find('li').show();
					relatedClapBlk._switch.find('.view').addClass('close').html('Less<span></span>');
																								
				}
				else
				{
					relatedClapBlk._this.removeClass('open');
					//relatedClapBlk._this.find('li:gt('+String(relatedClapBlk._max-1)+')').hide();
					relatedClapBlk._this.find('li:gt('+String(relatedClapBlk._max-5)+')').hide();
					relatedClapBlk._switch.find('.view').removeClass('close').html('More<span></span>');
					
				}
			});
		}
	}


	if($('ul.chkboxList').length)
	{
		var chkboxClapBlk = {
			_this : $('.chkboxList'),
			_num : $('.chkboxList li').length,
			_switch : $('.chkboxList').next('.botButton'),
			_max : ($('.chkboxList').attr('maxNum')||2)
		}
		if(chkboxClapBlk._num > chkboxClapBlk._max)
		{
			chkboxClapBlk._this.find('li:gt('+String(chkboxClapBlk._max-1)+')').hide();
			chkboxClapBlk._switch.on('click',function(e){
				if(chkboxClapBlk._this.hasClass('open') === false)
				{
					chkboxClapBlk._this.addClass('open');
					chkboxClapBlk._this.find('li').show();
					chkboxClapBlk._switch.find('.view').addClass('close').html('Less<span></span>');
					alert("A");
				
				}
				else
				{
					chkboxClapBlk._this.removeClass('open');
					chkboxClapBlk._this.find('li:gt('+String(chkboxClapBlk._max-1)+')').hide();
					chkboxClapBlk._switch.find('.view').removeClass('close').html('More<span></span>');
				}
			});
		}
	}




	// Disabled link will not active...
	var disableEmailAlertLink = function(){
		$('.afterCheck.disable').on('click',function(e){
			e.preventDefault();
			e.stopPropagation();
		});
	}

	// Enable link will not active...
	var enableEmailAlertLink = function(){
		$('.afterCheck').not('.disable').off('click')
	}
	// My Taiwantrade
	if($('.mytaiwantradetPage').length)
	{
		// Default reaction...
		disableEmailAlertLink();

		$('.mytaiwantradetPage .TableList td.lHead input').on('change',function(e){
			var _targetGrp = $('.mytaiwantradetPage .TableList td.lHead input');
			var _this = $(e.currentTarget);
			var _active = false;
			var _dispObj = $('.afterCheck');
			var _chkAll = $('.globalCheckAll .checkAll');

			_targetGrp.each(function(idx, obj){
				var _i = obj;
				if(_i.checked == true){
					_active = true;
				}
			});

			if(_active == true){
				_chkAll.removeAttr('disabled');
				_dispObj.removeClass('disable');
				enableEmailAlertLink();
			}else{
				_chkAll.attr('disabled','true');
				_dispObj.addClass('disable');
				disableEmailAlertLink();
			}

		});

		// Add More Cc
		$('.tradeContBlk .btnAddCc.moreCc').on('click',function(e){
			var _this = $(e.currentTarget);
			_this.before('<p class="formElem"><input type="text" placeholder="" class="inputTxt mt10"></span>');
		});

	}

	// Other categories info behavior
	if($('.otherTitle').length)
	{
		var otherTitleBlk = {
			_this : $('.otherTitle'),
			_switch : $('.otherTitle').prev('.botButton'),
			_opener : $('.otherTitle .botButton .view')
		}

		otherTitleBlk._switch.on('click',function(e){
			otherTitleBlk._switch.hide();
			otherTitleBlk._this.show();
			otherTitleBlk._opener.on('click',function(f){
				otherTitleBlk._switch.show();
				otherTitleBlk._this.hide();
			});
		});
	}


	// MY TAIWANTRADE FAQ COLLAPSE PAGE
	if($('.faqPage').length)
	{
		$('.mytaiwantradetPage.faqPage .questionLister .qaItem a.titleLink').on('click',function(e){
			var _this = $(e.currentTarget);
			var _root = _this.parent().parent();
			var _base = _this.parent();
			var _target = _this.next();

			if(_this.find('.collapStatus').hasClass('act') == false)
			{
				// RESET ALL
				$(" .collapStatus", _root).removeClass('act');
				$(" .questionBlk ", _root).hide();

				_this.find('.collapStatus').addClass('act');
				_target.show();
			}
			else
			{
				_this.find('.collapStatus').removeClass('act');
				_target.hide();
			}

		});


	}

	// CATEGORIES SEARCH RESULT - CATEGORY SELECTER LISTER
	if($('.IOBlk').length)
	{
		var catObj = {
			_root : $('.IOBlk'),
			_base : $('.IOBlk .outputBlk .searchResult'),
			_input : $('.IOBlk .outputBlk .searchResult input'),
			_show_base : $('.selectedOutputBlk'),
			_show : $('.selectedOutputBlk .contBlk')
		}

		catObj._input.on('change',function(e){
			var _this = e.currentTarget;
			var _id = $(_this).attr('id');
			var _txt = $(_this).next().html();

			if(_this.checked == true)
			{
				catObj._show.append('<span class="catTitle" id="o_'+_id+'">'+_txt+'</span>');
				_this.checked = true;
			}
			else
			{
				catObj._show.find('.catTitle#o_'+_id).remove();
				_this.checked = false;
			}


			if(catObj._show.html() == "")
			{
				catObj._show_base.hide();
			}
			else
			{
				catObj._show_base.show();
			}
		});

	}


	// Sitemap hide show behavior
	if($('.siteMapListerBlk').length)
	{
		var _root = $('.lv1_Lister');

		$('.lv1_Link', _root).on('click',function(e){
			var _this_lv1 = $(e.currentTarget);

			if(_this_lv1.hasClass('persistOpen') == true)
				return;

			if(_this_lv1.hasClass('act') == false)
			{
				_this_lv1.addClass('act').next().show();
			}
			else
			{
				_this_lv1.removeClass('act').next().hide();
			}
		});
		$('.lv2_Link', _root).on('click',function(f){
			var _this_lv2 = $(f.currentTarget);
			var _root_lv2 = _this_lv2.parent().parent();
			var _lister_lv2 = _this_lv2.next();

			if(_this_lv2.hasClass('act') == false)
			{
				// RESET OTHERS LIST
				_root_lv2.find('.lv2_Link').removeClass('act');
				_root_lv2.find('.collapStatus').removeClass('act');
				_root_lv2.find('.linkLister').hide();

				// SET CURRENT ONE
				_this_lv2.find('.collapStatus').addClass('act');
				_this_lv2.addClass('act').next().show();
			}
			else
			{
				// CLOSE CURRENT ONE
				_this_lv2.find('.collapStatus').removeClass('act');
				_this_lv2.removeClass('act').next().hide();
			}

		});
	}

	// CONTACT SUPPLIER FROM HERE FORM COLLAPSE CONTROLLER
	if($('.productSheetPage, .contactFormPage, .customizedSourcePage, .WatchList_FR, .buyerSignPage').length)
	{
		$('.collapseFormBlk').find('.btn_big_02, .btn_big_05').css({'visibility':'visibility'});

		$('.collapseFormBlk > .promptTxtBlk').on('click',function(e){
			var _this = $(e.currentTarget);
			var _parent = _this.parent();

			if(_parent.hasClass('open'))
			{
				_parent.removeClass('open');
				_parent.find('.btn_big_02, .btn_big_05').each(function(e) { $(this)[e].fireEvent('onmove'); $(this).css({'visibility':'hidden'}); });
			}
			else
			{
				_parent.addClass('open');
				_parent.find('.btn_big_02, .btn_big_05').each(function(e) { $(this)[e].fireEvent('onmove'); $(this).css({'visibility':'visible'}); });

			}
		});

		$('.formTable').each(function(idx, obj){
			$(obj).find('.btnAddCc').on('click',function(e){
				$('tbody.ccBlk').show();
			});
		});

		$('.contactSupplierFormBlk#contactForm_step_1 .formTable .btn_big_01.gotoStep2').on('click',function(e){
			$('.contactSupplierFormBlk#contactForm_step_1').hide();
			$('.contactSupplierFormBlk#contactForm_step_2').show();
		});

		$('.contactSupplierFormBlk#contactForm_step_1 .formTable .btn_big_02.gotoStep2').on('click',function(e){
			$('.contactSupplierFormBlk#contactForm_step_1').hide();
			$('.contactSupplierFormBlk#contactForm_step_2').show();
		});
		
		$('.contactSupplierFormBlk#contactForm_step_1 .formTable .btn_big_05.gotoStep2').on('click',function(e){
			$('.contactSupplierFormBlk#contactForm_step_1').hide();
			$('.contactSupplierFormBlk#contactForm_step_2').show();
		});		

		// CONTACT FORM SUCCESSFUL PAGE CHANGE EMAIL FUNCTION
		$('.emailChanger .switcher').on('click',function(e){
			var _this = $(e.currentTarget);
			var _root = $('.emailChanger');
			var _old_Email = _root.find('.originEmail');
			var _target = _root.find('.hiddenInput');
			if(_this.hasClass('save') == false)
			{
				_old_Email.hide();
				_target.show();
				_this.html('save');
				_this.addClass('save');
			}
			else
			{
				_old_Email.show();
				_target.hide();
				_this.html('change e-mail');
				_this.removeClass('save');
			}
		});

		// AUTO FILL TEXT TO INPUT FIELD
		$('.fillWebSiteNA').on('change',function(e){
			var _this = e.currentTarget;
			var _text = $(_this).parent().find('.text').html();
			var _target = $(_this).parent().prev();
			if(_this.checked == true)
			{
				_target.val(_text);
			}
			else
			{
				_target.val("");
			}
		});


	}

	// COMPARE SUPPLIERS/ PRODUCTS PAGE
	if($('.comparePage').length)
	{
		var cpObj = {
			r1_h : 0,
			r2_h : 0,
			r3_h : 0,
			r4_h : 0,
			r5_h : 0,
			r6_h : 0,
			r7_h : 0,
			r8_h : 0,
			r9_h : 0,
			r1_oh : 0,
			r2_oh : 0,
			r3_oh : 0,
			r4_oh : 0,
			r5_oh : 0,
			r6_oh : 0,
			r7_oh : 0,
			r8_oh : 0,
			r9_oh : 0,
			_root : $('.compareTableBlk'),
			_inputs : $('.colData2 > input[type="checkbox"]'),
			_inputs_totalNum : 0,
			_sel_All : $('.compareTableBlk .chkSelectAll'),
			_sel : $('.compareTableBlk .chkSelectAll'),
			_del : $('.compareTableBlk .supplierTitleBlk .deleteLink'),
			_final_H : 0,
			_submit : $('.compareTableBlk .btn_big_02')
		}

		cpObj._inputs_totalNum = cpObj._inputs.length;

		// SELECT ALL
		cpObj._sel_All.on('change', function(e){
			var _this = $(e.currentTarget);

			if(_this.context.checked == true)
			{
				cpObj._inputs.attr('checked','true');
				cpObj._submit.removeClass('disable');
			}
			else
			{
				cpObj._inputs.removeAttr('checked');
				cpObj._submit.addClass('disable');
			}
		});

		// SUBMIT BUTTON BEHAVIOR
		cpObj._inputs.on('change',function(e){
			var _this = $(e.currentTarget);
			var _disableSubmit = true;
			var _selectAll = true;

			if(_this.context.checked == true)
			{
				_this.attr('checked','true');
			}
			else
			{
				_this.removeAttr('checked');
			}

			cpObj._inputs.each(function(idx, obj){
				if($(obj).context.checked == true)
				{
					_disableSubmit = false;
				}
				else
				{
					_selectAll = false;
				}
			});

			if(_disableSubmit == true)
			{
				cpObj._submit.addClass('disable');
			}
			else
			{
				cpObj._submit.removeClass('disable');
			}

			if(_selectAll == true)
			{
				cpObj._sel_All.attr('checked','true');
			}
			else
			{
				cpObj._sel_All.removeAttr('checked');
			}
		});

		// DELETE SINGLE ITEM
		cpObj._del.on('click', function(e){
			var _this = $(e.currentTarget);
			var _target_id = _this.attr('href');

			$(_target_id).remove();
			$.removeData(sliderRef['comparePage']);
			sliderRef['comparePage'] = $(".compareSlideBlk").sliderkit({
					auto:false,
					shownavitems:3
				});

			e.preventDefault();
		});

		// GET EACH ROW HIGHEST HEIGHT
		$('.colDataCont .fieldTableBlk').each(function(id, obj){
			$(" td", obj).each(function(id2, obj2){
				var _h = $(obj2).height();
				var _oh = $(obj2).outerHeight();
				if(_h > cpObj["r"+String(id2+1)+"_h"])
				{
					cpObj["r"+String(id2+1)+"_h"] = _h;
					cpObj["r"+String(id2+1)+"_oh"] = _oh;
				}
			});
		});

		// SET EACH ROW MAX HEIGHT
		$('.colDataCont .fieldTableBlk').each(function(id, obj){
			$(" td", obj).each(function(id2, obj2){
				$(obj2).css('height',cpObj["r"+String(id2+1)+"_h"]);
			});
		});
		$('table.fieldTable > tbody > tr').each(function(id3, obj3){
			$("> .row_t_"+String(id3+1), obj3).css('height',cpObj["r"+String(id3+1)+"_h"]);
			cpObj._final_H += cpObj["r"+String(id3+1)+"_oh"];
		});
		// SET CONTAINER HEIGHT
		$('.compareSlideBlk, .compareSlideBlk .sliderkit-nav-clip, .compareSlideBlk .sliderkit-nav-clip > ul > li').height(cpObj._final_H);

	}


	// GLOBAL USAGE CHECKBOX ALL
	if($('.globalCheckAll').length)
	{
		var _chkAll = $('.globalCheckAll .checkAll');
		var _chkOther = $('.globalCheckAll input:checkbox').not('.checkAll');
		var _dispObj = $('.afterCheck');

		_chkAll.on('change',function(e){

			var _this = $(e.currentTarget);

			if(_chkAll.is(':checked'))
			{
				_chkOther.attr('checked','true');
			}
			else
			{
				_chkOther.removeAttr('checked');
				_chkAll.attr('disabled','true');
				_dispObj.addClass('disable');
				disableEmailAlertLink();
			}
		});
	}


	// AUTO HIDE PLACEHOLDER TEXT
	$('input, textarea').on('focus',function(e){
		var _this = $(e.currentTarget);
		var _ph = _this.attr('placeholder');
		if(_this.attr('placeholder') != undefined && _this.attr('placeholder') != '')
		{
			_this.attr('tempPH',_ph);
			_this.attr('placeholder','');
		}
	});
	$('input, textarea').on('blur',function(e){
		var _this = $(e.currentTarget);
		var _tph = _this.attr('tempPH');
		if(_tph != undefined && _tph != '')
		{
			_this.attr('placeholder',_tph);
			_this.attr('tempPH','');
			if(_this.val() == '')
			{
				_this.val('');
			}
		}
	});


	// 子選單延遲關閉效果
	if($('.idx_LeftCol > .nav').length)
	{
		var _indexNav = {
			root : $('.idx_LeftCol > .nav'),
			mouseNowPos : {xp: 0, yp: 0},
			keepOpen : false,
			browserSub : false,

			moveDetectLastPos : {x: 0, y: 0},
			moveDetectPeriod : 70,
			moveDetectTimer : 0
		}

		$(window).mousemove(function(e){
			_indexNav.mouseNowPos.xp = e.pageX;
			_indexNav.mouseNowPos.yp = e.pageY;
		});

		// 定時測量滑動角度函式
		var detectingMovAngle = function()
		{
			var rad = 0;
			var slope = 0;
			rad = Math.atan((_indexNav.mouseNowPos.xp - _indexNav.moveDetectLastPos.x)/(_indexNav.mouseNowPos.yp - _indexNav.moveDetectLastPos.y));
			if(rad != NaN)
			{
				slope = rad*180/Math.PI;
			}

			if(slope > 30 && (_indexNav.mouseNowPos.yp > _indexNav.moveDetectLastPos.y))
			{
				_indexNav.keepOpen = true;
			}
			else
			{
				_indexNav.keepOpen = false;
			}

			// 假如滑鼠位在子選單，則關閉"延遲關閉子選單"效果
			if(_indexNav.browserSub == true)
			{
				_indexNav.keepOpen = true;
			}
			//console.log(_indexNav.keepOpen);
			//$('.debug').html(_indexNav.keepOpen.toString());

			_indexNav.moveDetectLastPos.x = _indexNav.mouseNowPos.xp;
			_indexNav.moveDetectLastPos.y = _indexNav.mouseNowPos.yp;
		}

		// 當滑鼠在選單裡移動時…
		$(_indexNav.root).on('mouseenter',function(e)
		{
			if(_indexNav.moveDetectLastPos.x == 0 && _indexNav.moveDetectLastPos.y == 0)
			{
				_indexNav.moveDetectLastPos.x = _indexNav.mouseNowPos.xp;
				_indexNav.moveDetectLastPos.y = _indexNav.mouseNowPos.yp;
			}

			// 啟動定時測量滑動角度函式
			_indexNav.moveDetectTimer = setInterval(detectingMovAngle , _indexNav.moveDetectPeriod);

		});

		$(_indexNav.root).on('mouseleave',function(e){
			// 清除測量滑動角度函式
			clearInterval(_indexNav.moveDetectTimer);
		});


		_indexNav.root.find('li').on('mouseenter',function(e){
			var _e = e;
			var _this = $(e.currentTarget);

			if(_indexNav.keepOpen == false)
			{
				_indexNav.root.find('.subMenu').hide();
				_this.find('.subMenu').show(0,function(){   realignIndexSubMenuBlkHeight(_e);   });
			}

		});

		_indexNav.root.find('li').on('mouseleave',function(e){
			var _this = $(e.currentTarget);

			if( _indexNav.keepOpen == false )
			{
				_indexNav.root.find('.subMenu').hide();
			}
		});

		// 滑鼠滑入子選單時，限定角度偵測開關失效。
		_indexNav.root.find('.subMenuBrd').on('mouseenter',function(e){
			var _this = $(e.currentTarget);

			_indexNav.browserSub = true;
		});
		// 滑鼠滑出子選單時，關閉之。
		_indexNav.root.find('.subMenuBrd').on('mouseleave',function(e){
			var _this = $(e.currentTarget);

			_indexNav.browserSub = false;
			_indexNav.keepOpen = false;
			_this.parent().hide();
		});

	}


});
