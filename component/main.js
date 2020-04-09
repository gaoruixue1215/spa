$(function() {
    //handsontable-2020语言排行榜
    var data = [
        ['Java', 1, '降', '-0.01%'],
        ['C', 2, '升', '+2.44%'],
        ['Python', 3, '升', '+1.41%'],
        ['C++', 4, '降', '-2.58%'],
        ['C#', 5, '升', '+2.07%'],
        ['Visual Basic.NET', 6, '降', '-1.17%'],
        ['JavaScript', 7, '降', '-0.85%']
    ]; 
    var container = document.getElementById('main1');
    hot = new Handsontable(container,{
        data: data,
        rowHeaders: false,
        colHeaders:['语言名称', '排名', '升或降', '变化幅度'],
        contextMenu:true,
        manualRowResize:true,
        manualColumnResize:true,
        colWidths: [160,160,160,160],
        rowHeights:[40,40,40,40,40,40,40],
        className:'htCenter htMiddle',
        licenseKey: "cc265-f210e-62c7e-63236-d1490",
    })
    
    //Echarts-JavaScript语言排名变化
    var myChart = echarts.init(document.getElementById('main2'));
    var option = {
        title: {
            text: 'JavaScript语言排名变化'
        },
        tooltip: {
            trigger: 'axis',
            formatter: function (params){
                for(var x in params){
                    return '<p>&nbsp;&nbsp;排名<P>'+params[x].name +":"+params[x].value;
                } 
            }
        },
        xAxis: {
            type: 'category',
            data: ['2000', '2005', '2010', '2015', '2020']
        },
        yAxis: {
            type: 'value',
            data: [0, 2, 4, 6, 8,10]
        },
        series: [{
            data: [6, 9, 8, 8, 7],
            type: 'line'
        }]
    };
    myChart.setOption(option);

})
