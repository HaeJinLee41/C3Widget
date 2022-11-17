HTMLWidgets.widget({

  name: 'C3Gauge',

  type: 'output',

  factory: function(el, width, height) {

    var chart = null;

    return {

      renderValue: function(x) {

        // checking whether chart exists
        if(chart === null){

          chart = c3.generate({
                bindto: el,
                data: {
                    json: x,
                    type: 'gauge',
                    onclick:  function (d, element) { Shiny.onInputChange(el.id,d)}
                },
                gauge: {
                    label:{
                        format: function(value, ratio){ return value;}
                    },
                    min: 0,
                    max: 100,
                    width: 15,
                    units: 'value'
                }
            });

          el.chart = chart;
        }

        el.chart.load({json: x});

      }
    };
  }
});
