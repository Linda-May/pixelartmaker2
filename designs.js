$(function() {
  var height;
  var width;
  var currentColor = '#4f4b8d';
  var color = $('#color-picker');
  var form = $('#size-picker');
  var grid = $('#pixel-grid');
    
    function makeGrid(height, width) {
    color.farbtastic(function(e) {
      currentColor = e;
    });

    let h = 0;
    while (h++ < height) {
      var tr = $('<tr></tr>');

      for (let w = 0; w < width; w++) {
        tr.append('<td></td');
      }

      grid.append(tr);
    }
  };

  function setColor(element, color) {
    $(element).css('background-color', color);
  };

  grid.on('click', 'td', function(e) {
    setColor(this, currentColor);
  })

form.submit(function(e) {
    e.preventDefault();
         
    height = $('#grid-height').val();
    width = $('#grid-width').val();

    if (height < 2 || width < 2) {
      alert('Minimum side size is 2');
      return;
    }
    if (height > 200 || width > 200) {
      alert('Maximum side size is 100');
      return
    }
    makeGrid(height, width);
  });
});