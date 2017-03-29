  $( function() {
      
       var letBallMove = function() {
           console.log($(this));
          $(this).prependTo( '.right_box' );
          $(this).addClass('moving_ball');
          console.log($(this).position().left, "left");
          console.log($(this).position().top, "top"); 
          
      }
      
      var stopBallMove = function() {
          console.log("back")
      }
      
      var droppedRight = function() {
          $( '.draggable' ).draggable({
              stop: letBallMove
          })
      }
      
      var droppedLeft = function() {
          $( '.draggable' ).draggable({
              stop: stopBallMove                  
          })
      }
      
      var dragMovingBall = function() {
          $(this).removeClass('moving_ball');          
      }
      
    $( '.draggable' ).draggable({ revert:'invalid', start: dragMovingBall });
    $('.droppable').droppable({ tolerance:'fit'});
    $('.right_box').droppable({ drop: droppedRight });
    $('.left_box').droppable({ drop: droppedLeft });
      
      
      function moveBall() {
          var widthRightBox = $('.right_box').width();
          var heightRightBox = $('.right_box').height();
 
          if($('.ball').hasClass('moving_ball')) {
            var x = $('.moving_ball').position().left;
            var y = $('.moving_ball').position().top;
          }
          else {
            var x = 0;
            var y = 50;
          }          
          
          // радиус мяча
          var ballRadius = $('.ball').height();
          
          // скорость движения мяча по координатам
          var dx = 5;
          var dy = 5;
 
          function animation() {
              if (x + dx > widthRightBox - ballRadius || x + dx < 0) {
              dx = -dx
              }
              if (y + dy > heightRightBox - ballRadius || y + dy < 0) {
                  dy = -dy
              }
              x += dx; 
              y += dy; 
              
              $('.moving_ball').animate({left: x, top: y}, 100);
              
                          
          }     
          go = setInterval(animation, 100);
        };
      
      moveBall();
      
  } );

