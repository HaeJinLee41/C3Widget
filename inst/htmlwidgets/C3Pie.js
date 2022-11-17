HTMLWidgets.widget({

  name: 'C3Pie',

  type: 'output',

  factory: function(el, width, height) {

    // create an empty chart
    var chart = null;

    return {

      renderValue: function(x) {

        if(chart === null){

             chart = c3.generate({
                bindto: el,
                data: {
                    json : [],
                    type : 'pie',
                    onclick:  function (d, element) { Shiny.onInputChange(el.id,d)}
                },
            legend: {
                position: x.legendPosition
              }
            });
        }

        var old_keys = _.keys(chart.x());
        var new_keys = _.keys(x.values);
        var diff     = _.difference(old_keys,new_keys);

        chart.load({
          json:
            x.values,
            unload: diff
        });
      }
    };
  }
});
