    $(document).ready(function(){
		
//		var randomImage = [
//							"images/postcard-front.jpg",
//							"images/postcard-front-chicago.jpg",
//							"images/postcard-front-fl.jpg",
//							"images/postcard-front-la.jpg",
//							"images/postcard-front-nyc.jpg",
//							"images/postcard-front-portland.jpg",
//							"images/postcard-front-sf.jpg"
//						  ];
//		

		// set 'i' for counting
		var i = 0;
//		
//		$('a.flop img').hover(function(){
//			$(this).attr('src','images/lever-down.png');
//		});
		
		$('.flop, .flop-continue').click(function(e){
			
			//iterate 'i'
			i++;
			
			//Google Event Tracking
			//_gaq.push(['_trackEvent', 'Card', 'Flip', 'Flipped']);
			
			//turns the lever down
			$('a.flop img').attr('src','images/lever-down.png');
			
			//Hide text live views when flipped
			//$('#noteLiveView,#nameLiveView').fadeOut(1000).hide();
						
			//when flipper is clicked toggle class to flip card
			$('#flipper').toggleClass('flip');
						
			//select a new random image
			//$('.back img').attr( "src", randomImage[Math.floor(Math.random() * randomImage.length)] ); 
			$('.back img').attr( 'src', 'images/postcard-back.png' ); 
			
				// check i count, if 2 show names
				if (i % 2 == 0) {
					
					//show fields by fading in
					//$('#fieldView').fadeIn(2000).show();
					
					$('a.flop img').attr('src','images/lever-up.png');
					//set counter back to zero
					i == 0;
					
				} //end of if statement
			e.preventDefault();
		}); //end of 'click' function
		
    }); //end of DOCUMENT ready